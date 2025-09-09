
// AOS init (scroll reveal)
AOS.init({ once: true, duration: 700, offset: 80 });

// Active nav link highlight using IntersectionObserver
const sections = document.querySelectorAll('[data-section]');
const navLinks = document.querySelectorAll('.nav-link');

const byId = id => document.querySelector(`.nav a[href="#${id}"]`);

const obs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    const link = byId(id);
    if (!link) return;
    if (entry.isIntersecting) {
      navLinks.forEach(a => a.classList.remove('active'));
      link.classList.add('active');
      history.replaceState(null, "", `#${id}`);
    }
  });
}, { root: null, rootMargin: "0px 0px -70% 0px", threshold: 0.1 });

sections.forEach(sec => obs.observe(sec));

// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll for sidebar links (improves native behavior cross-browser)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    const id = this.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
