window.addEventListener('load', function() {
  video = document.getElementById('video');
  video.addEventListener('click', eventPlay, false);
  buttonPlay = document.getElementById('button-play');
  buttonPlay.addEventListener('click', eventPlay, false);
  muteButton = document.getElementById('button-mute');
  muteButton.addEventListener('click', eventMute, false);
  buttonFullscreen = document.getElementById('button-fullscreen');
  buttonFullscreen.addEventListener('click', eventFullscreen, false);

  progressbarContainer = document.getElementById('progressbar-container');
  progressbarContainer.addEventListener('click', setProgress, false);
  volumeContainer = document.getElementById('volume-container');
  volumeContainer.addEventListener('click', setVolume, false);
  progressbar = document.getElementById('progressbar');
  volume = document.getElementById('volume');
  timeDone = document.getElementById('time-done');
}, false);

function eventPlay() {
  var checkProgress = setInterval(progressVideo, 0);
  if (video.paused) {
    video.play();
    buttonPlay.src = './source/images/button-volume.png';
  } else {
    video.pause();
    buttonPlay.src = './source/images/button-play.png';
    window.clearInterval(checkProgress);
  }
};

function eventMute() {
};

function eventFullscreen() {
};

function progressVideo() {
  var result = (video.currentTime / video.duration) * 100;
  progressbar.style.width = result + '%';
  if (video.ended || video.paused) {
    buttonPlay.src = './source/images/button-play.png';
  }
};

function setProgress(clickArea) {
  var width = window.getComputedStyle(progressbarContainer).getPropertyValue('width');
  width = parseFloat(width.substr(0, width.length - 1));
  video.currentTime = ((clickArea.pageX - progressbarContainer.offsetLeft) / width) * video.duration;
  window.clearInterval(checkProgress);
  progressVideo();
};
