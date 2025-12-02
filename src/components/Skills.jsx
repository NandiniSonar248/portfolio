import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { resumeData } from '../data/resumeData';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { skills } = resumeData;

  const categories = [...new Set(skills.technical.map(skill => skill.category))];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-12"></div>

          {/* Technical Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Technical Expertise</h3>
            {categories.map((category, catIndex) => (
              <motion.div 
                key={category} 
                className="mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: catIndex * 0.15 }}
              >
                <div className="flex items-center mb-6">
                  <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-purple-500">{category}</h4>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-primary-500 to-transparent ml-4"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {skills.technical
                    .filter(skill => skill.category === category)
                    .map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: catIndex * 0.1 + index * 0.05 }}
                        whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                        className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border border-gray-100 dark:border-gray-700"
                      >
                        <div className="flex justify-between mb-3">
                          <span className="font-semibold text-gray-800 dark:text-white">{skill.name}</span>
                          <span className="text-primary-500 font-bold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden shadow-inner">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{ delay: catIndex * 0.1 + index * 0.05 + 0.2, duration: 1, ease: 'easeOut' }}
                            className="h-full bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 rounded-full shadow-sm"
                          />
                        </div>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Soft Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.soft.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="bg-gradient-to-r from-primary-500 to-purple-500 p-4 rounded-lg text-center text-white font-semibold shadow-lg"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
