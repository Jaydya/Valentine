// 1️⃣ Names (nicknames rotate)
const names = [
  "Ananya ❤️",
  "Cutie 😏",
  "Miss Trouble 😈",
  "My Favorite Human 🫶"
];

let nameIndex = 0;

// 2️⃣ No-button texts
const noTexts = [
  "No 🙃",
  "No way 😏",
  "Not at all 😤",
  "Still no? 😳",
  "You are testing me 😑"
];

let noIndex = 0;

// Elements
const question = document.getElementById("question");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const celebration = document.getElementById("celebration");
const finalText = document.getElementById("finalText");

// Initial question
question.innerText = `Hey ${names[nameIndex]}, will you be my Valentine? 😏`;

// Rotate name every 2 seconds
setInterval(() => {
  nameIndex = (nameIndex + 1) % names.length;
  question.innerText = `Hey ${names[nameIndex]}, will you be my Valentine? 😏`;
}, 2000);

// NO button runs away + text change
const moveNoButton = () => {
  const x = Math.random() * 250 - 125;
  const y = Math.random() * 120 - 60;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
  noBtn.innerText = noTexts[noIndex];
  noIndex = (noIndex + 1) % noTexts.length;
};

// Desktop
noBtn.addEventListener("mouseover", moveNoButton);

// Mobile
noBtn.addEventListener("touchstart", moveNoButton);

// YES button celebration
yesBtn.addEventListener("click", () => {
  question.style.display = "none";
  document.querySelector(".buttons").style.display = "none";

  celebration.classList.remove("hidden");
  finalText.innerText =
    "YAYYY 🎉 You just made my day, my month, and probably my year ❤️";

  // 🎆 Confetti burst (mobile-friendly)
  confetti({
    particleCount: 120,
    spread: 90,
    origin: { y: 0.6 }
  });

  // Extra bursts (feels like crackers)
  setTimeout(() => {
    confetti({ particleCount: 80, spread: 120, origin: { x: 0.2 } });
    confetti({ particleCount: 80, spread: 120, origin: { x: 0.8 } });
  }, 400);
});
