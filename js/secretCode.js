document.addEventListener("DOMContentLoaded", () => {
    const secretCode = [
        "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", 
        "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", 
        "b", "a"
    ];
    let secretCodePosition = 0;

    document.addEventListener("keydown", (e) => {
        if (e.key === secretCode[secretCodePosition]) {
            secretCodePosition++;
            if (secretCodePosition === secretCode.length) {
                activateSecretCode();
                secretCodePosition = 0;
            }
        } else {
            secretCodePosition = 0;
        }
    });

    const activateSecretCode = () => {
        const video = document.getElementById("video-element");
        const progress = document.getElementById("video-progress");
        const articles = document.querySelectorAll("#content article");

        video.currentTime = 0;
        video.pause();
        progress.value = 0;

        articles.forEach(article => article.classList.remove("expanded"));

        localStorage.setItem("seconds", 0);
    }
});
