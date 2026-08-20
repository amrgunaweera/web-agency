import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageLayout } from '../components/layout/PageLayout'
import { services } from '../data/services'
import { projects } from '../data/projects'

export function Home() {
  return (
    <PageLayout title="Home" description="iTechNova is a premier technology agency building scalable web and mobile solutions.">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8">
            Build the Future of <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Digital Experiences
            </span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            We are a premium technology agency specializing in high-performance web applications, mobile platforms, and cloud infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              Start a Project <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/work" className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-sm flex items-center justify-center gap-2">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Expertise</h2>
            <p className="mt-4 text-lg text-gray-600">Comprehensive digital solutions tailored to your needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service) => (
              <div key={service.id} className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-shadow">
                <service.icon className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link to="/services" className="text-blue-600 font-medium hover:text-blue-800 flex items-center gap-1">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:text-blue-600 transition-colors">
              View all services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Featured Work</h2>
            <p className="mt-4 text-lg text-gray-600">Recent projects we've delivered for our partners.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <div key={project.id} className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all">
                <div className="relative h-64 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-blue-600 mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 line-clamp-2">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/work" className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:text-blue-600 transition-colors">
              View full portfolio <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
