import { Users } from 'lucide-react';
import PageHero from '@/components/PageHero/PageHero';
import TeamCard from '@/components/TeamCard/TeamCard';
import { TEAM, GROUPS } from '@/data/team';
import { HEROES } from '@/data/heroes';
import styles from './page.module.css';

export const metadata = {
  title: 'Team | Everything TMT',
  description: 'The people behind Everything TMT.',
};

export default function TeamPage() {
  const known = new Set(GROUPS.map((g) => g.key));
  const groups = [
    ...GROUPS.map((g) => ({ ...g, members: TEAM.filter((m) => m.group === g.key) })),
    { key: 'other', label: 'Team', members: TEAM.filter((m) => !known.has(m.group)) },
  ].filter((g) => g.members.length > 0);
  const showHeadings = groups.length > 1;

  return (
    <>
      <PageHero
        icon={Users}
        title="Meet the team"
        text="The idea behind Everything TMT is simple: make sure everyone has some way to understand where they stand in a tech-obsessed world. What can they do? How are they protected? Is there a way for them to lend their voice?"
        scrollTo="team-content"
        {...HEROES.about}
      />

      <div id="team-content" className={styles.page}>
        {groups.map((g) => (
          <section key={g.key}>
            {showHeadings && <h2 className={styles.groupTitle}>{g.label}</h2>}
            <div className={styles.grid}>
              {g.members.map((member) => (<TeamCard key={member.id} member={member} />))}
            </div>
          </section>
        ))}

        <section className={styles.contact}>
          <h2 className={styles.contactTitle}>Get in touch</h2>
          <p className={styles.contactText}>Suggestions, questions, or an idea for something we should cover? Write to us.</p>
          <a href="mailto:siddharthaiyar9@gmail.com" className={styles.contactLink}>siddharthaiyar9@gmail.com</a>
        </section>
      </div>
    </>
  );
}
