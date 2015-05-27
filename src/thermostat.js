function Thermostat(){
  this.temperature = 20;
  this.isPowerSaving = true;

  }

Thermostat.prototype.increase = function() {
  if(this.isPowerSaving && this.temperature >= 26){
    return "Too high!";}
  else if(this.temperature >= 33){
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


Thermostat.prototype.reset_temperature = function() {
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
    return "Red";
  }
};