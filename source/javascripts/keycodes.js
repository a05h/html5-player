window.addEventListener("keydown", function(kbClick) {
  switch (kbClick.keyCode) {
    case 32: //space = stop/play
      eventPlay();
      break;
    case 8: //backspace = mute/unmute
      eventMute();
      break;
    case 37: //arrow left = video progress -10sec
      video.currentTime -= 10;
      break;
    case 39: //arrow right = video progress +10sec
      video.currentTime += 10;
      break;
    case 38: //arrow up = sound +10%
      video.muted = false;
      volumeElement.style.backgroundColor = "#0094FF";
      buttonMute.style.backgroundColor = "#BBBBBB";
      if (video.volume > 0.9) {
        video.volume = 1;
        volumeElement.style.width = "100%";
      } else {
        video.volume += 0.1;
        volumeElement.style.width = parseInt(volumeElement.style.width) + 10 + "%";
      }
      break;
    case 40: //arrow down = sound -10%
      video.muted = false;
      volumeElement.style.backgroundColor = "#0094FF";
      buttonMute.style.backgroundColor = "#BBBBBB";
      if (video.volume < 0.1) {
        video.volume = 0;
        buttonMute.style.backgroundColor = "#0094FF";
        volumeElement.style.width = "0%";
      } else {
        video.volume -= 0.1;
        volumeElement.style.width = parseInt(volumeElement.style.width) - 10 + "%";
      }
      break;
    case 70: //F = fullscreen
      eventFullscreen();
      break;
    default:
      break;
  }
}, false);
