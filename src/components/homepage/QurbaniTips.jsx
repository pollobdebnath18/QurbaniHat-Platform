import React from "react";
import {
  FaCheckCircle,
  FaLeaf,
  FaHeartbeat,
  FaBalanceScale,
} from "react-icons/fa";

const QurbaniTips = () => {
  return (
    <div className="bg-gray-700 text-white py-12 px-4">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-400">
            Qurbani Tips
          </h2>
          <p className="text-gray-300 mt-3 max-w-xl mx-auto">
            Follow these important guidelines to ensure a proper and meaningful
            Qurbani experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaHeartbeat className="text-3xl text-red-400 mb-4" />
            <h3 className="font-bold text-lg mb-2">Healthy Animal</h3>
            <p className="text-gray-300 text-sm">
              Always choose a healthy and disease-free animal for Qurbani.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaLeaf className="text-3xl text-green-400 mb-4" />
            <h3 className="font-bold text-lg mb-2">Proper Feeding</h3>
            <p className="text-gray-300 text-sm">
              Ensure the animal is well-fed with natural and nutritious food.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaCheckCircle className="text-3xl text-blue-400 mb-4" />
            <h3 className="font-bold text-lg mb-2">Correct Age</h3>
            <p className="text-gray-300 text-sm">
              Verify that the animal meets the required age for Qurbani.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaBalanceScale className="text-3xl text-yellow-400 mb-4" />
            <h3 className="font-bold text-lg mb-2">Fair Price</h3>
            <p className="text-gray-300 text-sm">
              Compare prices and ensure you are paying a fair market value.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition ">
            <FaCheckCircle className="text-3xl text-purple-400 mb-4" />
            <h3 className="font-bold text-lg mb-2">Proper Care</h3>
            <p className="text-gray-300 text-sm">
              Treat animals with care and kindness before Qurbani.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaLeaf className="text-3xl text-teal-400 mb-4" />
            <h3 className="font-bold text-lg mb-2">Clean Environment</h3>
            <p className="text-gray-300 text-sm">
              Keep the animal in a clean and comfortable environment before
              Qurbani.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QurbaniTips;
