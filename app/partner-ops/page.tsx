import type { Metadata } from "next";
import Link from "next/link";
import { partnerOpsPortfolio as content } from "@/content/partner-ops";
import styles from "./partner-ops.module.css";

export const metadata: Metadata = {
  title: "Miriam Gonzalez | Partner Operations",
  description: "Selected partner operations work across portals, reporting, GTM systems and practical AI automation.",
  robots: { index: false, follow: false },
};

export default function PartnerOperationsPage() {
  return (
    <main className={styles.page} id="top">
      <a className={styles.skipLink} href="#main-content">Skip to content</a>

      <header className={styles.header}>
        <Link href="/" className={styles.wordmark} aria-label="Miriam Gonzalez portfolio home">MG</Link>
        <span>Partner Operations</span>
        <a href={`mailto:${content.profile.email}`}>Contact</a>
      </header>

      <div id="main-content">
        <section className={styles.hero} aria-labelledby="hero-title">
          <p className={styles.eyebrow}>{content.profile.subtitle}</p>
          <h1 id="hero-title">{content.profile.headline}</h1>
          <div className={styles.proofChips} aria-label="Evidence at a glance">
            {content.proof.map((item) => <span key={item}>{item}</span>)}
          </div>
          <div className={styles.actions}>
            <a className={styles.secondaryButton} href={`mailto:${content.profile.email}`}>Contact</a>
          </div>
        </section>

        <section className={styles.portalSection} aria-labelledby="portal-title">
          <div className={styles.sectionHeading}>
            <p className={styles.overline}>CASE STUDY · PARTNER PORTAL</p>
            <h2 id="portal-title">From status emails to partner self-service.</h2>
          </div>

          <div className={styles.contextGrid}>
            <div>
              <h3>Context</h3>
              {content.portal.context.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <p className={styles.buildIntro}>{content.portal.buildIntro}</p>
          </div>

          <div className={styles.capabilityGrid}>
            {content.portal.capabilities.map((capability) => (
              <article key={capability.title}>
                <h3>{capability.title}</h3>
                <p>{capability.body}</p>
              </article>
            ))}
          </div>

          <div className={styles.portalEvidence}>
            <div className={styles.dashboardMockup} aria-label="Illustrative partner dashboard with fictional figures">
              <div className={styles.dashboardTop}>
                <strong>Partner dashboard</strong>
                <span>Illustrative · fictional data</span>
              </div>
              <div className={styles.dashboardMetrics}>
                <article><span>Revenue</span><strong>£240k</strong><small>Current period</small></article>
                <article><span>Open deals</span><strong>8</strong><small>Active opportunities</small></article>
                <article><span>Renewals due</span><strong>3</strong><small>Action required</small></article>
                <article><span>Registered leads</span><strong>12</strong><small>Status visible</small></article>
              </div>
              <div className={styles.dashboardRows} aria-hidden="true">
                <span /><span /><span />
              </div>
            </div>
            <aside className={styles.resultCard}>
              <span>Result</span>
              <p>{content.portal.result}</p>
            </aside>
          </div>
        </section>

        <section className={styles.standardSection} aria-labelledby="operations-title">
          <div className={styles.sectionHeading}>
            <p className={styles.overline}>PARTNER OPERATIONS</p>
            <h2 id="operations-title">The controls behind a channel-led model.</h2>
          </div>
          <div className={styles.operationsGrid}>
            {content.partnerOperations.map((item) => <article key={item}><p>{item}</p></article>)}
          </div>
        </section>

        <section className={styles.aiSection} aria-labelledby="agents-title">
          <div className={styles.sectionHeading}>
            <p className={styles.overline}>AI AGENTS I BUILD AND RUN</p>
            <h2 id="agents-title">Practical automation, with clear human control.</h2>
          </div>
          <div className={styles.agentGrid}>
            {content.agents.map((agent) => (
              <article key={agent.title}>
                <h3>{agent.title}</h3>
                <p>{agent.detail}</p>
                <div><strong>{agent.metric}</strong><span>{agent.metricDetail}</span></div>
              </article>
            ))}
          </div>
          <p className={styles.agentPrinciple}>The agent proposes, a human confirms.</p>
        </section>

        <section className={styles.standardSection} aria-labelledby="hubspot-title">
          <div className={styles.sectionHeading}>
            <p className={styles.overline}>HUBSPOT</p>
            <h2 id="hubspot-title">Clean lifecycle data across the GTM stack.</h2>
          </div>
          <ul className={styles.hubspotList}>
            {content.hubspot.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section className={styles.reportingSection} aria-labelledby="reporting-title">
          <div className={styles.sectionHeading}>
            <p className={styles.overline}>PROGRAM REPORTING</p>
            <h2 id="reporting-title">How I&apos;d report on a partner program.</h2>
          </div>
          <div className={styles.tableFrame}>
            <table>
              <thead><tr><th scope="col">Metric</th><th scope="col">Definition</th><th scope="col">Use</th></tr></thead>
              <tbody>
                {content.reporting.map((row) => (
                  <tr key={row.metric}>
                    <th scope="row" data-label="Metric">{row.metric}</th>
                    <td data-label="Definition">{row.definition}</td>
                    <td data-label="Use">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.ninetySection} aria-labelledby="ninety-title">
          <div className={styles.sectionHeading}>
            <p className={styles.overline}>FIRST 90 DAYS</p>
            <h2 id="ninety-title">Learn the system, fix the friction, scale the motion.</h2>
          </div>
          <div className={styles.ninetyGrid}>
            {content.firstNinetyDays.map((phase) => (
              <article key={phase.period}>
                <span>{phase.period}</span>
                <p>{phase.body}</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      <footer className={styles.footer}>
        <strong>{content.profile.name}</strong>
        <a href={`mailto:${content.profile.email}`}>{content.profile.email}</a>
        <a href={content.profile.linkedIn} target="_blank" rel="noreferrer">LinkedIn</a>
        <span>{content.profile.location}</span>
      </footer>
    </main>
  );
}
