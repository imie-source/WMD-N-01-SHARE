"use strict";

fr.imie.Controller = class {
  constructor(model, view) {
    this.model = model || {};
    this.view = view || {};
    this.view.attach(this);
  }
  update(message, data) {
    if (message == "harvest") {
      this.model.fields[data].harvest();
    } else if (message == "water") {
      this.model.fields[data].water();
    } else if (message == "buyWater") {
      this.model.buyWater(data);
    } else if (message == "go") {
      this.model.go();
    } else if (message == "displayScore") {
      this.model.refreshScore();
      this.view.showScore();
    } else if (message == "displayGame") {
      this.view.showGame();
    }
  }
}
