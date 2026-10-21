let player = document.getElementById("player");
let playBtn = document.getElementById("playBtn");
let pauseBtn = document.getElementById("pauseBtn");
let stopBtn = document.getElementById("stopBtn");
const audio = document.getElementById("audio")
const statusText = document.getElementById("statusText");
const progressFill = document.getElementById("progressFill");
const progressContainer = document.getElementById("progressContainer");

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
    if (audio.paused){
        audio.play();
        statusText.innerText = "Soundscape is playing now";
    }else{
        audio.pause();
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
