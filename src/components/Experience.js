import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`bg-gray-900 dark:bg-gray-700 bg-opacity-80 p-6 rounded-lg shadow-lg max-w-3xl mx-auto transition-opacity duration-500 ${
        inView ? 'animate-slideInBottom opacity-100' : 'opacity-0'
      }`}
    >
      <h2 className="text-3xl font-semibold mb-4">Professional Experience</h2>
      <div className="mb-6">
        <h3 className="text-2xl font-semibold flex items-center">
          <FaBriefcase className="mr-2 text-2xl" />
          Software Developer at Bluehorse Software Solutions Pvt Ltd
        </h3>
        <p className="text-base">September 2021 - Present</p>
        <ul className="list-disc list-inside text-base space-y-2">
          <li>
            Developed and maintained RESTful APIs using Node.js and Express framework for the company's flagship product.
          </li>
          <li>
            Implemented secure authentication mechanisms like JWT tokens to safeguard API endpoints and user data.
          </li>
          <li>
            Collaborated closely with frontend developers to seamlessly integrate APIs into the user interface for enhanced user experience.
          </li>
          <li>
            Actively participated in stand-up meetings to ensure timely delivery of high-quality code.
          </li>
        </ul>
      </div>
      <p className="text-base">
        Dedicated Node.js developer with 2.11 years of experience, adept at crafting robust APIs and implementing intuitive admin panels. Seeking to leverage expertise in backend development to drive innovation and efficiency in web applications.
      </p>
    </div>
  );
};

export default Experience;
