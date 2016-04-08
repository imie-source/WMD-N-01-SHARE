"use strict";

fr.imie.Model = class extends fr.imie.Observable {
  constructor() {
    super();
    this.scores = [];
    this.fields = [];
    this.fields.push(new fr.imie.model.Field(this));
    this.fields.push(new fr.imie.model.Field(this));
    this.fields.push(new fr.imie.model.Field(this));
    this.init();
  }
  init(){
    this.totalTanck = 3;
    this.totalCash = 50;
    this.totalHarvest = 0;
    this.playerName = undefined;
    for(var field of this.fields){
      field.init();
    }
  }

  buyWater(water) {
    this.totalTanck += water;
    this.totalCash -= water;
    console.log('notify');
    this.notify();
  }

  go() {
    for (var field of this.fields) {
      field.go();
    }
  }
  gameOver() {
    for (var field of this.fields) {
      field.gameOver();
    }
    this.scores.push({
      player: this.playerName,
      score: this.totalHarvest
    });
    this.init();
    this.notify();
  }
  verifyGameOver() {
    var gameOver = true;
    for (var field of this.fields) {
      if (field.tanck > 0) {
        gameOver = false;
      }
    }
    if (gameOver) {
      this.gameOver();
    }
  }
}
