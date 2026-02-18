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
              I am a passionate Web Developer with experience in building modern, responsive, and user-friendly web applications using React.js and ASP.NET technologies. I have good knowledge of frontend and backend development and completed my Bachelor of Engineering in Information Technology. I am motivated to learn new technologies and continuously improve my skills to build high-quality web applications.
            </p>
            <p className="text-lg text-gray-300 text-justify leading-relaxed mb-4">
              <p>
  During my internship, I worked on developing an online GRN Management and Labor Attendance System used across multiple locations, improving record accuracy and streamlining approval processes. Using ASP.NET MVC, C#, and SQL Server, I worked on building and enhancing the application. I also worked on designing and implementing key modules such as GRN entry, approval workflows, and labor attendance tracking, ensuring efficient system functionality and reliable data management.
</p>
            </p>
            <p className="text-lg text-gray-300  text-justify leading-relaxed">
              When I'm not coding, I like exploring new technologies, and continuously learning to stay updated with modern web development.
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
