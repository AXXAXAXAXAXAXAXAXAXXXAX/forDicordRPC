function showVideo() {
    var buttonContainer = document.getElementById("button-container");
    var videoContainer = document.getElementById("video-container");

    buttonContainer.style.display = "none";
    videoContainer.style.display = "block";

    var video = document.getElementById("video");
    video.play();
}

var playButton = document.getElementById("play-button");
playButton.addEventListener("click", showVideo);

video.controls = false;
