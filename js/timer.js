document.addEventListener("DOMContentLoaded", () => {
    const timer = document.getElementById("timer");

    const updateTimer = () => {
        let seconds = parseInt(localStorage.getItem("seconds")) || 0;
        let mins = Math.floor(seconds / 60);
        let secs = seconds % 60;
        timer.textContent = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    };

    updateTimer();

    setInterval(() => {
        let seconds = parseInt(localStorage.getItem("seconds")) || 0;
        seconds++;
        localStorage.setItem("seconds", seconds);
        updateTimer();
    }, 1000);
});
