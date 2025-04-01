import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="relative w-48 h-48 mx-auto mb-8">
          <img
            src="/Chris.jpg"
            alt="Chris DeMartin"
            className="rounded-full object-cover w-full h-full"
          />
        </div>
        <h1 className="text-4xl font-bold text-secondary-900 mb-4">
          Chris DeMartin
        </h1>
        <h2 className="text-2xl text-primary-600 mb-6">
          Full-Stack Application Engineer
        </h2>
        <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
          Specializing in medical technology applications with over seven years of experience
          in Electronic Medical Records (EMRs). Currently working at Medidata Solutions,
          where I contribute to building business-critical healthcare applications that
          ensure compliance, security, and high availability.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <Link
          to="/projects"
          className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-secondary-100"
        >
          <h3 className="text-xl font-semibold text-secondary-900 mb-2">Projects</h3>
          <p className="text-secondary-600">
            Explore my work in medical technology and EMR systems
          </p>
        </Link>

        <Link
          to="/certifications"
          className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-secondary-100"
        >
          <h3 className="text-xl font-semibold text-secondary-900 mb-2">Certifications</h3>
          <p className="text-secondary-600">
            View my technical certifications and educational background
          </p>
        </Link>

        <Link
          to="/contact"
          className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-secondary-100"
        >
          <h3 className="text-xl font-semibold text-secondary-900 mb-2">Contact</h3>
          <p className="text-secondary-600">
            Get in touch for collaboration opportunities
          </p>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12 text-center"
      >
        <a
          href="https://www.linkedin.com/in/chrisdemartin/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          Connect on LinkedIn
        </a>
      </motion.div>
    </div>
  );
};

export default Home; 