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
            <div className="avatar-wrapper">
              <div className="avatar-frame">
                <img
                  src="/profile.jpg"
                  alt="Paras Pandita"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    transform: 'scale(1.1)',
                    borderRadius: 'inherit',
                  }}
                />
              </div>
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
              I started my career breaking things on purpose — writing test suites, hunting edge cases, figuring out
              exactly why something failed under load. That taught me how software actually works, and what
              "done" really means.
              <br /><br />
              When I moved into frontend development, I brought that same obsession with correctness.
              I care about component architecture, readable code, and UIs that behave predictably.
              I don't just build features — I think about what happens when they break.
              <br /><br />
              Right now I'm deepening my React and Node.js skills, building projects, and looking for a team
              where quality isn't an afterthought.
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
