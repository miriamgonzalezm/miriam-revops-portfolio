import type { Metadata } from "next";
import Link from "next/link";
import { tricentisPortfolio as content } from "../../content/tricentis";
import styles from "./tricentis.module.css";

export const metadata: Metadata = {
  title: "Miriam Gonzalez | Senior Sales Operations Manager, EMEA",
  description:
    "A focused portfolio for Tricentis: strategic Sales Operations, QBR leadership, quota planning, capacity decisions and commercial insight.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Miriam Gonzalez | Sales Operations for EMEA growth",
    description:
      "How Miriam turns performance data into recommendations, operating decisions and measurable commercial action.",
    type: "website",
  },
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function TricentisPortfolioPage() {
  return (
    <main className={styles.page} id="top">
      <a className={styles.skipLink} href="#main-content">
        Skip to content
      </a>

      <header className={styles.header}>
        <Link href="/tricentis" className={styles.wordmark}>
          MG
        </Link>
        <nav aria-label="Page navigation" className={styles.nav}>
          <a href="#fit">Role fit</a>
          <a href="#evidence">Evidence</a>
          <a href="#operating">Operating range</a>
        </nav>
        <a className={styles.headerLink} href={content.profile.linkedIn} target="_blank" rel="noreferrer">
          LinkedIn <Arrow />
        </a>
      </header>

      <div id="main-content">
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{content.profile.eyebrow}</p>
            <h1 id="hero-title">{content.profile.title}</h1>
            <p className={styles.lede}>{content.profile.introduction}</p>
            <div className={styles.actions}>
              <a className={styles.primaryButton} href="#evidence">
                See the evidence <span aria-hidden="true">↓</span>
              </a>
              <a className={styles.secondaryButton} href={content.profile.linkedIn} target="_blank" rel="noreferrer">
                View LinkedIn <Arrow />
              </a>
            </div>
          </div>

          <aside className={styles.roleCard} aria-label="Candidate snapshot">
            <p className={styles.cardLabel}>CANDIDATE SNAPSHOT</p>
            <h2>{content.profile.name}</h2>
            <p>{content.profile.role}</p>
            <p>{content.profile.company} · B2B technology</p>
            <dl>
              <div>
                <dt>Location</dt>
                <dd>{content.profile.location}</dd>
              </div>
              <div>
                <dt>Experience</dt>
                <dd>10+ years in operations & analytics</dd>
              </div>
              <div>
                <dt>Salesforce</dt>
                <dd>Administrator + Sales Cloud Consultant</dd>
              </div>
            </dl>
          </aside>
        </section>

        <section className={styles.fitSection} id="fit" aria-labelledby="fit-title">
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>ROLE ALIGNMENT</p>
            <h2 id="fit-title">The questions behind the numbers are where I add value.</h2>
            <p>
              The Tricentis role calls for analytical depth, commercial judgment and the ability to influence EMEA leadership. These are the capabilities I use in my current role.
            </p>
          </div>
          <div className={styles.fitGrid}>
            {content.fit.map((item) => (
              <article className={styles.fitCard} key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.evidenceSection} id="evidence" aria-labelledby="evidence-title">
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>SELECTED EVIDENCE</p>
            <h2 id="evidence-title">Three examples of analysis changing the operating decision.</h2>
          </div>

          <div className={styles.evidenceList}>
            {content.evidence.map((item, index) => (
              <article className={styles.caseStudy} key={item.title}>
                <div className={styles.caseHeading}>
                  <span>0{index + 1}</span>
                  <div>
                    <p>{item.label}</p>
                    <h3>{item.title}</h3>
                  </div>
                </div>
                <div className={styles.caseBody}>
                  <div>
                    <h4>Business question</h4>
                    <p>{item.situation}</p>
                  </div>
                  <div>
                    <h4>My contribution</h4>
                    <p>{item.action}</p>
                  </div>
                  <div className={styles.result}>
                    <h4>Decision / outcome</h4>
                    <p>{item.result}</p>
                  </div>
                </div>
                <p className={styles.signal}>{item.signal}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.operatingSection} id="operating" aria-labelledby="operating-title">
          <div>
            <p className={styles.eyebrow}>OPERATING RANGE</p>
            <h2 id="operating-title">Insight is useful when it becomes an operating rhythm.</h2>
            <p className={styles.sectionCopy}>
              I connect commercial analysis with the cadences, systems and governance needed to keep decisions moving after the leadership meeting.
            </p>
            <ul className={styles.operatingList}>
              {content.operatingCadence.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>

          <div className={styles.toolkit}>
            <div className={styles.differentiator}>
              <p className={styles.cardLabel}>{content.differentiator.label}</p>
              <h3>{content.differentiator.title}</h3>
              <p>{content.differentiator.body}</p>
              <strong>{content.differentiator.impact}</strong>
            </div>
            <div>
              <p className={styles.cardLabel}>SYSTEMS</p>
              <ul>{content.systems.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div>
              <p className={styles.cardLabel}>CERTIFICATIONS</p>
              <ul>{content.certifications.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className={styles.closing} aria-labelledby="closing-title">
          <p className={styles.eyebrow}>FOR TRICENTIS</p>
          <h2 id="closing-title">From performance data to a clearer EMEA decision.</h2>
          <p>
            I would bring a practical combination of analytical curiosity, commercial context and operating discipline — with the confidence to investigate the pattern and the care to make the recommendation defensible.
          </p>
          <div className={styles.actions}>
            <a className={styles.primaryButton} href={`mailto:${content.profile.email}`}>
              Contact Miriam <Arrow />
            </a>
            <Link className={styles.secondaryButton} href="/">
              View full portfolio
            </Link>
          </div>
        </section>
      </div>

      <footer className={styles.footer}>
        <span>{content.profile.name}</span>
        <span>Senior Sales Operations · {content.profile.location}</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
