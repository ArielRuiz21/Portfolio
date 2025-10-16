import { motion } from 'framer-motion'
import { FaLaptopCode, FaShoppingCart, FaRocket, FaTools } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Desarrollo Web',
      description: 'Creación de sitios web modernos, rápidos y optimizados para SEO utilizando las últimas tecnologías como React, WordPress y más.',
      icon: <FaLaptopCode className="text-4xl text-primary" />,
    },
    {
      id: 2,
      title: 'Tiendas Online',
      description: 'Desarrollo de e-commerce con WooCommerce o soluciones personalizadas, con pasarelas de pago, gestión de inventario y más.',
      icon: <FaShoppingCart className="text-4xl text-primary" />,
    },
    {
      id: 3,
      title: 'Optimización',
      description: 'Mejora del rendimiento de sitios web existentes, optimización de velocidad de carga y experiencia de usuario.',
      icon: <FaRocket className="text-4xl text-primary" />,
    },
    {
      id: 4,
      title: 'Mantenimiento',
      description: 'Servicio de mantenimiento y actualización de sitios web para garantizar su seguridad, rendimiento y funcionalidad.',
      icon: <FaTools className="text-4xl text-primary" />,
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="services" className="section bg-dark-light">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Mis Servicios
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              variants={itemVariants}
              className="bg-dark rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:translate-y-[-5px] hover:border-primary/30 border border-transparent"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-dark-light">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Sección de proceso de trabajo */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-primary-light">Mi Proceso de Trabajo</h3>
          
          <div className="flex flex-col md:flex-row justify-between relative">
            {/* Línea conectora (solo visible en desktop) */}
            <div className="hidden md:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20"></div>
            
            {/* Pasos del proceso */}
            {['Análisis', 'Diseño', 'Desarrollo', 'Pruebas', 'Lanzamiento'].map((step, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center mb-8 md:mb-0 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold mb-3">
                  {index + 1}
                </div>
                <h4 className="font-bold text-white">{step}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services