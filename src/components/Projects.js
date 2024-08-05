import React, { useRef, useState, useEffect } from "react";
import { FaNodeJs } from "react-icons/fa";
// import { SiExpress, SiMysql, SiHtml5, SiGit, SiGitlab } from "react-icons/si";
// import { AiOutlineAppstoreAdd } from "react-icons/ai";

const Projects = () => {
  const projectRefs = useRef([]);

  const projectList = [
    {
      title: "SYLIS",
      description: "Developed APIs for a Mumbai-based healthcare startup focused on innovative technology solutions.",
      icon: <img src="https://sylis.in/wp-content/themes/sylis/images/logo.png" alt="SYLIS Logo" className="w-24 h-24 object-contain" />,
      animation: "animate-slideInLeft",
    },
    {
      title: "NEW MERA INTERNATIONAL",
      description: "Crafted APIs and managed project challenges for an online forex brokerage specializing in CFDs on currency pairs.",
      icon: <FaNodeJs className="w-20 h-20 text-4xl" />,
      animation: "animate-slideInRight",
    },
    {
      title: "GROWTRAIL",
      description: "Spearheaded API development and built the administrative panel for a comprehensive employee management system.",
      icon: <img src="https://app.growtrail.com:3303/app_image/growtraillogo.png" alt="Growtrail" className="w-20 h-20 text-4xl" />,
      animation: "animate-slideInTop",
    },
    {
      title: "Netflix App",
      description: "Built a streaming app mimicking Netflix using React, focusing on video playback and user experience.",
      icon: <img src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940" alt="Netflix Logo" className="w-24 h-24 object-contain" />,
      animation: "animate-slideInBottom",
    },
    {
      title: "Food Villa App",
      description: "Developed a food ordering app with React, integrating features for browsing menus and placing orders.",
      icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXNJNOj9og1OwFPjj7EPzatEV7BG3ZAZoDQFN_D-TutjrUoN8WU6X2GcT-M0DzJ9HT0xE&usqp=CAU" alt="Food Villa Logo" className="w-24 h-24 object-contain" />,
      animation: "animate-slideInDiagonal",
    },
    {
      title: "YouTube App",
      description: "Created a YouTube-like app with React, emphasizing video streaming and user interaction.",
      icon: <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAflBMVEX/////AAD/+fn/ra3/kZH/3Nz/7Oz/sbH/nJz/p6f/1NT/EBD/zMz/vr7/4eH/3d3/xMT/pKT/lZX/8fH/cnL/0ND/jIz/trb/eHj/ISH/QkL/WFj/h4f/amr/fHz/R0f/ZGT/Kyv/OTn/UlL/MjL/RET/Xl7/goL/VFT/e3vLg+1WAAADB0lEQVR4nO3ca1ObUBSFYS4JEAKEgDEaL9Haavv//2CNU6fVOuPeJxz3bH2fzzrjWhLOjZAkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgq8jGolvVTd+32zLPF+t1VQ3D7NEwVNV6kefltu37pp6vijGz/mMnVNTtenZ2v79dpmrnu4uTy6psOusQR+gfvumDv2l5lbu8MPKJ8j+7dtdCtpu4gkeNdSidYvoGHpXWsVSiVODrSriP1EHq556wiVVBemYdTewuWgduLoQxXgVpbh1OqI3YwY11OKHLiB2k1uGE9jE7KKzTycSswMkUIeYt0ctNsY7awaV1PJGYw4KXgWERtYOddTyRU1GW76ElWMcTOZNFKT9zBxeiKFnoXMrFiuGHOEohq+slF5Okc8W/s5H98L/mxvFEZFGeL2n1KFKbhhPSdZBk17oOestsUsoOkqRTLbJau2RimbqDJOkVp1AeNpeFS6ZXQ1wl7mBhE0tFeLTwepjPToQdrE1S6XRhHSTJXHY6WRlk0gruQLjiHD48kd48vIMkmb3/i7MPzhPiqA6S8d3bwunHxglyXAfdu+czn70DyeDg4bNwxD1RNEnwcE8MnB+IJ4sexsbADsSLBg9zpKC5smLx6GGuHLJm0mwieFgz6dfOus0kD2tnbQfaTcVPuIei3lx2sZem2VMNOGRYGccTkQ1yhw7qkMMmF3vrsgfzsmS8CWjAyRmL7KwtG4IacHLWJtgDOMLSOp5I3LP3vXU8kT5qB1fW8USEGwiBPGyhiBcMgXw8kxX32byNdTqZiI9sp+lonU5G9kBSIOtwQjEHBh/DQtyboosdlIOwhYCIdTSxeDMEH7ODJ7JlUwDrYBq3cSpw8Uzas0z/zJ2Aj+8u/DX9fXHp7/vvzVRfev/Dwxnb/7rqJuCtB2+5O/X2MXihqNt8eDi5UL8F4nz38+rXbL1tOhc7iHJPrwOZ15um7/u23ZZlflCW28NbQPpmU89XXTE6WRcBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBp/AbhqSeqCnPYIQAAAABJRU5ErkJggg==" alt="YouTube Logo" className="w-24 h-24 object-contain" />,
      animation: "animate-slideInLeft",
    },
  ];

  const [inView, setInView] = useState(new Array(projectList.length).fill(false));

  useEffect(() => {
    projectRefs.current.forEach((ref, index) => {
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
  }, [projectList.length]);

  return (
    <div className="p-6 bg-opacity-70">
      <h2 className="text-3xl font-semibold mb-4 font-bold mb-8 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((project, index) => (
          <div
            key={index}
            ref={el => (projectRefs.current[index] = el)}
            className={`flex flex-col items-center p-4 bg-gray-800 bg-opacity-70 rounded-lg shadow-lg transition-transform transform ${
              inView[index] ? project.animation : "opacity-0"
            } hover:scale-105 hover:bg-gray-700 hover:shadow-xl hover:transition-transform hover:duration-300`}
          >
            {project.icon}
            <h3 className="text-xl font-bold mt-4">{project.title}</h3>
            <p className="text-sm text-gray-300 mt-2 text-center">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
