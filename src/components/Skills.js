import React, { useRef, useState, useEffect } from "react";
import { FaReact, FaNodeJs, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiExpress, SiMysql, SiHtml5, SiGit, SiGitlab } from "react-icons/si";

const Skills = () => {
  const skillRefs = useRef([]);

  const skillList = [
    {
      title: "Node.js",
      description: "Backend development using Node.js.",
      icon: <FaNodeJs className="text-4xl" />,
      animation: "animate-slideInLeft",
    },
    {
      title: "JavaScript",
      description: "Programming language used for dynamic web development.",
      icon: <FaReact className="text-4xl" />,
      animation: "animate-slideInRight",
    },
    {
      title: "Express.js",
      description: "Web application framework for Node.js.",
      icon: <SiExpress className="text-4xl" />,
      animation: "animate-slideInTop",
    },
    {
      title: "MySQL",
      description: "Relational database management system.",
      icon: <SiMysql className="text-4xl" />,
      animation: "animate-slideInBottom",
    },
    {
      title: "React.js",
      description: "Frontend library for building user interfaces.",
      icon: <FaReact className="text-4xl" />,
      animation: "animate-slideInDiagonal",
    },
    {
      title: "HTML",
      description: "Markup language for creating web pages.",
      icon: <SiHtml5 className="text-4xl" />,
      animation: "animate-slideInLeft",
    },
    {
      title: "CSS",
      description: "Style sheet language for designing web pages.",
      icon: <FaCss3Alt className="text-4xl" />,
      animation: "animate-slideInRight",
    },
    {
      title: "Git",
      description: "Version control system for tracking changes.",
      icon: <SiGit className="text-4xl" />,
      animation: "animate-slideInTop",
    },
    {
      title: "Github",
      description: "Platform for hosting and collaborating on Git repositories.",
      icon: <FaGithub className="text-4xl" />,
      animation: "animate-slideInBottom",
    },
    {
      title: "Gitlab",
      description: "DevOps platform for software development and version control.",
      icon: <SiGitlab className="text-4xl" />,
      animation: "animate-slideInDiagonal",
    },
  ];

  const [inView, setInView] = useState(new Array(skillList.length).fill(false));

  useEffect(() => {
    skillRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(([entry]) => {
          setInView(prev => {
            const newView = [...prev];
            newView[index] = entry.isIntersecting;
            return newView;
          });
        });
        observer.observe(ref);
        return () => observer.unobserve(ref);
      }
    });
  }, [skillList.length]);

  return (
    <div className="p-6 bg-opacity-70">
      <h2 className="text-3xl font-semibold mb-4 font-bold mb-8 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
        My Skillset
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillList.map((skill, index) => (
          <div
            key={index}
            ref={el => (skillRefs.current[index] = el)}
            className={`flex flex-col items-center p-4 bg-gray-800 bg-opacity-70 rounded-lg shadow-lg transition-transform transform ${
              inView[index] ? skill.animation : "opacity-0"
            } hover:scale-105 hover:bg-gray-700 hover:shadow-xl hover:transition-transform hover:duration-300`}
          >
            {skill.icon}
            <h3 className="text-xl font-bold mt-4">{skill.title}</h3>
            <p className="text-sm text-gray-300 mt-2 text-center">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
