"use strict";
fr.imie.Model = class extends fr.imie.EventEmitter{
  constructor(){
    super();
    this.timer=0;
    setInterval(this.incrementTimer.bind(this), 1000);
  }
  incrementTimer() {
      //console.log(this);
      this.timer++;
      this.emit('changeModel');
  }
}
