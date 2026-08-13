import { useEffect, useRef } from 'react'

const categories = [
  {
    icon: '🎨',
    title: 'Frontend',
    skills: ['React.js', 'React Native', 'Expo', 'Expo Router', 'Redux Toolkit', 'React Navigation', 'Responsive Design', 'Component Architecture'],
  },
  {
    icon: '💻',
    title: 'Languages',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Java'],
  },
  {
    icon: '⚙️',
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    icon: '🔧',
    title: 'Tools',
    skills: ['Git', 'GitHub', 'GitHub Copilot', 'VS Code', 'Netlify'],
  },
  {
    icon: '📐',
    title: 'Concepts',
    skills: ['Agile / Scrum', 'CI/CD Fundamentals', 'OOP', 'Data Science'],
  },
  {
    icon: '🧪',
    title: 'Test Automation',
    skills: ['Selenium WebDriver', 'JUnit', 'Regression Testing'],
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
            Technologies and tools I work with across frontend and full-stack development
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
