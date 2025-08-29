import React from "react";

const Popup = ({ setIsSubmitted }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center">
        <h2 className="text-2xl font-bold text-blue-600 mb-2">
          Let’s Secure Your Business
        </h2>
        <p className="text-gray-600 mb-6">
          Our team will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="bg-blue-600 text-white px-6 py-2 rounded"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Popup;
