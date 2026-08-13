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
            </div>
          </div>

          <div className="reveal reveal-delay-1">
            <span className="section-label">About Me</span>
            <h2 className="section-title">
              Crafting quality<br />
              <span className="gradient-text">software</span>
            </h2>

            <p className="about-bio">
              I'm a Frontend Developer who builds fast, accessible, and maintainable interfaces with
              React, TypeScript, and modern CSS. I care about component architecture, readable code, and
              UIs that behave exactly the way users expect.
              <br /><br />
              My path into frontend runs through quality engineering, where I designed automated test
              frameworks and caught defects early in the development cycle. That background shaped how I
              write code today — I think about edge cases, cross-browser behavior, and reliability from
              the start.
              <br /><br />
              Right now I'm shipping full apps end to end with React, React Native, and Node.js, and
              looking for a team where frontend quality isn't an afterthought.
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
