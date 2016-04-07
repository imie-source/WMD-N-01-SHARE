"use strict";

fr.imie.EventEmitter = class {
  constructor() {
    this.events = [];
  }

  on(eventName, fn) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(fn);
  }

  off(eventName, fn) {
    var idx = this.events[eventName].indexOf(fn);
    if (idx !== -1) {
      this.events[eventName].splice(idx, 1);
    }
  }

  emit(eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(function(fn) {
        fn(data);
      });
    }
  }

}
