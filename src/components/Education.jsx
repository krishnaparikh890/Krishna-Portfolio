import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGraduationCap } from 'react-icons/fa'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const education = [
    {
      degree: 'B.Tech (Information Technology)',
      institution: 'MBIT',
      location: 'Anand, Gujarat, India',
      year: '2026',
      description: 'Pursuing Bachelor of Technology in Information Technology with focus on web development, software engineering, and modern technologies.',
    },
  ]

  const activities = [
    'Attended the workshop on JavaScript in July 2024',
    'Completed the certified courses of MERN Stack',
    'Participated in Smart Gujarat Hackathon 2025',
  ]

  return (
    <section id="education" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#1a1a1a] rounded-lg p-8 border border-gray-800 hover:border-indigo-500/50 transition-colors"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaGraduationCap className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-indigo-400 mb-1">{edu.degree}</h3>
                  <p className="text-xl text-gray-300 mb-1">{edu.institution}</p>
                  <p className="text-gray-400 mb-2">{edu.location}</p>
                  <span className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm">
                    {edu.year}
                  </span>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">{edu.description}</p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#1a1a1a] rounded-lg p-8 border border-gray-800 hover:border-purple-500/50 transition-colors"
          >
            <h3 className="text-2xl font-bold text-purple-400 mb-6">Co-curricular Activities</h3>
            <ul className="space-y-3">
              {activities.map((activity, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="text-gray-300 flex items-start gap-2"
                >
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>{activity}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education
