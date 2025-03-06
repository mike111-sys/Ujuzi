import React, { useState, useEffect } from "react";
import Loader from "../Homepage/Loader"; // Import the loader
import Logo from "../../assets/ujuzi-creations-logo.png";

const Homepage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500); // Simulate a loading time
  }, []);

  if (loading) {
    return <Loader />; // Show loader before homepage content
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-center p-4 sm:p-6">
      {/* Logo with increased margin-top */}
      <img
        src={Logo}
        alt="Ujuzi Creations Logo"
        className="w-48 sm:w-60 mt-16 sm:mt-24 animate-bounce"
      />

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-8 mb-4 animate-fade-in">
        Exciting Things Are on the Way!
      </h1>

      {/* Paragraph 1 */}
      <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-2xl mb-6 animate-fade-in">
        🚀 Our website is currently under construction as we work hard to bring you a seamless and stunning digital experience. But don’t let that stop you—we’re fully operational and ready to bring your ideas to life!
      </p>

      {/* Paragraph 2 */}
      <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 animate-fade-in">
        Whether you have a project in mind or need expert advice, we’re here to help. Let’s create something extraordinary together!
      </p>

      {/* WhatsApp Button */}
      <a
        className="mt-6 px-6 py-3 sm:px-8 sm:py-4 bg-white text-blue-600 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg animate-fade-in"
        href="wa.me/254741238738"
      >
        Get in Touch on WhatsApp
      </a>
    </div>
  );
};

export default Homepage;