import { PageLayout } from '../components/layout/PageLayout'
import { services } from '../data/services'
import { Link } from 'react-router-dom'
import { IconArrowRight } from '@tabler/icons-react'

export function Services() {
  return (
    <PageLayout title="Services" description="Explore our comprehensive range of digital services including web development, mobile apps, and cloud infrastructure.">
      <div className="pt-32 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600">
              We deliver end-to-end digital solutions that help businesses scale, innovate, and thrive in the modern economy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.id} className="p-10 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                <service.icon className="w-14 h-14 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors">
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
