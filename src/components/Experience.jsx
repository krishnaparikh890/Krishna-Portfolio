import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaBriefcase } from 'react-icons/fa'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    {
      title: '.NET Web Developer Intern',
      company: 'Dhavat-Infotech',
      period: 'January 2025 - May 2025',
      location: 'Anand, Gujarat, India',
      description: [
        'Developed a web-based GRN and Labor Attendance Management System using ASP.NET MVC, C#, and SQL Server',
        'Implemented approval workflows and role-based access control to manage multi-location data securely',
        'Contributed to testing, debugging, and performance optimization to improve system accuracy and reliability',
        'Collaborated with the development team to analyze requirements and enhance system usability through continuous improvements and feature enhancements',
      ],
    },
  ]

  return (
    <section id="experience" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-[#111111]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-indigo-500/30"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-8 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}
            >
              <div className="flex items-start gap-6">
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center">
                    <FaBriefcase className="text-white text-xl" />
                  </div>
                </div>

                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex-1 bg-[#1a1a1a] rounded-lg p-6 border border-gray-800 hover:border-indigo-500/50 transition-colors"
                >
                  <h3 className="text-2xl font-bold text-indigo-400 mb-2">{exp.title}</h3>
                  <p className="text-xl text-gray-300 mb-1">{exp.company}</p>
                  <p className="text-gray-400 mb-4">{exp.period} • {exp.location}</p>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-300 flex items-start gap-2">
                        <span className="text-indigo-400 mt-1">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
