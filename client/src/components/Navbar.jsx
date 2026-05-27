import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMobileMenu, closeMobileMenu, setScrolled } from '../features/ui/uiSlice'

const links = [
  { to: '/about',    label: 'About'    },
  { to: '/projects', label: 'Projects' },
  { to: '/contact',  label: 'Contact'  },
]

const navClass = ({ isActive }) => isActive ? 'nav-active' : undefined

export default function Navbar() {
  const dispatch = useDispatch()
  const { scrolled, mobileMenuOpen } = useSelector(state => state.ui)

  useEffect(() => {
    const onScroll = () => dispatch(setScrolled(window.scrollY > 20))
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [dispatch])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-logo" onClick={() => dispatch(closeMobileMenu())}>
          Paras<span>.</span>
        </NavLink>

        <ul className="navbar-links">
          {links.map(l => (
            <li key={l.to}>
              <NavLink to={l.to} className={navClass}>{l.label}</NavLink>
            </li>
          ))}
        </ul>

        <div className="navbar-cta">
          <NavLink to="/contact" className="btn btn-primary">Hire Me</NavLink>
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
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => `mobile-link${isActive ? ' nav-active' : ''}`}
              onClick={() => dispatch(closeMobileMenu())}
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="btn btn-primary mobile-cta"
            onClick={() => dispatch(closeMobileMenu())}
          >
            Hire Me
          </NavLink>
        </div>
      )}
    </nav>
  )
}
