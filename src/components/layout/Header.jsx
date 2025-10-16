import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Detectar scroll para cambiar estilo del header y sección activa
  useEffect(() => {
    const handleScroll = () => {
      // Cambiar estilo del header
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Detectar sección activa
      const sections = document.querySelectorAll('section[id]')
      const scrollPosition = window.scrollY + 100

      sections.forEach(section => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Cerrar menú móvil al cambiar tamaño de ventana
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [mobileMenuOpen])

  const navLinks = [
    { id: 1, name: 'Inicio', href: '#home' },
    { id: 2, name: 'Sobre mí', href: '#about' },
    { id: 3, name: 'Proyectos', href: '#projects' },
    { id: 4, name: 'Servicios', href: '#services' },
    { id: 5, name: 'Contacto', href: '#contact' }
  ]

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark/95 backdrop-blur-sm shadow-lg py-2 md:py-3' : 'bg-transparent py-3 md:py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.a 
          href="#home"
          className="text-xl md:text-2xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary">Ariel </span>Ruiz Diaz
        </motion.a>

        {/* Navegación desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 lg:space-x-8">
            {navLinks.map(link => {
              const isActive = activeSection === link.href.substring(1)
              return (
                <motion.li 
                  key={link.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: link.id * 0.1 }}
                >
                  <a 
                    href={link.href}
                    className={`relative px-2 py-1 transition-colors duration-300 ${
                      isActive 
                        ? 'text-primary font-medium' 
                        : 'text-gray-300 hover:text-primary'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span 
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"
                        layoutId="activeSection"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </motion.li>
              )
            })}
          </ul>
        </nav>

        {/* Botón menú móvil */}
        <button 
          className="md:hidden text-white focus:outline-none p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-dark/95 backdrop-blur-sm border-t border-gray-800"
          >
            <nav className="container mx-auto px-4 py-4">
              <ul className="flex flex-col">
                {navLinks.map(link => {
                  const isActive = activeSection === link.href.substring(1)
                  return (
                    <li key={link.id}>
                      <a 
                        href={link.href}
                        className={`block py-3 px-2 border-b border-gray-800 ${
                          isActive 
                            ? 'text-primary font-medium' 
                            : 'text-gray-300'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header