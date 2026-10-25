let playBtn = document.getElementById("playBtn");
let pauseBtn = document.getElementById("pauseBtn");
let stopBtn = document.getElementById("stopBtn");
let video = document.getElementById("video")
let statusText = document.getElementById("statusText");
let progressFill = document.getElementById("progressFill");
let progressContainer = document.getElementById("progressContainer");
let volumeUp = document.getElementById("volumeUp");
let volumeDown = document.getElementById("volumeDown");
let volumeMessage = document.getElementById("volumeMessage")


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
    statusText.innerText = "Visualscape is playing";
});

video.addEventListener("pause", () => {
    statusText.innerText = "Visualscape is not playing";
});

video.addEventListener("ended", () =>{
     statusText.innerText = "Visualscape has ended";
});

progressContainer.addEventListener("click", (e) =>{
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = video.duration;
    if (duration){
        video.currentTime = (clickX / width) * duration;
    }
});

video.addEventListener("timeupdate", () =>{
    const progress = (video.currentTime / video.duration) * 100;
    progressFill.style.width = progress + "%";
});

let volume = 1.0;
volumeUp.addEventListener("click", () =>{
    volume = Math.min(1.0, Math.round ((volume + 0.1) * 10) / 10);
    if (volume > 1.0){
        volume = 1.0;
    }
    video.volume = volume;
    volumeMessage.innerText = "Volume: " + video.volume;
});

volumeDown.addEventListener("click", () =>{
    volume = Math.max(0.0, Math.round ((volume - 0.1) * 10) / 10);
    if (volume < 0.0){
        volume = 0.0;
    }
    video.volume = volume;
    volumeMessage.innerText = "Volume: " + video.volume;
});