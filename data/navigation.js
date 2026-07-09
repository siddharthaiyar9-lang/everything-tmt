// Site navigation structure, kept as data rather than hardcoded inside
// a component. Both Navbar and Footer import from here, so the two
// never drift out of sync with each other.
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/knowledge-base", label: "Knowledge Base" },
  { href: "/tracker", label: "AI Regulation Tracker" },
  { href: "/podcast", label: "Podcast" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/judgments", label: "Judgments" },
  { href: "/about", label: "About" },
];
