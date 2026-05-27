import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMobileMenu, closeMobileMenu, setScrolled } from '../features/ui/uiSlice'

const links = [
  { href: '#about',      label: 'About'      },
  { href: '#experience', label: 'Experience' },
  { href: '#skills',     label: 'Skills'     },
  { href: '#projects',   label: 'Projects'   },
  { href: '#contact',    label: 'Contact'    },
]

export default function Navbar() {
  const dispatch = useDispatch()
  const { scrolled, mobileMenuOpen } = useSelector(state => state.ui)

  useEffect(() => {
    const onScroll = () => dispatch(setScrolled(window.scrollY > 20))
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [dispatch])

  const close = () => dispatch(closeMobileMenu())

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#home" className="navbar-logo" onClick={close}>
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

        <button
          className={`hamburger${mobileMenuOpen ? ' open' : ''}`}
          onClick={() => dispatch(toggleMobileMenu())}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="mobile-link"
              onClick={close}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary mobile-cta" onClick={close}>
            Hire Me
          </a>
        </div>
      )}
    </nav>
  )
}
