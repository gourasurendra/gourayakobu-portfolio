window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}

gtag("js", new Date());
gtag("config", "G-V1RT2PZNVN");

// 1. Scroll Reveal Observer
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.15 });

reveals.forEach((el) => observer.observe(el));

// 2. Navigation Scroll Behavior (Hide on Scroll Down, Show on Scroll Up)
const nav = document.querySelector(".nav");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 120) {
    nav.classList.add("hide");
  } else {
    nav.classList.remove("hide");
  }

  if (currentScrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }

  lastScrollY = currentScrollY;
});

// 3. Dynamic Section Active Link State
const sections = document.querySelectorAll("section, .hero");
const menuLinks = document.querySelectorAll(".menu a");

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");
      if (!id) return;

      menuLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
      });
    }
  });
}, { threshold: 0.5 });

sections.forEach((section) => sectionObserver.observe(section));

// 4. Smooth Scrolling with Nav Height Offset
const navHeight = nav ? nav.offsetHeight + 20 : 80;
document.querySelectorAll(".menu a, .talk-btn").forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (!href || !href.startsWith("#")) return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    const y = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
    window.scrollTo({ top: y, behavior: "smooth" });
  });
});

// 5. Parallax Hero Image Effect
const parallaxImg = document.querySelector(".parallax-img");
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  if (parallaxImg) {
    parallaxImg.style.transform = `translateY(${scrolled * 0.15}px)`;
  }
});

// 6. Back To Top Button
const backToTopBtn = document.querySelector(".back-to-top");
if (backToTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 400) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// 7. Interactive Cursor Glow (Interactive Backdrops)
const cursorGlow = document.querySelector(".cursor-glow");
window.addEventListener("mousemove", (e) => {
  if (!cursorGlow) return;
  cursorGlow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// 8. Magnetic Button Hover Interaction
const magneticElements = document.querySelectorAll(".btn, .talk-btn");
magneticElements.forEach((el) => {
  el.classList.add("magnetic");

  el.addEventListener("mousemove", (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  });

  el.addEventListener("mouseleave", () => {
    el.style.transform = "translate(0, 0)";
  });
});

// 9. Fine Interactive Mouse Trail Particle Effect
let lastTrailTime = 0;
window.addEventListener("mousemove", (e) => {
  const now = Date.now();
  if (now - lastTrailTime < 30) return;
  lastTrailTime = now;

  const particle = document.createElement("div");
  particle.className = "trail-particle";
  particle.style.left = `${e.clientX}px`;
  particle.style.top = `${e.clientY}px`;
  document.body.appendChild(particle);

  setTimeout(() => particle.remove(), 800);
});

// 10. Auto-typing Headline Subtitles Effect
const roles = [
  "Frontend Developer",
  "Security Engineer",
  "Web Designer",
  "Enthusiasm In Kali Linux Tools"
];
const typedText = document.getElementById("typed-text");
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const current = roles[roleIndex];

  if (!isDeleting) {
    typedText.textContent = current.slice(0, charIndex++);
    if (charIndex > current.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }
  } else {
    typedText.textContent = current.slice(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 60 : 100);
}

if (typedText) {
  typeEffect();
}

// 11. Certificates & Project Modals Controller
const modal = document.getElementById("certModal");
const openCertificatesBtn = document.getElementById("open-certificates");
const closeBtn = document.querySelector(".close-modal");

const projectModal = document.getElementById("projectModal");
const openProjectsBtn = document.getElementById("open-projects");
const closeProjectBtn = document.querySelector(".close-project-modal");

// Certificate Modal States
function openModal() {
  if (modal) modal.classList.add("show");
}

function closeModal() {
  if (modal) modal.classList.remove("show");
}

// Project Modal States
function openProjectModal() {
  if (projectModal) projectModal.classList.add("add"); // or .classList.add("show") depending on your styling
  if (projectModal) projectModal.classList.add("show");
}

// Keep it simple and match your original .show implementation:
function openProjectModal() {
  if (projectModal) projectModal.classList.add("show");
}

function closeProjectModal() {
  if (projectModal) projectModal.classList.remove("show");
}

// Certificate Event Listeners
if (openCertificatesBtn) {
  openCertificatesBtn.addEventListener("click", openModal);
}

if (closeBtn) {
  closeBtn.addEventListener("click", closeModal);
}

if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
}

// Project Event Listeners
if (openProjectsBtn) {
  openProjectsBtn.addEventListener("click", openProjectModal);
}

if (closeProjectBtn) {
  closeProjectBtn.addEventListener("click", closeProjectModal);
}

if (projectModal) {
  projectModal.addEventListener("click", (e) => {
    if (e.target === projectModal) {
      closeProjectModal();
    }
  });
}
