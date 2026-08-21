import { Routes, Route, useLocation } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Home } from './pages/Home'
import { Services } from './pages/Services'
import { Solutions } from './pages/Solutions'
import { Work } from './pages/Work'
import { Technologies } from './pages/Technologies'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation()
  
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800 font-sans">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/work" element={<Work />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default App
