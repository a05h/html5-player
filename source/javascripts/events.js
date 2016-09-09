window.addEventListener('load', function() {
  video = document.getElementById('video');
  video.addEventListener('click', eventPlay, false);
  buttonPlay = document.getElementById('button-play');
  buttonPlay.addEventListener('click', eventPlay, false);
  buttonMute = document.getElementById('button-mute');
  buttonMute.addEventListener('click', eventMute, false);
  buttonFullscreen = document.getElementById('button-fullscreen');
  buttonFullscreen.addEventListener('click', eventFullscreen, false);
  progressbarContainer = document.getElementById('progressbar-container');
  progressbarContainer.addEventListener('click', setProgress, false);
  volumeContainer = document.getElementById('volume-container');
  volumeContainer.addEventListener('click', setVolume, false);
  progressbarElement = document.getElementById('progressbar-element');
  volumeElement = document.getElementById('volume-element');

  video.volume = (0.50);
  volumeElement.style.width = 50 + "%";
}, false);

function progressVideo() {
  var result = (video.currentTime / video.duration) * 100;
  progressbarElement.style.width = result + '%';
  if (video.paused) {
    buttonPlay.src = './source/images/button-play.png';
  } else {
    buttonPlay.src = './source/images/button-pause.png';
  }
};

function setProgress(clickArea) {
  var width = window.getComputedStyle(progressbarContainer).getPropertyValue('width');
  width = parseFloat(width.substr(null));
  video.currentTime = ((clickArea.pageX - progressbarContainer.offsetLeft) / width) * video.duration;
  window.clearInterval(checkProgress);
  progressVideo();
};

function setVolume(clickArea) {
  var width = window.getComputedStyle(volumeContainer).getPropertyValue('width');
  width = parseFloat(width.substr(null));
  video.volume = ((clickArea.pageX - volumeContainer.offsetLeft) / width);
  volumeElement.style.width = ((clickArea.pageX - volumeContainer.offsetLeft) / width) * 100 + "%";
};

function eventPlay() {
  var checkProgress = setInterval(progressVideo, 0);
  if (video.paused) {
    video.play();
    buttonPlay.src = './source/images/button-pause.png';
  } else {
    video.pause();
    buttonPlay.src = './source/images/button-play.png';
    window.clearInterval(checkProgress);
  }
};

function eventMute() {
  if (video.muted == false) {
    video.muted = true;
    buttonMute.src = './source/images/button-muteplus.png';
  } else {
    video.muted = false;
    buttonMute.src = './source/images/button-muteminus.png';
  }
};

function eventFullscreen() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen(); //all okay
  } else if (video.mozRequestFullscreen) {
    video.mozRequestFullscreen(); //not working in firefox
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen() //?
  }
};
