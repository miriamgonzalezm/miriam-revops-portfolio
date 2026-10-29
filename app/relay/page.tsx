import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/ArrowIcon";
import { relayPortfolio as content } from "@/content/relay";
import styles from "./relay.module.css";

export const metadata: Metadata = {
  title: "Miriam Gonzalez | Sales Operations & Commercial Automation",
  description:
    "A focused portfolio for Relay Technologies covering hands-on Sales Operations build, GTM systems, commercial governance and practical AI automation.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Miriam Gonzalez | Sales Operations Builder",
    description: "Commercial judgement, systems thinking and hands-on execution across Sales Operations, GTM systems and AI automation.",
    type: "website",
  },
};

export default function RelayPage() {
  return (
    <main className={styles.page} id="top">
      <a className={styles.skipLink} href="#main-content">Skip to content</a>

      <header className={styles.header}>
        <Link href="/relay" className={styles.wordmark} aria-label="Miriam Gonzalez, Relay portfolio">MG</Link>
        <nav className={styles.nav} aria-label="Page navigation">
          <a href="#method">How I build</a>
          <a href="#flow">Commercial flow</a>
          <a href="#work">Selected work</a>
          <a href="#principles">Principles</a>
        </nav>
        <a className={styles.headerLink} href={content.profile.linkedIn} target="_blank" rel="noreferrer">
          LinkedIn <ArrowIcon external />
        </a>
      </header>

      <div id="main-content">
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{content.profile.context}</p>
            <p className={styles.name}>{content.profile.name}</p>
            <p className={styles.roleLine}>{content.profile.positioning}</p>
            <h1 id="hero-title">{content.profile.headline}</h1>
            <p className={styles.lede}>{content.profile.introduction}</p>
            <a className={styles.primaryButton} href="#method">See how I build <ArrowIcon /></a>
            <p className={styles.proofLine}>{content.profile.proofLine}</p>
          </div>

          <aside className={styles.proofPanel} aria-label="Candidate evidence summary">
            <div className={styles.proofPanelTop}>
              <span>Evidence at a glance</span>
            </div>
            <div className={styles.proofGrid}>
              {content.proof.map((item) => (
                <div className={styles.proofItem} key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                  <p>{item.detail}</p>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className={styles.methodSection} id="method" aria-labelledby="method-title">
          <div className={styles.sectionHeading}>
            <p className={styles.overline}>HOW I WORK</p>
            <h2 id="method-title">From commercial problem to working solution.</h2>
          </div>
          <ol className={styles.methodGrid}>
            {content.method.map((step, index) => (
              <li key={step.number}>
                <div className={styles.methodTop}>
                  <span>{step.number}</span>
                  {index < content.method.length - 1 && <span className={styles.connector} aria-hidden="true">→</span>}
                </div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.flowSection} id="flow" aria-labelledby="flow-title">
          <div className={styles.motionView}>
            <p className={styles.overline}>ENTERPRISE + PITSTOP · COMMERCIAL OPERATING MODEL</p>
            <h2 id="flow-title">{content.salesMotions.title}</h2>
            <p>{content.salesMotions.body}</p>
            <blockquote className={styles.motionQuote}>{content.salesMotions.pullQuote}</blockquote>
          </div>
          <div className={styles.flowModel}>
            <p className={styles.flowLabel}>TAM → CRM → COMMERCIAL GOVERNANCE</p>
            <ol>
              {content.commercialFlow.steps.map((step, index) => (
                <li key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step}</strong>
                </li>
              ))}
            </ol>
            <p className={styles.flowNote}>{content.commercialFlow.note}</p>
          </div>
        </section>

        <section className={styles.workSection} id="work" aria-labelledby="work-title">
          <div className={styles.sectionHeading}>
            <p className={styles.overline}>SELECTED WORK</p>
            <h2 id="work-title">Built around commercial problems, not software features.</h2>
          </div>

          <div className={styles.flagshipList}>
            {content.flagshipCases.map((caseStudy) => (
              <article className={styles.flagshipCase} key={caseStudy.number}>
                <div className={styles.caseHeader}>
                  <span className={styles.caseNumber}>{caseStudy.number}</span>
                  <div>
                    <p className={styles.caseEyebrow}>{caseStudy.eyebrow}</p>
                    <h3>{caseStudy.title}</h3>
                    <p className={styles.relevance}><strong>Relevant to Relay:</strong> {caseStudy.relevance.join(" · ")}</p>
                  </div>
                </div>

                <div className={styles.caseBody}>
                  <div className={styles.challengeBlock}>
                    <h4>Challenge</h4>
                    <p>{caseStudy.challenge}</p>
                  </div>
                  <div className={styles.actionBlock}>
                    <h4>What I did</h4>
                    <ul>{caseStudy.actions.map((action) => <li key={action}>{action}</li>)}</ul>
                  </div>
                  <aside className={styles.impactBlock}>
                    <h4>Impact</h4>
                    {"metric" in caseStudy && caseStudy.metric && (
                      <div className={styles.singleMetric}>
                        <strong>{caseStudy.metric}</strong>
                        <span>{caseStudy.metricLabel}</span>
                      </div>
                    )}
                    {"metrics" in caseStudy && caseStudy.metrics && (
                      <div className={styles.metricPair}>
                        {caseStudy.metrics.map((metric) => (
                          <div key={metric.value}><strong>{metric.value}</strong><span>{metric.label}</span></div>
                        ))}
                      </div>
                    )}
                    <p className={styles.impactTitle}>{caseStudy.impactTitle}</p>
                    {caseStudy.impacts.length > 0 && <ul>{caseStudy.impacts.map((impact) => <li key={impact}>{impact}</li>)}</ul>}
                    {"proofLine" in caseStudy && caseStudy.proofLine && <p className={styles.caseProofLine}>{caseStudy.proofLine}</p>}
                    {"pullQuote" in caseStudy && caseStudy.pullQuote && <blockquote className={styles.caseQuote}>{caseStudy.pullQuote}</blockquote>}
                  </aside>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.additionalProof}>
            <h3>Additional proof</h3>
            <div className={styles.proofCards}>
              {content.additionalProof.map((item) => (
                <article key={item.title}>
                  <p className={styles.additionalLabel}>{item.title}</p>
                  <h4>{item.subtitle}</h4>
                  <p>{item.body}</p>
                  <p className={styles.additionalRelevance}><strong>Relevant to:</strong> {item.relevance.join(" · ")}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.experienceSection} id="experience" aria-labelledby="experience-title">
          <div className={styles.sectionHeading}>
            <p className={styles.overline}>COMMERCIAL OPERATING EXPERIENCE</p>
            <h2 id="experience-title">The systems work is grounded in the sales motion.</h2>
          </div>
          <div className={styles.experienceGrid}>
            {content.commercialExperience.map((area, index) => (
              <article key={area.title}>
                <span>0{index + 1}</span>
                <h3>{area.title}</h3>
                <p>{area.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.changeSection} aria-labelledby="change-title">
          <div className={styles.changeIntro}>
            <p className={styles.overline}>OPERATING THROUGH CHANGE</p>
            <h2 id="change-title">{content.change.title}</h2>
            <p>{content.change.introduction}</p>
          </div>
          <blockquote>{content.change.takeaway}</blockquote>
        </section>

        <section className={styles.principlesSection} id="principles" aria-labelledby="principles-title">
          <div className={styles.sectionHeading}>
            <p className={styles.overline}>DECISION-MAKING PRINCIPLES</p>
            <h2 id="principles-title">How I decide what to build.</h2>
          </div>
          <div className={styles.principlesGrid}>
            {content.principles.map((principle) => (
              <article key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.systemsSection} aria-labelledby="systems-title">
          <div className={styles.systemsIntro}>
            <p className={styles.overline}>SYSTEMS & CERTIFICATIONS</p>
            <h2 id="systems-title">A practical toolkit for commercial operations.</h2>
          </div>
          <div className={styles.systemsGrid}>
            <div className={styles.systemList}>{content.systems.map((system) => <span key={system}>{system}</span>)}</div>
            <div className={styles.certifications}>
              {content.certifications.map((certification) => <div key={certification}><span>SF</span><strong>{certification}</strong></div>)}
            </div>
          </div>
        </section>

        <section className={styles.closing} aria-labelledby="closing-title">
          <p className={styles.overline}>MIRIAM GONZALEZ · SENIOR SALES OPERATIONS MANAGER</p>
          <h2 id="closing-title">I build commercial operations by starting with the problem, defining the operating model and making the solution work in practice.</h2>
          <p className={styles.closingIdentity}>{content.profile.name} · {content.profile.location}</p>
          <div className={styles.actions}>
            <a className={styles.primaryButton} href={content.profile.linkedIn} target="_blank" rel="noreferrer">LinkedIn <ArrowIcon external /></a>
            <a className={styles.secondaryButton} href={`mailto:${content.profile.email}`}>Email Miriam</a>
            <Link className={styles.textLink} href="/">Main portfolio <ArrowIcon /></Link>
          </div>
        </section>
      </div>

      <footer className={styles.footer}>
        <strong>{content.profile.name}</strong>
        <span>{content.profile.role}</span>
        <span>{content.profile.location}</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
