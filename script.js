// Data
const players = [
  {
    name: "Rija",
    role: "EXP Laner",
    hero: "Yu Zhong",
    winrate: 78.3,
    color: "#FF003C",
  },
  {
    name: "Ican",
    role: "Jungler",
    hero: "Soyou",
    winrate: 82.1,
    color: "#00F5FF",
  },
  {
    name: "Rama",
    role: "Mid Laner",
    hero: "Pharsa",
    winrate: 76.8,
    color: "#FF003C",
  },
  {
    name: "Kevin",
    role: "Gold Laner",
    hero: "Granger",
    winrate: 79.5,
    color: "#00F5FF",
  },
  {
    name: "Lutfi",
    role: "Roamer",
    hero: "Grock",
    winrate: 81.2,
    color: "#FF003C",
  },
  {
    name: "Rio",
    role: "Exp Laner",
    hero: "Ruby",
    winrate: 81.2,
    color: "#FF003C",
  },
];

const achievements = [
  { year: "2026", title: "First Tournament Win", icon: "trophy" },
  { year: "2026", title: "MSC Wildcard Champion", icon: "medal" },
  { year: "2026", title: "WINNER MPL ID S19", icon: "star" },
  { year: "2027", title: "WINNER M8", icon: "medal" },
  { year: "2028", title: "WINNER M9", icon: "flag" },
];

const mediaItems = [
  {
    type: "highlight",
    title: "Insane Teamwipe vs ONIC",
    duration: "0:47",
    views: "125K",
  },
  {
    type: "highlight",
    title: "GLITCH 1v5 Pentakill",
    duration: "1:02",
    views: "89K",
  },
  {
    type: "meme",
    title: "When the Error is Real",
    duration: "0:15",
    views: "45K",
  },
  {
    type: "highlight",
    title: "MSC Best Plays Compilation",
    duration: "3:24",
    views: "203K",
  },
  {
    type: "vlog",
    title: "Behind The Scenes MPL",
    duration: "5:12",
    views: "67K",
  },
  {
    type: "highlight",
    title: "Draft Analysis S12 Finals",
    duration: "12:45",
    views: "34K",
  },
];

// Initialize all sections
function init() {
  renderPlayers();
  renderAchievements();
  renderMedia();
  initScrollReveal();
  initCounters();
  initParticles();
  initMobileMenu();
  startCountdown();
}

// Render Player Cards
function renderPlayers() {
  const grid = document.getElementById("playerGrid");
  if (!grid) return;

  grid.innerHTML = players
    .map(
      (player, i) => `
        <div class="player-card reveal delay-${
          i + 1
        } bg-[#141414] rounded-lg overflow-hidden border border-[#2A2A2A]">
          <div class="relative h-40 bg-gradient-to-br from-[#1C1C1C] to-[#0D0D0D] flex items-center justify-center">
            <div class="w-20 h-20 rounded-full bg-[#1C1C1C] flex items-center justify-center border-2" style="border-color: ${
              player.color
            }">
              <span class="font-display font-black text-2xl" style="color: ${
                player.color
              }">${player.name.charAt(0)}</span>
            </div>
            <div class="absolute top-2 right-2 px-2 py-1 bg-[#0D0D0D] rounded text-xs font-display" style="color: ${
              player.color
            }">${player.role}</div>
          </div>
          <div class="p-4">
            <h3 class="font-display font-bold text-lg">${player.name}</h3>
            <div class="flex items-center gap-2 mt-2 text-sm text-gray-400">
              <span>Signature:</span>
              <span class="text-white">${player.hero}</span>
            </div>
            <div class="mt-3">
              <div class="flex justify-between text-xs mb-1">
                <span class="text-gray-500">Win Rate</span>
                <span class="font-display" style="color: ${player.color}">${
        player.winrate
      }%</span>
              </div>
              <div class="h-1 bg-[#0D0D0D] rounded overflow-hidden">
                <div class="stat-bar h-full rounded" style="width: ${
                  player.winrate
                }%; background: ${player.color}"></div>
              </div>
            </div>
          </div>
        </div>
      `
    )
    .join("");
}

// Render Achievements
function renderAchievements() {
  const timeline = document.getElementById("achievementTimeline");
  if (!timeline) return;

  const icons = {
    trophy:
      '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>',
    medal:
      '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>',
    star: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>',
    flag: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"/></svg>',
  };

  timeline.innerHTML = achievements
    .map(
      (a, i) => `
        <div class="reveal delay-${
          i + 1
        } flex-shrink-0 w-48 snap-start bg-[#1C1C1C] p-4 rounded-lg border border-[#2A2A2A] hover:border-[#FF003C] transition-colors">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-[#00F5FF]">${icons[a.icon]}</span>
            <span class="text-[#FF003C] font-display text-sm">${a.year}</span>
          </div>
          <h4 class="font-display font-bold text-sm">${a.title}</h4>
        </div>
      `
    )
    .join("");
}

// Render Media
function renderMedia() {
  const grid = document.getElementById("mediaGrid");
  if (!grid) return;

  const typeColors = {
    highlight: "#FF003C",
    meme: "#00F5FF",
    vlog: "#FFD700",
  };

  grid.innerHTML = mediaItems
    .map(
      (item, i) => `
        <div class="reveal delay-${
          (i % 3) + 1
        } video-card relative rounded-lg overflow-hidden cursor-pointer group">
          <div class="aspect-video bg-gradient-to-br from-[#1C1C1C] to-[#0D0D0D] flex items-center justify-center">
            <svg class="w-12 h-12 text-gray-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
          <div class="video-overlay absolute inset-0 bg-black/60 opacity-0 flex items-center justify-center transition-opacity">
            <div class="w-16 h-16 bg-[#FF003C] rounded-full flex items-center justify-center">
              <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
          <div class="absolute top-2 left-2 px-2 py-1 rounded text-xs font-display uppercase" style="background: ${
            typeColors[item.type] || "#FF003C"
          }">${item.type}</div>
          <div class="absolute top-2 right-2 px-2 py-1 bg-black/70 rounded text-xs">${
            item.duration
          }</div>
          <div class="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
            <h4 class="font-medium text-sm truncate">${item.title}</h4>
            <p class="text-xs text-gray-400 mt-1">${item.views} views</p>
          </div>
        </div>
      `
    )
    .join("");
}

// Scroll Reveal
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

// Counter Animation
function initCounters() {
  const counters = document.querySelectorAll(".counter");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.dataset.target);
          if (!target) return;

          let current = 0;
          const increment = target / 60;
          const duration = 2000;
          const stepTime = duration / 60;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              counter.textContent = target;
              clearInterval(timer);
            } else {
              counter.textContent = Math.floor(current);
            }
          }, stepTime);

          observer.unobserve(counter);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

// Particles
function initParticles() {
  const container = document.getElementById("particles");
  if (!container) return;

  const particleCount = 30;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "absolute rounded-full";

    const size = Math.random() * 3 + 1;
    const color = Math.random() > 0.5 ? "#FF003C" : "#00F5FF";
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;

    particle.style.cssText = `
          width: ${size}px;
          height: ${size}px;
          background: ${color};
          left: ${x}%;
          top: ${y}%;
          opacity: ${Math.random() * 0.5 + 0.1};
          animation: float ${duration}s ease-in-out ${delay}s infinite;
          box-shadow: 0 0 ${size * 3}px ${color};
        `;

    container.appendChild(particle);
  }

  // Add float animation
  const style = document.createElement("style");
  style.textContent = `
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(${Math.random() * 30 - 15}px, ${
    Math.random() * 30 - 15
  }px); }
          50% { transform: translate(${Math.random() * 30 - 15}px, ${
    Math.random() * 30 - 15
  }px); }
          75% { transform: translate(${Math.random() * 30 - 15}px, ${
    Math.random() * 30 - 15
  }px); }
        }
      `;
  document.head.appendChild(style);
}

// Mobile Menu
function initMobileMenu() {
  const btn = document.getElementById("mobileMenuBtn");
  const menu = document.getElementById("mobileMenu");

  if (btn && menu) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.add("hidden");
      });
    });
  }
}

// Match Countdown
function startCountdown() {
  const countdownEl = document.getElementById("matchCountdown");
  if (!countdownEl) return;

  let hours = 2;
  let minutes = 14;
  let seconds = 33;

  setInterval(() => {
    seconds--;
    if (seconds < 0) {
      seconds = 59;
      minutes--;
      if (minutes < 0) {
        minutes = 59;
        hours--;
        if (hours < 0) {
          hours = 23;
        }
      }
    }
    countdownEl.textContent = `${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }, 1000);
}

// Form Submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const btn = this.querySelector('button[type="submit"]');
  const originalText = btn.textContent;
  btn.textContent = "SENDING...";
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = "MESSAGE SENT!";
    btn.style.background = "#00F5FF";
    btn.style.color = "#0D0D0D";

    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = "";
      btn.style.color = "";
      btn.disabled = false;
      this.reset();
    }, 2000);
  }, 1500);
});

// Initialize
document.addEventListener("DOMContentLoaded", init);
