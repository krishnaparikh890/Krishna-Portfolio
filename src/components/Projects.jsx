import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
  {
    title: 'Event Loop Visualizer',
    description: 'Developed an interactive JavaScript Event Loop Visualizer using React.js to demonstrate how the event loop works in real time. Implemented key concepts such as Call Stack, Web APIs, Callback Queue, and Microtask Queue through visual simulations.',
    tech: ['React.js', 'JavaScript'],
    color: 'indigo',
  },
  
]

  const getColorClasses = (color) => {
    const colors = {
      indigo: 'from-indigo-500 to-indigo-600 border-indigo-500/50',
      purple: 'from-purple-500 to-purple-600 border-purple-500/50',
      pink: 'from-pink-500 to-pink-600 border-pink-500/50',
    }
    return colors[color] || colors.indigo
  }

  return (
    <section id="projects" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto "></div>
        </motion.div>

        <div className="flex justify-center">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-[#1a1a1a] rounded-lg p-6 border border-gray-800 hover:border-indigo-500/50 transition-all flex flex-col w-full max-w-sm"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${getColorClasses(project.color)} flex items-center justify-center mb-4`}>
                <FaCode className="text-white text-xl" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4 flex-grow leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  <FaGithub />
                  <span className="text-sm">Code</span>
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  <FaExternalLinkAlt />
                  <span className="text-sm">Live</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
