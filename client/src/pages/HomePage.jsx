import { Link } from 'react-router-dom'
import Hero from '../components/Hero'

const services = [
  {
    icon: '🎨',
    title: 'Frontend Development',
    desc: 'Responsive, pixel-perfect UIs with React.js, modern CSS, and component-based architecture.',
  },
  {
    icon: '🧪',
    title: 'QA Automation',
    desc: 'Java + Selenium frameworks using page-object model, data-driven testing, and CI/CD integration.',
  },
  {
    icon: '⚙️',
    title: 'Backend Development',
    desc: 'RESTful APIs with Node.js and Express — scalable, maintainable, and production-ready.',
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="services">
        <div className="container">
          <div className="services-header">
            <span className="section-label">What I Do</span>
            <h2 className="section-title">How I can help you</h2>
            <p className="section-subtitle">
              From building UIs to automating test suites — I bring quality across the full stack
            </p>
          </div>

          <div className="services-grid">
            {services.map((s, i) => (
              <div key={s.title} className={`service-card reveal reveal-delay-${i + 1}`}>
                <div className="service-icon">{s.icon}</div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="services-cta">
            <Link to="/projects" className="btn btn-primary">See My Projects →</Link>
            <Link to="/about" className="btn btn-outline">Learn About Me</Link>
          </div>
        </div>
      </section>
    </>
  )
}
