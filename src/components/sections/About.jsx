import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaWordpress, FaShoppingCart } from 'react-icons/fa'
import { SiElementor } from 'react-icons/si'

const About = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500" />, level: 100 },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" />, level: 100 },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" />, level: 90 },
    { name: 'React', icon: <FaReact className="text-blue-400" />, level: 90 },
    { name: 'WordPress', icon: <FaWordpress className="text-blue-600" />, level: 100 },
    { name: 'WooCommerce', icon: <FaShoppingCart className="text-purple-500" />, level: 100 },
    { name: 'Elementor Pro', icon: <SiElementor className="text-pink-500" />, level: 100 }
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
    <section id="about" className="section bg-dark-light">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Sobre mí
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Información personal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-primary-light">Mi perfil</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Soy Ariel Ruiz Diaz, un desarrollador web frontend apasionado por crear experiencias digitales atractivas y funcionales. 
              Me especializo en el desarrollo de sitios web modernos y aplicaciones web utilizando las últimas tecnologías.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Con experiencia en WordPress, WooCommerce y React, puedo desarrollar desde sitios corporativos hasta 
              tiendas online complejas y aplicaciones web interactivas. Mi enfoque se centra en crear interfaces 
              intuitivas con un código limpio y optimizado.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Me mantengo constantemente actualizado con las últimas tendencias y tecnologías para ofrecer 
              soluciones modernas que cumplan con los estándares actuales de desarrollo web.
            </p>
          </motion.div>

          {/* Habilidades técnicas */}
          <div>
            <motion.h3 
              className="text-2xl font-bold mb-6 text-primary-light"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Habilidades técnicas
            </motion.h3>
            
            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.map((skill, index) => (
                <motion.div key={index} variants={itemVariants} className="mb-4">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-3">{skill.icon}</span>
                    <span className="text-gray-200">{skill.name}</span>
                    <span className="ml-auto text-gray-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-dark rounded-full h-2.5">
                    <motion.div 
                      className="bg-primary h-2.5 rounded-full"
                      style={{ width: '0%' }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About