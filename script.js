let playBtn = document.getElementById("playBtn");
let pauseBtn = document.getElementById("pauseBtn");
let stopBtn = document.getElementById("stopBtn");
let video = document.getElementById("video")
let statusText = document.getElementById("statusText");
let progressFill = document.getElementById("progressFill");
let progressContainer = document.getElementById("progressContainer");
let playIcon = document.getElementById("playIcon");

/* playBtn.addEventListener("click", playAudio);
pauseBtn.addEventListener("click", pauseAudio);
stopBtn.addEventListener("click", stopAudio);

function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

function stopAudio() {
  audio.currentTime = 0;
  audio.pause();
}


playBtn.addEventListener("click", () => {
    if (audio.paused){
        audio.play().catch(error => {
            console.error ("Audio is not working");
        })
    }else{
        audio.pause();
    }
})

audio.addEventListener("timeupdate", () =>{
    const progress = (audio.currentTime / audio.duration) * 100;
    progressFill.style.width = `${progress}%`;
});
*/

playBtn.addEventListener("click", playVideo);
pauseBtn.addEventListener("click", pauseVideo);
stopBtn.addEventListener("click", stopVideo);

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
        video.play().catch(error => {
            console.error ("Video is not working:", error);
        });
    }else{
        video.pause();
    }
});

pauseBtn.addEventListener("click", () =>{
    video.pause();
}); 
stop.Btn.addEventListener("click", () =>{
    video.pause();
    video.currentTime = 0;
});

player.addEventListener("play", () => {
    statusText.innerText = "Visualscape is playing";
});

player.addEventListener("pause", () => {
    statusText.innerText = "Visualscape is not playing";
});

player.addEventListener("ended", () =>{
     statusText.innerText = "Visualscape has ended";
});

progressContainer.addEventListener("click", (e) =>{
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    if (duration){
        video.currentTime = (clickX / width) * duration;
    }
})
