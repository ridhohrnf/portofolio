// --- THEME TOGGLE LOGIC ---
const themeToggleBtn = document.getElementById("theme-toggle");
const html = document.documentElement;

// Cek preferensi awal user (Local Storage atau System Settings)
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  html.classList.add("dark");
} else {
  html.classList.remove("dark");
}

themeToggleBtn.addEventListener("click", () => {
  html.classList.toggle("dark");
  if (html.classList.contains("dark")) {
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }
});

// --- TYPEWRITER EFFECT ---
const words = ["Data Engineer", "Analytics Engineer"];
let i = 0;

function typeWriter() {
  const heading = document.getElementById("typewriter");
  const currentWord = words[i % words.length];

  let isDeleting = false;
  let txt = "";
  let loop = 0;

  function tick() {
    let fullTxt = words[loop % words.length];

    if (isDeleting) {
      txt = fullTxt.substring(0, txt.length - 1);
    } else {
      txt = fullTxt.substring(0, txt.length + 1);
    }

    heading.innerHTML = txt;

    let delta = 150;

    if (isDeleting) {
      delta /= 2;
    }

    if (!isDeleting && txt === fullTxt) {
      delta = 2000;
      isDeleting = true;
    } else if (isDeleting && txt === "") {
      isDeleting = false;
      loop++;
      delta = 500;
    }

    setTimeout(tick, delta);
  }
  tick();
}

// --- SCROLL TO TOP ---
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    scrollBtn.classList.remove("opacity-0", "invisible", "translate-y-10");
  } else {
    scrollBtn.classList.add("opacity-0", "invisible", "translate-y-10");
  }
};

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Init Typewriter
document.addEventListener("DOMContentLoaded", () => {
  typeWriter();
});

function sendEmail(e) {
  e.preventDefault(); // Mencegah reload halaman

  const subject = document.getElementById("emailSubject").value;
  const body = document.getElementById("emailBody").value;
  const myEmail = "ridhohrnf@gmail.com";

  // Membuka email client bawaan user
  window.location.href = `mailto:${myEmail}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}
