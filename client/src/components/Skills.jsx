import { useEffect, useRef } from 'react'

const categories = [
  {
    icon: '🎨',
    title: 'Frontend',
    skills: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Responsive Design', 'Component Architecture'],
  },
  {
    icon: '⚙️',
    title: 'Backend & Languages',
    skills: ['Node.js',  'REST APIs', 'Java', 'OOP'],
  },
  {
    icon: '🧪',
    title: 'Testing & QA',
    skills: ['Selenium WebDriver', 'JUnit', 'Test Automation', 'Regression Testing', 'Functional Testing', 'Page Object Model'],
  },
  {
    icon: '🔧',
    title: 'Tools & Concepts',
    skills: ['Git', 'GitHub', 'GitHub Copilot', 'VS Code', 'JIRA', 'Agile/Scrum', 'CI/CD', 'SDLC/STLC'],
  },
]

export default function Skills() {
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
    <section className="skills" id="skills" ref={ref}>
      <div className="container">
        <div className="skills-header reveal">
          <span className="section-label">Expertise</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I work with across development, testing, and automation
          </p>
        </div>

        <div className="skills-grid">
          {categories.map((cat, i) => (
            <div key={cat.title} className={`skill-category reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="skill-category-header">
                <div className="skill-category-icon">{cat.icon}</div>
                <h3 className="skill-category-title">{cat.title}</h3>
              </div>
              <div className="skill-tags">
                {cat.skills.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
