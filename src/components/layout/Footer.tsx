import { Link } from 'react-router-dom'
import { IconWorld, IconMessageCircle, IconBriefcase, IconMail } from '@tabler/icons-react'

export function Footer() {
  return (
    <footer className="relative bg-slate-900 text-slate-400 py-12 lg:py-16">
      {/* Glow top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/logo white.png" alt="iTechNova" className="h-12 md:h-14 w-auto object-contain" />
            </Link>
            <p className="text-sm text-slate-500 mb-6">
              Building scalable, high-performance digital solutions for modern businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-500 hover:text-primary-light transition-colors duration-300"><IconMessageCircle className="w-5 h-5" /></a>
              <a href="#" className="text-slate-500 hover:text-primary-light transition-colors duration-300"><IconWorld className="w-5 h-5" /></a>
              <a href="#" className="text-slate-500 hover:text-primary-light transition-colors duration-300"><IconBriefcase className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" className="hover:text-primary-light transition-colors duration-300">Web Development</Link></li>
              <li><Link to="/services" className="hover:text-primary-light transition-colors duration-300">Mobile Apps</Link></li>
              <li><Link to="/services" className="hover:text-primary-light transition-colors duration-300">Cloud Infrastructure</Link></li>
              <li><Link to="/services" className="hover:text-primary-light transition-colors duration-300">UI/UX Design</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-primary-light transition-colors duration-300">About Us</Link></li>
              <li><Link to="/work" className="hover:text-primary-light transition-colors duration-300">Our Work</Link></li>
              <li><Link to="/technologies" className="hover:text-primary-light transition-colors duration-300">Technologies</Link></li>
              <li><Link to="/contact" className="hover:text-primary-light transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <IconMail className="w-4 h-4 text-primary-light" />
                <a href="mailto:hello@itechnova.agency" className="hover:text-primary-light transition-colors duration-300">hello@itechnova.agency</a>
              </li>
              <li className="text-slate-500">123 Innovation Drive<br />Tech City, TC 90210</li>
            </ul>
          </div>

        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mt-12" />
        <div className="pt-8 text-sm text-center text-slate-600">
          © {new Date().getFullYear()} iTechNova Agency. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
