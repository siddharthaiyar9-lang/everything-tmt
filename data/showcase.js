// One entry per block on the home page. Edit the text, links or images
// here and nothing else needs to change. Add `image` once you have a
// file in public/showcase/, otherwise the gradient shows.
export const showcase = [
  {
    id: "podcast",
    label: "Podcast",
    heading: "Conversations with the people shaping tech policy",
    text: "Long-form interviews with some of the foremost professionals in the tech policy space.",
    links: [{ label: "Click here to listen", href: "/podcast" }],
    image: null, // e.g. '/showcase/podcast.jpg'
    gradient: "linear-gradient(135deg, #0f1b3d, #2D5BFF)",
  },
  {
    id: "blog",
    label: "Blog",
    heading: "Short, sharp analysis on law and technology",
    text: "Commentary on technology law, privacy and AI regulation, written in full.",
    links: [{ label: "Read the blog", href: "/blog" }],
    image: null,
    gradient: "linear-gradient(135deg, #2b1055, #7597de)",
  },
  {
    id: "explainers",
    label: "Knowledge Base",
    heading: "Technology law, explained properly",
    text: "Plain-language, rigorous explainers on the IT Act, the DPDP Act and more.",
    links: [{ label: "Start learning", href: "/knowledge-base" }],
    image: null,
    gradient: "linear-gradient(135deg, #0b3d3a, #2d9c8f)",
  },
  {
    id: "trackers",
    label: "Trackers",
    heading: "Follow India's AI regulation as it develops",
    text: "A filterable tracker of AI rules, policies and bills, alongside the court judgments shaping them.",
    links: [
      { label: "AI Regulation Tracker", href: "/tracker" },
      { label: "Judgments Tracker", href: "/judgments" },
    ],
    image: null,
    gradient: "linear-gradient(135deg, #3a1c1c, #c26a3d)",
  },
];
