import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-900 bg-opacity-80 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold mb-8 font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Contact</h2>
      <form className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-400"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-400"
        />
        <textarea
          placeholder="Message"
          className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-400"
        ></textarea>
        <button
          type="submit"
          className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
