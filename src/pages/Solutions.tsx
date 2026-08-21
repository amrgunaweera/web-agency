import { PageLayout } from '../components/layout/PageLayout'

export function Solutions() {
  return (
    <PageLayout title="Solutions" description="Industry-specific digital solutions.">
      <div className="relative pt-32 pb-20 min-h-screen">
        <div className="absolute inset-0 bg-gradient-mesh -z-10" />
        <div className="absolute inset-0 bg-grid -z-10 opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,white_90%)] -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="tech-label mb-4 block">// Coming soon</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Solutions</h1>
          <p className="text-xl text-slate-500">Industry-specific solutions are on the way.</p>
        </div>
      </div>
    </PageLayout>
  )
}
