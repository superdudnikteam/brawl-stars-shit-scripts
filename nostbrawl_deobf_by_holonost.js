//https://t.me/holonost/9
// This file was downloaded from t.me/holonost

//obf keki
var getObfString = function(a1, a2) {
	const result = obfStringKeker(a1, a2);
	//console.log(result)
	return result
};

function obfStringKeker(_0x34ace0, _0x1da8d3) {
	var _0x5442dc = _0x5442();
	return obfStringKeker = function(obfStringKeker_e4, _0x548230) {
		obfStringKeker_e4 = obfStringKeker_e4 - 0x148;
		var _0x4c19b7 = _0x5442dc[obfStringKeker_e4];
		return _0x4c19b7;
	}, obfStringKeker(_0x34ace0, _0x1da8d3);
}(function(_0xe9e509, _0x1c5b46) {
	var _0x3a0ad4 = _0xe9e509();
	while (!![]) {
		try {
			var _0x3ae12a = parseInt(obfStringKeker(0x15e)) / 0x1 * (parseInt(obfStringKeker(0x182)) / 0x2) + parseInt(obfStringKeker(0x16f)) / 0x3 + parseInt(obfStringKeker(0x180)) / 0x4 + -parseInt(obfStringKeker(0x14d)) / 0x5 + parseInt(obfStringKeker(0x184)) / 0x6 * (parseInt(obfStringKeker(0x181)) / 0x7) + -parseInt(obfStringKeker(0x165)) / 0x8 + parseInt(obfStringKeker(0x18d)) / 0x9;
			if (_0x3ae12a === _0x1c5b46) break;
			else _0x3a0ad4['push'](_0x3a0ad4['shift']());
		} catch (_0x251edf) {
			_0x3a0ad4['push'](_0x3a0ad4['shift']());
		}
	}
}(_0x5442, 0xd4207));
//obf keki end

var cache = {
	'modules': {},
	'options': {}
};
const base = Process[getObfString(0x176)]('libg.so')[getObfString(0x16e)],
	SERVER_CONNECTION = 0xa2b454,
	PTHREAD_COND_WAKE_RETURN = 0x6108aa + 0x8 + 0x1,
	CREATE_MESSAGE_BY_TYPE = 0x14161c,
	SELECT_RETURN = 0xb7060,
	POINTER_SIZE = 0x4,
	WAKEUP_RETURN_ARRAY = [0x889ac, 0x122af8, 0x1a29d0, 0x49d004, 0x52bdb0, 0x53efb4];

function _0x5442() {
	var _0x917388 = ['_decrementCount', 'length', '_enqueue', '_getDequeueIndex', '130.61.171.108', 'pthread_cond_signal', 'writeU16', '_getByteArray', '_count', 'pointer', '_getMessageVersion', '_getVersion', 'writeU8', '5457035OUrwnS', '_setByteArray', 'add', 'toInt32', '_getOffset', 'state', 'createMessageByType', 'int', '_getEnqueueIndex', 'log', 'readU16', 'void', 'messageFactory', 'replace', 'connect', '_setMessageVersion', '_setEnqueueIndex', '752JJiroc', 'malloc', 'context', 'push', '_decode', '_getMessageType', '_setVersion', '13338408dUeBZq', 'findExportByName', 'selectReturn', 'serverConnection', 'pthreadReturn', 'allocUtf8String', 'messaging', '_dequeue', 'equals', 'base', '3138741FXyrNX', 'attach', '_getCapacity', 'pthread_mutex_unlock', 'readPointer', 'rwx', 'readInt', 'findModuleByName', 'readU8', 'WAKE\x20UP!!', 'libg.so', '_incrementCount', 'select', 'memmove', 'sendQueue', 'recvQueue', 'writeInt', '3438308PkzpsY', '766801CVqEJU', '1330tPfVQG', 'send', '66grxghI', 'sendMessage', '_setDequeueIndex', 'loginMessagePtr', 'recv', 'writePointer', 'pthread_mutex_lock', 'uint16', 'wakeUpReturnArray', '150318YHYszq', 'protect', 'inet_addr', '_setLength', 'libc.so', 'sub', 'free', '_getByteStream', '_set'];
	_0x5442 = function() {
		return _0x917388;
	};
	return _0x5442();
}
var Login = 0x0,
	malloc = new NativeFunction(Module[getObfString(0x166)](getObfString(0x191), getObfString(0x15f)), getObfString(0x149), [getObfString(0x154)]),
	free = new NativeFunction(Module['findExportByName']('libc.so', getObfString(0x193)), 'void', [getObfString(0x149)]),
	pthread_mutex_lock = new NativeFunction(Module[getObfString(0x166)]('libc.so', getObfString(0x18a)), getObfString(0x154), [getObfString(0x149)]),
	pthread_mutex_unlock = new NativeFunction(Module['findExportByName'](getObfString(0x191), getObfString(0x172)), getObfString(0x154), [getObfString(0x149)]),
	pthread_cond_signal = new NativeFunction(Module[getObfString(0x166)](getObfString(0x191), getObfString(0x19b)), getObfString(0x154), [getObfString(0x149)]),
	select = new NativeFunction(Module[getObfString(0x166)]('libc.so', getObfString(0x17b)), 'int', ['int', getObfString(0x149), getObfString(0x149), getObfString(0x149), getObfString(0x149)]),
	memmove = new NativeFunction(Module[getObfString(0x166)](getObfString(0x191), getObfString(0x17c)), getObfString(0x149), [getObfString(0x149), getObfString(0x149), getObfString(0x154)]),
	ntohs = new NativeFunction(Module[getObfString(0x166)]('libc.so', 'ntohs'), 'uint16', [getObfString(0x18b)]),
	inet_addr = new NativeFunction(Module[getObfString(0x166)](getObfString(0x191), getObfString(0x18f)), getObfString(0x154), [getObfString(0x149)]),
	libc_send = new NativeFunction(Module[getObfString(0x166)](getObfString(0x191), getObfString(0x183)), 'int', [getObfString(0x154), getObfString(0x149), getObfString(0x154), getObfString(0x154)]),
	libc_recv = new NativeFunction(Module[getObfString(0x166)](getObfString(0x191), getObfString(0x188)), getObfString(0x154), [getObfString(0x154), 'pointer', getObfString(0x154), getObfString(0x154)]),
	Message = {
		'_getByteStream': function(_0x16f618) {
			var _0x43f473 = getObfString;
			return _0x16f618[_0x43f473(0x14f)](0x8);
		},
		'_getVersion': function(_0x500a93) {
			var _0x4f0d9d = getObfString;
			return Memory[_0x4f0d9d(0x175)](_0x500a93['add'](0x4));
		},
		'_setVersion': function(_0x453570, _0x304499) {
			var _0xc958f6 = getObfString;
			Memory[_0xc958f6(0x17f)](_0x453570[_0xc958f6(0x14f)](0x4), _0x304499);
		},
		'_getMessageType': function(_0x3a5553) {
			var _0x4fd226 = getObfString;
			return new NativeFunction(Memory['readPointer'](Memory[_0x4fd226(0x173)](_0x3a5553)['add'](0x14)), 'int', [_0x4fd226(0x149)])(_0x3a5553);
		},
		'_encode': function(_0x1f1b42) {
			var _0x47f0f7 = getObfString;
			new NativeFunction(Memory[_0x47f0f7(0x173)](Memory['readPointer'](_0x1f1b42)[_0x47f0f7(0x14f)](0x8)), _0x47f0f7(0x158), [_0x47f0f7(0x149)])(_0x1f1b42);
		},
		'_decode': function(_0x3ee491) {
			var _0x2eb5c9 = getObfString;
			new NativeFunction(Memory[_0x2eb5c9(0x173)](Memory['readPointer'](_0x3ee491)['add'](0xc)), _0x2eb5c9(0x158), [_0x2eb5c9(0x149)])(_0x3ee491);
		},
		'_free': function(_0x4650e3) {
			var _0x1e41de = getObfString;
			new NativeFunction(Memory[_0x1e41de(0x173)](Memory['readPointer'](_0x4650e3)['add'](0x18)), 'void', [_0x1e41de(0x149)])(_0x4650e3), new NativeFunction(Memory[_0x1e41de(0x173)](Memory['readPointer'](_0x4650e3)[_0x1e41de(0x14f)](0x4)), _0x1e41de(0x158), [_0x1e41de(0x149)])(_0x4650e3);
		}
	},
	ByteStream = {
		'_getOffset': function(_0x46be85) {
			var _0x52ec77 = getObfString;
			return Memory['readInt'](_0x46be85[_0x52ec77(0x14f)](0x10));
		},
		'_getByteArray': function(_0x164146) {
			var _0x8ad715 = getObfString;
			return Memory[_0x8ad715(0x173)](_0x164146[_0x8ad715(0x14f)](0x1c));
		},
		'_setByteArray': function(_0x118cc4, _0x23061a) {
			var _0x568bbb = getObfString;
			Memory[_0x568bbb(0x189)](_0x118cc4['add'](0x1c), _0x23061a);
		},
		'_getLength': function(_0x61893a) {
			var _0x4e6ada = getObfString;
			return Memory[_0x4e6ada(0x175)](_0x61893a[_0x4e6ada(0x14f)](0x14));
		},
		'_setLength': function(_0x5c27cd, _0x4c01c7) {
			var _0x3f2521 = getObfString;
			Memory['writeInt'](_0x5c27cd[_0x3f2521(0x14f)](0x14), _0x4c01c7);
		}
	},
	Buffer = {
		'_getEncodingLength': function(_0x1199ed) {
			var _0x15ad58 = getObfString;
			return Memory[_0x15ad58(0x177)](_0x1199ed['add'](0x2)) << 0x10 | Memory[_0x15ad58(0x177)](_0x1199ed[_0x15ad58(0x14f)](0x3)) << 0x8 | Memory['readU8'](_0x1199ed['add'](0x4));
		},
		'_setEncodingLength': function(_0x50fc8c, _0xb70d92) {
			var _0xbb3c2e = getObfString;
			Memory['writeU8'](_0x50fc8c[_0xbb3c2e(0x14f)](0x2), _0xb70d92 >> 0x10 & 0xff), Memory[_0xbb3c2e(0x14c)](_0x50fc8c[_0xbb3c2e(0x14f)](0x3), _0xb70d92 >> 0x8 & 0xff), Memory[_0xbb3c2e(0x14c)](_0x50fc8c[_0xbb3c2e(0x14f)](0x4), _0xb70d92 & 0xff);
		},
		'_setMessageType': function(_0x572772, _0x395833) {
			var _0x966691 = getObfString;
			Memory[_0x966691(0x14c)](_0x572772[_0x966691(0x14f)](0x0), _0x395833 >> 0x8 & 0xff), Memory[_0x966691(0x14c)](_0x572772['add'](0x1), _0x395833 & 0xff);
		},
		'_getMessageVersion': function(_0x5d4f3b) {
			var _0x249748 = getObfString;
			return Memory['readU8'](_0x5d4f3b['add'](0x5)) << 0x8 | Memory[_0x249748(0x177)](_0x5d4f3b['add'](0x6));
		},
		'_setMessageVersion': function(_0x5e45f1, _0x363b41) {
			var _0x37d7c5 = getObfString;
			Memory[_0x37d7c5(0x14c)](_0x5e45f1[_0x37d7c5(0x14f)](0x5), _0x363b41 >> 0x8 & 0xff), Memory[_0x37d7c5(0x14c)](_0x5e45f1[_0x37d7c5(0x14f)](0x6), _0x363b41 & 0xff);
		},
		'_getMessageType': function(_0x329b78) {
			var _0x24624a = getObfString;
			return Memory[_0x24624a(0x177)](_0x329b78) << 0x8 | Memory['readU8'](_0x329b78[_0x24624a(0x14f)](0x1));
		}
	},
	MessageQueue = {
		'_getCapacity': function(_0x3b087b) {
			var _0x128eea = getObfString;
			return Memory[_0x128eea(0x175)](_0x3b087b[_0x128eea(0x14f)](0x4));
		},
		'_get': function(_0x4e1f37, _0x420043) {
			var _0x3c2313 = getObfString;
			return Memory[_0x3c2313(0x173)](Memory[_0x3c2313(0x173)](_0x4e1f37)[_0x3c2313(0x14f)](POINTER_SIZE * _0x420043));
		},
		'_set': function(_0x1c9c5d, _0x420055, _0x1ddbb7) {
			var _0x1e2e6e = getObfString;
			Memory[_0x1e2e6e(0x189)](Memory[_0x1e2e6e(0x173)](_0x1c9c5d)['add'](POINTER_SIZE * _0x420055), _0x1ddbb7);
		},
		'_count': function(_0xbf866d) {
			var _0x5e12f8 = getObfString;
			return Memory[_0x5e12f8(0x175)](_0xbf866d[_0x5e12f8(0x14f)](0x8));
		},
		'_decrementCount': function(_0xf577f3) {
			var _0x5dacf2 = getObfString;
			Memory['writeInt'](_0xf577f3[_0x5dacf2(0x14f)](0x8), Memory[_0x5dacf2(0x175)](_0xf577f3['add'](0x8)) - 0x1);
		},
		'_incrementCount': function(_0x435602) {
			var _0x53757a = getObfString;
			Memory[_0x53757a(0x17f)](_0x435602[_0x53757a(0x14f)](0x8), Memory[_0x53757a(0x175)](_0x435602[_0x53757a(0x14f)](0x8)) + 0x1);
		},
		'_getDequeueIndex': function(_0x314006) {
			var _0x28ca28 = getObfString;
			return Memory['readInt'](_0x314006[_0x28ca28(0x14f)](0xc));
		},
		'_getEnqueueIndex': function(_0x5e6ed1) {
			var _0x302485 = getObfString;
			return Memory[_0x302485(0x175)](_0x5e6ed1[_0x302485(0x14f)](0x10));
		},
		'_setDequeueIndex': function(_0x1250e5, _0x39cb99) {
			var _0x42a683 = getObfString;
			Memory[_0x42a683(0x17f)](_0x1250e5[_0x42a683(0x14f)](0xc), _0x39cb99);
		},
		'_setEnqueueIndex': function(_0x2897e1, _0xaec717) {
			var _0x262480 = getObfString;
			Memory[_0x262480(0x17f)](_0x2897e1['add'](0x10), _0xaec717);
		},
		'_enqueue': function(_0x58e6cb, _0x28c5e4) {
			var _0x2ee655 = getObfString;
			pthread_mutex_lock(_0x58e6cb[_0x2ee655(0x192)](0x4));
			var _0x1b6b89 = MessageQueue[_0x2ee655(0x155)](_0x58e6cb);
			MessageQueue[_0x2ee655(0x195)](_0x58e6cb, _0x1b6b89, _0x28c5e4), MessageQueue[_0x2ee655(0x15d)](_0x58e6cb, (_0x1b6b89 + 0x1) % MessageQueue[_0x2ee655(0x171)](_0x58e6cb)), MessageQueue[_0x2ee655(0x17a)](_0x58e6cb), pthread_mutex_unlock(_0x58e6cb[_0x2ee655(0x192)](0x4));
		},
		'_dequeue': function(_0x5a1059) {
			var _0x30a99b = getObfString,
				_0x390d4f = null;
			pthread_mutex_lock(_0x5a1059['sub'](0x4));
			if (MessageQueue[_0x30a99b(0x148)](_0x5a1059)) {
				var _0x45d22d = MessageQueue[_0x30a99b(0x199)](_0x5a1059);
				_0x390d4f = MessageQueue['_get'](_0x5a1059, _0x45d22d), MessageQueue[_0x30a99b(0x186)](_0x5a1059, (_0x45d22d + 0x1) % MessageQueue[_0x30a99b(0x171)](_0x5a1059)), MessageQueue[_0x30a99b(0x196)](_0x5a1059);
			}
			return pthread_mutex_unlock(_0x5a1059[_0x30a99b(0x192)](0x4)), _0x390d4f;
		}
	};

function battles() {
	var _0x405a52 = getObfString;
	Interceptor[_0x405a52(0x170)](base['add'](0x258964), {
		'onEnter'(_0x225bcf) {
			_0x225bcf[0x3] = ptr(0x3);
		}
	});
}

function gradient() {
	var _0x343354 = getObfString;
	Interceptor[_0x343354(0x170)](Module['findBaseAddress'](_0x343354(0x179))[_0x343354(0x14f)](0x4a9b08), {
		'onEnter': function(_0x2edf48) {
			_0x2edf48[0x7] = ptr(0x1);
		}
	});
}

function enableDebugInfo() {
	var _0x47e61d = getObfString,
		_0x3b74f7 = base[_0x47e61d(0x14f)](0x40d908),
		_0x3becb1 = base[_0x47e61d(0x14f)](0xbaeb8);
	Memory[_0x47e61d(0x18e)](_0x3b74f7, 0x1, _0x47e61d(0x174)), Memory[_0x47e61d(0x18e)](_0x3becb1, 0x1, _0x47e61d(0x174)), _0x3b74f7[_0x47e61d(0x177)]() !== 0x1 && _0x3b74f7[_0x47e61d(0x14c)](0x1), _0x3becb1[_0x47e61d(0x177)]() !== 0x0 && _0x3becb1[_0x47e61d(0x14c)](0x0);
}

function setupMessaging() {
	var _0x44b8ce = getObfString;
	cache[_0x44b8ce(0x18c)] = [];
	for (var _0x5aad78 = 0x0; _0x5aad78 < WAKEUP_RETURN_ARRAY['length']; _0x5aad78 += 0x1) {
		cache[_0x44b8ce(0x18c)][_0x44b8ce(0x161)](base['add'](WAKEUP_RETURN_ARRAY[_0x5aad78]));
	}
	cache['pthreadReturn'] = base[_0x44b8ce(0x14f)](PTHREAD_COND_WAKE_RETURN), cache['selectReturn'] = base[_0x44b8ce(0x14f)](SELECT_RETURN), cache['serverConnection'] = Memory[_0x44b8ce(0x173)](base[_0x44b8ce(0x14f)](SERVER_CONNECTION)), cache['messaging'] = Memory[_0x44b8ce(0x173)](cache[_0x44b8ce(0x168)][_0x44b8ce(0x14f)](0x4)), cache[_0x44b8ce(0x159)] = Memory['readPointer'](cache['messaging'][_0x44b8ce(0x14f)](0x34)), cache[_0x44b8ce(0x17e)] = cache[_0x44b8ce(0x16b)][_0x44b8ce(0x14f)](0x3c), cache[_0x44b8ce(0x17d)] = cache[_0x44b8ce(0x16b)][_0x44b8ce(0x14f)](0x54), cache[_0x44b8ce(0x152)] = cache['messaging']['add'](0xd4), cache[_0x44b8ce(0x187)] = cache[_0x44b8ce(0x16b)]['add'](0xd8), cache['createMessageByType'] = new NativeFunction(base[_0x44b8ce(0x14f)](CREATE_MESSAGE_BY_TYPE), _0x44b8ce(0x149), [_0x44b8ce(0x149), _0x44b8ce(0x154)]), cache[_0x44b8ce(0x185)] = function(_0x3b3101) {
		var _0x1c695f = _0x44b8ce;
		Message['_encode'](_0x3b3101);
		var _0x54db5e = Message[_0x1c695f(0x194)](_0x3b3101),
			_0x4eba15 = ByteStream[_0x1c695f(0x151)](_0x54db5e),
			_0x56d5fc = malloc(_0x4eba15 + 0x7);
		memmove(_0x56d5fc[_0x1c695f(0x14f)](0x7), ByteStream[_0x1c695f(0x19d)](_0x54db5e), _0x4eba15), Buffer['_setEncodingLength'](_0x56d5fc, _0x4eba15), Buffer['_setMessageType'](_0x56d5fc, Message[_0x1c695f(0x163)](_0x3b3101)), Buffer[_0x1c695f(0x15c)](_0x56d5fc, Message[_0x1c695f(0x14b)](_0x3b3101)), libc_send(cache['fd'], _0x56d5fc, _0x4eba15 + 0x7, 0x0), free(_0x56d5fc);
	};

	function _0x3034bc() {
		var _0x255810 = _0x44b8ce;
		console[_0x255810(0x156)](_0x255810(0x178));
		var _0x5e2599 = MessageQueue[_0x255810(0x16c)](cache['sendQueue']);
		while (_0x5e2599) {
			var _0x3a8407 = Message[_0x255810(0x163)](_0x5e2599);
			console[_0x255810(0x156)](_0x3a8407), _0x3a8407 === 0x2774 && (_0x5e2599 = Memory[_0x255810(0x173)](cache[_0x255810(0x187)]), Memory[_0x255810(0x189)](cache[_0x255810(0x187)], ptr(0x0)), Login = 0x1), cache[_0x255810(0x185)](_0x5e2599), _0x5e2599 = MessageQueue[_0x255810(0x16c)](cache[_0x255810(0x17d)]);
		}
	}

	function _0x10b789() {
		var _0x271f91 = _0x44b8ce,
			_0x502243 = malloc(0x7);
		libc_recv(cache['fd'], _0x502243, 0x7, 0x100);
		var _0x326aea = Buffer[_0x271f91(0x163)](_0x502243);
		if (_0x326aea >= 0x4e20) {
			_0x326aea === 0x4e88 && (Memory['writeInt'](cache[_0x271f91(0x152)], 0x5), gradient());
			var _0x36b6f7 = Buffer['_getEncodingLength'](_0x502243),
				_0x5cdb06 = Buffer[_0x271f91(0x14a)](_0x502243);
			free(_0x502243);
			var _0x557852 = malloc(_0x36b6f7);
			libc_recv(cache['fd'], _0x557852, _0x36b6f7, 0x100);
			var _0x55d791 = cache[_0x271f91(0x153)](cache['messageFactory'], _0x326aea);
			Message[_0x271f91(0x164)](_0x55d791, _0x5cdb06);
			var _0x2395ae = Message[_0x271f91(0x194)](_0x55d791);
			ByteStream[_0x271f91(0x190)](_0x2395ae, _0x36b6f7);
			if (_0x36b6f7) {
				var _0x495ee0 = malloc(_0x36b6f7);
				memmove(_0x495ee0, _0x557852, _0x36b6f7), ByteStream[_0x271f91(0x14e)](_0x2395ae, _0x495ee0);
			}
			Message[_0x271f91(0x162)](_0x55d791), MessageQueue[_0x271f91(0x198)](cache[_0x271f91(0x17e)], _0x55d791), free(_0x557852);
		}
	}
	Interceptor[_0x44b8ce(0x15a)](Module[_0x44b8ce(0x166)](_0x44b8ce(0x191), 'pthread_cond_signal'), new NativeCallback(function(_0x519152) {
		var _0x3a1dee = _0x44b8ce;
		if (!this['returnAddress']['equals'](cache[_0x3a1dee(0x169)])) return pthread_cond_signal(_0x519152);
		var _0x4e6338 = Memory['readPointer'](this[_0x3a1dee(0x160)]['sp']['add'](0x4));
		for (var _0xcad324 = 0x0; _0xcad324 < cache[_0x3a1dee(0x18c)][_0x3a1dee(0x197)]; _0xcad324 += 0x1) {
			if (_0x4e6338[_0x3a1dee(0x16d)](cache['wakeUpReturnArray'][_0xcad324])) return _0x3034bc(), 0x0;
		}
		return pthread_cond_signal(_0x519152);
	}, _0x44b8ce(0x154), [_0x44b8ce(0x149)])), Interceptor[_0x44b8ce(0x15a)](Module[_0x44b8ce(0x166)](_0x44b8ce(0x191), 'select'), new NativeCallback(function(_0x122a3d, _0x1ff6bb, _0x333c35, _0x22de5a, _0x22a534) {
		var _0x4029a7 = _0x44b8ce,
			_0xc32c12 = select(_0x122a3d, _0x1ff6bb, _0x333c35, _0x22de5a, _0x22a534);
		return this['returnAddress'][_0x4029a7(0x16d)](cache[_0x4029a7(0x167)]) && _0x10b789(), _0xc32c12;
	}, _0x44b8ce(0x154), [_0x44b8ce(0x154), _0x44b8ce(0x149), 'pointer', 'pointer', _0x44b8ce(0x149)]));
}
Interceptor['attach'](Module['findExportByName'](getObfString(0x191), getObfString(0x15b)), {
	'onEnter': function(_0x2351d2) {
		var _0x1c5851 = getObfString;
		if (ntohs(Memory[_0x1c5851(0x157)](_0x2351d2[0x1][_0x1c5851(0x14f)](0x2))) === 0x247b) {
			cache['fd'] = _0x2351d2[0x0][_0x1c5851(0x150)]();
			var _0x5238b0 = Memory[_0x1c5851(0x16a)](_0x1c5851(0x19a));
			Memory[_0x1c5851(0x17f)](_0x2351d2[0x1][_0x1c5851(0x14f)](0x4), inet_addr(_0x5238b0)), Memory[_0x1c5851(0x19c)](_0x2351d2[0x1]['add'](0x2), ntohs(9334)), setupMessaging();
		}
	}
});

// oops, someone forgot to compile script