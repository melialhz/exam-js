document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("video-element");
    const playButton = document.getElementById("video-play");
    const resetButton = document.getElementById("video-reset");
    const fullscreenButton = document.getElementById("video-fullscreen");
    const progress = document.getElementById("video-progress");

    playButton.addEventListener("click", () => {
        if (video.paused) {
            video.play();
            playButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
        } else {
            video.pause();
            playButton.innerHTML = '<i class="fa-solid fa-play"></i>';
        }
    });

    resetButton.addEventListener("click", () => {
        video.currentTime = 0;
        progress.value = 0;
    });

    fullscreenButton.addEventListener("click", () => {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        }
    });

    progress.addEventListener("click", (e) => {
        const rect = progress.getBoundingClientRect();
        const posX = e.clientX - rect.left;
        const percentage = posX / rect.width;
        const newTime = percentage * video.duration;
        video.currentTime = newTime;
    });

    video.addEventListener("timeupdate", () => {
        progress.value = (video.currentTime / video.duration) * 100;
    });
});
