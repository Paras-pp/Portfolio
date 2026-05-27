import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const roles = [
  'Frontend Developer',
  'Software Engineer',
]

const GithubIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const MailIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
)

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIdx]
    let timer

    if (!deleting && text === current) {
      timer = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && text === '') {
      setDeleting(false)
      setRoleIdx(i => (i + 1) % roles.length)
    } else {
      timer = setTimeout(() => {
        setText(prev => deleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1))
      }, deleting ? 55 : 95)
    }

    return () => clearTimeout(timer)
  }, [text, deleting, roleIdx])

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-grid">

          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Available for Immediate Joining
            </div>

            <h1 className="hero-name">
              Hi, I'm{' '}
              <span className="gradient-text">Paras Pandita</span>
            </h1>

            <div className="hero-role">
              <span className="typewriter-text">{text}</span>
              <span className="typewriter-cursor" />
            </div>

            <p className="hero-description">
              Software Engineer at{' '}
              <strong style={{ color: 'var(--gray-700)' }}>LTIMindtree</strong>{' '}
              crafting React frontends and Node.js backends with a quality-first mindset.
              2 years of production experience shipping scalable web applications —
              from pixel-perfect UIs to automated test frameworks — with a consistent
              focus on clean architecture, performance, and maintainable code.
              <span style={{ display: 'block', marginTop: '10px', fontSize: '0.9rem', color: 'var(--gray-400)' }}>
                📍 Pune, Maharashtra &nbsp;·&nbsp; 🎓 B.E. Electronics & Telecommunication &amp; Data Science &nbsp;·&nbsp; 🏅 GitHub Copilot Certified
              </span>
            </p>

            <div className="hero-actions">
              <Link to="/projects" className="btn btn-primary">View My Work →</Link>
              <Link to="/contact"  className="btn btn-outline">Get In Touch</Link>
            </div>

            <div className="hero-social">
              <span className="hero-social-label">Find me on</span>
              <a href="https://github.com/Paras-pp" className="social-link" target="_blank" rel="noopener noreferrer" title="GitHub">
                <GithubIcon />
              </a>
              <a href="https://linkedin.com/in/paras-pandita" className="social-link" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <LinkedinIcon />
              </a>
              <a href="mailto:paras.pandita1999@gmail.com" className="social-link" title="Email">
                <MailIcon />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="code-window">
              <div className="code-window-header">
                <span className="code-dot code-dot-red" />
                <span className="code-dot code-dot-yellow" />
                <span className="code-dot code-dot-green" />
                <span className="code-filename">developer.js</span>
              </div>
              <div className="code-body">
                <span className="code-line"><span className="c-comment">// Paras Pandita</span></span>
                <span className="code-line"><span className="c-keyword">const </span><span className="c-var">dev</span><span className="c-punct"> = {'{'}</span></span>
                <span className="code-line">{'  '}<span className="c-prop">name</span><span className="c-punct">: </span><span className="c-string">"Paras Pandita"</span><span className="c-punct">,</span></span>
                <span className="code-line">{'  '}<span className="c-prop">role</span><span className="c-punct">: </span><span className="c-string">"Frontend Developer"</span><span className="c-punct">,</span></span>
                <span className="code-line">{'  '}<span className="c-prop">company</span><span className="c-punct">: </span><span className="c-string">"LTIMindtree"</span><span className="c-punct">,</span></span>
                <span className="code-line">{'  '}<span className="c-prop">stack</span><span className="c-punct">: [</span></span>
                <span className="code-line">{'    '}<span className="c-string">"React"</span><span className="c-punct">, </span><span className="c-string">"Node.js"</span><span className="c-punct">,</span></span>
                <span className="code-line">{'    '}<span className="c-string">"Java"</span><span className="c-punct">, </span><span className="c-string">"Selenium"</span></span>
                <span className="code-line">{'  '}<span className="c-punct">],</span></span>
                <span className="code-line">{'  '}<span className="c-prop">location</span><span className="c-punct">: </span><span className="c-string">"Pune, MH"</span><span className="c-punct">,</span></span>
                <span className="code-line">{'  '}<span className="c-prop">openToWork</span><span className="c-punct">: </span><span className="c-keyword">true</span></span>
                <span className="code-line"><span className="c-punct">{'}'}</span><span className="c-punct">;</span></span>
                <span className="code-line"> </span>
                <span className="code-line"><span className="c-fn">console</span><span className="c-punct">.</span><span className="c-fn">log</span><span className="c-bracket">(</span></span>
                <span className="code-line">{'  '}<span className="c-string">"Let's build something! 🚀"</span></span>
                <span className="code-line"><span className="c-bracket">)</span><span className="c-punct">;</span></span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
