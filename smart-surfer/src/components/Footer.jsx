import './Footer.css'

function Footer({ onNavigate }) {
  return (
    <footer className="site-footer">
      <div>
        <strong className="footer-brand-name">Smart Surfer</strong>
        <p>Spot abuse. Stop abuse. Stay safer online.</p>
      </div>
      <div className="footer-contact">
        <strong>Contact</strong>
        <p>
          <a
            className="facebook-link"
            href="https://www.facebook.com/share/1JQxi2Wmi6/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit the Smart Surfer Facebook page"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14 8h3V5h-3c-2.2 0-4 1.8-4 4v2H7v3h3v5h3v-5h3l.5-3H13V9c0-.6.4-1 1-1Z" />
            </svg>
            <span>Smart Surfer</span>
          </a>
        </p>
        <p>Email Address: <a href="mailto:smartsurferofficial@gmail.com">smartsurferofficial@gmail.com</a></p>
      </div>
      <div className="footer-address">
        <strong>Address</strong>
        <p>San Jose Del Monte City,<br />Barangay Muzon South</p>
      </div>
      <p className="copyright">An educational resource for safer digital spaces.</p>
    </footer>
  )
}

export default Footer
