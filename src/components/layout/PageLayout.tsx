import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'

interface PageLayoutProps {
  children: ReactNode
  title?: string
  description?: string
}

export function PageLayout({ children, title, description }: PageLayoutProps) {
  const defaultTitle = 'TechNova | Modern Technology Agency'
  const defaultDescription = 'We build scalable, high-performance web applications and digital solutions.'

  return (
    <>
      <Helmet>
        <title>{title ? `${title} | TechNova` : defaultTitle}</title>
        <meta name="description" content={description || defaultDescription} />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="w-full"
      >
        {children}
      </motion.div>
    </>
  )
}
