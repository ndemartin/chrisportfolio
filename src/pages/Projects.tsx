import React from 'react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold text-secondary-900 mb-6">Projects</h1>
        <p className="text-lg text-secondary-600">
          My professional experience focuses on developing and maintaining critical healthcare applications,
          with a particular emphasis on Electronic Medical Records (EMR) systems.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-lg shadow-sm border border-secondary-100 p-8"
      >
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-secondary-900 mb-2">
            Medidata Solutions EMR Systems
          </h2>
          <p className="text-primary-600 mb-4">Full-Stack Application Engineer</p>
          <p className="text-secondary-600 mb-6">
            Over seven years of experience contributing to the development and maintenance of
            business-critical healthcare applications at Medidata Solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-xl font-semibold text-secondary-900 mb-3">Key Responsibilities</h3>
            <ul className="space-y-2 text-secondary-600">
              <li>• Full-stack development of EMR applications</li>
              <li>• System reliability and performance optimization</li>
              <li>• Security and compliance implementation</li>
              <li>• Cross-functional team collaboration</li>
              <li>• Agile/Scrum methodology implementation</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-secondary-900 mb-3">Technical Expertise</h3>
            <ul className="space-y-2 text-secondary-600">
              <li>• Frontend and backend development</li>
              <li>• Healthcare data security</li>
              <li>• System architecture design</li>
              <li>• Performance monitoring</li>
              <li>• Troubleshooting critical issues</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-secondary-900 mb-3">Key Achievements</h3>
          <ul className="space-y-4 text-secondary-600">
            <li>
              <p className="font-medium text-secondary-900">Performance Optimization</p>
              <p>
                Implemented optimizations that improved system response times and reduced
                server load, resulting in enhanced user experience for healthcare providers.
              </p>
            </li>
            <li>
              <p className="font-medium text-secondary-900">Security Enhancements</p>
              <p>
                Led the implementation of security measures to ensure HIPAA compliance
                and protect sensitive patient data.
              </p>
            </li>
            <li>
              <p className="font-medium text-secondary-900">Feature Development</p>
              <p>
                Contributed to the development of new features that streamlined clinical
                workflows and improved data accuracy.
              </p>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects; 