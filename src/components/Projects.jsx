import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <section id="projects" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Featured Projects
          </h2>

          {/* Section 1: Development Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-blue-600 text-center mb-6">
              Development Projects (Web & Code-based)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              {/* Project 1: Library App */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
                <h4 className="text-2xl font-bold text-gray-700 mb-4 text-center">
                  Library App
                </h4>
                <p className="text-gray-600 mb-4">
                  A user-friendly library app with navigation, search, and
                  animated features, allowing users to explore different book
                  categories.
                </p>
                <ul className="list-disc list-inside mb-4 text-gray-600">
                  <li>
                    <strong>Tech Stack:</strong> React, Tailwind CSS, JavaScript
                  </li>
                  <li>
                    <strong>Key Features:</strong> Responsive design, Search
                    functionality, Animation with slider
                  </li>
                  <li>
                    <strong>Challenges & Solutions:</strong> Tackled responsive
                    design issues and ensured fast load times with lazy loading
                    and efficient use of Tailwind CSS utilities.
                  </li>
                </ul>
                <a
                  href="https://trailblaze-library.netlify.app/"
                  className="text-blue-600 hover:underline font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Neftlify
                </a>
              </div>
            </div>
            <div className="">
              {/* Project 2: Advert App */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
                <h4 className="text-2xl font-bold text-gray-700 mb-4 text-center">
                  Advert App
                </h4>
                <p className="text-gray-600 mb-4">
                  A user-friendly Advert app with navigation, search, and
                  animated features, allowing users/vendors to explore and post adverts
                </p>
                <ul className="list-disc list-inside mb-4 text-gray-600">
                  <li>
                    <strong>Tech Stack:</strong> React, Tailwind CSS, JavaScript
                  </li>
                  <li>
                    <strong>Key Features:</strong> Responsive design, Search
                    functionality, Animation with typewriter effect
                  </li>
                  <li>
                    <strong>Challenges & Solutions:</strong> Tackled responsive
                    design issues and ensured fast load times with lazy loading
                    and efficient use of Tailwind CSS utilities.
                  </li>
                </ul>
                <a
                  href="https://advert-app.netlify.app//"
                  className="text-blue-600 hover:underline font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Netflify
                </a>
              </div>
            </div>
            <div className="">
              {/* Project 3: School Management App */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
                <h4 className="text-2xl font-bold text-gray-700 mb-4 text-center">
                  School Management System App
                </h4>
                <p className="text-gray-600 mb-4">
                  A user-friendly School management system app with navigation, and search, features, allowing parents, students and teachers to stay connected in real-time with the focus on helping the student grow beyond just grades. 
                </p>
                <ul className="list-disc list-inside mb-4 text-gray-600">
                  <li>
                    <strong>Tech Stack:</strong> React, Tailwind CSS, JavaScript
                  </li>
                  <li>
                    <strong>Key Features:</strong> Responsive design, Search
                    functionality, and push notification
                  </li>
                  <li>
                    <strong>Challenges & Solutions:</strong> Tackled responsive
                    design issues and ensured fast load times with lazy loading
                    and efficient use of Tailwind CSS utilities.
                  </li>
                </ul>
                <a
                  href="https://edulink-app.netlify.app/"
                  className="text-blue-600 hover:underline font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Netlify
                </a>
              </div>
            </div>
            </div>
          </div>

          {/* Section 2: Social & Leadership Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-blue-600 text-center mb-6">
              Social & Leadership Projects
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 2: Nyamendam Water Project */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
                <h4 className="text-2xl font-bold text-gray-700 mb-4 text-center">
                  Nyamendam Water Project
                </h4>
                <p className="text-gray-600 mb-4">
                  Led a community engagement project to improve water access in
                  the Nyamendam community.
                </p>
                <ul className="list-disc list-inside mb-4 text-gray-600">
                  <li>
                    <strong>Key Responsibilities:</strong> Collaborated with
                    community members to develop sustainable water solutions.
                  </li>
                  <li>
                    <strong>Outcome:</strong> Improved water access and enhanced
                    living conditions for the community.
                  </li>
                </ul>
              </div>

              {/* Project 3: Serene Scenes Campaign */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
                <h4 className="text-2xl font-bold text-gray-700 mb-4 text-center">
                  Serene Scenes Campaign
                </h4>
                <p className="text-gray-600 mb-4">
                  Directed a sanitation awareness campaign in Winneba to promote
                  hygiene and responsible waste management.
                </p>
                <ul className="list-disc list-inside mb-4 text-gray-600">
                  <li>
                    <strong>Key Achievements:</strong> Organized activities that
                    led to significant improvements in community sanitation
                    practices.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Projects;
