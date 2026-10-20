import Link from "next/link";
import Hero from "@/components/Hero/Hero";
import ExplainerCard from "@/components/ExplainerCard/ExplainerCard";
import { getAllExplainers } from "@/lib/mdx";
import { getSearchIndex } from "@/lib/searchIndex";
import { topics } from "@/data/topics";
import styles from "./page.module.css";
import ScrollShowcase from "@/components/ScrollShowcase/ScrollShowcase";
import { showcase } from "@/data/showcase";

export default function Home() {
  const explainers = getAllExplainers();
  const searchIndex = getSearchIndex();

  return (
    <main>
      <Hero searchIndex={searchIndex} />
      <ScrollShowcase items={showcase} />
    </main>
  );
}
