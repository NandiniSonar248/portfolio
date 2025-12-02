import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaBriefcase, FaCertificate, FaTrophy } from 'react-icons/fa';

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    {
      icon: <FaBriefcase className="text-4xl" />,
      number: "4+",
      label: "Internships Completed",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaCode className="text-4xl" />,
      number: "5+",
      label: "Programming Languages",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaCertificate className="text-4xl" />,
      number: "6+",
      label: "Certifications Earned",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <FaTrophy className="text-4xl" />,
      number: "100+",
      label: "Students Engaged",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-800 dark:to-purple-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-center text-white"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
                className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg`}
              >
                {stat.icon}
              </motion.div>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.5 }}
                className="text-4xl font-bold mb-2"
              >
                {stat.number}
              </motion.h3>
              <p className="text-primary-100 font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
