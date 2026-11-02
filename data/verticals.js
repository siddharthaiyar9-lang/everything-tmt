import { Scale, Compass, Users, TrendingUp } from 'lucide-react';

// Resources that sit alongside the writing. Defined once so the Research
// page (step 2) and each vertical page can reuse them.
export const RESOURCES = {
  knowledgeBase: {
    title: 'Knowledge Base',
    description: 'Long-form, plain-language explainers on Indian technology law, starting with the IT Act and the DPDP Act.',
    href: '/knowledge-base',
  },
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

// The four editorial verticals. Each key is the page URL (/law, /policy,
// and so on) and the value you put in a post's `verticals` frontmatter.
export const VERTICALS = {
  law: {
    label: 'Technology Law', short: 'Law',
    icon: Scale,
    description: 'Legal frameworks governing technology, including data protection, privacy, AI regulation, intermediary liability, intellectual property, telecom and cybersecurity.',
    resources: ['knowledgeBase', 'judgments'],
  },
  policy: {
    label: 'Technology Policy', short: 'Policy',
    icon: Compass,
    description: 'Public policy concerning technological development, including AI policy, digital sovereignty, industrial policy, digital public infrastructure, innovation and international technology governance.',
    resources: ['tracker'],
  },
  society: {
    label: 'Technology and Society', short: 'Society',
    icon: Users,
    description: 'The social, political and cultural implications of technology, including digital democracy, algorithmic discrimination, surveillance, digital inclusion and the future of work.',
    resources: [],
  },
  markets: {
    label: 'Technology and Markets', short: 'Markets',
    icon: TrendingUp,
    description: 'The economic implications of technological development, including platform economics, competition, market concentration, fintech, AI economics and technology infrastructure.',
    resources: [],
  },
};