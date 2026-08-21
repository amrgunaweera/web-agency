import { PageLayout } from '../components/layout/PageLayout'
import { projects } from '../data/projects'
import { IconArrowUpRight } from '@tabler/icons-react'

export function Work() {
  return (
    <PageLayout title="Our Work" description="Explore our portfolio of successful digital projects and case studies.">
      <div className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Our Work</h1>
            <p className="text-xl text-gray-600">
              Discover how we've helped leading brands transform their digital presence and achieve their business goals.
            </p>
          </div>
          <div className="space-y-24">
            {projects.map((project, index) => (
              <div key={project.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img src={project.image} alt={project.title} className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="text-blue-600 font-semibold tracking-wide uppercase">{project.category}</div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">{project.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">{project.description}</p>
                  
                  <div className="pt-6 border-t border-gray-100">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(tech => (
                        <span key={tech} className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-6">
                    <a href={project.link} className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
                      View Case Study <IconArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
