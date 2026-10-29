/**
 * Quote list: the products a buyer wants prices for, kept in the browser
 * (localStorage) so the list survives moving between product pages.
 * Nothing is sent anywhere until the buyer chooses to send the enquiry.
 */

export type QuoteItem = {
  id: string; // "<category>/<product>"
  name: string;
  categoryName: string;
  number: string; // category number, e.g. "01"
  href: string;
};

const KEY = 'gx-quote-list-v1';
const EVENT = 'quote:change';
let memory: QuoteItem[] = [];

function read(): QuoteItem[] {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return memory;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((i) => i && typeof i.id === 'string') : memory;
  } catch {
    return memory;
  }
}

function write(items: QuoteItem[]) {
  memory = items;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(items));
  } catch {
    /* private mode or storage disabled: keep the in-memory copy */
  }
  window.dispatchEvent(new CustomEvent(EVENT, { detail: items }));
}

export const quote = {
  all: read,
  has: (id: string) => read().some((i) => i.id === id),
  add(item: QuoteItem) {
    const items = read();
    if (!items.some((i) => i.id === item.id)) write([...items, item]);
  },
  remove(id: string) {
    write(read().filter((i) => i.id !== id));
  },
  clear() {
    write([]);
  },
  onChange(fn: (items: QuoteItem[]) => void) {
    window.addEventListener(EVENT, (e) => fn((e as CustomEvent<QuoteItem[]>).detail));
    window.addEventListener('storage', (e) => {
      if (e.key === KEY) fn(read());
    });
  },
};
