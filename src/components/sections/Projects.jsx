import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'
import fgImg from '../../assets/F&G Landscaping Services.png'
import atlixcoImg from '../../assets/Atlixco Construction & Landscaping.png'

const Projects = () => {
  // Datos de ejemplo para los proyectos
  const projects = [
    /*{
      id: 1,
      title: 'E-commerce WordPress',
      description: 'Tienda online desarrollada con WordPress y WooCommerce, personalizada con diseño a medida y funcionalidades avanzadas.',
      image: null,
      technologies: ['WordPress', 'WooCommerce', 'CSS', 'PHP'],
      demoUrl: 'https://demo-ecommerce.com',
      codeUrl: 'https://github.com/username/ecommerce-project'
    },
    {
      id: 2,
      title: 'Dashboard React',
      description: 'Panel de administración interactivo desarrollado con React y Tailwind CSS, con gráficos dinámicos y gestión de datos.',
      image: null,
      technologies: ['React', 'Tailwind CSS', 'Chart.js', 'Firebase'],
      demoUrl: 'https://demo-dashboard.com',
      codeUrl: 'https://github.com/username/dashboard-project'
    },
    {
      id: 3,
      title: 'Landing Page Corporativa',
      description: 'Página de aterrizaje para empresa de tecnología con diseño moderno, animaciones y formulario de contacto.',
      image: null,
      technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
      demoUrl: 'https://demo-landing.com',
      codeUrl: 'https://github.com/username/landing-project'
    },
    {
      id: 4,
      title: 'Aplicación de Tareas',
      description: 'Aplicación web para gestión de tareas con autenticación, filtros y almacenamiento en la nube.',
      image: null,
      technologies: ['React', 'Redux', 'Firebase', 'Material UI'],
      demoUrl: 'https://demo-tasks.com',
      codeUrl: 'https://github.com/username/tasks-project'
    },
    {
      id: 5,
      title: 'Blog Personal',
      description: 'Blog desarrollado con WordPress, diseño personalizado y optimizado para SEO.',
      image: null,
      technologies: ['WordPress', 'PHP', 'CSS', 'JavaScript'],
      demoUrl: 'https://demo-blog.com',
      codeUrl: 'https://github.com/username/blog-project'
    },
    {
      id: 6,
      title: 'API REST',
      description: 'API desarrollada con Node.js y Express para gestión de usuarios y productos con autenticación JWT.',
      image: null,
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      demoUrl: 'https://demo-api.com',
      codeUrl: 'https://github.com/username/api-project'
    } */,
    {
      id: 7,
      title: 'F&G Landscaping Services',
      description: 'Sitio corporativo de landscaping con diseño moderno, secciones de servicios y proyectos.',
      image: fgImg,
      technologies: ['WordPress', 'Elementor Pro', 'CSS', 'SEO'],
      demoUrl: 'https://fglandscapingservices.com/'
    },
    {
      id: 8,
      title: 'Atlixco Construction & Landscaping',
      description: 'Sitio corporativo de construcción y paisajismo con énfasis en servicios y contacto.',
      image: atlixcoImg,
      technologies: ['WordPress', 'Elementor Pro', 'CSS', 'SEO'],
      demoUrl: 'https://atlixcoconstructionlandscaping.com/'
    }
  ]

  // Filtros para los proyectos
  const [filter, setFilter] = useState('all')
  
  // Obtener tecnologías únicas para los filtros
  const allTechnologies = [...new Set(projects.flatMap(project => project.technologies))]
  
  // Filtrar proyectos según la categoría seleccionada
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.technologies.includes(filter))

  // Variantes para animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="projects" className="section bg-dark">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Mis Proyectos
        </motion.h2>

        {/* Filtros */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button 
            onClick={() => setFilter('all')} 
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              filter === 'all' 
                ? 'bg-primary text-white' 
                : 'bg-dark-light text-gray-300 hover:bg-gray-700'
            }`}
          >
            Todos
          </button>
          
          {allTechnologies.map((tech, index) => (
            <button 
              key={index}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                filter === tech 
                  ? 'bg-primary text-white' 
                  : 'bg-dark-light text-gray-300 hover:bg-gray-700'
              }`}
            >
              {tech}
            </button>
          ))}
        </motion.div>

        {/* Grid de proyectos */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id} 
              className="bg-dark-light rounded-xl overflow-hidden shadow-lg"
              variants={itemVariants}
            >
              <div className="relative overflow-hidden group">
                {/* Imagen del proyecto con fallback */}
                <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                    />
                  ) : (
                    <span className="text-4xl text-gray-500">{project.title.charAt(0)}</span>
                  )}
                </div>
                
                {/* Overlay con botones */}
                <div className="absolute inset-0 bg-primary/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-primary p-3 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Ver demo"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-dark px-2 py-1 rounded text-primary-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects