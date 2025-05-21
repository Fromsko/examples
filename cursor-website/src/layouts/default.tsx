import Navbar from '@components/Header'
import Footer from '@components/footer'

import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
const DefaultLayout: React.FC = () => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200 transition-all duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Outlet />
      <Footer content="hnkong666@gmail.com" />
    </div>
  )
}

export default DefaultLayout
