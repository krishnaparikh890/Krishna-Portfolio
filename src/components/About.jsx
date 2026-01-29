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
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              I'm a passionate Full Stack Developer with expertise in building modern web applications
              using the MERN stack and .NET technologies. Currently pursuing B.Tech in Information Technology
              at MBIT, Anand, with a strong foundation in both frontend and backend development.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              During my internship at Dhavat-Infotech, I gained hands-on experience developing enterprise-level
              applications using ASP.NET MVC, C#, and SQL Server. I'm passionate about creating scalable,
              efficient, and user-friendly solutions that solve real-world problems.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, I enjoy participating in hackathons, attending tech workshops, and
              continuously learning new technologies to stay at the forefront of web development.
            </p>
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
                  <h3 className="text-3xl font-bold text-indigo-400 mb-2">2+</h3>
                  <p className="text-gray-400">Projects</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-purple-400 mb-2">1</h3>
                  <p className="text-gray-400">Internship</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-pink-400 mb-2">MERN</h3>
                  <p className="text-gray-400">Stack Expert</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-indigo-400 mb-2">.NET</h3>
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
