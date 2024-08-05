import React from "react";

const Education = () => {
  return (
    <div className="bg-gray-900 bg-opacity-80 p-2 rounded-lg shadow-lg max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">Education</h2>
      <div className="mb-6">
        <h3 className="text-2xl font-semibold">Bachelor of Computer Application (BCA)</h3>
        <h2>Library Management System</h2>
        <p className="text-base">05/2017 - 05/2020</p>
      </div>
      <div className="mb-6">
        <h3 className="text-2xl font-semibold">Matriculation</h3>
        <p className="text-base">Dhuliapur P.S. Bani Mandir, 01/2015 - 01/2017</p>
      </div>
      <div className="mb-6">
        <h3 className="text-2xl font-semibold">Higher Secondary</h3>
        <p className="text-base">Dhuliapur P.S. Bani Mandir, 01/2015</p>
      </div>
    </div>
  );
};

export default Education;
