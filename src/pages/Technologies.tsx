import { PageLayout } from '../components/layout/PageLayout'
import { technologies } from '../data/technologies'

export function Technologies() {
  return (
    <PageLayout title="Technologies" description="The modern technology stack we use to build high-performance solutions.">
      <div className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Our Tech Stack</h1>
            <p className="text-xl text-gray-600">
              We leverage the latest and most reliable technologies to build scalable, secure, and maintainable digital products.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {technologies.map(tech => (
              <div key={tech.name} className="flex flex-col items-center justify-center p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                <img src={tech.logo} alt={tech.name} className="w-16 h-16 mb-4" />
                <h3 className="font-semibold text-gray-900">{tech.name}</h3>
                <span className="text-sm text-gray-500">{tech.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
