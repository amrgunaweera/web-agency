import { PageLayout } from '../components/layout/PageLayout'

export function About() {
  return (
    <PageLayout title="About Us" description="Learn more about our technology agency and our mission.">
      <div className="pt-32 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">About TechNova</h1>
            <p className="text-xl text-gray-600">
              We are a collective of engineers, designers, and strategists dedicated to pushing the boundaries of what's possible on the web.
            </p>
          </div>
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                Founded in 2026, TechNova was born out of a desire to build digital solutions that not only look beautiful but perform exceptionally well under pressure. We believe that technology should be an enabler, not a bottleneck.
              </p>
              <p>
                Our core philosophy is simple: write clean code, design intuitive interfaces, and always deliver on our promises. We partner with ambitious companies of all sizes, from rapid-growth startups to established enterprises, helping them navigate the complexities of digital transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
