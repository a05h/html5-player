/*window.addEventListener('load', function() {
  videoArea = document.getElementById('video-element');
  videoArea.addEventListener('click', play, false);
  buttonPlay = document.getElementById('button-play');
  buttonPlay.addEventListener('click', play, false);
  buttonVolume = document.getElementById('button-volume');
  buttonVolume.addEventListener('click', mute, false);
  buttonFullscreen = document.getElementById('button-fullscreen');
  buttonFullscreen.addEventListener('click', fullscreen, false);

  progressbarContainer = document.getElementById('progressbar-container');
  progressbarContainer.addEventListener('click', setProgress, false);
  progressbarDone = document.getElementById('progressbar-done');
}, false);

function play() {
  var checkProgress = setInterval(progressVideo, 30);
  if (videoArea.paused) {
    videoArea.play();
    buttonPlay.src = "./source/images/button-volume.png"
  } else {
    window.clearInterval(checkProgress);
    videoArea.pause();
    buttonPlay.src = "./source/images/button-play.png"
  }
};

function mute() {
};

function fullscreen() {
};

function progressVideo() {
  var result = (videoArea.currentTime / videoArea.duration) * 100;
  progressbarDone.style.width = result + '%';
  window.clearInterval(checkProgress);
  if (videoArea.ended || videoArea.paused) {
    buttonPlay.src = "./source/images/button-play.png"
  }
};

function setProgress(clickArea) {
  var width = window.getComputedStyle(progressbarDone).getPropertyValue('width');
  width = parseFloat(width.substr(0, width.length - 1));
  videoArea.currentTime = ((clickArea.pageX - progressbarDone.offsetLeft) / width) * videoArea.duration;
  videoArea.play();
  window.clearInterval(checkProgress);
  progressVideo();
};*/



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
