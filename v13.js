//https://github.com/BiszkoptnikDev/Dibil-v13
const Libg = {
  init() {
    this.base = Module.findBaseAddress("libg.so");
    this.NativeFont = { addr: {} };
    this.NativeFont.addr.formatString = this.offset(0x44c26c);
    this.isLicenseCheckRequired = this.offset(0x3f5598);
    this.HomePageStartGame = this.offset(0x3ed6dc);
    this.Messaging = { addr: {} };
    this.Messaging.addr.sendPepperAuth = this.offset(0x414ca8);
    this.Messaging.addr.send = this.offset(0x38bb10);
    this.Messaging.send = new NativeFunction(this.Messaging.addr.send, "void", ["pointer", "pointer"]);
  }, offset(addr) {
    return this.base.add(addr);
  }
};

const Armceptor = {
  nop(ptr) {
    Memory.patchCode(ptr, Process.pageSize, function(code) {
      var writer = new ArmWriter(code, {
        pc: ptr
      });
      writer.putNop();
      writer.flush();
    });
  }, ret(ptr) {
    Memory.patchCode(ptr, Process.pageSize, function(code) {
      var writer = new ArmWriter(code, {
        pc: ptr
      });
      writer.putRet();
      writer.flush();
    });
  }, jumpout(addr, target) {
    Memory.patchCode(addr, Process.pageSize, function(code) {
      var writer = new ArmWriter(code, {
        pc: addr
      });
      writer.putBranchAddress(target);
      writer.flush();
    });
  }
};

const malloc = new NativeFunction(Module.findExportByName("libc.so", "malloc"), "pointer", ["int"]);
const free = new NativeFunction(Module.findExportByName("libc.so", "free"), "void", ["pointer"])

var DebugMenuButton, DebugMenu;
var IsDebugMenuOpened = 0;
var debugsc, debugbutton;

function log(message) {
  console.log(`[*] ${message}`);
}

function createStringPtr(message) {
  var charPtr = malloc(message.length + 1);
  Memory.writeUtf8String(charPtr, message);
  return charPtr;
}

const ArxanPatcher = {
  init() {
    Armceptor.jumpout(this.base.add(0x5b708),  this.base.add(0x5c664));
    Armceptor.jumpout(this.base.add(0x30dd58), this.base.add(0x30ebbc)); // LoginMessage::encode
    Armceptor.jumpout(this.base.add(0x7b78c),  this.base.add(0x7c9c0));
    Armceptor.jumpout(this.base.add(0x4723c0), this.base.add(0x4735c0));
    Interceptor.attach(this.base.add(0x4e1494), function() { // Connection::connect
      this.context.r1 = 0xe4;
      this.context.r2 = 0xe4;
    });
    log("Arxan patching module initialized");
  }
};

const EncryptionPatcher = {
  init() {
    Interceptor.replace(Libg.isLicenseCheckRequired, new NativeCallback(function () {
      return 0;
    }, "int", []));

    Interceptor.attach(Libg.Messaging.addr.sendPepperAuth, {
      onEnter(args) {
        this.messaging = args[0];
        args[1] = args[2];
      }, onLeave(retval) {
        this.messaging.add(212).writeU32(5);
      }
    });

    Interceptor.attach(this.base.add(0x488dc4), function() { // Messaging::encryptAndWrite
      this.context.r0 = 0x2774;
    });

    Interceptor.attach(this.base.add(0x2ccda4), function() {
      console.log(this.returnAddress.sub(Libg.base));
    });

    Interceptor.replace(this.base.add(0x540218), new NativeCallback(function() {
      return 0;
    }, "int", []));

    Interceptor.replace(this.base.add(0x15a290), new NativeCallback(function(a, b, c, d) { // PepperEncrypter::decrypt
      if (d > 0)
        c.writeByteArray(b.readByteArray(d));
      return 0;
    }, "int", ["pointer", "pointer", "pointer", "int"]));
  }
};

const Redirection = {
  init(addr, port) {
    Interceptor.attach(Module.findExportByName("libc.so", "getaddrinfo"), {
      onEnter(args) {
        log(`Hit getaddrinfo at ${this.returnAddress.sub(Libg.base)} with ${args[0].readUtf8String()}`);
        args[0].writeUtf8String(addr);
        args[1].writeUtf8String(port);
      }
    });
    log("Redirection module initialized");
  }
};

const GamePatcher = {
  init() {
    GamePatcher.enableColorCodes();
    GamePatcher.enableHomePageStartGame();
    log("GamePatcher module initialized");
  }, enableColorCodes() {
    Interceptor.attach(Libg.NativeFont.addr.formatString, {
      onEnter(args) {
        args[7] = ptr(1);
      }
    });
    this.logFeature("Color Codes");
  }, enableHomePageStartGame() {
    Interceptor.attach(Libg.HomePageStartGame, {
      onEnter(args) {
        args[3] = ptr(3);
        args[6] = ptr(1);
        args[8] = ptr(1);
      }
    });
  }, logFeature(_0x3a5067) {
    log(`GamePatcher: feature ${_0x3a5067} was enabled.`);
  }
};

const AddFile = {
  init(file) {
    let filePtr = createStringPtr(file);
    const ResourceListenerAddFile = new NativeFunction(this.base.add(0x24f5c0), "int", ["pointer", "pointer", "int", "int", 'int', "int"]);
    Interceptor.attach(this.base.add(0x24f5c0), {
      onEnter(args) {
        ResourceListenerAddFile(args[0], filePtr, -1, -1, -1, -1);
        free(filePtr);
        log(`ScLoader::AddFile - Sc File with name ${file} was been loaded!`);
      }
    });
  }
};

const DebugPatcher = {
  init() {
    debugsc = createStringPtr("sc/debug.sc"), debugbutton = createStringPtr("debug_menu_button");
    DebugMenuButton = malloc(1500), DebugMenu = malloc(2000);

    const StageAddChild = new NativeFunction(this.base.add(0x3f5bb8), "void", ["pointer", "pointer"]);
    const StageRemoveChild = new NativeFunction(this.base.add(0xd7474), "void", ["pointer", "pointer"]);
    const DebugMenuCtor = new NativeFunction(this.base.add(0x380614), "pointer", ["pointer"]);
    const DebugMenuUpdate = new NativeFunction(this.base.add(0x2a7268), "int", ["pointer", "float"]);

    setTimeout(function() {
      DebugMenuCtor(DebugMenu);
    }, 6000);

    setTimeout(function () {
      new NativeFunction(this.base.add(0x14d970), 'void', ["pointer"])(DebugMenuButton);
      let Button = new NativeFunction(this.base.add(0x3e11f8), "pointer", ["pointer", "pointer", "bool"])(debugsc, debugbutton, 1);
      new NativeFunction(this.base.add(0x13d4a0), "void", ["pointer", 'pointer'])(DebugMenuButton, Button);
      StageAddChild(this.base.add(0x96c2f4).readPointer(), DebugMenuButton);
      new NativeFunction(this.base.add(0x13c884), "void", ["pointer", "float", "float"])(DebugMenuButton, 30, 500);
    }, 6000);

    Interceptor.attach(this.base.add(0x3b46bc), {
      onEnter(args) {
        if (args[0].toInt32() == DebugMenuButton.toInt32()) {
          if (IsDebugMenuOpened == 0) {
            IsDebugMenuOpened = 1;
            StageAddChild(Libg.base.add(0x96c2f4).readPointer(), DebugMenu);
          } else if (IsDebugMenuOpened == 1) {
            IsDebugMenuOpened = 0;
            StageRemoveChild(Libg.base.add(0x96c2f4).readPointer(), DebugMenu);
          }
        }
      }
    });

    setTimeout(function() {
      setInterval(function() {
        DebugMenuUpdate(Libg.DebugMenu, 20);
      }, 5);
    }, 6000);
    log("Debug module initialized");
  }
};

const ClearDebugPatcher = {
  init() {
    function freeDebug() {
      free(DebugMenuButton);
      DebugMenuButton = null;
      free(DebugMenu);
      DebugMenu = null;
      free(debugsc);
      debugsc = null;
      free(debugbutton);
      debugbutton = null;
    }

    Interceptor.attach(Module.findExportByName("libc.so", "exit"), {
      onEnter(args) {
        freeDebug();
      }
    });

    Interceptor.attach(Module.findExportByName("libc.so", "abort"), {
      onEnter(args) {
        freeDebug();
      }
    });

    Interceptor.attach(Module.findExportByName("libc.so", "signal"), {
      onEnter(args) {
        freeDebug();
      }
    });
  }
};

rpc.exports.init = function() {
  Libg.init();
  ArxanPatcher.init();
  Redirection.init("130.61.188.127", "9339");
  EncryptionPatcher.init();
  GamePatcher.init();
  AddFile.init("sc/debug.sc");
  DebugPatcher.init();
  ClearDebugPatcher.init();
  console.log("Initialization completed.");
};
