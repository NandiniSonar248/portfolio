import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Loading = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900"
    >
      <div className="text-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500"
        />
        <motion.h2
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-2xl font-bold text-gradient"
        >
          Loading...
        </motion.h2>
      </div>
    </motion.div>
  );
};

const withLoading = (Component) => {
  return function WithLoadingComponent(props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1500);

      return () => clearTimeout(timer);
    }, []);

    if (loading) {
      return <Loading />;
    }

    return <Component {...props} />;
  };
};

export default withLoading;
