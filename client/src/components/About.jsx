import { useEffect, useRef } from 'react'

const stats = [
  { number: '~2', label: 'Years Exp.' },
  { number: '3+', label: 'Projects'   },
  { number: '15+', label: 'Technologies' },
]

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'))
      }),
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="about" id="about" ref={ref}>
      <div className="container">
        <div className="about-grid">

          <div className="about-visual reveal">
            <div className="avatar-frame">
              👨‍💻
              <div className="avatar-badge">
                <div className="avatar-badge-icon">📍</div>
                <div>
                  <div className="stat-label">Location</div>
                  <div style={{ fontWeight: 700, color: 'var(--indigo-600)', fontSize: '0.875rem' }}>Pune, MH</div>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal reveal-delay-1">
            <span className="section-label">About Me</span>
            <h2 className="section-title">
              Crafting quality<br />
              <span className="gradient-text">software</span>
            </h2>

            <p className="about-bio">
              Software Engineer at <strong>LTIMindtree</strong> with ~2 years of experience spanning QA automation
              and frontend development. Built Java + Selenium frameworks that cut regression effort by ~40%, then
              channelled that same precision into React and Node.js. I write well-tested, maintainable code —
              because shipping quality was never optional. Now actively seeking a frontend or full-stack developer role.
            </p>

            <div className="cert-badge">
              <div className="cert-badge-icon">🏅</div>
              <span><strong>GitHub Copilot Fundamentals</strong> — Microsoft · Dec 2025</span>
            </div>

            <div className="about-stats">
              {stats.map(s => (
                <div key={s.label} className="stat-card">
                  <div className="stat-number">{s.number}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            <a
              href="/Paras_Pandita.pdf"
              download
              className="btn btn-primary"
            >
              Download CV ↓
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
