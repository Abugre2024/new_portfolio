// src/components/Skills.js
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Skills = () => {
  return (
    <div>
        <Navbar/>
    <section
      id="skills"
      className="py-16 bg-gradient-to-b from-blue-100 via-purple-200 to-indigo-300"
    >
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-12">
          Technical & Soft Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div className="group relative bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">HTML</h3>
            <p className="text-gray-600 group-hover:hidden">
              Web structure and semantic markup language.
            </p>
            <p className="text-gray-500 absolute bottom-4 right-4 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Advanced
            </p>
          </div>
          <div className="group relative bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">
              CSS / Tailwind CSS
            </h3>
            <p className="text-gray-600 group-hover:hidden">
              Style and layout techniques, including utility-first design.
            </p>
            <p className="text-gray-500 absolute bottom-4 right-4 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Advanced
            </p>
          </div>
          <div className="group relative bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">
              JavaScript
            </h3>
            <p className="text-gray-600 group-hover:hidden">
              Dynamic web interactions and full client-side scripting.
            </p>
            <p className="text-gray-500 absolute bottom-4 right-4 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Intermediate
            </p>
          </div>
          <div className="group relative bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">React</h3>
            <p className="text-gray-600 group-hover:hidden">
              Component-based frontend development framework.
            </p>
            <p className="text-gray-500 absolute bottom-4 right-4 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Intermediate
            </p>
          </div>
          <div className="group relative bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">
              Audio & Video Editing
            </h3>
            <p className="text-gray-600 group-hover:hidden">
              Editing skills using tools for audio-visual content production.
            </p>
            <p className="text-gray-500 absolute bottom-4 right-4 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Intermediate
            </p>
          </div>
          <div className="group relative bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">
              Microsoft Office, Canva & Blogging
            </h3>
            <p className="text-gray-600 group-hover:hidden">
              Proficiency in MS Office, graphic design, and content creation.
            </p>
            <p className="text-gray-500 absolute bottom-4 right-4 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Advanced
            </p>
          </div>

          {/* Soft Skills */}
          <div className="group relative bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-bold text-green-600 mb-4">
              Communication
            </h3>
            <p className="text-gray-600 group-hover:hidden">
              Strong verbal and written communication skills.
            </p>
            <p className="text-gray-500 absolute bottom-4 right-4 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Expert
            </p>
          </div>
          <div className="group relative bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-bold text-green-600 mb-4">
              Leadership
            </h3>
            <p className="text-gray-600 group-hover:hidden">
              Proven leadership experience in guiding teams and projects.
            </p>
            <p className="text-gray-500 absolute bottom-4 right-4 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Expert
            </p>
          </div>
          <div className="group relative bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-bold text-green-600 mb-4">
              Teaching & Mentorship
            </h3>
            <p className="text-gray-600 group-hover:hidden">
              Educating and mentoring individuals and groups effectively.
            </p>
            <p className="text-gray-500 absolute bottom-4 right-4 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Advanced
            </p>
          </div>
          <div className="group relative bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-bold text-green-600 mb-4">
              Project Management
            </h3>
            <p className="text-gray-600 group-hover:hidden">
              Expertise in managing and executing multi-phase projects.
            </p>
            <p className="text-gray-500 absolute bottom-4 right-4 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Advanced
            </p>
          </div>

          {/* Other Skills */}
          <div className="group relative bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-bold text-red-600 mb-4">Research</h3>
            <p className="text-gray-600 group-hover:hidden">
              Skilled in conducting thorough and detailed research.
            </p>
            <p className="text-gray-500 absolute bottom-4 right-4 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Advanced
            </p>
          </div>
          <div className="group relative bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-bold text-red-600 mb-4">
              Digital Marketing
            </h3>
            <p className="text-gray-600 group-hover:hidden">
              Experience in digital marketing strategies and implementation.
            </p>
            <p className="text-gray-500 absolute bottom-4 right-4 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Intermediate
            </p>
          </div>
          <div className="group relative bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-bold text-red-600 mb-4">
              Social Media Management
            </h3>
            <p className="text-gray-600 group-hover:hidden">
              Managing and growing online presence through social media.
            </p>
            <p className="text-gray-500 absolute bottom-4 right-4 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Intermediate
            </p>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default Skills;
