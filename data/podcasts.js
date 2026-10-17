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
      'Anthropomorphism, "Empathetic" AI, and the Future of Human Autonomy',
    parts: [
      {
        label: "Listen on Spotify",
        url: "https://open.spotify.com/episode/1Xk3mjHnNR0TfMXsaBM7BA",
      },
    ],
  },
];
