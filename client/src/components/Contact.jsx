import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateField, submitContact } from '../features/contact/contactSlice'

export default function Contact() {
  const dispatch = useDispatch()
  const { form, status, error } = useSelector(state => state.contact)
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

  const update = field => e =>
    dispatch(updateField({ field, value: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(submitContact(form))
  }

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="container">
        <div className="contact-grid">

          <div className="reveal">
            <span className="section-label">Contact</span>
            <h2 className="section-title">
              Let's work<br />
              <span className="gradient-text">together</span>
            </h2>
            <p className="contact-text">
              I'm available for immediate joining and open to frontend developer,
              full-stack, and QA automation roles. Let's connect!
            </p>

            <div className="contact-items">
              <a href="mailto:paras.pandita1999@gmail.com" className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <div className="contact-item-label">Email</div>
                  <div className="contact-item-value">paras.pandita1999@gmail.com</div>
                </div>
              </a>
              <a href="tel:+917006353235" className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <div className="contact-item-label">Phone</div>
                  <div className="contact-item-value">+91 7006353235</div>
                </div>
              </a>
              <a href="https://linkedin.com/in/paras-pandita-084b57201" className="contact-item" target="_blank" rel="noopener noreferrer">
                <div className="contact-icon">💼</div>
                <div>
                  <div className="contact-item-label">LinkedIn</div>
                  <div className="contact-item-value">linkedin.com/in/paras-pandita-084b57201</div>
                </div>
              </a>
              <div className="contact-item" style={{ cursor: 'default' }}>
                <div className="contact-icon">📍</div>
                <div>
                  <div className="contact-item-label">Location</div>
                  <div className="contact-item-value">Pune, Maharashtra</div>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal reveal-delay-1">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Name *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Your name"
                    value={form.name}
                    onChange={update('name')}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email *</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={update('email')}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="How can I help?"
                  value={form.subject}
                  onChange={update('subject')}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message *</label>
                <textarea
                  className="form-textarea"
                  placeholder="Tell me about the opportunity or project..."
                  value={form.message}
                  onChange={update('message')}
                  required
                />
              </div>

              <button type="submit" className="form-submit" disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending...' : 'Send Message →'}
              </button>

              {status === 'success' && (
                <div className="form-success">
                  ✓ Message sent! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <p style={{ color: '#dc2626', fontSize: '0.875rem', marginTop: '12px' }}>
                  {error || 'Something went wrong. Please email me directly.'}
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
