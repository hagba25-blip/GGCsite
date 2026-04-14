window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
}

const reveals = document.querySelectorAll(".reveal");
function revealOnScroll() {
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) el.classList.add("active");
  });
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    productCards.forEach((card) => {
      const match = filter === "all" || card.dataset.category === filter;
      card.style.display = match ? "block" : "none";
    });
  });
});

// Slider témoignages automatique
const slides = document.querySelectorAll('.testimonial-card');
let currentSlide = 0;
if (slides.length) {
  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 4000);
}

document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;

    // Fermer toutes les autres réponses
    document.querySelectorAll(".faq-answer").forEach(a => {
      if (a !== answer) {
        a.classList.remove("active");
      }
    });

    // Basculer l’état de la réponse cliquée (ouvre/ferme)
    answer.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  function animateCounter(id, target, speed) {
    const el = document.getElementById(id);
    let count = 0;
    const step = Math.ceil(target / speed);
    const interval = setInterval(() => {
      count += step;
      if (count >= target) {
        count = target;
        clearInterval(interval);
      }
      el.textContent = count.toLocaleString();
    }, 120); // vitesse (ms)
  }

  animateCounter("satisfaits", 53519, 100);     // ✅ Clients satisfaits
  animateCounter("souscription", 384028, 200); // ✅ Clients en souscription
});

