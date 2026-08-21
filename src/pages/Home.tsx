import { IconArrowRight } from '@tabler/icons-react'
import { Link } from 'react-router-dom'
import { PageLayout } from '../components/layout/PageLayout'
import { services } from '../data/services'
import { projects } from '../data/projects'

export function Home() {
  return (
    <PageLayout title="Home" description="iTechNova is a premier technology agency building scalable web and mobile solutions.">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-mesh -z-10" />
        <div className="absolute inset-0 bg-grid -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,white_90%)] -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="tech-label px-4 py-2 rounded-full border border-primary/15 bg-primary/5">
              // Building the future
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-slate-900">
            Build the Future of <br className="hidden md:block"/>
            <span className="gradient-text">
              Digital Experiences
            </span>
          </h1>
          <p className="mt-4 text-xl text-slate-500 max-w-3xl mx-auto mb-10 leading-relaxed">
            We are a premium technology agency specializing in high-performance web applications, mobile platforms, and cloud infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-gradient px-8 py-4 flex items-center justify-center gap-2">
              Start a Project <IconArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/work" className="btn-outline px-8 py-4 flex items-center justify-center gap-2">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 bg-surface">
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center mb-16">
            <span className="tech-label mb-4 block">Our Expertise</span>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">What We Do Best</h2>
            <p className="mt-4 text-lg text-slate-500">Comprehensive digital solutions tailored to your needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service) => (
              <div key={service.id} className="group glass-card glow-border p-8">
                <div className="w-14 h-14 rounded-xl icon-glow flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-500 mb-6 leading-relaxed">{service.description}</p>
                <Link to="/services" className="text-primary font-medium hover:text-primary-light flex items-center gap-1 transition-colors">
                  Learn more <IconArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center gap-2 text-slate-700 font-semibold hover:text-primary transition-colors duration-300">
              View all services <IconArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="relative py-20">
        <div className="section-divider" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center mb-16">
            <span className="tech-label mb-4 block">Portfolio</span>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Featured Work</h2>
            <p className="mt-4 text-lg text-slate-500">Recent projects we've delivered for our partners.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project) => (
              <div key={project.id} className="group glass-card glow-border overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <div className="tech-label mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-slate-500 line-clamp-2">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/work" className="inline-flex items-center gap-2 text-slate-700 font-semibold hover:text-primary transition-colors duration-300">
              View full portfolio <IconArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
