var Vue = function(model) {
  Observer.call(this);
  this.model = model;
  $(function() {
    this.timerDiv = $('#timer');
  }.bind(this));

  this.update = function() {
    this.timerDiv.text(this.model.timer);
  }
}

Vue.prototype = Object.create(Observer.prototype);
