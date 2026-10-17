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
        <p><a href="mailto:info@ecpat.org.ph">info@ecpat.org.ph</a></p>
        <p><a href="tel:+63289208151">(+632) 8920-8151</a> · Fax: (+632) 84415108</p>
      </div>
      <div className="footer-address">
        <strong>Address</strong>
        <p>143 Anonas Extension, Sikatuna Village<br />Diliman, 1101<br />Quezon City, Philippines</p>
      </div>
      <p className="copyright">An educational resource for safer digital spaces.</p>
    </footer>
  )
}

export default Footer
