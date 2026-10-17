import './Hero.css'
import heroImage from '../public/images/ChildImages/Childimage1.png'

function Hero({ eyebrow, title, subtitle, compact = false, image = heroImage }) {
  return (
    <section
      className={`hero ${compact ? 'hero-compact' : ''} ${title === 'SMART SURFER' ? 'hero-smart-surfer' : ''}`}
      style={{ '--hero-image': `url(${image})` }}
    >
      <div className="hero-orb orb-one" />
      <div className="hero-orb orb-two" />
      <div className="hero-content">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
      </div>
      <div className="hero-wave" />
    </section>
  )
}

export default Hero
