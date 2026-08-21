import { PageLayout } from '../components/layout/PageLayout'
import { IconMail, IconPhone, IconMapPin } from '@tabler/icons-react'
import { useForm } from 'react-hook-form'

interface ContactForm {
  name: string
  email: string
  message: string
}

export function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactForm>()

  const onSubmit = async (data: ContactForm) => {
    try {
      const response = await fetch("https://formsubmit.co/ajax/amrgprojects@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        alert('Message sent successfully!');
        reset();
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while sending the message.');
    }
  }

  return (
    <PageLayout title="Contact Us" description="Get in touch with us to discuss your next digital project.">
      <div className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-mesh -z-10" />
        <div className="absolute inset-0 bg-grid -z-10 opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,white_90%)] -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <span className="tech-label mb-4 block">// Get in touch</span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Let's build something great together.</h1>
              <p className="text-xl text-slate-500 mb-12 leading-relaxed">
                Whether you have a specific project in mind or just want to explore possibilities, we're here to help.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl icon-glow flex items-center justify-center flex-shrink-0">
                    <IconMail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Email Us</h3>
                    <p className="text-slate-500">hello@itechnova.agency</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl icon-glow flex items-center justify-center flex-shrink-0">
                    <IconPhone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Call Us</h3>
                    <p className="text-slate-500">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl icon-glow flex items-center justify-center flex-shrink-0">
                    <IconMapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Visit Us</h3>
                    <p className="text-slate-500">123 Innovation Drive<br/>Tech City, TC 90210</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-600 mb-2">Name</label>
                  <input
                    id="name"
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className="input-dark"
                    placeholder="Your name"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-600 mb-2">Email</label>
                  <input
                    id="email"
                    type="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                    })}
                    className="input-dark"
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-600 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register('message', { required: 'Message is required' })}
                    className="input-dark resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-gradient py-4 px-6 flex justify-center items-center disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
