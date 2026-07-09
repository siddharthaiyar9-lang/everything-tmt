import { getAllExplainers } from "./mdx";
import { trackerEntries } from "@/data/tracker";
import { podcasts } from "@/data/podcasts";
import { newsletters } from "@/data/newsletters";
import { judgments } from "@/data/judgments";

export function getSearchIndex() {
  const explainerItems = getAllExplainers().map((e) => ({
    type: "Knowledge Base",
    title: e.title,
    description: e.description,
    url: `/knowledge-base/${e.slug}`,
    tags: e.tags || [],
  }));

  const trackerItems = trackerEntries.map((t) => ({
    type: "AI Tracker",
    title: t.title,
    description: t.summary,
    url: "/tracker",
    tags: [t.regulator, t.status, t.policyArea],
  }));

  const judgmentItems = judgments.map((j) => ({
    type: "Judgment",
    title: j.caseName,
    description: j.summary,
    url: "/judgments",
    tags: [j.practiceArea, j.court, j.topic, j.status],
  }));
  const podcastItems = podcasts.map((p) => ({
    type: "Podcast",
    title: p.title,
    description: p.guestLabel,
    url: "/podcast",
    tags: [],
  }));

  const newsletterItems = newsletters.map((n) => ({
    type: "Newsletter",
    title: n.title,
    description: n.category,
    url: n.url,
    tags: [n.category, n.platform],
  }));

  return [
    ...explainerItems,
    ...trackerItems,
    ...judgmentItems,
    ...podcastItems,
    ...newsletterItems,
  ];
}
