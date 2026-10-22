let playBtn = document.getElementById("playBtn");
let pauseBtn = document.getElementById("pauseBtn");
let stopBtn = document.getElementById("stopBtn");
let increaseVolume = document.getElementById("increaseVolume");
let decreaseVolume = document.getElementById ("decraseVolume");
let video = document.getElementById("video")
let statusText = document.getElementById("statusText");
let progressFill = document.getElementById("progressFill");
let progressContainer = document.getElementById("progressContainer");
let volumeMessage = document.getElementById("volumemessage");

playBtn.addEventListener("click", playVideo());
pauseBtn.addEventListener("click", pauseVideo());
stopBtn.addEventListener("click", stopVideo());

increaseVolume.addEventListener("click", volumeUp());
decreaseVolume.addEventListener("click", volumeDown());

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
});

video.addEventListener("timeupdate", () =>{
    const progress = (video.currentTime / video.duration) * 100;
    progressFill.style.width = progress + "%";
});

let volume = 1.0;
function volumeUp() {
	volume += 0.1;
	if(volume > 1.0){
	    volume = 1.0;
}
	player.volume = volume;
  	updateMessage();
}
function volumeDown() {
	volume -= 0.1;
	if(volume < 0.0){
	    volume = 0.0;
}
	player.volume = volume;
  	updateMessage();
}
function updateMessage() {
  volumeMessage.innerHTML = "time: " + player.currentTime;
  volumeMessage.innerHTML += "<br>";
  volumeMessage.innerHTML += "volume: " + player.volume;
}

