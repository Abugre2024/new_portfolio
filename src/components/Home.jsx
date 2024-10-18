// src/components/Home.js
import Navbar from "./Navbar";
import pic from "../assets/images/Abu.jpg";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section
        id="home"
        className="min-h-screen bg-gradient-to-r from-gray-500 to-gray-100 flex flex-col justify-center items-center text-white px-4 py-8"
      >
        {/* Hero Section */}
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6">
            Abugre Alebsuure Abayeta
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-4">
            Frontend Developer & Communication Specialist
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 px-2">
            I’m a Frontend Developer with a passion for creating user-centric
            web applications. Combining my technical expertise in HTML, CSS,
            JavaScript, and React with a strong background in communication, I
            design seamless digital experiences that are both functional and
            engaging.
          </p>
          {/* Call to Action Buttons */}
          <div className="space-x-2 md:space-x-4">
            <a
              href="/projects"
              className="bg-white text-blue-600 font-semibold py-2 md:py-3 px-4 md:px-6 rounded-full hover:bg-blue-500 hover:text-white transition duration-300"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white py-2 md:py-3 px-4 md:px-6 rounded-full hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-12 md:mt-16 max-w-4xl">
          <h3 className="text-2xl font-bold text-center mb-6 md:mb-8">
            Top Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {/* Technical Skills */}
            <div className="text-center p-4 bg-white text-blue-600 rounded-md shadow-lg">
              <h4 className="font-bold">HTML</h4>
            </div>
            <div className="text-center p-4 bg-white text-blue-600 rounded-md shadow-lg">
              <h4 className="font-bold">CSS (Tailwind)</h4>
            </div>
            <div className="text-center p-4 bg-white text-blue-600 rounded-md shadow-lg">
              <h4 className="font-bold">JavaScript</h4>
            </div>
            <div className="text-center p-4 bg-white text-blue-600 rounded-md shadow-lg">
              <h4 className="font-bold">React</h4>
            </div>

            {/* Soft Skills */}
            <div className="text-center p-4 bg-white text-blue-600 rounded-md shadow-lg">
              <h4 className="font-bold">Communication</h4>
            </div>
            <div className="text-center p-4 bg-white text-blue-600 rounded-md shadow-lg">
              <h4 className="font-bold">Teaching</h4>
            </div>
            <div className="text-center p-4 bg-white text-blue-600 rounded-md shadow-lg">
              <h4 className="font-bold">Leadership</h4>
            </div>
            <div className="text-center p-4 bg-white text-blue-600 rounded-md shadow-lg">
              <h4 className="font-bold">Project Management</h4>
            </div>
          </div>
        </div>

        {/* Professional Image and Quote */}
        <div className="mt-12 md:mt-16 text-center">
          <img
            src={pic}
            alt="Abugre Alebsuure Abayeta"
            className="w-40 h-40 md:w-60 md:h-60 rounded-full mx-auto mb-4 border-4 border-white"
          />
          <p className="italic text-lg md:text-xl">
            “Transforming ideas into intuitive and impactful digital
            experiences.”
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
