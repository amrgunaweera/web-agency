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
      <div className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Let's build something great together.</h1>
              <p className="text-xl text-gray-600 mb-12">
                Whether you have a specific project in mind or just want to explore possibilities, we're here to help.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <IconMail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                    <p className="text-gray-600">hello@itechnova.agency</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <IconPhone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <IconMapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Visit Us</h3>
                    <p className="text-gray-600">123 Innovation Drive<br/>Tech City, TC 90210</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    id="name"
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="Your name"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    id="email"
                    type="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                    })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register('message', { required: 'Message is required' })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-70 flex justify-center items-center"
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
