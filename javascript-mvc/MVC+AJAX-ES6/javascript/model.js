"use strict";

fr.imie.Model = class extends fr.imie.Observable{

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
  refreshScore() {
    console.log('refresh');
    $.ajax({
      url: "https://api.mongolab.com/api/1/databases/dryfield/collections/gamescore/?apiKey=KNNaG3ONbKo7nmQ-Ca8d3eSNU8JfAs-P",
      type: 'get',
      timeout: 1000
    }).done(function(datas) {
      //console.log('done');
      this.scores = [];
      datas.forEach(function(item) {
        this.scores.push({
          player: item.player,
          score: parseInt(item.score)
        });
      }.bind(this));
      this.scores = datas;
      this.notify();
    }.bind(this)).fail(function() {
      //console.log('fail');
      this.notify();
    }.bind(this));
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
    $.ajax({
      url: "https://api.mongolab.com/api/1/databases/dryfield/collections/gamescore/?apiKey=KNNaG3ONbKo7nmQ-Ca8d3eSNU8JfAs-P",
      type: 'post',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({
        player: this.playerName,
        score: this.totalHarvest
      })
    }).done(function(datas) {
      this.refreshScore();
    }.bind(this)).fail(function() {
      console.log('pas se publication possible pour le moment')
    }.bind(this));
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
