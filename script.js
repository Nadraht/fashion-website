document.addEventListener("DOMContentLoaded", function () {
  // Contact form validation
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("number").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      const phonePattern = /^(\+?[0-9]{7,15})$/;
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name || !phone || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }

      if (!phonePattern.test(phone)) {
        alert("Please enter a valid phone number (at least 7 digits, can start with +).");
        return;
      }

      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      alert("Message sent successfully!");
      contactForm.reset();
    });
  }

  // Back to Top button
  const backToTopBtn = document.getElementById("backToTopBtn");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Set event date and time (YYYY-MM-DDTHH:MM:SS)
  const eventDate = new Date("2025-08-02T14:00:00").getTime();

  const timer = document.getElementById("timer");

  const countdown = setInterval(function () {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
      clearInterval(countdown);
      timer.textContent = "🎉 The event is happening now!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timer.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
});

document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq");

  faqItems.forEach(item => {
    const question = item.querySelector(".question");

    question.addEventListener("click", () => {
      item.classList.toggle("open");
    });
  });
});

// Lightbox preview
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".product-view-image img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close-btn");

  images.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "block";
      lightboxImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  // Optional: click outside image to close
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const products = document.querySelectorAll(".product-space");

  products.forEach(product => {
    const defaultImg = product.querySelector(".default-img");
    const hoverImg = product.querySelector(".hover-img");
    });
});


document.addEventListener("scroll", () => {
  document.querySelectorAll(".review").forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});
