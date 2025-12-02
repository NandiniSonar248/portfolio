import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { resumeData } from '../data/resumeData';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { personal, achievements } = resumeData;

  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Bio Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-primary-500">Career Objective</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-justify">
                {personal.bio}
              </p>
              
              <h3 className="text-2xl font-bold mb-4 text-primary-500">Profile Summary</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-justify">
                {personal.objective}
              </p>
              
              <div className="space-y-3 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <h4 className="font-bold text-lg mb-3">Contact Information</h4>
                <div className="flex items-center">
                  <span className="font-semibold w-24 text-primary-500">Email:</span>
                  <a href={`mailto:${personal.email}`} className="text-gray-600 dark:text-gray-400 hover:text-primary-500">{personal.email}</a>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold w-24 text-primary-500">Phone:</span>
                  <a href={`tel:${personal.phone}`} className="text-gray-600 dark:text-gray-400 hover:text-primary-500">{personal.phone}</a>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold w-24 text-primary-500">Location:</span>
                  <span className="text-gray-600 dark:text-gray-400">{personal.location}</span>
                </div>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6">Highlights</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start space-x-3 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <span className="text-primary-500 text-xl">✨</span>
                    <p className="text-gray-700 dark:text-gray-300">{achievement}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
