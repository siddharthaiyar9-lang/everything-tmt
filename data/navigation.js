// Site navigation, used by both the Navbar and the Footer.
// `alsoActiveOn` keeps an item highlighted while you are on one of its
// child pages (Research stays lit while you read a Knowledge Base explainer).
export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/law', label: 'Law' },
  { href: '/policy', label: 'Policy' },
  { href: '/society', label: 'Society' },
  // { href: '/markets', label: 'Markets' }, // uncomment once Markets has a few pieces
  { href: '/research', label: 'Research', alsoActiveOn: ['/knowledge-base', '/tracker', '/judgments'] },
  { href: '/podcast', label: 'Podcast' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
];

/* PREVIOUS NAV. Paste this over the array above to go back:
export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/knowledge-base', label: 'Knowledge Base' },
  { href: '/tracker', label: 'AI Regulation Tracker' },
  { href: '/judgments', label: 'Judgments' },
  { href: '/podcast', label: 'Podcast' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
];
*/