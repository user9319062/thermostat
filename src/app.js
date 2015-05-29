function startMeUp() {
  therm = new Thermostat();
  controlColour();
  document.getElementById("temperature").innerHTML = therm.temperature;
  therm.isPowerSaving = true;
}

  var toggle = document.getElementById("onoff")

  function togglePowerSave(){
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

  document.getElementById("temperature").innerHTML = therm.temperature;

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



