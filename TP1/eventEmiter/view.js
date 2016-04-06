"use strict";

fr.imie.View = {
  state: {
    model: {
      writable: true
    },
    timerDiv : {
      writable: true
    }
  },
  proto: {
    init: function(model) {
      this.model = model;
      model.on('changeModel',this.update.bind(this))
      $(function() {
        this.timerDiv = $('#timer');
      }.bind(this));
    },
    update: function() {
      this.timerDiv.text(this.model.timer);
    }
  },
  build: function(model) {
    var obj= Object.create(this.proto, this.state);
    obj.init(model);
    return obj;
  }
}
