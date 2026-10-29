// Reveal styles only apply once this script runs, so content is never hidden if JS fails.
document.documentElement.classList.add('js');

/* Mobile menu ---------------------------------------------------------- */

const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const menu = document.querySelector<HTMLElement>('[data-menu]');

function setMenu(open: boolean) {
  if (!toggle || !menu) return;
  toggle.setAttribute('aria-expanded', String(open));
  menu.toggleAttribute('data-open', open);
  document.body.style.overflow = open ? 'hidden' : '';
}

toggle?.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
menu?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    toggle.focus();
  }
});
window.matchMedia('(min-width: 900px)').addEventListener('change', (m) => m.matches && setMenu(false));

/* Reveal on scroll ----------------------------------------------------- */

const reveals = document.querySelectorAll<HTMLElement>('[data-reveal]');
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      }),
    { rootMargin: '0px 0px -10% 0px' },
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add('is-visible'));
}
