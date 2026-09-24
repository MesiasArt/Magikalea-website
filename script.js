// Magikalea landing page — small interaction layer.
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({behavior:'smooth'}); }
  });
});

// Subtle parallax on the hero artwork.
const heroArt = document.querySelector('.hero-art');
window.addEventListener('scroll', () => {
  if (!heroArt) return;
  const y = Math.min(window.scrollY * .12, 80);
  heroArt.style.transform = `translateY(${y}px) scale(1.03)`;
}, {passive:true});
