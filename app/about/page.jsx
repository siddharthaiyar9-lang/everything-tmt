import Image from "next/image";
import styles from "./page.module.css";
import { User } from "lucide-react";
import PageHeader from "@/components/PageHeader/PageHeader";

export const metadata = {
  title: "About | Everything TMT",
  description: "Making technology law understandable.",
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <PageHeader icon={User}>
        <h1 className={styles.heading}>
          Making technology law and policy understandable
        </h1>
      </PageHeader>

      <p className={styles.intro}>
        The idea behind Everything TMT is simple: make sure everyone has some
        way to understand where they stand in a tech-obsessed world. What can
        they do? How are they protected? Is there a way for them to lend their
        voice?
      </p>

      <div className={styles.profileCard}>
        <Image
          src="/SiddharthAiyar_img.jpg"
          alt="Siddharth Aiyar"
          width={84}
          height={84}
          className={styles.avatar}
        />
        <div>
          <div className={styles.name}>Siddharth Aiyar</div>
          <div className={styles.credentials}>
            CIPP/E · National Law University Odisha
          </div>
        </div>
      </div>

      <p className={styles.paragraph}>
        I&apos;m Siddharth Aiyar, a CIPP/E certified graduate from National Law
        University Odisha. I started reading about technology law out of pure
        curiosity, and quickly realised how complex, fragmented, and constantly
        evolving the space really is. What began as a niche academic interest
        slowly turned into a deeper engagement with how law interacts with the
        digital systems we use every day.
      </p>

      <p className={styles.paragraph}>
        Over the last few years, I&apos;ve explored different corners of TMT
        law, from intermediary liability and digital privacy to media regulation
        and platform governance. I&apos;ve interned with policy teams and legal
        organisations working in the tech space, and spent a fair amount of time
        trying to make sense of dense legislation, case law, and regulatory
        policy. That effort eventually shaped Everything TMT: a public-facing
        project aimed at breaking down the law in a way that&apos;s accessible
        but still legally rigorous.
      </p>

      <p className={styles.paragraph}>
        Outside of this project, I&apos;m also interested in the role of
        technology in shaping constitutional rights, the future of digital
        governance, and the possibility of pursuing tech law and policy
        somewhere down the line. Right now, I&apos;m mostly reading, writing,
        and learning, and figuring things out as I go.
      </p>

      <p className={styles.paragraph}>
        Apart from academics, I love football, South Indian food and Green Day
        (in no particular order). If you have any suggestions, queries or just
        want to discuss Tech Law (or football, Green Day or South Indian food,
        your call), I would love to hear from you!
      </p>
      <div className={styles.sectionLabel}>Contact</div>
      <div className={styles.contactLinks}>
        <a href="mailto:siddharthaiyar9@gmail.com" className={styles.email}>
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/siddharth-aiyar-03468921a/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.email}
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
