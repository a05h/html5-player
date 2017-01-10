document.addEventListener("DOMContentLoaded", init);

function init() {
  video = document.getElementById("video");
  video.addEventListener("click", eventPlay, false);
  buttonPlay = document.getElementById("button-play");
  buttonPlay.addEventListener("click", eventPlay, false);
  buttonMute = document.getElementById("button-mute");
  buttonMute.addEventListener("click", eventMute, false);
  buttonFullscreen = document.getElementById("button-fullscreen");
  buttonFullscreen.addEventListener("click", eventFullscreen, false);
  progressbarContainer = document.getElementById("progressbar-container");
  progressbarContainer.addEventListener("click", setProgress, false);
  volumeContainer = document.getElementById("volume-container");
  volumeContainer.addEventListener("click", setVolume, true);
  progressbarElement = document.getElementById("progressbar-element");
  volumeElement = document.getElementById("volume-element");
  timeDone = document.getElementById("time-done");
  muteIndicator = document.getElementById("mute-indicator");

  video.volume = (0.50);
  volumeElement.style.width = 50 + "%";
};

function timeVideo() {
  var m = parseInt(video.currentTime / 60 % 60);
  var s = parseInt(video.currentTime % 60);
  if (m < 10) {
    if (s >= 10) {
      timeDone.innerHTML = "0" + m + ":" + s;
    } else {
      timeDone.innerHTML = "0" + m + ":" + "0" + s;
    }
  } else {
    if (s >= 10) {
      timeDone.innerHTML = m + ":" + s;
    } else {
      timeDone.innerHTML = m + ":" + "0" + s;
    }
  }
};

function progressVideo() {
  var result = (video.currentTime / video.duration) * 100;
  progressbarElement.style.width = result + "%";
  if (video.paused) {
    buttonPlay.style.backgroundColor = "#C7C7C7";
  } else {
    buttonPlay.style.backgroundColor = "#0094FF";
  }
  timeVideo();
};

function setProgress(clickArea) {
  var width = window.getComputedStyle(progressbarContainer).getPropertyValue("width");
  width = parseFloat(width.substr(null));
  video.currentTime = ((clickArea.pageX - progressbarContainer.offsetLeft) / width) * video.duration;
  window.clearInterval(checkProgress);
};

function setVolume(clickArea) {
  var width = window.getComputedStyle(volumeContainer).getPropertyValue('width');
  width = parseFloat(width.substr(null));
  video.volume = ((clickArea.pageX - volumeContainer.offsetLeft) / width);
  volumeElement.style.width = ((clickArea.pageX - volumeContainer.offsetLeft) / width) * 100 + "%";
  video.muted = false;
  buttonMute.style.backgroundColor = "#C7C7C7";
  volumeElement.style.backgroundColor = "#0094FF";
  muteIndicator.style.opacity = "0";
};

function eventPlay() {
  var checkProgress = setInterval(progressVideo, 0);
  if (video.paused) {
    video.play();
    buttonPlay.style.backgroundColor = "#0094FF";
  } else {
    video.pause();
    buttonPlay.style.backgroundColor = "#C7C7C7";
    window.clearInterval(checkProgress);
  }
};

function eventMute() {
  if (video.muted == false) {
    video.muted = true;
    buttonMute.style.backgroundColor = "#0094FF";
    volumeElement.style.backgroundColor = "#C7C7C7";
    muteIndicator.style.opacity = "1";
  } else {
    video.muted = false;
    buttonMute.style.backgroundColor = "#C7C7C7";
    volumeElement.style.backgroundColor = "#0094FF";
    muteIndicator.style.opacity = "0";
  }
};

// https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API
function eventFullscreen() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
};
