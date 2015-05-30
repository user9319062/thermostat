function Thermostat(){
  this.temperature = 20;
  this.isPowerSaving = true;

  }

Thermostat.prototype.increase = function() {
  var toohigh = "Too high!"
  if(this.isPowerSaving && this.temperature >= 26){
    return toohigh}
  else if(this.temperature >= 33){
    return toohigh;
  }
  this.temperature++;
};


Thermostat.prototype.decrease = function() {
  if(this.temperature <= 10){
    return "Too low!";
  }
  this.temperature--;
};


Thermostat.prototype.resetTemperature = function() {
  this.temperature = 20;
};

Thermostat.prototype.colourify = function() {
  if(this.temperature < 18){
    return "Green";
  }
  else if(this.temperature <= 25){
    return "Yellow";
  }
  else{
    return "Red"
  }
};