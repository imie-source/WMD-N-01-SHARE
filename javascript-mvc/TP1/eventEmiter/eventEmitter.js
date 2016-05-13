"use strict";

fr.imie.EventEmitter = {
  state: {
    events: {
      writable: true
    }
  },
  proto: {
    init: function() {
      this.events = [];
    },
    on: function(eventName, fn) {
      this.events[eventName] = this.events[eventName] || [];
      this.events[eventName].push(fn);
    },
    off: function(eventName, fn) {
      var idx = this.events[eventName].indexOf(fn);
      if (idx !== -1) {
        this.events[eventName].splice(idx, 1);
      }
    },
    emit: function(eventName, data) {
      if (this.events[eventName]) {
        this.events[eventName].forEach(function(fn) {
          fn(data);
        });
      }
    }
  },
  build: function() {
    var obj = Object.create(this.proto, this.state);
    obj.init();
    return obj;
  }
}
