import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMobileMenu, closeMobileMenu, setScrolled } from '../features/ui/uiSlice'

const links = [
  { to: '/',         label: 'Home'     },
  { to: '/about',    label: 'About'    },
  { to: '/projects', label: 'Projects' },
  { to: '/contact',  label: 'Contact'  },
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
        <Link to="/" className="navbar-logo" onClick={close}>
          Paras<span>.</span>
        </Link>

        <ul className="navbar-links">
          {links.map(l => (
            <li key={l.to}>
              <Link to={l.to}>{l.label}</Link>
            </li>
          ))}
        </ul>

        <div className="navbar-cta">
          <Link to="/contact" className="btn btn-primary" onClick={close}>
            Hire Me
          </Link>
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
            <Link
              key={l.to}
              to={l.to}
              className="mobile-link"
              onClick={close}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="btn btn-primary mobile-cta" onClick={close}>
            Hire Me
          </Link>
        </div>
      )}
    </nav>
  )
}
