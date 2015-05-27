function Thermostat(){
  this.temperature = 20;
  this.isPowerSaving = true
};

Thermostat.prototype.increase = function() {
  if(this.isPowerSaving && this.temperature >= 26){
    return "Too high!";
  }
  this.temperature++;
};


Thermostat.prototype.decrease = function() {
  if(this.temperature <= 9){
    return "Too low!";
  }
  this.temperature--;
};


