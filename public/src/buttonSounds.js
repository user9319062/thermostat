var down = new Audio
  down.src ="./sounds/down.mp3"

var powersaving = new Audio
  powersaving.src ="./sounds/power_saving.mp3"

var up = new Audio
  up.src ="./sounds/up.mp3"

var reset = new Audio
  reset.src ="./sounds/reset.mp3"
  if (document.getElementById('onoff').checked){
                reset.play();
            }