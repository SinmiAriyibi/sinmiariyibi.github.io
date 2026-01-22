function formatTime(date, timeZone) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone
  }).format(date);
}

function setTime() {
  // Atlanta uses Eastern Time
  const tz = "America/New_York";
  const now = new Date();
  const el = document.getElementById("localTime");
  if (el) el.textContent = formatTime(now, tz);
}

function setYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());
}

function initTheme() {
  const btn = document.getElementById("themeToggle");

  // load saved theme if it exists
  const saved = localStorage.getItem("theme");
  if (saved) document.documentElement.setAttribute("data-theme", saved);

  btn?.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
}

setYear();
initTheme();
setTime();

// update time every 30 seconds
setInterval(setTime, 30_000);
