const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let noCount = 0;
const reasons = [
  "Because your smile can brighten an ordinary day. 🌷",
  "Because talking with you makes time feel lighter. 💗",
  "Because you are thoughtful in your own way. ✨",
  "Because every little memory deserves a smile. 🌸",
  "Because I wanted to tell you honestly how I feel. 💌"
];

yesBtn.addEventListener("click", () => {
  response.textContent = "That made me really happy. Thank you for your answer! 💖";
  yesBtn.textContent = "You made my day! 🌷";
});

noBtn.addEventListener("click", () => {
  noCount++;
  if (noCount >= 100) {
    response.textContent = "Thank you for giving this a moment. Your answer is completely yours. 💗";
    noBtn.disabled = true;
    noBtn.textContent = "Thank you";
    return;
  }
  const reason = reasons[(noCount - 1) % reasons.length];
  response.textContent = `A little reason (${noCount}/100): ${reason}`;
});

musicBtn.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicBtn.textContent = "♫ Pause music";
    } catch {
      musicBtn.textContent = "Add your music.mp3 file";
    }
  } else {
    music.pause();
    musicBtn.textContent = "♫ Play music";
  }
});
