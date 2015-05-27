function Thermostat(){
  this.temperature = 20;
};

Thermostat.prototype.increase = function() {
  this.temperature++;
};


Thermostat.prototype.decrease = function() {
  if(this.temperature <= 9){
    return "Too low!";
  }
  this.temperature--;
};