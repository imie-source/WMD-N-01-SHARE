"use strict";

fr.imie.Model = {
  state: {
    timer :{
      writable: true
    }
  },
  proto: {
    init: function() {
      fr.imie.EventEmitter.proto.init.call(this);
      this.timer=0;
      setInterval(this.incrementTimer.bind(this), 1000);
    },
    incrementTimer: function() {
      console.log(this);
      this.timer++;
      this.emit('changeModel');
    }
  },
  build: function() {
    var obj= Object.create(this.proto, this.state);
    obj.init();
    return obj;
  }
}

fr.imie.Utils.build().mixin(fr.imie.EventEmitter, fr.imie.Model);
