import './Header.css'
import smartSurferLogo from '../public/images/SmartSurferLogo.png'

function Header({ activePage, onNavigate }) {
  const links = [
    ['home', 'Home'],
    ['content', 'Content'],
    ['hotlines', 'Emergency Hotlines'],
  ]

  return (
    <header className="site-header">
      <button className="brand" onClick={() => onNavigate('home')} aria-label="Smart Surfer home">
        <img className="brand-logo" src={smartSurferLogo} alt="" />
        <span>Smart Surfer</span>
      </button>
      <nav className="main-nav" aria-label="Primary navigation">
        {links.map(([id, label]) => (
          <button
            className={activePage === id ? 'nav-link active' : 'nav-link'}
            key={id}
            onClick={() => onNavigate(id)}
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  )
}

export default Header
