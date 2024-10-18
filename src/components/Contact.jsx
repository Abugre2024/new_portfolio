import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <section
        id="contact"
        className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-600 text-white py-20 px-4"
      >
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get in Touch
            </h2>
            <p className="text-lg md:text-2xl">
              I'd love to hear from you! Whether it's about collaboration, a
              project, or just a quick hello!
            </p>
          </div>

          {/* Contact Info & Form Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-white text-gray-900 rounded-lg shadow-2xl p-6 md:p-10 transform hover:scale-105 transition duration-500">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">
                Contact Information
              </h3>
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <p className="text-lg">
                  <span className="font-semibold">Email:</span>{" "}
                  <a
                    href="mailto:abayetaabugre@gmail.com"
                    className="text-indigo-600 hover:text-indigo-800 break-words"
                  >
                    abayetaabugre@gmail.com
                  </a>
                </p>
                <p className="text-lg">
                  <span className="font-semibold">LinkedIn:</span>{" "}
                  <a
                    href="https://www.linkedin.com/in/abugre-abayeta-944861285"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 break-words"
                  >
                    Abugre Alebsuure Abayeta
                  </a>
                </p>
                <p className="text-lg">
                  <span className="font-semibold">GitHub:</span>{" "}
                  <a
                    href="https://github.com/Abugre2024"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 break-words"
                  >
                    Abugre2024
                  </a>
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Location:</span> Accra, Ghana
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-indigo-500 text-white rounded-lg shadow-2xl p-6 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">
                Send a Message
              </h3>
              <form className="space-y-6">
                <div>
                  <label
                    className="block text-lg font-semibold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 border-2 border-white rounded-lg focus:outline-none focus:border-indigo-300 transition duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    className="block text-lg font-semibold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border-2 border-white rounded-lg focus:outline-none focus:border-indigo-300 transition duration-300"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label
                    className="block text-lg font-semibold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full p-3 border-2 border-white rounded-lg focus:outline-none focus:border-indigo-300 transition duration-300"
                    placeholder="Your Message"
                    rows="5"
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-white text-indigo-700 hover:bg-indigo-600 hover:text-white font-semibold py-3 px-6 rounded-full transition duration-300 w-full md:w-auto"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Floating Circles Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-indigo-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-indigo-600 rounded-full opacity-20 animate-bounce"></div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
