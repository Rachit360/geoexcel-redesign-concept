// Reveal styles only apply once this module runs, so content never stays hidden if scripts fail.
document.documentElement.classList.add('js');

import { quote, type QuoteItem } from './quote-store';

/* ------------------------------------------------------------------ */
/* Products panel (desktop disclosure)                                 */
/* ------------------------------------------------------------------ */

const trigger = document.querySelector<HTMLButtonElement>('[data-panel-trigger]');
const panel = document.querySelector<HTMLElement>('[data-panel]');

function setPanel(open: boolean, focusTrigger = false) {
  if (!trigger || !panel) return;
  trigger.setAttribute('aria-expanded', String(open));
  panel.hidden = !open;
  if (!open && focusTrigger) trigger.focus();
}

trigger?.addEventListener('click', () => setPanel(trigger.getAttribute('aria-expanded') !== 'true'));

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && trigger?.getAttribute('aria-expanded') === 'true') setPanel(false, true);
});

document.addEventListener('click', (e) => {
  if (!panel || panel.hidden) return;
  const t = e.target as Node;
  if (!panel.contains(t) && !trigger?.contains(t)) setPanel(false);
});

panel?.addEventListener('focusout', (e) => {
  const next = e.relatedTarget as Node | null;
  if (next && !panel.contains(next) && !trigger?.contains(next)) setPanel(false);
});

/* ------------------------------------------------------------------ */
/* Mobile drawer (modal dialog with focus containment)                 */
/* ------------------------------------------------------------------ */

const drawer = document.querySelector<HTMLElement>('[data-drawer]');
const menuToggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const drawerClose = document.querySelector<HTMLButtonElement>('[data-drawer-close]');

const focusables = (root: HTMLElement) =>
  [...root.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input, select, textarea')].filter(
    (el) => !el.hasAttribute('hidden'),
  );

function openDrawer() {
  if (!drawer) return;
  drawer.hidden = false;
  document.body.style.overflow = 'hidden';
  menuToggle?.setAttribute('aria-expanded', 'true');
  drawerClose?.focus();
}

function closeDrawer() {
  if (!drawer || drawer.hidden) return;
  drawer.hidden = true;
  document.body.style.overflow = '';
  menuToggle?.setAttribute('aria-expanded', 'false');
  menuToggle?.focus();
}

menuToggle?.addEventListener('click', openDrawer);
drawerClose?.addEventListener('click', closeDrawer);
drawer?.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeDrawer();
  if (e.key !== 'Tab') return;
  const items = focusables(drawer);
  const first = items[0];
  const last = items[items.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
});
drawer?.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeDrawer));
window.matchMedia('(min-width: 1024px)').addEventListener('change', (m) => m.matches && closeDrawer());

/* ------------------------------------------------------------------ */
/* Toast                                                               */
/* ------------------------------------------------------------------ */

const toastEl = document.querySelector<HTMLElement>('[data-toast]');
let toastTimer: number | undefined;

export function toast(html: string) {
  if (!toastEl) return;
  toastEl.innerHTML = html;
  toastEl.classList.add('is-visible');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toastEl.classList.remove('is-visible'), 3600);
}

/* ------------------------------------------------------------------ */
/* Quote list: header count + add/remove buttons                       */
/* ------------------------------------------------------------------ */

const base = (import.meta.env.BASE_URL as string).replace(/\/$/, '');

function renderCount(items: QuoteItem[]) {
  document.querySelectorAll<HTMLElement>('[data-quote-count]').forEach((el) => {
    el.textContent = String(items.length);
    el.hidden = items.length === 0;
    el.setAttribute('aria-label', `${items.length} ${items.length === 1 ? 'product' : 'products'} in quote list`);
  });
}

function renderButtons() {
  document.querySelectorAll<HTMLButtonElement>('[data-quote-add]').forEach((btn) => {
    const added = quote.has(btn.dataset.id!);
    btn.setAttribute('aria-pressed', String(added));
    const label = btn.querySelector('[data-quote-label]');
    if (label) label.textContent = added ? 'In quote list' : 'Add to quote list';
  });
}

document.addEventListener('click', (e) => {
  const btn = (e.target as HTMLElement).closest<HTMLButtonElement>('[data-quote-add]');
  if (!btn) return;
  const d = btn.dataset;
  if (quote.has(d.id!)) {
    quote.remove(d.id!);
    toast(`Removed <strong>${d.name}</strong> from your quote list.`);
  } else {
    quote.add({ id: d.id!, name: d.name!, categoryName: d.categoryName!, number: d.number!, href: d.href! });
    toast(`Added <strong>${d.name}</strong>. <a href="${base}/enquiry/">Review quote list</a>`);
  }
});

quote.onChange((items) => {
  renderCount(items);
  renderButtons();
});
renderCount(quote.all());
renderButtons();

/* ------------------------------------------------------------------ */
/* Reveal on scroll (progressive enhancement)                          */
/* ------------------------------------------------------------------ */

const reveals = document.querySelectorAll<HTMLElement>('[data-reveal]');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px' },
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add('is-visible'));
}
