"use strict";


fr.imie.model.Field = class {
  constructor(model) {
    this.model = model || {};
    this.interval = undefined;
    this.init();
  }
  init(){
    this.tanck = 3;
    this.maturity = 0;
  }
  harvest() {
    this.maturity = 0;
    this.model.totalCash += 40;
    this.model.totalHarvest++;
    this.model.notify();
  }
  water() {
    if (this.model.totalTanck > 0) {
      this.tanck++;
      this.model.totalTanck--;
      this.model.notify();
    }
  }
  resetGame() {
    this.tanck = 5;
    this.maturity = 0;
  }
  go() {
    console.log('go');
    this.interval = window.setInterval(function() {
      this.tanck = Math.max(this.tanck - 1, 0);
      if (this.tanck == 0) {
        this.maturity = 0;
        this.model.verifyGameOver();
      }
      this.maturity++;
      this.model.notify();
    }.bind(this), 1000)
  }
  gameOver() {
    window.clearInterval(this.interval);
  }
}
