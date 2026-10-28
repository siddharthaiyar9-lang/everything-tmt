// Each episode has an array of `parts`, since some interviews are
// split across multiple Spotify links (e.g. Part 1: Careers, Part 2:
// Technical Landscape) while others are a single episode. Every
// component downstream just does `.map()` over `parts` — it never
// needs to know or care whether there's 1 part or 5.
export const podcasts = [
  {
    id: 1,
    guestLabel: "Episode 1",
    title: "In Conversation With Kriti Trehan",
    description:
      "What does it take to make sense of technology in a world where regulation can barely keep up? Tech policy lawyer Kriti Trehan, head of Data & Co, joined us to unpack her decade-long journey across AI, privacy, and digital regulation, sharing candid insights on the ideas, experiences, and people shaping India’s evolving tech policy landscape.",
    parts: [
      {
        label: "Part 1: Careers in TMT Law",
        url: "https://open.spotify.com/episode/7iIZiAjjjZeGbT5uzMgkso?si=wRYRgpHrQoe5jrjakaresQ",
      },
      {
        label: "Part 2: The Techno-legal Landscape",
        url: "https://open.spotify.com/episode/1REl6vnKvJQTt2Gz43TIEp?si=wmOtMfMzSSaUz1AWOlpWrQ",
      },
      {
        label: "Part 3: Reflections",
        url: "https://open.spotify.com/episode/31lf9S2Y23krUndSUBCUzy?si=Q2UfXpk6QQim_4BbseCtPA",
      },
    ],
  },
  {
    id: 2,
    guestLabel: "Episode 2",
    title: "In Conversation With Dr. Srinivas Yanamandra",
    description:
      "What does it mean to think beyond the rulebook? Dr. Srinivas Yanamandra, a compliance specialist, regulatory researcher, and fintech policy thinker who has led compliance functions at globally renowned institutions, joined us to explore the evolving relationship between finance, technology, and regulation, and the ethical questions shaping the future of financial innovation.",
    parts: [
      {
        label: "Part 1: Careers in Compliance and Policy",
        url: "https://open.spotify.com/episode/2Lg986WCMEfR3hcwTUBXXi?si=de576ca494d8484d",
      },
      {
        label: "Part 2: The Technical Landscape",
        url: "https://open.spotify.com/episode/3WZCsyNfBGvFLz6KmcW2Jr?si=HXPG7VezSSeWhvN1qt1UEw",
      },
    ],
  },
  {
    id: 3,
    guestLabel: "Episode 3",
    title: "In Conversation With Vibhav Mithal",
    description:
      "Vibhav Mithal, an IP litigator and AI governance expert, has worked on landmark disputes before India’s Supreme Court and Delhi High Court while contributing to the country’s emerging responsible AI frameworks. In this conversation, we explored how India’s AI governance framework is taking shape, what responsible AI means in practice, and how artificial intelligence is changing the legal profession.",
    parts: [
      {
        label: "Listen on Spotify",
        url: "https://open.spotify.com/episode/1SIsvRnJbBnvnh2Oj1Fslf",
      },
    ],
  },
  {
    id: 3,
    guestLabel: "Episode 4",
    title:
      "Anthropomorphism, 'Empathetic' AI, and the Future of Human Autonomy",
    description:
      "AI systems are increasingly designed to remember us, mirror our emotions, and feel more human. But when does that connection become manipulation, and who is responsible when it causes harm? On the Everything TMT Podcast, Sriya Sridhar (CeRAI, IIT Madras) and Prof. Krishna Deo Singh Chauhan (CSCAILR, JGLS) joined us to explore anthropomorphism, emotional manipulation, and the legal and ethical challenges posed by social AI.",
    parts: [
      {
        label: "Listen on Spotify",
        url: "https://open.spotify.com/episode/1Xk3mjHnNR0TfMXsaBM7BA",
      },
    ],
  },
];
