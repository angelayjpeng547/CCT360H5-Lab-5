let playBtn = document.getElementById("playBtn");
let pauseBtn = document.getElementById("pauseBtn");
let stopBtn = document.getElementById("stopBtn");
let video = document.getElementById("video")
let statusText = document.getElementById("statusText");
let progressFill = document.getElementById("progressFill");
let progressContainer = document.getElementById("progressContainer");

playBtn.addEventListener("click", playVideo());
pauseBtn.addEventListener("click", pauseVideo());
stopBtn.addEventListener("click", stopVideo());

function playVideo() {
  video.play();
}

function pauseVideo() {
  video.pause();
}

function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

playBtn.addEventListener("click", () =>{
    if (video.paused || video.ended){
        video.play();
    }else{
        video.pause();
    }
});

pauseBtn.addEventListener("click", () =>{
    video.pause();
}); 
stopBtn.addEventListener("click", () =>{
    video.pause();
    video.currentTime = 0;
    progressFill.style.width = "0%";
});

video.addEventListener("play", () => {
    statusText.innerText = "Videoscape is playing";
});

video.addEventListener("pause", () => {
    statusText.innerText = "Videoscape is not playing";
});

video.addEventListener("ended", () =>{
     statusText.innerText = "Videoscape has ended";
});

progressContainer.addEventListener("click", (e) =>{
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = video.duration;
    if (duration){
        video.currentTime = (clickX / width) * duration;
    }
})
