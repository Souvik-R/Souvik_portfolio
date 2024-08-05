import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const contactInfo = [
  {
    icon: <FaEnvelope className="text-2xl text-gray-700 dark:text-gray-300" />,
    text: 'roysouvikr112@gmail.com',
    link: 'mailto:roysouvikr112@gmail.com',
  },
//   {
//     icon: <FaPhoneAlt className="text-2xl text-gray-700 dark:text-gray-300" />,
//     text: '+91 7430808073',
//     link: 'tel:+917430808073',
//   },
  {
    icon: <FaMapMarkerAlt className="text-2xl text-gray-700 dark:text-gray-300" />,
    text: 'Panskura, Purba Medinipur, Panskura, India',
    link: '#',
  },
  {
    icon: <FaLinkedin className="text-2xl text-gray-700 dark:text-gray-300" />,
    text: 'LinkedIn',
    link: 'https://linkedin.com/in/souvik-roy-967a14202',
  },
  {
    icon: <FaGithub className="text-2xl text-gray-700 dark:text-gray-300" />,
    text: 'GitHub',
    link: 'https://github.com/Souvik-R/',
  },
];

const GetInTouch = () => {
  return (
    <div className="bg-gray-900 bg-opacity-80 rounded-lg shadow-lg dark:bg-gray-800 p-6">
      <h2 className="text-3xl font-semibold mb-8 font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Get In Touch</h2>
      <div className="space-y-6">
        {contactInfo.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-4 p-4 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-white rounded-lg shadow-lg"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 w-full">
              <div className="flex-shrink-0">
                {item.icon}
              </div>
              <p className="text-lg font-medium">{item.text}</p>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GetInTouch;
