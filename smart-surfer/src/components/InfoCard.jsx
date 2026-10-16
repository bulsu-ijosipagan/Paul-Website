import './InfoCard.css'

function CardIcon({ icon }) {
  if (icon === 'lightbulb') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.7 14.8a5.7 5.7 0 1 1 6.6 0c-.7.6-1.1 1.4-1.1 2.2h-3.8c0-.8-.4-1.6-1.1-2.2Z" />
        <path d="M9.5 17h5M10.5 20h3" />
      </svg>
    )
  }

  if (icon === 'lock') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="5" y="10" width="14" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
      </svg>
    )
  }

  return icon
}

function InfoCard({ icon, title, children, accent = 'purple' }) {
  return (
    <article className={`info-card accent-${accent}`}>
      <div className={`card-icon icon-${icon}`}><CardIcon icon={icon} /></div>
      <div>
        <h3>{title}</h3>
        <div className="card-copy">{children}</div>
      </div>
    </article>
  )
}

export default InfoCard
