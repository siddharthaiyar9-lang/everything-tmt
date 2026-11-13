// Everyone on the Team page. Photos go in public/team/ (portrait, about
// 800 x 1000, lowercase names), so public/team/first-last.jpg is written
// as '/team/first-last.jpg'. A member with no photo shows their initials.
export const TEAM = [
  {
    id: 'siddharth-aiyar',
    group: 'founder',
    name: 'Siddharth Aiyar',
    position: 'Founder and Editor-in-Chief',
    photo: '/SiddharthAiyar_img.jpg',
    photoPosition: 'center 28%', // keeps the face in frame when the photo is cropped
    about: [
      "I'm Siddharth Aiyar, a CIPP/E certified graduate from National Law University Odisha. I started reading about technology law out of pure curiosity, and quickly realised how complex, fragmented, and constantly evolving the space really is. What began as a niche academic interest slowly turned into a deeper engagement with how law interacts with the digital systems we use every day.",
      "Over the last few years, I've explored different corners of TMT law, from intermediary liability and digital privacy to media regulation and platform governance. I've interned with policy teams and legal organisations working in the tech space, and spent a fair amount of time trying to make sense of dense legislation, case law, and regulatory policy. That effort eventually shaped Everything TMT: a public-facing project aimed at breaking down the law in a way that's accessible but still legally rigorous.",
    ],
    links: [
      { label: 'Email', href: 'mailto:siddharthaiyar9@gmail.com' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/siddharth-aiyar-03468921a/' },
    ],
  },

    {
    id: 'tanishka-pandey',
    group: 'research',
    name: 'Tanishka Pandey',
    position: 'Research Associate',
    photo: '/Tanishka.jpg',
    photoPosition: 'center 28%', // keeps the face in frame when the photo is cropped
    about: [
      "I am Tanishka Pandey, a lawyer and a 2025 graduate, with experience across contracts, regulatory advisory, and litigation. My work spans a broad range of legal and regulatory issues, while my interests lie particularly at the intersection of technology, law, and public policy.",
      "I am a 2025 YLAC Policy in Action Fellow, and my interest in technology law stems from a strong conviction in the importance of digital rights, privacy, and individual autonomy in an increasingly technology-driven world.",
      "It is also, perhaps, a consequence of reading too much dystopian science fiction, which has only deepened my curiosity about the relationship between technology, power, and society.",
      "I am also a Project AWARE AI Safety Program Fellow, where I engage with questions surrounding international cooperation, AI governance, and the development of policy frameworks to address the challenges posed by artificial intelligence.",
      "I am particularly interested in understanding how legal and institutional frameworks can keep pace with technological developments, and how we can shape a digital future that balances innovation with accountability, individual rights, and the public interest.",
      ],
  },
  {
    id: 'trishna-agrawalla',
    group: 'research',
    name: 'Trishna Agrawalla',
    position: 'Research Associate',
    photo: '/Trishna.jpg',
    photoPosition: 'center 28%', // keeps the face in frame when the photo is cropped
    about: [
      "Hi! I'm Trishna Agrawalla, a fifth year student at National Law University, Odisha. My interest in Technology law and policy started in my second year with my college centre LexTech, and it has been one of my very few constants throughout my college journey.",
      "I am particularly interested in exploring themes under Data Privacy and AI regulation, and I'm looking forward to exploring and learning more about my interest areas.",
    ],
  },
   {
    id: 'aarav-singh',
    group: 'research',
    name: 'Aarav Singh',
    position: 'Research Associate',
    photo: '/Aarav.jpg',
    photoPosition: 'center 28%', // keeps the face in frame when the photo is cropped
    about: [
      "Hey there, I am Aarav Singh, I'm a second-year student pursuing a three-year LL.B. at Government Law College, Mumbai. I have a keen interest in Technology Law, Data Privacy, and Artificial Intelligence.",
      "Outside academics, I enjoy staying active and exploring different interests. I like swimming, playing basketball and football, going to the gym, watching movies and listening to music.",
      "I'm also interested in chess and enjoy the strategic thinking involved in the game.",
      "I'd describe myself as curious, introspective, and ambitious; I enjoy meaningful conversations, exploring new ideas, learning about different subjects, and challenging myself to step outside my comfort zone.",
],
  },
   {
    id: 'priyanshi-gupta',
    group: 'research',
    name: 'Priyanshi Gupta',
    position: 'Research Associate',
    photo: '/Priyanshi.jpg',
    photoPosition: 'center 28%', // keeps the face in frame when the photo is cropped
    about: [
      "I’m Priyanshi Gupta, a law student at National Law University, Jabalpur, with a focus on data privacy and technology law. I’ve spent much of my time studying India’s data protection regime, including consent managers, dark patterns and the places where domestic and global privacy frameworks disagree.",
      "My work spans research internships, moot courts, conference papers and publications in this domain. I also review and refine legal definitions for a legal literacy project, which is a good way to find out how many words law uses to avoid saying one clear thing."
      "Outside the classroom, I chase ideas, places, and people that challenge my thinking, from books and science to strangers with good stories.",
      "I’ve also played the piano for the better part of a decade.",
    ],
  },
  
  // To add someone, copy this block, remove the // marks, and fill it in.
  // Use group: 'mentors' to list them under a separate "Mentors" heading.
  // {
  //   id: 'first-last',
  //   group: 'team',
  //   name: 'First Last',
  //   position: 'Research Associate',
  //   credentials: 'Optional line under the name',
  //   photo: '/team/first-last.jpg',
  //   about: ['One paragraph per string.', 'Add as many as you like.'],
  //   links: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/...' }],
  // },
];

// Order and headings of the groups. A heading only shows once more than
// one group has people in it.
export const GROUPS = [
  { key: 'founder', label: 'Founder' },
  { key: 'research', label: 'Research Associates' },
  { key: 'mentors', label: 'Mentors' },
];
