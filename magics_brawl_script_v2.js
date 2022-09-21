const base = Module.findBaseAddress("libg.so");
const malloc = new NativeFunction(Module.findExportByName("libc.so", "malloc"), "pointer", ["int"]);
const pthread_mutex_unlock = new NativeFunction(Module.findExportByName("libc.so", "pthread_mutex_unlock"), "int", ["pointer"]);
const ntohs = new NativeFunction(Module.findExportByName("libc.so", "ntohs"), "uint16", ["uint16"]);
const getaddrinfo = new NativeFunction(Module.findExportByName("libc.so", "getaddrinfo"), "int", ["pointer", "pointer", "pointer", "pointer"]);
const scString = new NativeFunction(base.add(0x4eb380), "pointer", ["pointer", "pointer"]);
const SCIDConfigSetString = new NativeFunction(base.add(0x4c9ed0), "void", ["pointer", "pointer", "pointer"]);
const startBattle = new NativeFunction(base.add(0x283680), "pointer", ["pointer", "pointer", "int", "int"]); // unused
const serverHost = "magic.royalegame.win";
const serverPort = 9334;

function str2ptr(str) { 
	var ptr = malloc(str.length + 1);
	ptr.writeUtf8String(str);
	return ptr;
	// долбаёб зачем такие методы когда есть Memory.allocUtf8String(str) + ты о нём знаешь и юзаешь но не тут
}
function setKeyVersion(arg0) {
	base.add(0x62ace4).writeU16(arg0);
}

function connect() {
	Interceptor.replace(Module.findExportByName("libc.so", "getaddrinfo"), new NativeCallback(function(arg0, arg1, arg2, arg3) {
		if (Memory.readUtf8String(arg0) == "game.brawlstarsgame.com") {
			arg0 = Memory.allocUtf8String(serverHost); // а тут :upside_down:
			console.log("game.brawlstarsgame.com replate to retro.royalegame.win"); // retro.royalegame.win, ну да ну да (replate..)
		}
		return getaddrinfo(arg0, arg1, arg2, arg3);
    }, 'int', ['pointer', 'pointer', 'pointer', 'pointer']));
}

function setNullsConnect() {
	var a = base.add(0x96c030).readPointer();
	var b = a.add(44).readPointer();
	var c = malloc(20);
	var d = malloc(20);
	scString(c, str2ptr("Url"));
	scString(d, str2ptr("https://connect.nulls.gg/"));
	SCIDConfigSetString(b, c, d);
}

function rostikdolbaeb() { // реально же
	let dolbaeb = Interceptor.attach(base.add(0x3c2b4), { // glGetIntegerv (чё за уебанские методы, нахуя OpenGL трогать???)
		onEnter(a) {
			if (this.returnAddress.equals(base.add(0x47ab2c))) { // GameMain::init (спасибо блять)
				dolbaeb.detach();
				setNullsConnect(); // setDolbaebConnect
			}
		}
	});
}

function checkServerConnection() {
	Interceptor.attach(base.add(0x280ddc), { // ServerConnection::connectTo (долбаёбские методы x2)
		onEnter(args) {
			Interceptor.detachAll(); // защиты обойти очень сложно, да?
			replaceKey();
		}
	});
}

function replaceKey() {
	setKeyVersion(8);
	base.add(0x975b24).writeU8(1); // safetynet pidor
	
	var bonus = Interceptor.attach(Module.findExportByName("libc.so", "connect"), { // еблан connect то зачем если ты уже через getaddrinfo поменял (+ интерцептор на ServerConnection::connectTo стоит!!1)
		onEnter(args) {
			if (ntohs(args[1].add(2).readU16()) == 9339) {
				args[1].add(2).writeU16(ntohs(serverPort)); // пиздец, поменять арг в getaddrinfo не придумали
				
				var raptornik = Interceptor.attach(base.add(0x158358), { // randombytes
					onEnter(args) {
					    this.key = args[0];
					},
					onLeave(retval) {
						raptornik.detach();
						this.key.writeByteArray([0x3e, 0xcd, 0x93, 0x8d, 0x8a, 0xbf, 0xa7, 0x9a, 0xed, 0x89, 0x2c, 0x12, 0x63, 0xd1, 0xe, 0xd0, 0x8d, 0xc9, 0x4f, 0x1a, 0x7e, 0xce, 0xe4, 0xff, 0x50, 0x8e, 0xbf, 0x23, 0x61, 0x72, 0x62, 0x65]);
					} // replace придумали в 2022, люди до:
				});
				
				bonus.detach();
				
				var dolbaeb = Interceptor.attach(base.add(0x3C308), { // glBindTexture (бляять, ты долбаёб?)
					onEnter(args) {
						if (this.returnAddress.sub(base) == 0x59694) { 
							dolbaeb.detach();
							checkServerConnection(); // говно методы 
							
							var pthread_join = new NativeFunction(Module.findExportByName("libc.so", "pthread_join"), "int", ["pointer", "pointer"]);
							
							Interceptor.attach(base.add(0x1e00e0), function () { // поток потрогал
								var pthread = this.context.r5.readPointer().add(16).readPointer();
								pthread_join(pthread, ptr(0));
							});
							
							Interceptor.replace(base.add(0x178ff0), new NativeCallback(function() { // это чё за хуйня
								Interceptor.revert(base.add(0x178ff0));
							}, 'pointer', []));
						}
					}
				});
			}
		}
	});
}

function init() {
	rostikdolbaeb();
	replaceKey();
	connect();
}

rpc.exports.init = init;