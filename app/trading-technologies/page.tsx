import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "../../components/ArrowIcon";
import { tradingTechnologiesPortfolio as content } from "../../content/trading-technologies";
import styles from "./trading-technologies.module.css";

export const metadata: Metadata = {
  title: "Miriam Gonzalez | GTM Operations Lead",
  description:
    "A focused portfolio for Trading Technologies covering revenue operating cadence, pipeline governance, GTM process design, acquisition integration and Salesforce-enabled operations.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Miriam Gonzalez | GTM Operations & Process Transformation",
    description:
      "Evidence across forecasting cadence, pipeline governance, Salesforce, acquisition change and operational transformation.",
    type: "website",
  },
};

export default function TradingTechnologiesPage() {
  return (
    <main className={styles.page} id="top">
      <a className={styles.skipLink} href="#main-content">
        Skip to content
      </a>

      <header className={styles.header}>
        <Link href="/trading-technologies" className={styles.wordmark} aria-label="Miriam Gonzalez, Trading Technologies portfolio">
          MG
        </Link>
        <nav className={styles.nav} aria-label="Page navigation">
          <a href="#alignment">Alignment</a>
          <a href="#rhythm">Operating rhythm</a>
          <a href="#change">Change</a>
          <a href="#work">Evidence</a>
        </nav>
        <a className={styles.headerLink} href={content.profile.linkedIn} target="_blank" rel="noreferrer">
          LinkedIn <ArrowIcon external />
        </a>
      </header>

      <div id="main-content">
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroCopy}>
            <p className={styles.contextLabel}>{content.profile.roleLabel}</p>
            <p className={styles.name}>{content.profile.name}</p>
            <h1 id="hero-title">{content.profile.headline}</h1>
            <p className={styles.lede}>{content.profile.introduction}</p>
            <div className={styles.actions}>
              <a className={styles.primaryButton} href="#alignment">
                View role alignment <ArrowIcon />
              </a>
              <Link className={styles.secondaryButton} href="/">
                Main portfolio
              </Link>
            </div>
          </div>

          <aside className={styles.snapshot} aria-label="Candidate snapshot">
            <p className={styles.overline}>CURRENT SCOPE</p>
            <h2>{content.profile.currentRole}</h2>
            <p className={styles.company}>{content.profile.company}</p>
            <p className={styles.location}>{content.profile.location}</p>
            <div className={styles.metricList}>
              {content.metrics.map((metric) => (
                <div className={styles.metric} key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className={styles.alignmentSection} id="alignment" aria-labelledby="alignment-title">
          <div className={styles.sectionHeading}>
            <p className={styles.overline}>ROLE ALIGNMENT</p>
            <h2 id="alignment-title">The operating requirements, connected to evidence.</h2>
            <p>
              The strongest overlap is in the commercial cadence and governance layer: clean pipeline inputs, clear processes, consistent reviews and effective partnership with the systems that enable them.
            </p>
          </div>
          <div className={styles.alignmentGrid}>
            {content.alignment.map((item) => (
              <article className={styles.alignmentCard} key={item.number}>
                <span className={styles.cardNumber}>{item.number}</span>
                <h3>{item.title}</h3>
                <p className={styles.need}>{item.need}</p>
                <p className={styles.evidence}>{item.evidence}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.rhythmSection} id="rhythm" aria-labelledby="rhythm-title">
          <div className={styles.sectionHeading}>
            <p className={styles.overline}>REVENUE OPERATING RHYTHM</p>
            <h2 id="rhythm-title">A connected cadence, not a collection of reports.</h2>
            <p>
              My role is to make the commercial rhythm consistent: bring together seller judgement, CRM evidence, leadership reporting, planning assumptions and compensation operations.
            </p>
          </div>
          <ol className={styles.rhythmCycle}>
            {content.operatingRhythm.map((item, index) => (
              <li key={item.step}>
                <div className={styles.stepTop}>
                  <span>{item.step}</span>
                  {index < content.operatingRhythm.length - 1 && <span aria-hidden="true" className={styles.connector}>→</span>}
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.governanceSection} id="governance" aria-labelledby="governance-title">
          <div className={styles.governanceIntro}>
            <p className={styles.overline}>PROCESS & CRM GOVERNANCE</p>
            <h2 id="governance-title">From commercial requirement to an adopted control.</h2>
            <p>
              I operate at the business-process layer and remain hands-on with Salesforce. The outbound and lead management transformation is one example: defining a new commercial process, challenging an existing workflow, translating both into governance requirements and implementing the resulting changes across Salesforce and Apollo.io. I also partner with Systems & Integrations on architecture, development and complex integrations.
            </p>
            <div className={styles.governanceTags} aria-label="Governance experience">
              {content.governanceAreas.map((area) => <span key={area}>{area}</span>)}
            </div>
          </div>

          <ol className={styles.processFlow} aria-label="GTM process design method">
            {content.processModel.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.changeSection} id="change" aria-labelledby="change-title">
          <div className={styles.changeHeading}>
            <p className={styles.overline}>POST-ACQUISITION OPERATIONS</p>
            <h2 id="change-title">{content.acquisition.title}</h2>
            <p>{content.acquisition.introduction}</p>
          </div>
          <div className={styles.changeGrid}>
            {content.acquisition.areas.map((area, index) => (
              <article key={area.title}>
                <span>0{index + 1}</span>
                <h3>{area.title}</h3>
                <p>{area.body}</p>
              </article>
            ))}
          </div>
          <p className={styles.takeaway}>{content.acquisition.takeaway}</p>
        </section>

        <section className={styles.workSection} id="work" aria-labelledby="work-title">
          <div className={styles.sectionHeading}>
            <p className={styles.overline}>SELECTED TRANSFORMATIONS</p>
            <h2 id="work-title">Processes made simpler, governed and more scalable.</h2>
          </div>
          <div className={styles.workList}>
            {content.transformations.map((item) => (
              <article className={styles.caseStudy} key={item.number}>
                <div className={styles.caseTitle}>
                  <span>{item.number}</span>
                  <div>
                    <p>{item.label}</p>
                    <h3>{item.title}</h3>
                  </div>
                </div>
                <div className={styles.caseDetail}>
                  <div>
                    <h4>Problem</h4>
                    <p>{item.problem}</p>
                  </div>
                  <div>
                    <h4>Contribution</h4>
                    <p>{item.action}</p>
                  </div>
                </div>
                <div className={styles.impactBlock}>
                  <strong>{item.impact}</strong>
                  <span>{item.impactLabel}</span>
                </div>
                <ul className={styles.signalList} aria-label={`${item.title} capabilities`}>
                  {item.signals.map((signal) => <li key={signal}>{signal}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.contributionSection} aria-labelledby="contribution-title">
          <div className={styles.sectionHeading}>
            <p className={styles.overline}>WHAT I WOULD BRING</p>
            <h2 id="contribution-title">Practical GTM operations capability.</h2>
          </div>
          <ul className={styles.contributionGrid}>
            {content.contribution.map((item, index) => (
              <li key={item}>
                <span>0{index + 1}</span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.profileSection} id="profile" aria-labelledby="profile-title">
          <div className={styles.timelineBlock}>
            <p className={styles.overline}>CAREER SNAPSHOT</p>
            <h2 id="profile-title">Commercial operations, systems and process improvement.</h2>
            <ol className={styles.timeline}>
              {content.experience.map((item) => (
                <li key={`${item.years}-${item.role}`}>
                  <span>{item.years}</span>
                  <div><strong>{item.role}</strong><p>{item.company}</p></div>
                </li>
              ))}
            </ol>
          </div>
          <aside className={styles.credentials} aria-label="Education, certifications and languages">
            <div>
              <p className={styles.overline}>EDUCATION</p>
              <p>{content.education}</p>
            </div>
            <div>
              <p className={styles.overline}>CERTIFICATIONS</p>
              <ul>{content.certifications.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div>
              <p className={styles.overline}>LANGUAGES</p>
              <ul>{content.languages.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </aside>
        </section>

        <section className={styles.closing} aria-labelledby="closing-title">
          <p className={styles.overline}>TRADING TECHNOLOGIES · GTM OPERATIONS LEAD</p>
          <h2 id="closing-title">Commercial cadence. Governed processes. Systems that support execution.</h2>
          <div className={styles.actions}>
            <a className={styles.primaryButton} href={content.profile.linkedIn} target="_blank" rel="noreferrer">
              Connect on LinkedIn <ArrowIcon external />
            </a>
            <a className={styles.secondaryButton} href={`mailto:${content.profile.email}`}>Contact Miriam</a>
          </div>
        </section>
      </div>

      <footer className={styles.footer}>
        <span>{content.profile.name}</span>
        <span>GTM Operations · Revenue Operations · {content.profile.location}</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}

