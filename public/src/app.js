function startMeUp() {
  therm = new Thermostat();
  controlColour();
  document.getElementById("temperature").innerHTML = therm.temperature;
  therm.isPowerSaving = true;
}

  function togglePowerSave(){
    var toggle = document.getElementById("onoff");
    if (toggle.checked){
      therm.isPowerSaving = true;

  } else {
      therm.isPowerSaving = false;
     }
  }

  function controlColour() {
    var changecol = document.getElementById("temperature");
      if (therm.temperature <= 18){
        changecol.style.color = "green";
      }
      else if (therm.temperature <= 25) {
        changecol.style.color = "yellow";
      } else {
        changecol.style.color = "red";
      }
    }
  function UpButton(){
    controlColour();
    togglePowerSave();
    therm.increase();
    document.getElementById("temperature").innerHTML = therm.temperature;
  }

  function DownButton(){
    controlColour();
    therm.decrease();
    document.getElementById("temperature").innerHTML = therm.temperature;
  }

  function resetButton(){
    therm.resetTemperature();;
    controlColour();
    document.getElementById("temperature").innerHTML = therm.temperature;
  }
