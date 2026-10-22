import { useEffect, useState } from "react";

const LINKS = [
  { href: "#story", label: "Our story" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#order", label: "Order" },
  { href: "#visit", label: "Visit us" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ivory/90 backdrop-blur shadow-[0_1px_0_0_rgba(43,33,48,0.08)]" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-xl text-bloom-600 tracking-tight">
          Bloom House
        </a>
        <ul className="hidden md:flex items-center gap-8 font-body text-sm text-plum-700">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-bloom-600 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#order"
          className="hidden md:inline-flex items-center rounded-full bg-bloom-500 text-ivory px-5 py-2 text-sm font-semibold hover:bg-bloom-600 transition-colors"
        >
          Order now
        </a>
        <button
          className="md:hidden text-plum-900"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>
      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-6 pb-4 font-body text-plum-700 bg-ivory">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="block py-2" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#order"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center rounded-full bg-bloom-500 text-ivory px-5 py-2 text-sm font-semibold"
            >
              Order now
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
