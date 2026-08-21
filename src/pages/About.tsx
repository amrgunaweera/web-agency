import { PageLayout } from '../components/layout/PageLayout'

export function About() {
  return (
    <PageLayout title="About Us" description="Learn more about our technology agency and our mission.">
      <div className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-mesh -z-10" />
        <div className="absolute inset-0 bg-grid -z-10 opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,white_90%)] -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="tech-label mb-4 block">// Who we are</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">About iTechNova</h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              We are a collective of engineers, designers, and strategists dedicated to pushing the boundaries of what's possible on the web.
            </p>
          </div>
          <div className="glass-card p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="mb-6 text-slate-500 leading-relaxed text-lg">
                Founded in 2026, iTechNova was born out of a desire to build digital solutions that not only look beautiful but perform exceptionally well under pressure. We believe that technology should be an enabler, not a bottleneck.
              </p>
              <div className="section-divider my-8" />
              <p className="text-slate-500 leading-relaxed text-lg">
                Our core philosophy is simple: write clean code, design intuitive interfaces, and always deliver on our promises. We partner with ambitious companies of all sizes, from rapid-growth startups to established enterprises, helping them navigate the complexities of digital transformation.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { value: '50+', label: 'Projects Delivered' },
              { value: '25+', label: 'Happy Clients' },
              { value: '99%', label: 'Client Satisfaction' },
              { value: '24/7', label: 'Support Available' },
            ].map((stat) => (
              <div key={stat.label} className="glass-card p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
