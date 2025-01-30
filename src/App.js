import React, { useState, useEffect } from "react";
import ParticlesBackground from "./components/ParticlesBackground";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Review from './components/Review';
import Contact from "./components/Contact";
import GetInTouch from './components/GetInTouch';
import Footer from './components/Footer';
import { ReactTyped as Typed } from "react-typed";
import { Link, Element } from "react-scroll";
import { FaSun, FaMoon } from "react-icons/fa";
import "./index.css";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scroll = (scrollTop / windowHeight) * 100;
    setScrollProgress(scroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <ParticlesBackground />
      <div className="relative z-10 text-white">
        <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-yellow-500 via-red-600 to-pink-600 bg-opacity-90 p-4 z-50 flex justify-between items-center">
          <div className="flex-1 flex justify-center">
            <ul className="flex space-x-4">
              <li><Link to="home" smooth={true} duration={500} className="cursor-pointer">Home</Link></li>
              <li><Link to="about" smooth={true} duration={500} className="cursor-pointer">About</Link></li>
              <li><Link to="education" smooth={true} duration={500} className="cursor-pointer">Education</Link></li>
              <li><Link to="experience" smooth={true} duration={500} className="cursor-pointer">Experience</Link></li>
              <li><Link to="projects" smooth={true} duration={500} className="cursor-pointer">Projects</Link></li>
              <li><Link to="skills" smooth={true} duration={500} className="cursor-pointer">Skills</Link></li>
              <li><Link to="reviews" smooth={true} duration={500} className="cursor-pointer">Review</Link></li>
              <li><Link to="contact" smooth={true} duration={500} className="cursor-pointer">Contact</Link></li>
            </ul>
          </div>
          <button onClick={toggleDarkMode} className="text-xl p-2">
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
          <div className="fixed top-16 left-0 w-full h-1 bg-gray-200">
            <div
              className="h-full bg-gradient-to-r from-blue-400 via-green-500 to-purple-600 transition-all duration-150"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </nav>

        <div className="pt-16">
          <Element name="home" className="flex flex-col items-center justify-center min-h-screen select-none">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">Souvik Roy</h1>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              I'm a{" "}
              <Typed
                strings={["Software Developer", "Web Developer", "Creative Coder"]}
                typeSpeed={50}
                backSpeed={50}
                loop
              />
            </h1>
            <p className="text-base md:text-lg text-center max-w-lg mb-6">
              A dedicated problem-solver with a penchant for intricate challenges, driven by an analytical mindset
              and unwavering commitment to delivering impeccable code within tight deadlines.
            </p>
            <img
              src="https://private-user-images.githubusercontent.com/73609345/408077850-e1c4ac16-ca61-4cd7-834a-5534f8d18ae9.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzgyMzIzMzEsIm5iZiI6MTczODIzMjAzMSwicGF0aCI6Ii83MzYwOTM0NS80MDgwNzc4NTAtZTFjNGFjMTYtY2E2MS00Y2Q3LTgzNGEtNTUzNGY4ZDE4YWU5LmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAxMzAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMTMwVDEwMTM1MVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWI5MjMyZTkxZGExMTk2YTZlNzI5ODRjMjFjZTU5MjMxZmFjODFjNDQ3YmI5MTQzMDg5NmJmMmM0MThjNzQyZDEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.hrRdkzHe29BogeaelVI8QtVshcTrIMcljWJXMjMSgjY"
              alt="Profile"
              className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full border-4 border-white mb-6"
            />
          </Element>
          <Element name="about" className="bg-gray-900 dark:bg-gray-700 p-6 rounded-lg shadow-lg max-w-3xl mx-auto mb-16 select-none">
            <About />
          </Element>
          <Element name="education" className="bg-gray-800 dark:bg-gray-600 p-6 rounded-lg shadow-lg max-w-3xl mx-auto mb-16 select-none">
            <Education />
          </Element>
          <Element name="experience" className="bg-gray-700 dark:bg-gray-500 p-6 rounded-lg shadow-lg max-w-3xl mx-auto mb-16 select-none">
            <Experience />
          </Element>
          <Element name="projects" className="bg-gray-600 dark:bg-gray-500 p-6 rounded-lg shadow-lg max-w-3xl mx-auto mb-16 select-none">
            <Projects />
          </Element>
          <Element name="skills" className="bg-gray-500 dark:bg-gray-500 p-6 rounded-lg shadow-lg max-w-3xl mx-auto mb-16 select-none">
            <Skills />
          </Element>
          <Element name="reviews" className="bg-gray-500 dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl mx-auto mb-16 select-none">
            <Review />
          </Element>
          <Element name="contact" className="bg-gray-400 dark:bg-gray-400 p-6 rounded-lg shadow-lg max-w-3xl mx-auto mb-16 select-none">
            <Contact />
          </Element>
          <Element name="getintouch" className="bg-gray-400 dark:bg-gray-400 p-6 rounded-lg shadow-lg max-w-3xl mx-auto mb-16 select-none">
            <GetInTouch />
          </Element>
        </div>
      <Footer />
      </div>
    </div>
  );
};

export default App;
