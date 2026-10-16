import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ContentPage from './pages/ContentPage'
import HotlinesPage from './pages/HotlinesPage'

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

  return (
    <div className="app-shell">
      <Header activePage={activePage} onNavigate={navigate} />
      <main>{page}</main>
      <Footer onNavigate={navigate} />
    </div>
  )
}

export default App
