import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ContentPage from './pages/ContentPage'
import HotlinesPage from './pages/HotlinesPage'
import gradientBackground1 from './public/images/gradientbg/gradientbg1.jpg'
import gradientBackground2 from './public/images/gradientbg/gradientbg2.png'
import gradientBackground3 from './public/images/gradientbg/gradientbg3.png'

function App() {
  const [activePage, setActivePage] = useState('home')

  const navigate = (page) => {
    setActivePage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const page = {
    home: <HomePage onNavigate={navigate} />,
    content: <ContentPage />,
    hotlines: <HotlinesPage />,
  }[activePage]
  const backgroundImage = {
    home: gradientBackground1,
    content: gradientBackground2,
    hotlines: gradientBackground3,
  }[activePage]

  return (
    <div className="app-shell">
      <div className="ambient-background" aria-hidden="true">
        <img className="background-image" src={backgroundImage} alt="" />
      </div>
      <Header activePage={activePage} onNavigate={navigate} />
      <main>{page}</main>
      <Footer onNavigate={navigate} />
    </div>
  )
}

export default App
