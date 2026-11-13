// Site navigation, used by both the Navbar and the Footer.
// `alsoActiveOn` keeps an item highlighted on its child pages.
export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/law', label: 'Law', alsoActiveOn: ['/knowledge-base', '/judgments'] },
  { href: '/policy', label: 'Policy', alsoActiveOn: ['/tracker'] },
  { href: '/society', label: 'Society' },
  // { href: '/markets', label: 'Markets' }, // uncomment once Markets has a few pieces
  { href: '/podcast', label: 'Podcast' },
  { href: '/blog', label: 'Blog' },
  { href: '/team', label: 'Meet the Team' },
];

// Direct links to the main tools, shown in the footer so they stay one
// click away now that they are not in the main nav.
export const RESOURCE_LINKS = [
  { href: '/knowledge-base', label: 'Knowledge Base' },
  { href: '/tracker', label: 'AI Governance Tracker' },
  { href: '/judgments', label: 'Judgments' },
];
