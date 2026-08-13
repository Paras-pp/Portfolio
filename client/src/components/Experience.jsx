import { useEffect, useRef } from 'react'

const jobs = [
  {
    role: 'Frontend Developer',
    company: 'Thrinaina Informatics Pvt Ltd',
    companyNote: 'Freelance',
    period: 'Apr 2026 – Present',
    location: 'Hyderabad, Telangana · Remote',
    bullets: [
      'Built responsive, cross-browser interfaces using React, TypeScript, and modern CSS.',
      'Created reusable component libraries, cutting development time by ~30%.',
      'Optimized performance with lazy loading and code splitting, improving load times by ~40%.',
      'Integrated REST and GraphQL APIs in collaboration with backend teams.',
      'Translated Figma designs into pixel-perfect, accessible (WCAG 2.1 AA) UIs.',
    ],
  },
  {
    role: 'Software Engineer – Quality & Automation',
    company: 'LTIMindtree',
    period: 'Apr 2025 – Apr 2026',
    bullets: [
      'Design and implement automated test frameworks using Java + Selenium, reducing manual regression effort by ~40%.',
      'Develop reusable test utilities and page-object models to improve maintainability and reduce code duplication.',
      'Collaborate with development teams during sprint reviews to identify defects early in the SDLC.',
      'Leverage GitHub Copilot to accelerate test script development and enforce coding standards across the QA codebase.',
    ],
  },
  {
    role: 'Quality Engineer',
    company: 'LTIMindtree',
    period: 'Nov 2024 – Apr 2025',
    bullets: [
      'Validated end-to-end application functionality across web and API layers; maintained defect logs in JIRA.',
      'Actively participated in test planning, test case design, and sprint retrospectives in an Agile environment.',
      'Contributed to knowledge-sharing sessions on automation frameworks, elevating team capability.',
      'Maintained high quality standards through systematic regression and sanity test cycles before each release.',
    ],
  },
  {
    role: 'Graduate Apprentice – Software Testing',
    company: 'LTIMindtree',
    period: 'Aug 2024 – Nov 2024',
    bullets: [
      'Completed structured training in Java, Selenium, and software testing methodologies within SDLC/STLC frameworks.',
      'Assisted senior engineers in test execution, defect documentation, and test environment setup.',
      'Built foundational knowledge in automation basics and contributed to test data preparation.',
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'))
      }),
      { threshold: 0.08 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="experience" id="experience" ref={ref}>
      <div className="container">
        <div className="experience-header reveal">
          <span className="section-label">Career</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            2+ years across QA automation at LTIMindtree and freelance frontend development
          </p>
        </div>

        <div className="exp-timeline">
          {jobs.map((job, i) => (
            <div key={i} className={`exp-item reveal reveal-delay-${i + 1}`}>
              <span className="exp-dot" />
              <div className="exp-card">
                <div className="exp-card-top">
                  <span className="exp-role">{job.role}</span>
                  <span className="exp-period">{job.period}</span>
                </div>
                <p className="exp-company">
                  <strong>{job.company}</strong>{job.companyNote ? ` · ${job.companyNote}` : ''} · {job.location || 'Pune, Maharashtra'}
                </p>
                <ul className="exp-bullets">
                  {job.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div className="exp-item reveal reveal-delay-3">
            <span className="exp-dot" style={{ background: 'var(--indigo-200)', borderColor: 'var(--indigo-100)' }} />
            <div className="exp-edu-card">
              <div className="edu-icon">🎓</div>
              <div>
                <p className="edu-degree">B.E. – Electronics & Telecommunication Engg. with Data Science Honors</p>
                <p className="edu-school">Dr. D.Y. Patil Institute of Technology, Pune · SPPU</p>
                <p className="edu-year">2019 – 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
