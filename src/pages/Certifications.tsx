import React from 'react';
import { motion } from 'framer-motion';

const Certifications: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold text-secondary-900 mb-6">Education & Certifications</h1>
        <p className="text-lg text-secondary-600">
          My academic background and professional certifications demonstrate my commitment to
          continuous learning and expertise in healthcare technology.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-lg shadow-sm border border-secondary-100 p-8"
        >
          <h2 className="text-2xl font-semibold text-secondary-900 mb-6">Education</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-primary-600 mb-2">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-secondary-600">Adelphi University</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary-600 mb-2">
                Bachelor of Science in Computer Science & Biology
              </h3>
              <p className="text-secondary-600">Adelphi University</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-lg shadow-sm border border-secondary-100 p-8"
        >
          <h2 className="text-2xl font-semibold text-secondary-900 mb-6">Professional Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-primary-600 mb-2">
                Medidata Solutions
              </h3>
              <p className="text-secondary-600 mb-2">Full-Stack Application Engineer</p>
              <p className="text-secondary-600">
                Over seven years of experience in developing and maintaining healthcare applications,
                with a focus on EMR systems and healthcare data security.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Certifications; 