// Apply saved theme immediately to prevent flash
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') document.body.classList.add('dark');

window.addEventListener('load', function() {


  // ── CV BUTTON: preview on mobile, download on desktop ──
  var isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  document.querySelectorAll('.cv-btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      if (isMobile) {
        window.open('files/Alvin_Njenga_CV.pdf', '_blank');
      } else {
        var a = document.createElement('a');
        a.href = 'files/Alvin_Njenga_CV.pdf';
        a.download = 'Alvin_Njenga_CV.pdf';
        a.click();
      }
    });
  });

  // ── DARK MODE TOGGLE ──
  var toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.addEventListener('click', function() {
      document.body.classList.toggle('dark');
      var isDark = document.body.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }

  // ── MOBILE MENU ──
  var hamburger = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobileMenu');
  var mobileClose = document.getElementById('mobileClose');

  function openMenu() {
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (hamburger) hamburger.addEventListener('click', openMenu);
  if (mobileClose) mobileClose.addEventListener('click', closeMenu);

  document.querySelectorAll('.mobile-menu a').forEach(function(l) {
    l.addEventListener('click', closeMenu);
  });

  // ── NAV ACTIVE STATE ──
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', function() {
    var current = '';
    sections.forEach(function(s) {
      if (window.pageYOffset >= s.offsetTop - 130) current = s.id;
    });
    navLinks.forEach(function(a) {
      a.style.color = a.getAttribute('href') === '#' + current ? 'var(--fg)' : '';
    });
  });

});