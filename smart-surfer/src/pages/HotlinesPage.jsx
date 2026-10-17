import Hero from '../components/Hero'
import emergencyHeroImage from '../public/images/EmergenyHotlinesLogos/EmergencyHotline.jpg'
import emergency911Logo from '../public/images/EmergenyHotlinesLogos/911 logo.png'
import ecpatLogo from '../public/images/EmergenyHotlinesLogos/ecpatph.png'
import makabataLogo from '../public/images/EmergenyHotlinesLogos/makabata.png'
import wcpdLogo from '../public/images/EmergenyHotlinesLogos/womenandchildrenprotectiondesk.png'
import cswdoLogo from '../public/images/EmergenyHotlinesLogos/socialwelfareanddevelopmentoffice.png'
import bcpcLogo from '../public/images/EmergenyHotlinesLogos/baranggaychildprotectioncommittee.png'
import './Pages.css'

function HotlinesPage() {
  return (
    <>
      <Hero title="Contact Information" subtitle="If you encounter online abuse or exploitation, support is available." compact image={emergencyHeroImage} />
      <section className="page-section hotline-page">
        <div className="notice">
          <span className="notice-icon" aria-hidden="true">!</span>
          <p>If you encounter or have information about online content involving the sexual abuse or exploitation of children, you may report it through:</p>
        </div>
        <div className="hotline-list">
          <article className="hotline-card">
            <img className="hotline-image" src={ecpatLogo} alt="ECPAT Philippines logo" />
            <div>
              <h2>ECPAT Philippines - eProtectKids CSAEM Hotline</h2>
              <dl>
                <div><dt>Phone</dt><dd><a href="tel:+63289208151">(+632) 8920-8151</a></dd></div>
                <div><dt>Fax</dt><dd>(+632) 84415108</dd></div>
                <div><dt>Online Reporting</dt><dd><a href="https://ecpat.org.ph/report/" target="_blank" rel="noreferrer">ecpat.org.ph/report/</a></dd></div>
                <div><dt>Email Address</dt><dd><a href="mailto:info@ecpat.org.ph">info@ecpat.org.ph</a></dd></div>
              </dl>
              <p>The eProtectKids CSAEM Hotline receives reports of Child Sexual Abuse and Exploitation Materials (CSAEM) and other forms of online child sexual exploitation. Reports may be submitted anonymously.</p>
            </div>
          </article>
          <article className="hotline-card">
            <img className="hotline-image" src={makabataLogo} alt="MAKABATA Helpline logo" />
            <div>
              <h2>MAKABATA Helpline 1383 – Council for the Welfare of Children (CWC) / DSWD</h2>
              <dl>
                <div><dt>Telephone</dt><dd><a href="tel:1383">1383</a></dd></div>
                <div><dt>Mobile</dt><dd><a href="tel:09193541383">0919-354-1383</a></dd></div>
                <div><dt>Mobile</dt><dd><a href="tel:09158022375">0915-802-2375</a></dd></div>
              </dl>
              <p>The MAKABATA Helpline provides assistance for child rights concerns, including reports of child abuse and other violations against children. It also provides referral and support services through appropriate agencies. The helpline is available 24/7 for urgent concerns.</p>
            </div>
          </article>
          <article className="hotline-card">
            <img className="hotline-image" src={wcpdLogo} alt="Women and Children Protection Desk logo" />
            <div>
              <h2>City of San Jose Delmonte, Philippine National Police – Women and Children Protection Desk (WCPD)</h2>
              <dl>
                <div><dt>Mobile</dt><dd><a href="tel:09164320401">0916-432-0401</a></dd></div>
                <div><dt>Mobile</dt><dd><a href="tel:09555006105">0955-500-6105 (WCPD)</a></dd></div>
                <div><dt>Email Address</dt><dd><a href="mailto:sanjosedelmontepcr@gmail.com">sanjosedelmontepcr@gmail.com</a></dd></div>
              </dl>
              <p>For concerns involving the abuse, exploitation, or safety of children in San Jose del Monte City, you may contact the San Jose del Monte City Police Station WCPD for reporting, assistance, and referral.</p>
            </div>
          </article>
          <article className="hotline-card">
            <img className="hotline-image" src={cswdoLogo} alt="City Social Welfare and Development Office logo" />
            <div>
              <h2>San Jose del Monte City Social Welfare and Development Office (CSWDO)</h2>
              <dl>
                <div><dt>Telephone</dt><dd><a href="tel:0449197370">0449197370</a></dd></div>
                <div><dt>Email Address</dt><dd><a href="mailto:cswdo.csjdm@gmail.com">cswdo.csjdm@gmail.com</a></dd></div>
              </dl>
              <p>Residents of Barangay Muzon South, San Jose del Monte City may also seek assistance through the City Social Welfare and Development Office (CSWDO) or the appropriate local child protection and social welfare personnel for concerns involving children who may need protection, intervention, referral, or other support.</p>
            </div>
          </article>
          <article className="hotline-card">
            <img className="hotline-image" src={bcpcLogo} alt="Barangay Muzon South Barangay Child Protection Committee logo" />
            <div>
              <h2>Barangay Muzon South – Barangay Child Protection Committee (BCPC)</h2>
              <dl>
                <div><dt>Barangay Hotline</dt><dd><a href="tel:09478941328">0947-894-1328</a></dd></div>
                <div><dt>Rescue Hotline</dt><dd><a href="tel:09231988688">0923-198-8688</a></dd></div>
              </dl>
              <p>For concerns involving the abuse, exploitation, or safety of children in Barangay Muzon South, San Jose del Monte City, individuals may approach the Barangay Muzon South officials or the Barangay Child Protection Committee (BCPC) for assistance, reporting, and appropriate referral to the concerned authorities or child protection service providers.</p>
            </div>
          </article>
          <article className="hotline-card emergency-card">
            <img className="hotline-image" src={emergency911Logo} alt="Emergency 911 Philippines logo" />
            <div>
              <h2>Emergency 911 Philippines</h2>
              <p><strong>Emergency assistance:</strong> For situations involving immediate danger or an ongoing emergency, contact the appropriate emergency services or call <a href="tel:911">911</a>.</p>
              <p><strong>Important:</strong> Do not download, save, forward, repost, or share suspected CSAEM. When reporting online material, use the appropriate reporting channel and provide only the information requested by the authorized reporting or support service.</p>
            </div>
          </article>
        </div>
        <p className="safety-note"><strong>Remember:</strong> If you are in immediate danger, contact your local emergency services. You deserve to be safe, heard, and supported.</p>
      </section>
    </>
  )
}

export default HotlinesPage
