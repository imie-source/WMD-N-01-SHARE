"use strict";

fr.imie.Model = {
  state: {
    timer :{
      writable: true,
      value :0
    }
  },
  proto: {
    init: function() {
      fr.imie.Observable.proto.init.call(this);
      setInterval(this.incrementTimer.bind(this), 1000);
    },
    incrementTimer: function() {
      console.log(this);
      this.timer++;
      this.notify();
    }
  },
  build: function() {
    var obj= Object.create(this.proto, this.state);
    obj.init();
    return obj;
  }
}

fr.imie.Utils.build().mixin(fr.imie.Observable, fr.imie.Model);
