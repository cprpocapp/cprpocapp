document.addEventListener("DOMContentLoaded", function () {
    const startBtn = document.getElementById("startBtn");
    const timerText = document.getElementById("timerText");
    const historyList = document.getElementById("historyList");

    let timerRunning = false;
    let countdown;

    startBtn.addEventListener("click", function () {
        if (!timerRunning) {
            timerRunning = true;
            let timeLeft = 60;
            timerText.innerText = `Time Left: ${timeLeft}s`;

            countdown = setInterval(() => {
                timeLeft--;
                timerText.innerText = `Time Left: ${timeLeft}s`;

                if (timeLeft <= 0) {
                    clearInterval(countdown);
                    timerRunning = false;

                    const userName = prompt("Enter your name:");
                    if (userName) {
                        const percentage = Math.floor(Math.random() * 100) + 1;
                        addToHistory(userName, percentage);
                    }
                }
            }, 1000);
        }
    });

    function addToHistory(name, percentage) {
        const listItem = document.createElement("li");
        listItem.innerText = `Name: ${name}, Score: ${percentage}%`;
        historyList.appendChild(listItem);
    }
});
