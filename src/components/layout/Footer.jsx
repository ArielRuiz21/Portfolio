import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    /*{ icon: <FaGithub className="w-6 h-6" />, href: 'https://github.com/', label: 'GitHub' }*/,
    { icon: <FaLinkedin className="w-6 h-6" />, href: 'https://linkedin.com/in/', label: 'LinkedIn' },
    /*{ icon: <FaEnvelope className="w-6 h-6" />, href: 'mailto:tu@email.com', label: 'Email'  } */
  ]

  return (
    <footer className="bg-dark-light py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <a href="#home" className="text-2xl font-bold text-primary">
              Portfolio<span className="text-white">.</span>
            </a>
            <p className="text-gray-400 mt-2">Desarrollador Web Frontend</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-4"
          >
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm"
        >
          <p>&copy; {currentYear} Ariel Ruiz Diaz. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer