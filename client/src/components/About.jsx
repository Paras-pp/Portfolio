import { useEffect, useRef } from 'react'

const stats = [
  { number: '~2', label: 'Years Exp.' },
  { number: '2+', label: 'Projects'   },
  { number: '10+', label: 'Technologies' },
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
              Results-driven Software Engineer with ~2 years of experience at <strong>LTIMindtree</strong> spanning
              quality engineering and transitioning into frontend development. Proficient in Java, Selenium,
              React, and Node.js with a solid foundation in SDLC/STLC. Actively expanding expertise in modern
              front-end and back-end technologies. Seeking a developer role to build scalable, high-quality software.
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
