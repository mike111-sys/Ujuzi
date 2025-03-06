import React, { useState, useEffect } from "react";
import Loader from "../Homepage/Loader"; // Import the loader
import Logo from "../../assets/ujuzi-creations-logo.png";
import { motion } from "framer-motion"; // Import framer-motion

const Homepage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000); // Simulate a loading time
  }, []);

  if (loading) {
    return <Loader />; // Show loader before homepage content
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-center p-4 sm:p-6">
      {/* Logo with bounce animation */}
      <motion.img
        src={Logo}
        alt="Ujuzi Creations Logo"
        className="w-48 sm:w-60 mt-16 sm:mt-24"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
      />

      {/* Heading with slide-up animation */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-8 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        Exciting Things Are on the Way!
      </motion.h1>

      {/* Paragraph 1 with fade-in animation */}
      <motion.p
        className="text-base sm:text-lg md:text-xl text-gray-100 max-w-2xl mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        🚀 Our website is currently under construction as we work hard to bring you a seamless and stunning digital experience. But don’t let that stop you—we’re fully operational and ready to bring your ideas to life!
      </motion.p>

      {/* Paragraph 2 with fade-in animation */}
      <motion.p
        className="text-base sm:text-lg md:text-xl text-gray-100 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        Whether you have a project in mind or need expert advice, we’re here to help. Let’s create something extraordinary together!
      </motion.p>

      {/* Button with fade-in and scale animation */}
      <motion.a
        className="mt-6 px-6 py-3 sm:px-8 sm:py-4 bg-white text-blue-600 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
        href="wa.me/25474128738"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        Get in Touch on WhatsApp
      </motion.a>
    </div>
  );
};

export default Homepage;