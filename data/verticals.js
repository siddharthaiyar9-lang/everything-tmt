import { Scale, Compass, Users, TrendingUp } from 'lucide-react';

// Tools and databases. These are not research, so they get their own row
// on the vertical pages that list them (see `trackers` below).
export const TRACKERS = {
  tracker: {
    title: 'India AI Governance Tracker',
    description: 'Laws, policies, strategies and institutional arrangements shaping AI governance in India, filterable by regulator, status and policy area.',
    href: '/tracker',
  },
  judgments: {
    title: 'Judgments Tracker',
    description: 'Indian court decisions on AI and privacy, filterable by court and topic.',
    href: '/judgments',
  },
};

// The four editorial verticals. The key is the page URL (/law, /policy...)
// and the value used in `verticals` frontmatter and data files.
export const VERTICALS = {
  law: {
    label: 'Technology Law',
    short: 'Law',
    icon: Scale,
    image: '/verticals/law.jpg',
    description: 'Legal frameworks governing technology, including data protection, privacy, AI regulation, intermediary liability, intellectual property, telecom and cybersecurity.',
    trackers: ['judgments'],
  },
  policy: {
    label: 'Technology and Institutions',
    short: 'Policy',
    icon: Compass,
    image: '/verticals/policy.jpg',
    description: 'Public policy concerning technological development, including AI policy, digital sovereignty, industrial policy, digital public infrastructure, innovation and international technology governance.',
    trackers: ['tracker'],
  },
  society: {
    label: 'Technology and Society',
    short: 'Society',
    icon: Users,
    image: '/verticals/society.jpg',
    description: 'The social, political and cultural implications of technology, including digital democracy, algorithmic discrimination, surveillance, digital inclusion and the future of work.',
    trackers: [],
  },
  markets: {
    label: 'Technology and Markets',
    short: 'Markets',
    icon: TrendingUp,
    description: 'The economic implications of technological development, including platform economics, competition, market concentration, fintech, AI economics and technology infrastructure.',
    trackers: [],
  },
};