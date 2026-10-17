document.documentElement.classList.add('js');
 
document.addEventListener('DOMContentLoaded', function () {
  var sections = document.querySelectorAll('section');
 
  // Older browsers: show everything, no animation.
  if (!('IntersectionObserver' in window)) {
    sections.forEach(function (s) { s.classList.add('visible'); });
    return;
  }
 
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
 
  sections.forEach(function (s) { observer.observe(s); });
});
 
