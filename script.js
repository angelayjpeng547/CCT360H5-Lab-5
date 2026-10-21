let player = document.getElementById("player");
let playBtn = document.getElementById("playBtn");
let pauseBtn = document.getElementById("pauseBtn");
let stopBtn = document.getElementById("stopBtn");
let video = document.getElementById("video")
let statusText = document.getElementById("statusText");
let progressFill = document.getElementById("progressFill");
let progressContainer = document.getElementById("progressContainer");
let playIcon = document.getElementById("playIcon");

playBtn.addEventListener("click", playAudio);
pauseBtn.addEventListener("click", pauseAudio);
stopBtn.addEventListener("click", stopAudio);

function playAudio() {
  player.play();
}

function pauseAudio() {
  player.pause();
}

function stopAudio() {
  player.currentTime = 0;
  player.pause();
}


playBtn.addEventListener("click", playVideo);
pauseBtn.addEventListener("click", pauseVideo);
stopBtn.addEventListener("click", stopVideo);

function playVideo() {
  player.play();
}

function pauseVideo() {
  player.pause();
}

function stopVideo() {
  player.currentTime = 0;
  player.pause();
}

playBtn.addEventListener("click", () => {
    if (video.paused){
        video.play();
        statusText.innerText = "Soundscape is playing now";
    }else{
        video.pause();
        statusText = innerText = "Soundscape is currently not playing"
    }
})

audio.addEventListener("timeupdate", () =>{
    const progress = (audio.currentTime / audio.duration) * 100;
    progressFill.style.width = '${progress}%';
});

progressContainer.addEventListener("click", (e) =>{
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    if (duration){
        audio.currentTime = (clickX / width) * duration;
    }
})
