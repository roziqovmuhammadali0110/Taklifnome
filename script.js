// To'y sanasi
const weddingDate = new Date("August 24, 2024 06:43:00").getTime();

// Countdown funksiyasi
function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days + " <span>kun</span>";
  document.getElementById("hours").innerHTML = hours + " <span>soat</span>";
  document.getElementById("minutes").innerHTML =
    minutes + " <span>daqiqalar</span>";
  document.getElementById("seconds").innerHTML =
    seconds + " <span>soniyalar</span>";

  if (distance < 0) {
    clearInterval(interval);
    document.querySelector(".countdown").innerHTML = "To'y boshlandi!";
  }
}

// Countdownni yangilash
const interval = setInterval(updateCountdown, 1000);

// Musiqa avtomatik qo'yilishi
window.addEventListener("load", () => {
  const audioPlayer = document.getElementById("audioPlayer");
  audioPlayer.play();
});

// Musiqa start/stop qilish funksiyasi
function togglePlayPause() {
  const audioPlayer = document.getElementById("audioPlayer");
  const playPauseBtn = document.getElementById("playPauseBtn");

  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseBtn.textContent = "Pause";
  } else {
    audioPlayer.pause();
    playPauseBtn.textContent = "Play";
  }
}
