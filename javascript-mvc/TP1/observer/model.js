var Model = function(){
  Observable.call(this);
  this.timer=0;
  this.incrementTimer=function(){
    console.log(this);
    this.timer++;
    this.notify();
  }
  setInterval(this.incrementTimer.bind(this),1000);
}

Model.prototype=Object.create(Observable.prototype);
