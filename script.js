const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("open");
});

const themeToggle = document.getElementById("themeToggle");

// Charger le thème sauvegardé
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});

// ===== ANIMATION AU SCROLL =====
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    reveals.forEach((reveal) => {
        const revealTop = reveal.getBoundingClientRect().top;

        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ===== TYPING EFFECT =====
const typingText = document.getElementById("typing");

const words = [
    "Youssoupha SANE",
    "Développeur Web",
    "Full Stack Developer",
    "Créateur d'applications"
];

let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typingText.textContent = currentWord.substring(0, letterIndex++);
        if (letterIndex > currentWord.length) {
            setTimeout(() => isDeleting = true, 1500);
        }
    } else {
        typingText.textContent = currentWord.substring(0, letterIndex--);
        if (letterIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 80 : 120);
}

typeEffect();
