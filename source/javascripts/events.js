
window.addEventListener('load', function() {
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

/*function setProgress(clickArea) {
  var width = window.getComputedStyle(progressbarDone).getPropertyValue('width');
  width = parseFloat(width.substr(0, width.length - 1));
  videoArea.currentTime = ((clickArea.pageX - progressbarDone.offsetLeft) / width) * videoArea.duration;
  videoArea.play();
  window.clearInterval(checkProgress);
  progressVideo();
};*/
