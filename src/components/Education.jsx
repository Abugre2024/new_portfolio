import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackgroundImg from "../pages/images/book.jpg";

const Education = () => {
  return (
    <div>
      <Navbar />
      <section
        className="relative w-full h-screen bg-inherit bg-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 px-4 overflow-hidden z-40"
        style={{ backgroundImage: `url('${BackgroundImg}')` }}
      >
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Education & Certifications
            </h2>
            <p className="text-base sm:text-lg md:text-2xl">
              My academic journey and professional certifications that have
              shaped my career.
            </p>
          </div>

          {/* Education Section */}
          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">
              Education
            </h3>
            <div className="space-y-8">
              {/* Education 1 */}
              <div className="bg-gray-800 p-6 sm:p-8 md:p-10 rounded-lg shadow-xl transform hover:scale-105 transition duration-500">
                <h4 className="text-xl sm:text-2xl font-semibold">
                  Master of Philosophy in Communication (Development
                  Communication)
                </h4>
                <p className="text-indigo-400">
                  University of Education, Winneba
                </p>
                <p className="text-gray-400">Jan 2022 – Dec 2023</p>
                <p className="mt-4 text-gray-300">
                  Focused on Development Communication, equipping myself with
                  skills to influence change through strategic communication
                  interventions.
                </p>
              </div>

              {/* Education 2 */}
              <div className="bg-gray-800 p-6 sm:p-8 md:p-10 rounded-lg shadow-xl transform hover:scale-105 transition duration-500">
                <h4 className="text-xl sm:text-2xl font-semibold">
                  Exchange Program
                </h4>
                <p className="text-indigo-400">
                  University of Jyvaskyla, Finland
                </p>
                <p className="text-gray-400">Aug 2023 – Dec 2023</p>
                <p className="mt-4 text-gray-300">
                  Participated in an exchange program focused on international
                  perspectives in education and communication.
                </p>
              </div>

              {/* Education 3 */}
              <div className="bg-gray-800 p-6 sm:p-8 md:p-10 rounded-lg shadow-xl transform hover:scale-105 transition duration-500">
                <h4 className="text-xl sm:text-2xl font-semibold">
                  Bachelor of Arts in Communication (Journalism)
                </h4>
                <p className="text-indigo-400">Ghana Institute of Journalism</p>
                <p className="text-gray-400">Sep 2015 – Jul 2019</p>
                <p className="mt-4 text-gray-300">
                  Developed journalistic skills in writing, reporting, and
                  multimedia production, with an emphasis on investigative
                  journalism.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">
              Certifications
            </h3>
            <div className="space-y-8">
              {/* Certification 1 */}
              <div className="bg-indigo-600 p-6 sm:p-8 md:p-10 rounded-lg shadow-xl transform hover:scale-105 transition duration-500">
                <h4 className="text-xl sm:text-2xl font-semibold">
                  Entrepreneurship & Innovation: Web Development Job Simulation
                </h4>
                <p className="text-gray-300">2024</p>
                <p className="mt-4 text-gray-200">
                  Completed a job simulation program focusing on frontend web
                  development, enhancing skills in HTML, CSS, JavaScript, and
                  React.
                </p>
              </div>

              {/* Certification 2 */}
              <div className="bg-indigo-600 p-6 sm:p-8 md:p-10 rounded-lg shadow-xl transform hover:scale-105 transition duration-500">
                <h4 className="text-xl sm:text-2xl font-semibold">
                  Digital Marketing Certificate of Excellence
                </h4>
                <p className="text-gray-300">2024</p>
                <p className="mt-4 text-gray-200">
                  Gained expertise in digital marketing strategies, including
                  SEO, social media marketing, and content creation.
                </p>
              </div>

              {/* Certification 3 */}
              <div className="bg-indigo-600 p-6 sm:p-8 md:p-10 rounded-lg shadow-xl transform hover:scale-105 transition duration-500">
                <h4 className="text-xl sm:text-2xl font-semibold">
                  International Train the Trainers
                </h4>
                <p className="text-gray-300">2023</p>
                <p className="mt-4 text-gray-200">
                  Completed an international training program, equipping me with
                  advanced teaching methodologies and presentation skills.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Background Circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-24 sm:w-32 md:w-48 h-24 sm:h-32 md:h-48 bg-indigo-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-20 sm:w-28 md:w-40 h-20 sm:h-28 md:h-40 bg-gray-800 rounded-full opacity-20 animate-bounce"></div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Education;
