import { motion } from 'framer-motion'
import yoImg from '../../assets/yo.webp'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-dark overflow-hidden">
      {/* Fondo con efecto de gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark to-dark-light z-0"></div>
      
      {/* Elementos decorativos */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-secondary/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-3/5 mb-10 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary mb-4">
                Bienvenido a mi portfolio
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Desarrollador Web <span className="text-primary">Frontend</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Especializado en WordPress, WooCommerce y Elementor 
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a href="#projects" className="btn btn-primary">
                Ver proyectos
              </a>
              <a href="#contact" className="btn btn-outline">
                Contactarme
              </a>
              <a href="/src/assets/Curriculum CV Profesional De Hombre Con Foto Simple Azul (2).pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                Mi CV
              </a>
            </motion.div>
          </div>
          
          <div className="w-full md:w-2/5">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8,
                delay: 0.5,
                type: "spring",
                stiffness: 100
              }}
              className="relative"
            >
              {/* Imagen de perfil sin bordes de colores */}
              <div className="w-full h-80 md:h-96 rounded-2xl shadow-xl overflow-hidden bg-transparent">
                <img 
                  src={yoImg} 
                  alt="Foto de perfil" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-gray-400 mb-2">Scroll</span>
            <motion.div 
              className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
              initial={{ y: 0 }}
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <motion.div 
                className="w-1 h-2 bg-primary rounded-full mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero