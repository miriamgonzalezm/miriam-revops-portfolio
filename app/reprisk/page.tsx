import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";
import { ArrowIcon } from "@/components/ArrowIcon";
import { repriskPortfolio as content } from "@/content/reprisk";
import styles from "../relay/relay.module.css";
import repriskStyles from "./reprisk.module.css";

export const metadata: Metadata = {
  title: "Miriam Gonzalez | GTM Operations, CPQ & Revenue Cloud",
  description:
    "Selected work relevant to RepRisk: Salesforce CPQ, lead-to-cash governance, MEDDIC operationalisation and hands-on Revenue Cloud migration preparation.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Miriam Gonzalez | GTM Transformation & Revenue Operations",
    description:
      "Hands-on Salesforce CPQ, lead-to-cash governance, sales methodology and Revenue Cloud migration preparation.",
    type: "website",
  },
};

export default function RepRiskPage() {
  return (
    <main className={styles.page} id="top">
      <a className={styles.skipLink} href="#main-content">Skip to content</a>

      <header className={styles.header}>
        <Link href="/reprisk" className={styles.wordmark} aria-label="Miriam Gonzalez, RepRisk portfolio">MG</Link>
        <nav className={styles.nav} aria-label="Page navigation">
          <a href="#priorities">Priorities</a>
          <a href="#work">Selected work</a>
          <a href="#experience">Operating evidence</a>
          <a href="#systems">Systems</a>
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
            <a className={styles.primaryButton} href="#work">View selected work <ArrowIcon /></a>
            <p className={styles.proofLine}>{content.profile.proofLine}</p>
          </div>

          <aside className={styles.proofPanel} aria-label="Candidate evidence summary">
            <div className={styles.proofPanelTop}><span>Evidence at a glance</span></div>
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

        <section className={styles.methodSection} id="priorities" aria-labelledby="priorities-title">
          <div className={styles.sectionHeading}>
            <p className={styles.overline}>TRANSFORMATION PRIORITIES</p>
            <h2 id="priorities-title">From trusted CRM data to controlled revenue execution.</h2>
          </div>
          <ol className={styles.methodGrid}>
            {content.priorities.map((priority) => (
              <li key={priority.number}>
                <div className={styles.methodTop}><span>{priority.number}</span></div>
                <h3>{priority.title}</h3>
                <p>{priority.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.flowSection} aria-labelledby="model-title">
          <div className={styles.motionView}>
            <p className={styles.overline}>COMMERCIAL OPERATING MODEL</p>
            <h2 id="model-title">{content.commercialModel.title}</h2>
            <p>{content.commercialModel.body}</p>
            <blockquote className={styles.motionQuote}>{content.commercialModel.pullQuote}</blockquote>
          </div>
          <div className={repriskStyles.processFlow}>
            <p className={repriskStyles.processHeader}>LEAD → OPPORTUNITY → QUOTE → CONTRACT → REVENUE → RENEWAL</p>
            <div className={repriskStyles.processGroups}>
              {content.leadToCashFlow.groups.map((group) => (
                <section className={repriskStyles.processGroup} key={group.label} aria-label={group.label}>
                  <h3>{group.label}</h3>
                  <ol>
                    {group.steps.map((step) => (
                      <li key={step.number}>
                        <span className={repriskStyles.stepNumber}>{step.number}</span>
                        <div className={repriskStyles.stepCopy}>
                          <strong>{step.title}</strong>
                          {"note" in step && step.note && <small>{step.note}</small>}
                        </div>
                        <span className={repriskStyles.systemChip}>{step.chip}</span>
                      </li>
                    ))}
                  </ol>
                </section>
              ))}
            </div>
            <div className={repriskStyles.foundationBand}>
              <p>Foundation · across every step</p>
              <ul>
                {content.leadToCashFlow.foundation.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <p className={repriskStyles.processNote}>{content.leadToCashFlow.note}</p>
          </div>
        </section>

        <section className={styles.workSection} id="work" aria-labelledby="work-title">
          <div className={styles.sectionHeading}>
            <p className={styles.overline}>SELECTED WORK</p>
            <h2 id="work-title">Commercial architecture built from the rules underneath it.</h2>
          </div>

          <div className={styles.flagshipList}>
            {content.flagshipCases.map((caseStudy) => (
              <Fragment key={caseStudy.number}>
                <article className={styles.flagshipCase}>
                  <div className={styles.caseHeader}>
                    <span className={styles.caseNumber}>{caseStudy.number}</span>
                    <div>
                      <p className={styles.caseEyebrow}>{caseStudy.eyebrow}</p>
                      <h3>{caseStudy.title}</h3>
                      <p className={styles.relevance}>{caseStudy.relevance.join(" · ")}</p>
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
                      {"migrationConsiderations" in caseStudy && caseStudy.migrationConsiderations && (
                        <div className={repriskStyles.migrationConsiderations}>
                          <h4>Migration considerations I&apos;m working through</h4>
                          <ul>
                            {caseStudy.migrationConsiderations.map((consideration) => (
                              <li key={consideration}>{consideration}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    <aside className={styles.impactBlock}>
                      <h4>Outcome</h4>
                      <p className={styles.impactTitle}>{caseStudy.impactTitle}</p>
                      {"proofLine" in caseStudy && caseStudy.proofLine && (
                        <p className={styles.caseProofLine}>{caseStudy.proofLine}</p>
                      )}
                      <blockquote className={styles.caseQuote}>{caseStudy.pullQuote}</blockquote>
                    </aside>
                  </div>
                </article>

                {caseStudy.number === "02" && (
                  <section className={repriskStyles.spicedSection} aria-labelledby="spiced-title">
                    <div className={repriskStyles.spicedHeading}>
                      <p className={styles.overline}>SALES METHODOLOGY IN THE OPERATING MODEL</p>
                      <h2 id="spiced-title">Operationalising SPICED in Salesforce</h2>
                      <p>{content.spiced.introduction}</p>
                    </div>

                    <div className={repriskStyles.tableFrame}>
                      <table>
                        <thead>
                          <tr>
                            <th scope="col">Stage</th>
                            <th scope="col">SPICED captured</th>
                            <th scope="col">Exit criteria</th>
                          </tr>
                        </thead>
                        <tbody>
                          {content.spiced.stages.map((row) => (
                            <tr key={row.stage}>
                              <th scope="row" data-label="Stage">{row.stage}</th>
                              <td data-label="SPICED captured">{row.captured}</td>
                              <td data-label="Exit criteria">{row.exitCriteria}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className={repriskStyles.spicedLegend}>{content.spiced.legend}</p>

                    <div className={repriskStyles.spicedPoints}>
                      {content.spiced.operatingPoints.map((point, index) => (
                        <article key={point}>
                          <span>0{index + 1}</span>
                          <p>{point}</p>
                        </article>
                      ))}
                    </div>
                  </section>
                )}
              </Fragment>
            ))}
          </div>

          <div className={styles.additionalProof} id="experience">
            <h3>Additional operating proof</h3>
            <div className={styles.proofCards}>
              {content.additionalProof.map((item) => (
                <article key={item.title}>
                  <p className={styles.additionalLabel}>{item.title}</p>
                  <h4>{item.subtitle}</h4>
                  <p>{item.body}</p>
                  <p className={styles.additionalRelevance}>{item.relevance.join(" · ")}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.principlesSection} aria-labelledby="principles-title">
          <div className={styles.sectionHeading}>
            <p className={styles.overline}>DESIGN PRINCIPLES</p>
            <h2 id="principles-title">How I approach commercial transformation.</h2>
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

        <section className={styles.systemsSection} id="systems" aria-labelledby="systems-title">
          <div className={styles.systemsIntro}>
            <p className={styles.overline}>SYSTEMS & CERTIFICATIONS</p>
            <h2 id="systems-title">Systems used to build and govern the revenue process.</h2>
          </div>
          <div className={styles.systemsGrid}>
            <div className={styles.systemList}>{content.systems.map((system) => <span key={system}>{system}</span>)}</div>
            <div className={styles.certifications}>
              {content.certifications.map((certification) => (
                <div key={certification}><span>SF</span><strong>{certification}</strong></div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.closing} aria-labelledby="closing-title">
          <p className={styles.overline}>MIRIAM GONZALEZ · SENIOR SALES OPERATIONS MANAGER</p>
          <h2 id="closing-title">I translate commercial complexity into Salesforce processes that sellers can use, leaders can trust and Finance can follow.</h2>
          <p className={styles.closingIdentity}>{content.profile.name} · {content.profile.location}</p>
          <div className={styles.actions}>
            <a className={styles.primaryButton} href={content.profile.linkedIn} target="_blank" rel="noreferrer">LinkedIn <ArrowIcon external /></a>
            <a className={styles.secondaryButton} href={`mailto:${content.profile.email}`}>Email Miriam</a>
          </div>
        </section>
      </div>

      <footer className={styles.footer}>
        <strong>{content.profile.name}</strong>
        <span>GTM & Revenue Operations</span>
        <span>{content.profile.location}</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
