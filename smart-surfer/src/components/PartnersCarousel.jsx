import { useState } from 'react'
import socialWelfareLogo from '../public/images/partners/social_welfare_development_office_logo.png'
import sanggunianKabataanLogo from '../public/images/partners/sangguniang-kabataan-logo.png'
import ecpatLogo from '../public/images/partners/ecpat_logo.png'
import departmentLogo from '../public/images/partners/dept-of-comm-performance.png'
import calLogo from '../public/images/partners/cal_logo.png'
import bolsoLogo from '../public/images/partners/bolso_logo.png'
import barangayLogo from '../public/images/partners/baranggaychildprotectioncommittee.png'

const partners = [
  {
    name: 'Bulacan State University',
    image: bolsoLogo,
    description: 'A public university committed to academic excellence, research, and community engagement. It supports initiatives that promote learning, social awareness, and community welfare.',
  },
  {
    name: 'Bulacan State University – College of Arts and Letters',
    image: calLogo,
    description: 'An academic college that fosters creativity, communication, and critical thinking through the study and practice of the arts, humanities, and communication.',
  },
  {
    name: 'BULSU Department of Communication and Performing Arts',
    image: departmentLogo,
    description: 'A department focused on communication and the performing arts, supporting the development of students’ media skills, creative expression, and responsible communication.',
  },
  {
    name: 'ECPAT Philippines',
    image: ecpatLogo,
    description: 'An organization advocating for the protection of children against sexual exploitation and abuse and promoting safer environments for children, including in digital spaces.',
  },
  {
    name: 'City of San Jose del Monte – City Social Welfare and Development Office (CSWDO)',
    image: socialWelfareLogo,
    description: 'A city government office that provides social welfare and development services, including programs supporting child protection and the well-being of families and vulnerable members of the community.',
  },
  {
    name: 'Barangay Muzon South',
    image: barangayLogo,
    description: 'A local government unit serving the community of Muzon South, supporting local initiatives, community participation, and programs that promote the welfare and safety of its residents.',
  },
  {
    name: 'Sangguniang Kabataan – Muzon South',
    image: sanggunianKabataanLogo,
    description: 'The youth council of Barangay Muzon South, dedicated to youth empowerment, community development, and initiatives that promote the welfare, safety, and active participation of young adults in the community.',
  },
]

function PartnersCarousel() {
  const [activeSlide, setActiveSlide] = useState(0)
  const slideCount = partners.length

  const moveSlide = (direction) => {
    setActiveSlide((currentSlide) => (currentSlide + direction + slideCount) % slideCount)
  }

  const visiblePartners = [partners[activeSlide]]

  return (
    <section className="partners-section" aria-labelledby="partners-heading">
      <div className="section-heading">
        <p className="eyebrow">Working together</p>
        <h2 id="partners-heading">Our Partners</h2>
      </div>
      <div className="partners-carousel">
        <button
          className="partner-arrow partner-arrow-previous"
          type="button"
          onClick={() => moveSlide(-1)}
          aria-label="View previous partners"
        >
          <span aria-hidden="true">‹</span>
        </button>
        <div className="partner-list">
          {visiblePartners.map((partner) => (
            <article className="partner-card" key={partner.name}>
              <div className="partner-logo-wrap">
                <img src={partner.image} alt="" />
              </div>
              <div className="partner-details">
                <h3>{partner.name}</h3>
                <p>{partner.description}</p>
              </div>
            </article>
          ))}
        </div>
        <button
          className="partner-arrow partner-arrow-next"
          type="button"
          onClick={() => moveSlide(1)}
          aria-label="View next partners"
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>
      <div className="partner-dots" aria-label="Partner slides">
        {Array.from({ length: slideCount }, (_, index) => (
          <button
            className={`partner-dot ${index === activeSlide ? 'active' : ''}`}
            type="button"
            key={index}
            onClick={() => setActiveSlide(index)}
            aria-label={`Show partner slide ${index + 1}`}
            aria-current={index === activeSlide ? 'true' : undefined}
          />
        ))}
      </div>
    </section>
  )
}

export default PartnersCarousel
