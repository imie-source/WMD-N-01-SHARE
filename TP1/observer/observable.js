var Observable = function(){
  this.observers=[];
  this.attach=function(observer){
    this.observers.push(observer);
  }
  this.dettach=function(observer){
    this.observers.splice(observers.indexOf(observer),1);
  }
  this.notify=function(){
    for (observerKey in this.observers){
      this.observers[observerKey].update();
    }
  }
}
