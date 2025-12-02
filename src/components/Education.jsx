import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaMapMarkerAlt, FaTrophy } from 'react-icons/fa';
import { resumeData } from '../data/resumeData';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { education, certifications } = resumeData;

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-12"></div>

          {/* Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Academic Background</h3>
            <div className="grid gap-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <FaGraduationCap className="text-primary-500 text-3xl mr-4" />
                      <div>
                        <h4 className="text-xl font-bold">{edu.degree}</h4>
                        <p className="text-lg text-gray-600 dark:text-gray-400">{edu.institution}</p>
                      </div>
                    </div>
                    <span className="text-primary-500 font-semibold">{edu.duration}</span>
                  </div>

                  <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{edu.location}</span>
                    <span className="mx-3">•</span>
                    <span className="font-semibold">{edu.grade}</span>
                  </div>

                  {edu.achievements && edu.achievements.length > 0 && (
                    <div>
                      <h5 className="font-semibold mb-2 flex items-center">
                        <FaTrophy className="text-yellow-500 mr-2" />
                        Achievements:
                      </h5>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-primary-500 mr-2">▸</span>
                            <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Professional Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-primary-500 via-purple-500 to-pink-500 p-6 rounded-lg shadow-lg text-white"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 h-full">
                    <h4 className="text-lg font-bold mb-2">{cert.name}</h4>
                    <p className="text-primary-100 mb-2 font-semibold">{cert.issuer}</p>
                    <p className="text-sm text-primary-200 mb-2">{cert.date}</p>
                    {cert.description && (
                      <p className="text-sm text-white/90 mt-2">{cert.description}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
