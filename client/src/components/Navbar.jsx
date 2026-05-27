import { useState, useEffect } from 'react'

const links = [
  { href: '#about',      label: 'About'      },
  { href: '#experience', label: 'Experience' },
  { href: '#skills',     label: 'Skills'     },
  { href: '#projects',   label: 'Projects'   },
  { href: '#contact',    label: 'Contact'    },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#home" className="navbar-logo">
          Paras<span>.</span>
        </a>

        <ul className="navbar-links">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="navbar-cta">
          <a href="#contact" className="btn btn-primary">Hire Me</a>
        </div>

        <button className="hamburger" aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
