// FAQ Toggle
function toggleFaq(el) {
 var item = el.parentElement;
 var wasActive = item.classList.contains('active');
 document.querySelectorAll('.faq-item').forEach(function(i) { i.classList.remove('active'); });
 if (!wasActive) item.classList.add('active');
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
 var toggle = document.getElementById('mobile-toggle');
 if (toggle) {
  toggle.addEventListener('click', function() {
   var nav = document.querySelector('nav.main-nav');
   if (nav) {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    nav.style.position = 'absolute';
    nav.style.top = '100%';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.background = '#0B1D3A';
    nav.style.flexDirection = 'column';
    nav.style.padding = '16px';
    nav.style.gap = '8px';
    nav.style.boxShadow = '0 8px 24px rgba(0,0,0,0.3)';
   }
  });
 }

 // Smooth scroll
 document.querySelectorAll('a[href^="#"]').forEach(function(a) {
  a.addEventListener('click', function(e) {
   var t = document.querySelector(a.getAttribute('href'));
   if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
 });

 // Scroll animations
 var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) {
   if (e.isIntersecting) {
    e.target.style.opacity = '1';
    e.target.style.transform = 'translateY(0)';
   }
  });
 }, { threshold: 0.1 });

 document.querySelectorAll('.service-card,.location-card,.review-card,.step,.why-feature,.stat-box').forEach(function(el) {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
 });
});
