import tcsLogo from './assets/tcs-logo.svg';

const achievements = [
  { value: '60', suffix: '+', detail: <>REST APIs<br />built &amp; maintained</> },
  { value: '25', suffix: '+', detail: <>Angular modules<br />delivered</> },
  { value: '90', suffix: '+', detail: <>UI &amp; backend<br />defects resolved</> },
  { value: '03', suffix: '', detail: <>major production<br />releases</> },
];

const workHighlights = [
  <>Built and maintained <b>60+ Spring Boot REST APIs</b> backed by Oracle.</>,
  <>Created <b>25+ Angular modules</b>, integrated end to end with backend services.</>,
  <>Implemented role-based authentication and authorization with <b>Spring Security + JWT</b>.</>,
  <>Wrote JUnit and Mockito tests; contributed to <b>3 major production releases</b>.</>,
];

const skillGroups = [
  {
    number: '01', category: 'BACKEND', glyph: '{ }', title: 'Build the core.',
    lines: <>Java · Spring Boot · REST APIs<br />Spring Security · JWT</>,
  },
  {
    number: '02', category: 'FRONTEND', glyph: '◫', title: 'Shape the experience.',
    lines: <>Angular · React<br />JavaScript · TypeScript</>,
  },
  {
    number: '03', category: 'DATA + QUALITY', glyph: '⌘', title: 'Make it dependable.',
    lines: <>Oracle · MySQL · PostgreSQL<br />JUnit · Mockito · OpenAPI</>,
  },
  {
    number: '04', category: 'DELIVERY', glyph: '↗', title: 'Ship with a team.',
    lines: <>Git · GitLab · GitHub · Jenkins<br />Docker · AWS fundamentals</>,
  },
];

function Brand() {
  return (
    <a className="brand" href="#home" aria-label="Joebin R home">
      <span className="brand-mark">J<span>.</span></span>
      <span className="brand-name">JOEBIN R</span>
    </a>
  );
}

function Header() {
  return (
    <header className="topbar">
      <Brand />
      <nav className="nav-links" aria-label="Main navigation">
        <a href="#experience">Experience</a>
        <a href="#skills">Toolkit</a>
        <a href="#about">About</a>
        <a className="nav-cta" href="#contact">Let’s talk <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  );
}

function HeroArtwork() {
  return (
    <div className="hero-art" aria-label="Decorative illustration of connected application layers" role="img">
      <div className="art-grid" />
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="orbit orbit-three" />
      <div className="core-node"><span>J</span><i /></div>
      <div className="orbit-node node-api"><span className="node-icon">{'{ }'}</span><span>API LAYER</span></div>
      <div className="orbit-node node-data"><span className="node-icon">▤</span><span>DATA</span></div>
      <div className="orbit-node node-ui"><span className="node-icon">◫</span><span>EXPERIENCE</span></div>
      <div className="art-label label-top">FROM REQUEST</div>
      <div className="art-label label-bottom">TO REAL-WORLD IMPACT <span>↗</span></div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> SYSTEMS ENGINEER · TCS</p>
        <h1>Building the<br /><span>logic</span> behind<br />the experience<span className="period">.</span></h1>
        <p className="hero-intro">
          I’m <strong>Joebin</strong> — a full stack developer who turns complex workflows into
          dependable software. I work mostly in Java and Spring Boot, and bring features all
          the way through to Angular.
        </p>
        <div className="hero-actions">
          <a className="button button-lime" href="#experience">Explore my work <span aria-hidden="true">↓</span></a>
          <a className="text-link" href="https://www.linkedin.com/in/joebinr" target="_blank" rel="noreferrer">Connect on LinkedIn <span aria-hidden="true">↗</span></a>
        </div>
        <div className="hero-meta">
          <span><b>02</b> years building</span>
          <span className="meta-divider" />
          <span>Based in <b>India</b></span>
        </div>
      </div>
      <HeroArtwork />
      <a className="scroll-cue" href="#experience"><span className="scroll-line" /> SCROLL TO EXPLORE</a>
    </section>
  );
}

function ProofStrip() {
  return (
    <section className="proof-strip" aria-label="Career highlights">
      <div className="proof-heading">IMPACT<br />IN NUMBERS</div>
      {achievements.map((item) => (
        <div className="proof-item" key={item.value}>
          <strong>{item.value}<span>{item.suffix}</span></strong>
          <small>{item.detail}</small>
        </div>
      ))}
      <div className="proof-note">Delivery is a team sport.<br /><span>15-member Agile team</span></div>
    </section>
  );
}

function SectionHeading({ number, label, title, emphasis, aside }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow"><span>{number}</span> {label}</p>
        <h2>{title}<br /><em>{emphasis}</em></h2>
      </div>
      <p className="section-aside">{aside}</p>
    </div>
  );
}

function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <SectionHeading
        number="01"
        label="EXPERIENCE"
        title="Work that moves"
        emphasis="the whole product."
        aside="From API design and access control to UI integration, testing, and production delivery."
      />
      <article className="experience-card">
        <div className="experience-topline">
          <div className="company-lockup"><img className="company-logo" src={tcsLogo} alt="Tata Consultancy Services" /></div>
          <div className="experience-tenure" aria-label="Current role, July 2024 to present">
            <span className="experience-tenure-label">CURRENT ROLE</span>
            <span className="experience-tenure-range">
              <span>JUL 2024</span><span aria-hidden="true">—</span>
              <span className="experience-tenure-present"><span className="status-dot" /> PRESENT</span>
            </span>
          </div>
        </div>
        <div className="experience-body">
          <div className="role-block">
            <h3>Systems Engineer</h3>
            <p>Full Stack Developer</p>
          </div>
          <div className="experience-details">
            <p>
              Developing secure, business-critical applications with a backend-first approach.
              I partner across the stack to take features from REST endpoints through Angular
              interfaces and into production.
            </p>
            <div className="work-highlights">
              {workHighlights.map((highlight, index) => (
                <div key={index}><span className="highlight-icon">0{index + 1}</span><span>{highlight}</span></div>
              ))}
            </div>
            <div className="tag-row">
              {['SPRING BOOT', 'ORACLE', 'ANGULAR', 'SPRING SECURITY', 'JUNIT', 'MOCKITO'].map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </div>
        </div>
        <div className="experience-foot">
          <span>DELIVERED WITH</span><span>Jenkins</span><span>GitLab</span><span>JIRA</span><span>SonarQube</span>
          <span className="foot-team">15-person Agile team</span>
        </div>
      </article>
    </section>
  );
}

function SkillCard({ number, category, glyph, title, lines }) {
  return (
    <article className="skill-card">
      <div className="skill-card-head"><span>{number} / {category}</span><span className="skill-glyph">{glyph}</span></div>
      <h3>{title}</h3>
      <p>{lines}</p>
      <div className="skill-lines" aria-hidden="true">{Array.from({ length: 12 }, (_, i) => <i key={i} />)}</div>
    </article>
  );
}

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <SectionHeading
        number="02"
        label="TOOLKIT"
        title="Tools for turning"
        emphasis="ideas into systems."
        aside="A practical toolkit across application layers, delivery, and quality."
      />
      <div className="skills-grid">
        {skillGroups.map((group) => <SkillCard key={group.number} {...group} />)}
      </div>
      <div className="learning-banner">
        <span className="learning-spark">✳</span><span className="learning-label">ON THE BENCH</span>
        <span className="learning-text">Exploring GenAI application development with <b>Spring AI</b></span>
        <span className="learning-arrow">↗</span>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="about-stamp" aria-hidden="true"><span>CURIOUS BY DESIGN</span><b>✳</b><span>ENGINEERED TO LEARN</span></div>
      <div className="about-copy">
        <p className="eyebrow"><span>03</span> A LITTLE ABOUT ME</p>
        <h2>Good software is<br />a <em>team effort.</em></h2>
        <p>
          I enjoy the details behind a dependable product: clear APIs, sensible access control,
          useful tests, and thoughtful collaboration. I bring a full stack perspective with a
          backend focus, and I’m always learning how to make the next feature better.
        </p>
        <div className="education-line">
          <span className="education-icon">✳</span>
          <span><b>B.E. Electronics &amp; Communications</b><small>Easwari Engineering College · Anna University · 2020–2024</small></span>
          <strong>8.6<small>CGPA</small></strong>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section projects-section">
      <div className="projects-card">
        <div className="projects-art" aria-hidden="true">
          <span className="project-circle circle-a" /><span className="project-circle circle-b" />
          <span className="project-cross">+</span><span className="project-caption">NEXT<br />BUILD</span>
        </div>
        <div className="projects-copy">
          <p className="eyebrow"><span>04</span> PERSONAL PROJECTS</p>
          <h2>The next chapter<br />is <em>in progress.</em></h2>
          <p>Public project showcases are being prepared. This space will feature original builds with clear architecture, setup instructions, and the decisions behind the code.</p>
          <span className="project-status"><i /> PROJECTS COMING SOON</span>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <p className="eyebrow"><span>05</span> OPEN TO WHAT’S NEXT</p>
      <h2>Let’s build<br /><em>something useful.</em></h2>
      <p>Interested in backend or full stack opportunities at product companies.</p>
      <a className="button button-lime" href="https://www.linkedin.com/in/joebinr" target="_blank" rel="noreferrer">Say hello on LinkedIn <span aria-hidden="true">↗</span></a>
      <div className="contact-orbit" aria-hidden="true"><span /><i>J</i></div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <Brand />
      <span className="footer-note">JAVA-LEANING · FULL STACK · ALWAYS LEARNING</span>
      <a href="https://www.linkedin.com/in/joebinr" target="_blank" rel="noreferrer">LINKEDIN ↗</a>
      <span className="copyright">© 2026 JOEBIN R</span>
    </footer>
  );
}

export default function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <ProofStrip />
        <Experience />
        <Skills />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
