// Falling snow
(function () {
  const container = document.querySelector(".snow");
  const flakes = ["❄", "❅", "❆", "•"];
  const count = window.innerWidth < 600 ? 30 : 60;

  for (let i = 0; i < count; i++) {
    const flake = document.createElement("span");
    flake.className = "flake";
    flake.textContent = flakes[Math.floor(Math.random() * flakes.length)];
    flake.style.left = Math.random() * 100 + "vw";
    flake.style.fontSize = 0.5 + Math.random() * 1.2 + "rem";
    flake.style.opacity = 0.4 + Math.random() * 0.6;
    flake.style.animationDuration = 8 + Math.random() * 12 + "s";
    flake.style.animationDelay = -Math.random() * 20 + "s";
    flake.style.setProperty("--drift", (Math.random() * 80 - 40) + "px");
    container.appendChild(flake);
  }
})();

// Countdown to the event (Saturday 5th December 2026, 3pm UK time)
(function () {
  const el = document.getElementById("countdown");
  const start = new Date("2026-12-05T15:00:00Z");
  const end = new Date("2026-12-05T19:00:00Z");
  const now = new Date();

  if (now >= end) {
    el.textContent = "Thank you to everyone who joined us!";
    return;
  }
  if (now >= start) {
    el.textContent = "It's happening now – come and join us!";
    return;
  }

  const days = Math.ceil((start - now) / (1000 * 60 * 60 * 24));
  el.textContent = days === 1 ? "Just 1 day to go!" : `Just ${days} days to go!`;
})();
