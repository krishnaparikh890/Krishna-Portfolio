import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <p className="text-lg text-gray-300 text-justify leading-relaxed mb-4">
I'm a Software Engineer with hands-on experience building and maintaining web applications. Currently working at 7Script Technologies, I focus on frontend development — turning designs and requirements into clean, functional interfaces. I enjoy solving real-world problems, improving existing systems, and shipping features that are actually used in production. My goal is to write practical, maintainable code while continuously growing as an engineer.            </p>           
             
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-lg p-8 backdrop-blur-sm border border-indigo-500/30">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-3xl font-bold text-indigo-400 mb-2">1</h3>
                  <p className="text-gray-400">Projects</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-purple-400 mb-2">2</h3>
                  <p className="text-gray-400">Internship</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-pink-400 mb-2">React.js</h3>
                  <p className="text-gray-400">Stack Expert</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-indigo-400 mb-2">Web</h3>
                  <p className="text-gray-400">Developer</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
