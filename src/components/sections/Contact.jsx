import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const EMAIL_TO = 'ariel_ruiz_diaz@outlook.es'

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Usar mailto como método principal para garantizar la recepción
    const mailtoLink = `mailto:${EMAIL_TO}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`
    
    window.location.href = mailtoLink
    setIsSubmitting(false)
    setSubmitStatus('success')
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitStatus(null), 5000)
  }

  const socialLinks = [
    /*{ 
      id: 1, 
      icon: <FaGithub className="text-2xl" />, 
      url: 'https://github.com/yourusername',
      label: 'GitHub'
    } */, 
    { 
      id: 2, 
      icon: <FaLinkedin className="text-2xl" />, 
      url: 'https://www.linkedin.com/in/ariel-ruiz-diaz-435a1635b/',
      label: 'LinkedIn'
    },
    /*{ 
      id: 3, 
      icon: <FaEnvelope className="text-2xl" />, 
      url: 'mailto:tu@email.com',
      label: 'Email'
    } */
  ]

  const contactInfo = [
    {
      id: 1,
      icon: <FaMapMarkerAlt className="text-xl text-primary" />,
      title: 'Ubicación',
      details: 'Buenos Aires, Argentina'
    },
    {
      id: 2,
      icon: <FaEnvelope className="text-xl text-primary" />,
      title: 'Email',
      details: 'ariel_ruiz_diaz@outlook.es'
    },
    {
      id: 3,
      icon: <FaPhone className="text-xl text-primary" />,
      title: 'Teléfono',
      details: '+54 1169780374'
    }
  ]

  return (
    <section id="contact" className="section">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contacto
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">¡Hablemos!</h3>
            <p className="text-gray-400 mb-8">
              Estoy disponible para proyectos freelance, colaboraciones o posiciones a tiempo completo.
              Contáctame y conversemos sobre cómo puedo ayudarte con tu próximo proyecto.
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map(item => (
                <div key={item.id} className="flex items-start">
                  <div className="mr-4 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-medium text-white">{item.title}</h4>
                    <p className="text-gray-400">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex space-x-4 mt-8">
              {socialLinks.map(link => (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-dark-light flex items-center justify-center text-gray-400 hover:text-primary hover:bg-dark transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Formulario de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-dark-light border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-dark-light border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">Asunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-dark-light border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 bg-dark-light border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white resize-none"
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </motion.button>
              
              {submitStatus === 'success' && (
                <motion.div 
                  className="mt-4 p-3 bg-green-900/30 border border-green-500 text-green-400 rounded-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ¡Mensaje enviado con éxito! Te responderé lo antes posible.
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div 
                  className="mt-4 p-3 bg-red-900/30 border border-red-500 text-red-400 rounded-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Hubo un error al enviar tu mensaje. Inténtalo de nuevo o usa el botón de LinkedIn.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact