import Navbar from "./Navbar";
import pic from "../assets/images/Abu.jpg";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section
        id="home"
        className="min-h-screen bg-gradient-to-r from-gray-500 to-gray-100 flex flex-col justify-center items-center text-white px-4 py-8"
      >
        {/* Main Content Wrapper */}
        <div className="flex flex-col md:flex-row w-full max-w-6xl items-center md:items-start">
          {/* Image and Quote Section */}
          <div className="w-full md:w-1/3 flex flex-col justify-center items-center mb-8 md:mb-0 md:mr-8">
            <img
              src={pic}
              alt="Abugre Alebsuure Abayeta"
              className="w-3/4 md:w-full max-w-xs md:max-w-md border-4 border-[rgba(255,255,255,0.3)] shadow-lg"
            />
            <p className="italic text-lg md:text-xl text-center mt-4">
              “Transforming ideas into intuitive and impactful digital
              experiences.”
            </p>
          </div>

          {/* Text and Skills Section */}
          <div className="w-full md:w-2/3 flex flex-col justify-center items-center md:items-start px-4 md:px-8">
            {/* Hero Section */}
            <div className="text-center md:text-left mb-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6">
                Abugre Alebsuure Abayeta
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-4">
                Frontend Developer & Communication Specialist
              </h2>
              <p className="text-lg md:text-xl mb-6 md:mb-8">
                I’m a Frontend Developer with a passion for creating
                user-centric web applications. Combining my technical expertise
                in HTML, CSS, JavaScript, and React with a strong background in
                communication, I design seamless digital experiences that are
                both functional and engaging.
              </p>
              {/* Call to Action Buttons */}
              <div className="space-x-2 md:space-x-4">
                <Link
                  to="/projects"
                  className="bg-white text-blue-600 font-semibold py-2 md:py-3 px-4 md:px-6 rounded-full hover:bg-blue-500 hover:text-white transition duration-300"
                >
                  View Projects
                </Link>
                <Link
                  to="/contact"
                  className="bg-transparent border-2 border-white py-2 md:py-3 px-4 md:px-6 rounded-full hover:bg-white hover:text-blue-600 transition duration-300"
                >
                  Contact Me
                </Link>
              </div>
            </div>

            {/* Skills Section */}
            <div className="w-full">
              <h3 className="text-2xl font-bold text-center md:text-left mb-6 md:mb-8">
                Top Skills
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {/* Technical Skills */}
                {["HTML", "CSS (Tailwind)", "JavaScript", "React"].map(
                  (skill, index) => (
                    <div
                      key={index}
                      className="text-center p-4 bg-white text-blue-600 rounded-md shadow-lg"
                    >
                      <h4 className="font-bold">{skill}</h4>
                    </div>
                  )
                )}
                {/* Soft Skills */}
                {[
                  "Communication",
                  "Teaching",
                  "Leadership",
                  "Project Management",
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-white text-blue-600 rounded-md shadow-lg"
                  >
                    <h4 className="font-bold">{skill}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
