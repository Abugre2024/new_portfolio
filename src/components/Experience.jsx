import React, { useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library
import Footer from "./Footer";
import Navbar from "./Navbar";
import { IoIosMicrophone } from "react-icons/io";
import { GiNewspaper } from "react-icons/gi";
import { FaChalkboardTeacher } from "react-icons/fa";

const Experience = () => {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize with desired animation duration
  }, []);

  return (
    <div>
      <Navbar />
      <section
        id="experience"
        className="py-16 bg-gradient-to-b from-gray-100 via-gray-200 to-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12">
            Professional Experience
          </h2>

          {/* Timeline Section */}
          <div className="relative border-l-4 border-indigo-500">
            {/* Job 1: Teaching Assistant */}
            <div className="mb-10 ml-6 sm:ml-8 group" data-aos="fade-up">
              <div className="absolute w-6 h-6 sm:w-8 sm:h-8 bg-indigo-500 rounded-full -left-3 sm:-left-4 transform translate-y-2 transition-all group-hover:scale-125"></div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 group-hover:-translate-y-2">
                {/* Icon Placeholder */}
                <div className="mr-0 sm:mr-4 mb-2 sm:mb-0">
                  <span className="text-indigo-500 text-2xl sm:text-3xl">
                    <i className="fas fa-chalkboard-teacher"></i>{" "}
                    <FaChalkboardTeacher />
                  </span>
                </div>

                {/* Content */}
                <div className="w-full">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-1 sm:mb-2">
                    Teaching Assistant
                  </h3>
                  <p className="text-indigo-600 text-sm sm:text-base mb-1 sm:mb-2">
                    Ghana Institute of Journalism (Sep 2019 – Aug 2020, Sep 2023
                    – Present)
                  </p>
                  <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base mb-3">
                    <li>
                      Assisted in lesson planning, classroom management, and
                      grading.
                    </li>
                    <li>
                      Provided feedback to students, supporting their academic
                      progress.
                    </li>
                    <li>
                      Led discussions and supported students who needed extra
                      help.
                    </li>
                  </ul>
                  <p className="text-gray-500">
                    <strong>Impact:</strong> Developed communication skills that
                    enhance my ability to explain complex topics in web
                    development.
                  </p>
                </div>
              </div>
            </div>

            {/* Job 2: Reporter */}
            <div
              className="mb-10 ml-6 sm:ml-8 group"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="absolute w-6 h-6 sm:w-8 sm:h-8 bg-indigo-500 rounded-full -left-3 sm:-left-4 transform translate-y-2 transition-all group-hover:scale-125"></div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 group-hover:-translate-y-2">
                {/* Icon Placeholder */}
                <div className="mr-0 sm:mr-4 mb-2 sm:mb-0">
                  <span className="text-indigo-500 text-2xl sm:text-3xl">
                    <i className="fas fa-newspaper"></i> <GiNewspaper />
                  </span>
                </div>

                {/* Content */}
                <div className="w-full">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-1 sm:mb-2">
                    Reporter
                  </h3>
                  <p className="text-indigo-600 text-sm sm:text-base mb-1 sm:mb-2">
                    Modern Ghana (Jan 2021 – Jun 2021)
                  </p>
                  <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base mb-3">
                    <li>
                      Conducted interviews and wrote articles on topics such as
                      politics and culture.
                    </li>
                    <li>
                      Edited articles and ensured they met the publication’s
                      accuracy standards.
                    </li>
                  </ul>
                  <p className="text-gray-500">
                    <strong>Impact:</strong> Strengthened my ability to conduct
                    thorough research, a skill crucial for solving development
                    problems.
                  </p>
                </div>
              </div>
            </div>

            {/* Job 3: Producer & Host */}
            <div
              className="ml-6 sm:ml-8 group"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="absolute w-6 h-6 sm:w-8 sm:h-8 bg-indigo-500 rounded-full -left-3 sm:-left-4 transform translate-y-2 transition-all group-hover:scale-125"></div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 group-hover:-translate-y-2">
                <div className="mr-0 sm:mr-4 mb-2 sm:mb-0">
                  <span className="text-indigo-500 text-2xl sm:text-3xl">
                    <i className="fas fa-microphone"></i> <IoIosMicrophone />
                  </span>
                </div>

                {/* Content */}
                <div className="w-full">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-1 sm:mb-2">
                    Producer & Host
                  </h3>
                  <p className="text-indigo-600 text-sm sm:text-base mb-1 sm:mb-2">
                    African Heritage Show, Radio GIJ (Sep 2017 – May 2019)
                  </p>
                  <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base mb-3">
                    <li>
                      Hosted and produced a radio show focused on African
                      heritage.
                    </li>
                    <li>
                      Managed the technical aspects, including sound editing and
                      scriptwriting.
                    </li>
                  </ul>
                  <p className="text-gray-500">
                    <strong>Impact:</strong> Enhanced my ability to handle
                    projects with tight deadlines and manage multiple tasks
                    efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Experience;
