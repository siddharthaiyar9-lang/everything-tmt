import { Mic } from "lucide-react";
import PageHeader from "@/components/PageHeader/PageHeader";
import PodcastCard from "@/components/PodcastCard/PodcastCard";
import { podcasts } from "@/data/podcasts";
import styles from "./page.module.css";

export const metadata = {
  title: "Podcast | Everything TMT",
  description: "Conversations on technology law, policy, and careers in TMT.",
};

export default function PodcastPage() {
  return (
    <div className={styles.page}>
      <PageHeader icon={Mic} label="Podcast">
        <h1 className={styles.heading}>The Everything TMT Podcast</h1>
        <p className={styles.subheading}>
          Conversations with some of the foremost voices in the tech law and
          policy space. Follow along on Spotify!
        </p>
      </PageHeader>

      <div className={styles.grid}>
        {podcasts.map((episode) => (
          <PodcastCard key={episode.id} episode={episode} />
        ))}
      </div>
    </div>
  );
}
