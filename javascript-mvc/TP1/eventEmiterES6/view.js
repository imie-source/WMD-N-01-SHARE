"use strict";

fr.imie.View = class {
  constructor(model){
      this.model = model;
      model.on('changeModel',this.update.bind(this))
      $(function() {
        this.timerDiv = $('#timer');
      }.bind(this));
  }
  update(){
    this.timerDiv.text(this.model.timer);
  }
}
