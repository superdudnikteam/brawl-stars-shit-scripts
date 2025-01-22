// а вот да

// wassup meeen.
// script leaked by @User_With_Username — anybody

// some server info:
// ip: 132.145.231.26
// port: 9339
// crypto: no

// leak reason: they kiked me from nost chat and nost channel
// now script is in open source idk!

var cache = {};

const base = Process.findModuleByName('libg.so').base;
const free = new NativeFunction(Module.findExportByName("libc.so", "free"), "void", ["pointer"]);
const ntohs = new NativeFunction(Module.findExportByName('libc.so', 'ntohs'), 'uint16', ['uint16']);
const malloc = new NativeFunction(Module.findExportByName("libc.so", "malloc"), "pointer", ["int"]);
const inet_addr = new NativeFunction(Module.findExportByName('libc.so', 'inet_addr'), 'int', ['pointer']);
const libc_send = new NativeFunction(Module.findExportByName("libc.so", "send"), "int", ["int", "pointer", "int", "int"]);
const libc_recv = new NativeFunction(Module.findExportByName("libc.so", "recv"), "int", ["int", "pointer", "int", "int"]);
const pthread_mutex_lock = new NativeFunction(Module.findExportByName("libc.so", "pthread_mutex_lock"), "int", ["pointer"]);
const memmove = new NativeFunction(Module.findExportByName("libc.so", "memmove"), "pointer", ["pointer", "pointer", "int"]);
const pthread_mutex_unlock = new NativeFunction(Module.findExportByName("libc.so", "pthread_mutex_unlock"), "int", ["pointer"]);
const select = new NativeFunction(Module.findExportByName('libc.so', 'select'), 'int', ['int', 'pointer', 'pointer', 'pointer', 'pointer']);

const Message = {
    _getByteStream(message) {
        return message.add(8);
    },
    _getVersion(message) {
        return Memory.readInt(message.add(4));
    },
    _setVersion(message, version) {
        Memory.writeInt(message.add(4), version);
    },
    _getMessageType(message) {
        return (new NativeFunction(Memory.readPointer(Memory.readPointer(message).add(20)), "int", ["pointer"]))(message);
    },
    _encode(message) {
        (new NativeFunction(Memory.readPointer(Memory.readPointer(message).add(8)), "void", ["pointer"]))(message);
    },
    _decode(message) {
        (new NativeFunction(Memory.readPointer(Memory.readPointer(message).add(12)), "void", ["pointer"]))(message);
    },
    _free(message) {
        (new NativeFunction(Memory.readPointer(Memory.readPointer(message).add(24)), "void", ["pointer"]))(message);
        (new NativeFunction(Memory.readPointer(Memory.readPointer(message).add(4)), "void", ["pointer"]))(message);
    }
};

const ByteStream = {
    _getOffset(byteStream) {
        return Memory.readInt(byteStream.add(16));
    },
    _getByteArray(byteStream) {
        return Memory.readPointer(byteStream.add(28));
    },
    _setByteArray(byteStream, array) {
        Memory.writePointer(byteStream.add(28), array);
    },
    _getLength(byteStream) {
        return Memory.readInt(byteStream.add(20));
    },
    _setLength(byteStream, length) {
        Memory.writeInt(byteStream.add(20), length);
    }
};

const Buffer = {
    _getEncodingLength(buffer) {
        return Memory.readU8(buffer.add(2)) << 16 | Memory.readU8(buffer.add(3)) << 8 | Memory.readU8(buffer.add(4));
    },
    _setEncodingLength(buffer, length) {
        Memory.writeU8(buffer.add(2), length >> 16 & 0xFF);
        Memory.writeU8(buffer.add(3), length >> 8 & 0xFF);
        Memory.writeU8(buffer.add(4), length & 0xFF);
    },
    _setMessageType(buffer, type) {
        Memory.writeU8(buffer.add(0), type >> 8 & 0xFF);
        Memory.writeU8(buffer.add(1), type & 0xFF);
    },
    _getMessageVersion(buffer) {
        return Memory.readU8(buffer.add(5)) << 8 | Memory.readU8(buffer.add(6));
    },
    _setMessageVersion(buffer, version) {
        Memory.writeU8(buffer.add(5), version >> 8 & 0xFF);
        Memory.writeU8(buffer.add(6), version & 0xFF);
    },
    _getMessageType(buffer) {
        return Memory.readU8(buffer) << 8 | Memory.readU8(buffer.add(1));
    }
};

const MessageQueue = {
    _getCapacity(queue) {
        return Memory.readInt(queue.add(4));
    },
    _get(queue, index) {
        return Memory.readPointer(Memory.readPointer(queue).add(4 * index));
    },
    _set(queue, index, message) {
        Memory.writePointer(Memory.readPointer(queue).add(4 * index), message);
    },
    _count(queue) {
        return Memory.readInt(queue.add(8));
    },
    _decrementCount(queue) {
        Memory.writeInt(queue.add(8), Memory.readInt(queue.add(8)) - 1);
    },
    _incrementCount(queue) {
        Memory.writeInt(queue.add(8), Memory.readInt(queue.add(8)) + 1);
    },
    _getDequeueIndex(queue) {
        return Memory.readInt(queue.add(12));
    },
    _getEnqueueIndex(queue) {
        return Memory.readInt(queue.add(16));
    },
    _setDequeueIndex(queue, index) {
        Memory.writeInt(queue.add(12), index);
    },
    _setEnqueueIndex(queue, index) {
        Memory.writeInt(queue.add(16), index);
    },
    _enqueue(queue, message) {
        pthread_mutex_lock(queue.sub(4));
        var index = MessageQueue._getEnqueueIndex(queue);
        MessageQueue._set(queue, index, message);
        MessageQueue._setEnqueueIndex(queue, (index + 1) % MessageQueue._getCapacity(queue));
        MessageQueue._incrementCount(queue);
        pthread_mutex_unlock(queue.sub(4));
    },
    _dequeue(queue) {
        var message = null;
        pthread_mutex_lock(queue.sub(4));
        if (MessageQueue._count(queue)) {
            var index = MessageQueue._getDequeueIndex(queue);
            message = MessageQueue._get(queue, index);
            MessageQueue._setDequeueIndex(queue, (index + 1) % MessageQueue._getCapacity(queue));
            MessageQueue._decrementCount(queue);
        }
        pthread_mutex_unlock(queue.sub(4));
        return message;
    }
};

const Messaging = {
    init() {
        cache.messaging = Memory.readPointer(Memory.readPointer(base.add(0xA2B454)).add(4));
        cache.selectReturn = base.add(0xB7060);
        cache.state = cache.messaging.add(212);
        cache.recvQueue = cache.messaging.add(60);
        cache.sendQueue = cache.messaging.add(84);
        cache.loginMessagePtr = cache.messaging.add(216);
        cache.messageFactory = Memory.readPointer(cache.messaging.add(52));
        cache.createMessageByType = new NativeFunction(base.add(0x14161C), "pointer", ["pointer", "int"]);

        Interceptor.attach(Module.findExportByName("libc.so", "pthread_cond_signal"), {
            onEnter() {
                Messaging.wakeUp();
            }
        });
        Interceptor.replace(Module.findExportByName('libc.so', 'select'), new NativeCallback(function(nfds, readfds, writefds, exceptfds, timeout) {
		    var r = select(nfds, readfds, writefds, exceptfds, timeout);
		    if (this.returnAddress.equals(cache.selectReturn)) {
			    Messaging.receive();
		    }
		    return r;
	    }, 'int', ['int', 'pointer', 'pointer', 'pointer', 'pointer']));
    },
    wakeUp() {
        var message = MessageQueue._dequeue(cache.sendQueue);
        while (message) {
            var messageType = Message._getMessageType(message);
            if (messageType === 10100) {
                message = Memory.readPointer(cache.loginMessagePtr);
                Memory.writePointer(cache.loginMessagePtr, ptr(0));
            }
            Messaging.sendMessage(message);
            message = MessageQueue._dequeue(cache.sendQueue);
        }
    },
    receive() {
        var headerBuffer = malloc(7);
        libc_recv(cache.fd, headerBuffer, 7, 256);
        var messageType = Buffer._getMessageType(headerBuffer);
        if (messageType < 20000) return;
        if (messageType === 20104) {
            cache.state.writeInt(5);
            fixer();
            Misc.init();
        }
        var payloadLength = Buffer._getEncodingLength(headerBuffer);
		var messageVersion = Buffer._getMessageVersion(headerBuffer);
		free(headerBuffer);
		var messageBuffer = malloc(payloadLength);
		libc_recv(cache.fd, messageBuffer, payloadLength, 256);
		var message = cache.createMessageByType(cache.messageFactory, messageType);
		Message._setVersion(message, messageVersion);
		var byteStream = Message._getByteStream(message);
		ByteStream._setLength(byteStream, payloadLength);
		if (payloadLength) {
			var byteArray = malloc(payloadLength);
			memmove(byteArray, messageBuffer, payloadLength);
			ByteStream._setByteArray(byteStream, byteArray);
		}
		Message._decode(message);
		MessageQueue._enqueue(cache.recvQueue, message);
		free(messageBuffer);
    },
    sendMessage(message) {
        Message._encode(message);
        var byteStream = Message._getByteStream(message);
        var messagePayloadLength = ByteStream._getOffset(byteStream);
        var messageBuffer = malloc(messagePayloadLength + 7);
        memmove(messageBuffer.add(7), ByteStream._getByteArray(byteStream), messagePayloadLength);
        Buffer._setEncodingLength(messageBuffer, messagePayloadLength);
        Buffer._setMessageType(messageBuffer, Message._getMessageType(message));
        Buffer._setMessageVersion(messageBuffer, Message._getVersion(message));
        libc_send(cache.fd, messageBuffer, messagePayloadLength + 7, 0);
        free(messageBuffer);
    }
}

const Debug = {
    enableIsDev() {
        Interceptor.replace(base.add(0xBAEB8), new NativeCallback(function() {
            return 0;
        }, 'int', []));
        Interceptor.replace(base.add(0x40D908), new NativeCallback(function() {
            return 1;
        }, 'int', []));
    },
    disableIsDev() {
        Interceptor.revert(base.add(0xBAEB8));
        Interceptor.revert(base.add(0x40D908));
    }
}

function fixer() {
    let l = Interceptor.attach(Module.findExportByName('libc.so', 'close'), {
		onEnter(args) {
			if (args[0].toInt32() == cache.fd) {
				l.detach();
				Misc.deinit();
				Debug.disableIsDev();
                Interceptor.flush();
			}
		}
	});
}

const Misc = {
    init() {
        Misc.gradient = Interceptor.attach(base.add(0x4A9B08), { 
            onEnter(args) { 
                args[7] = ptr(1); 
            } 
        });
        Debug.enableIsDev();
    },
    deinit() {
        Misc.gradient.detach();
    }
}

function connect(host) {
    Interceptor.attach(Module.findExportByName("libc.so", "connect"), {
        onEnter(args) {
            if (ntohs(Memory.readU16(args[1].add(2))) === 9339) {
                cache.fd = args[0].toInt32();
                args[1].add(4).writeInt(inet_addr(Memory.allocUtf8String(host)));
                Messaging.init();
            }
        }
    });
}

rpc.exports.init = function() {
    connect("132.145.231.26");
}