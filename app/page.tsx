import { ArrowIcon } from "@/components/ArrowIcon";
import { experience, earlierExperience } from "@/content/experience";
import { operatingAreas, projects } from "@/content/projects";
import { certifications, operatingRange, profile, systems, workingMethod } from "@/content/profile";

const navigation = [
  { label: "Work", href: "#work" },
  { label: "Approach", href: "#approach" },
  { label: "About", href: "#about" },
  { label: "Systems", href: "#systems" }
];

export default function Home() {
  const [flagship, ...selectedProjects] = projects;

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="shell nav-shell">
          <a className="wordmark" href="#top" aria-label="Miriam Gonzalez, home"><span>MG</span><strong>Miriam Gonzalez</strong></a>
          <nav aria-label="Primary navigation">
            {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
          <a className="nav-contact" href={`mailto:${profile.email}`}>Contact <ArrowIcon /></a>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">{profile.title}</p>
              <h1>{profile.headline}</h1>
              <p className="hero-intro">{profile.introduction}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">View Selected Work <ArrowIcon /></a>
                <a className="button button-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowIcon external /></a>
              </div>
              <p className="hero-meta">{profile.location}<span />{profile.context}<span />{profile.credential}</p>
            </div>
            <aside className="hero-system" aria-label="Revenue operations model">
              <div className="system-top"><span>Operating model</span><span>01 / 05</span></div>
              <div className="system-core"><span>Commercial<br />clarity</span></div>
              <ol>
                <li><span>01</span>Process Design</li>
                <li><span>02</span>Systems</li>
                <li><span>03</span>Data</li>
                <li><span>04</span>Governance</li>
                <li><span>05</span>Adoption</li>
              </ol>
            </aside>
          </div>
        </section>

        <section className="section range-section" aria-labelledby="range-title">
          <div className="shell">
            <div className="section-heading split-heading">
              <p className="kicker">Operating range</p>
              <h2 id="range-title">The work between strategy and a system that holds up.</h2>
            </div>
            <div className="range-grid">
              {operatingRange.map((item, index) => (
                <article className="range-card" key={item.title}>
                  <span className="card-number">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
            <div className="formula" aria-label="Process Design times Systems times Data times Governance times Adoption">
              {['Process Design', 'Systems', 'Data', 'Governance', 'Adoption'].map((item, index) => (
                <span key={item}>{index > 0 && <b>×</b>}{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section work-section" id="work" aria-labelledby="work-title">
          <div className="shell">
            <div className="section-heading split-heading light-heading">
              <p className="kicker">Selected work</p>
              <h2 id="work-title">Operations designed to be used, trusted and repeated.</h2>
            </div>

            <article className="flagship">
              <div className="project-index">{flagship.number}<span>Flagship case study</span></div>
              <div className="flagship-main">
                <h3>{flagship.title}</h3>
                <div className="tags">{flagship.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="project-narrative">
                  <div><h4>Challenge</h4><p>{flagship.challenge}</p></div>
                  <div><h4>Solution</h4><p>{flagship.solution}</p></div>
                </div>
                <div className="checks-panel">
                  <p>Operational checks include</p>
                  <ul>{flagship.highlights?.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
                <div className="project-narrative secondary-narrative">
                  {flagship.sections?.map((section) => <div key={section.heading}><h4>{section.heading}</h4><p>{section.body}</p></div>)}
                </div>
              </div>
              <div className="impact-rail">
                {flagship.impact?.map((item) => <div className="metric" key={item.value}><strong>{item.value}</strong><span>{item.label}</span></div>)}
                <blockquote>“{flagship.closing}”</blockquote>
              </div>
            </article>

            <div className="project-grid">
              {selectedProjects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="project-card-top"><span>{project.number}</span><div className="tags compact-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
                  <h3>{project.title}</h3>
                  <div className="card-body"><h4>Challenge</h4><p>{project.challenge}</p></div>
                  {project.sections?.map((section) => <div className="card-body" key={section.heading}><h4>{section.heading}</h4><p>{section.body}</p></div>)}
                  {project.highlights && <ul className="designed-list">{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul>}
                  {project.impact && <div className="card-metrics">{project.impact.map((item) => <div key={item.value}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div>}
                  <blockquote>“{project.closing}”</blockquote>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section operating-areas" aria-labelledby="areas-title">
          <div className="shell">
            <div className="section-heading split-heading"><p className="kicker">Also in scope</p><h2 id="areas-title">The recurring work that keeps revenue operations moving.</h2></div>
            <div className="areas-list">
              {operatingAreas.map((area, index) => <article key={area.title}><span>0{index + 1}</span><h3>{area.title}</h3><p>{area.description}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section approach-section" id="approach" aria-labelledby="approach-title">
          <div className="shell">
            <div className="section-heading split-heading"><p className="kicker">How I work</p><h2 id="approach-title">From friction to adopted system</h2></div>
            <div className="method-grid">
              {workingMethod.map((step) => <article key={step.number}><span>{step.number}</span><h3>{step.title}</h3><strong>{step.question}</strong><p>{step.description}</p></article>)}
            </div>
            <p className="method-closing">Technology is only useful when it changes how the business operates.</p>
          </div>
        </section>

        <section className="section about-section" id="about" aria-labelledby="about-title">
          <div className="shell about-grid">
            <div className="about-copy">
              <p className="kicker">About</p>
              <h2 id="about-title">{profile.aboutHeadline}</h2>
              {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <aside className="career" aria-labelledby="career-title">
              <p className="kicker" id="career-title">Career snapshot</p>
              <ol>{experience.map((item) => <li key={`${item.years}-${item.role}`}><span>{item.years}</span><div><strong>{item.role}</strong><p>{item.company}{'context' in item && item.context && <> · {item.context}</>}</p></div></li>)}</ol>
              <div className="earlier"><span>Earlier experience</span><strong>{earlierExperience}</strong></div>
            </aside>
          </div>
        </section>

        <section className="section systems-section" id="systems" aria-labelledby="systems-title">
          <div className="shell systems-grid">
            <div>
              <p className="kicker">Systems</p>
              <h2 id="systems-title">A practical GTM systems toolkit.</h2>
              <div className="systems-list">{systems.map((system) => <div key={system.name}><strong>{system.name}</strong>{'detail' in system && system.detail && <span>{system.detail}</span>}</div>)}</div>
            </div>
            <div className="certifications">
              <p className="kicker">Certifications</p>
              {certifications.map((certification) => <div key={certification}><span>SF</span><strong>{certification}</strong></div>)}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="shell contact-grid">
            <div><p className="kicker">Let’s connect</p><h2 id="contact-title">{profile.finalHeadline}</h2></div>
            <div><p>{profile.finalCopy}</p><a className="button button-light" href={profile.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowIcon external /></a><a className="email-link" href={`mailto:${profile.email}`}>{profile.email}</a></div>
          </div>
        </section>
      </main>

      <footer><div className="shell"><strong>{profile.name}</strong><span>Revenue Operations & GTM Systems</span><span>Woking, UK</span><a href="#top">Back to top ↑</a></div></footer>
    </>
  );
}
