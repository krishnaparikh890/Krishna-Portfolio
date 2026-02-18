import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaCode, FaDatabase, FaTools } from 'react-icons/fa'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories = [
    
    {
      title: 'Web Development',
      icon: <FaCode />,
      skills: ['React.js','HTML5', 'CSS', 'Tailwind CSS', 'Bootstrap'],
      color: 'purple',
    },
    {
      title: 'Databases',
      icon: <FaDatabase />,
      skills: ['MySQL', 'MongoDB'],
      color: 'pink',
    },
    {
      title: 'Tools',
      icon: <FaTools />,
      skills: ['Git', 'GitHub'],
      color: 'indigo',
    },
  ]

  const getColorClasses = (color) => {
    const colors = {
      indigo: 'from-indigo-500 to-indigo-600 border-indigo-500/50 text-indigo-400',
      purple: 'from-purple-500 to-purple-600 border-purple-500/50 text-purple-400',
      pink: 'from-pink-500 to-pink-600 border-pink-500/50 text-pink-400',
    }
    return colors[color] || colors.indigo
  }

  return (
    <section id="skills" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-[#111111]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-[#1a1a1a] rounded-lg p-6 border border-gray-800 hover:border-indigo-500/50 transition-all"
            >
              <div className={`flex items-center gap-3 mb-4 text-2xl ${getColorClasses(category.color).split(' ')[2]}`}>
                {category.icon}
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className={`px-4 py-2 bg-gradient-to-r ${getColorClasses(category.color)} rounded-lg text-sm font-medium border`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
