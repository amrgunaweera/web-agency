import { PageLayout } from '../components/layout/PageLayout'
import { technologies } from '../data/technologies'

export function Technologies() {
  return (
    <PageLayout title="Technologies" description="The modern technology stack we use to build high-performance solutions.">
      <div className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-mesh -z-10" />
        <div className="absolute inset-0 bg-grid -z-10 opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,white_90%)] -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="tech-label mb-4 block">// Tech stack</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Our Tech Stack</h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              We leverage the latest and most reliable technologies to build scalable, secure, and maintainable digital products.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map(tech => (
              <div key={tech.name} className="group glass-card glow-border flex flex-col items-center justify-center p-8 text-center">
                <img src={tech.logo} alt={tech.name} className="w-16 h-16 mb-4 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-semibold text-slate-900 mb-1">{tech.name}</h3>
                <span className="tech-label text-[0.65rem]">{tech.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
