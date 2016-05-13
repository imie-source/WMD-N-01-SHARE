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
      fr.imie.Observer.proto.init.call(this);
      this.model = model;
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

fr.imie.Utils.build().mixin(fr.imie.Observer, fr.imie.View);
