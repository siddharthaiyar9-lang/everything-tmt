// One entry per scroll block on the home page. Keep these in step with the
// nav: Law, Policy, Society, Podcast. `icon` is one of: law, policy,
// society, podcast, blog. `image` is a path under /public. The gradient
// shows only if the image is missing.
export const showcase = [
  {
    id: 'law',
    icon: 'law',
    heading: 'Technology law, explained properly',
    text: 'Explainers on the IT Act and the DPDP Act, analysis of how India regulates technology, and a database of the court judgments shaping it.',
    links: [{ label: 'Explore Technology Law', href: '/law' }],
    image: '/verticals/law.jpg',
    imagePosition: 'center',
    gradient: 'linear-gradient(135deg, #0b3d3a, #2d9c8f)',
  },
  {
    id: 'policy',
    icon: 'policy',
    heading: 'The choices behind how India governs technology',
    text: 'Policy analysis on AI, digital sovereignty and public infrastructure, alongside a tracker of the laws, policies and institutions shaping AI governance in India.',
    links: [{ label: 'Explore Technology Policy', href: '/policy' }],
    image: '/verticals/policy.jpg',
    imagePosition: 'center',
    gradient: 'linear-gradient(135deg, #2b1055, #7597de)',
  },
  {
    id: 'society',
    icon: 'society',
    heading: 'Technology and the people it affects',
    text: 'Writing on surveillance, discrimination, inclusion and the social consequences of technological change.',
    links: [{ label: 'Explore Technology and Society', href: '/society' }],
    image: '/verticals/society.jpg',
    imagePosition: 'center',
    gradient: 'linear-gradient(135deg, #3a1c1c, #c26a3d)',
  },
  {
    id: 'podcast',
    icon: 'podcast',
    heading: 'Conversations with the people shaping tech policy',
    text: 'Long-form interviews with some of the foremost professionals in the tech policy space.',
    links: [{ label: 'Click here to listen', href: '/podcast' }],
    image: '/heroes/ghat.jpg',
    imagePosition: 'left center',
    gradient: 'linear-gradient(135deg, #0f1b3d, #2d5bff)',
  },
  {
    id: 'blog',
    icon: 'blog',
    heading: 'Tech, policy and law analysed',
    text: 'Simple, crisp analyses on how technology, society, law and markets interact.',
    links: [{label: 'Read more', href: '/blog'}],
    image: 'heroes/temple.jpg',
    imagePosition: 'center',
  }
  // To add Blog as a fifth block, uncomment and give it an image:
  // {
  //   id: 'blog',
  //   icon: 'blog',
  //   heading: 'Short, sharp analysis on law and technology',
  //   text: 'Commentary on technology law, privacy and AI regulation, written in full.',
  //   links: [{ label: 'Read the blog', href: '/blog' }],
  //   image: null,
  //   imagePosition: 'center',
  //   gradient: 'linear-gradient(135deg, #1b3d2b, #4c9a6a)',
  // },
];
