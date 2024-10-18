import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/contact",
      element: <Contact />,
    },

    {
      path: "/education",
      element: <Education />,
    },

    {
      path: "/experience",
      element: <Experience />,
    },

    {
      path: "/footer",
      element: <Footer />,
    },

    {
      path: "/navbar",
      element: <Navbar />,
    },

    {
      path: "/projects",
      element: <Projects />,
    },

    {
      path: "/skills",
      element: <Skills />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
