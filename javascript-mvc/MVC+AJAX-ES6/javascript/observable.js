"use strict";

fr.imie.Observable = class {
  constructor() {
    this.observers = [];
  }
  attach(observer) {
    this.observers.push(observer);
  }
  notify(message, data) {
    //console.log('notify abstract');
    for (var observer of this.observers) {
      //console.log('update abstract');
      observer.update(message, data);
    }
  }
}
