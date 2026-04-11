window.addEventListener("load", () => {

  // Enable animations now that JS is ready
  document.body.classList.add("js-loaded");

  // Dark mode toggle
  const themeToggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") document.body.classList.add("dark");

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  // Mobile menu
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileClose = document.getElementById("mobileClose");

  function openMenu() {
    mobileMenu.classList.add("open");
    document.body.classList.add("menu-open");
  }

  function closeMenu() {
    mobileMenu.classList.remove("open");
    document.body.classList.remove("menu-open");
  }

  hamburger.addEventListener("click", openMenu);
  mobileClose.addEventListener("click", closeMenu);
  document.querySelectorAll(".mobile-menu a").forEach(l => {
    l.addEventListener("click", closeMenu);
  });
  mobileMenu.addEventListener("click", (e) => {
    if (e.target === mobileMenu) closeMenu();
  });

  // Scroll reveal
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.05, rootMargin: "0px" });
  reveals.forEach(r => observer.observe(r));

  // Immediately show elements already in viewport
  setTimeout(() => {
    reveals.forEach(r => {
      const rect = r.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        r.classList.add("visible");
      }
    });
  }, 100);

  // Nav active state on scroll
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(s => {
      if (pageYOffset >= s.offsetTop - 130) current = s.id;
    });
    navLinks.forEach(a => {
      a.style.color = a.getAttribute("href") === "#" + current ? "var(--fg)" : "";
    });
  });

});