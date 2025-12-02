import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';
import { resumeData } from '../data/resumeData';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { experience } = resumeData;

  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-12"></div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-purple-500"></div>

            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`relative mb-12 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'}`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute top-6 right-0 transform translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-gray-900"></div>

                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-primary-500 font-semibold">{exp.duration}</span>
                    <FaBriefcase className="text-primary-500" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{exp.position}</h3>
                  <h4 className="text-xl text-gray-600 dark:text-gray-400 mb-2">{exp.company}</h4>
                  
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{exp.location}</span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>

                  <div className="mb-4">
                    <h5 className="font-semibold mb-2">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary-500 mr-2">▸</span>
                          <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
