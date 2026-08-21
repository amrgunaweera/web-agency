import { PageLayout } from '../components/layout/PageLayout'
import { services } from '../data/services'
import { Link } from 'react-router-dom'
import { IconArrowRight } from '@tabler/icons-react'

export function Services() {
  return (
    <PageLayout title="Services" description="Explore our comprehensive range of digital services including web development, mobile apps, and cloud infrastructure.">
      <div className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-mesh -z-10" />
        <div className="absolute inset-0 bg-grid -z-10 opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,white_90%)] -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="tech-label mb-4 block">// What we offer</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Our Services</h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              We deliver end-to-end digital solutions that help businesses scale, innovate, and thrive in the modern economy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div key={service.id} className="group glass-card glow-border p-10">
                <div className="w-16 h-16 rounded-xl icon-glow flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-500 mb-8 leading-relaxed">{service.description}</p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors duration-300">
                  Discuss this service <IconArrowRight className="w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
