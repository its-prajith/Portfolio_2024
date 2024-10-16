import React from "react";
import { RiReactjsLine } from "react-icons/ri"; // React
import { FaNodeJs, FaJava, FaDatabase } from "react-icons/fa"; // Node.js, Java, MySQL
import { SiExpress, SiMongodb, SiJavascript, SiHtml5, SiCss3, SiC } from "react-icons/si"; // Other technologies
import { motion } from "framer-motion";
import { FaStar, FaStarHalfAlt } from "react-icons/fa"; // Star icons

const TechWithProgress = () => {
  const techData = [
    { icon: <RiReactjsLine className="text-6xl text-cyan-400" />, name: "React.js", progress: 90 },
    { icon: <FaNodeJs className="text-6xl text-green-700" />, name: "Node.js", progress: 85 },
    { icon: <FaJava className="text-6xl text-red-600" />, name: "Java", progress: 88 },
    { icon: <FaDatabase className="text-6xl text-green-400" />, name: "MySQL", progress: 80 },
    { icon: <SiExpress className="text-6xl text-sky-700" />, name: "Express", progress: 70 },
    { icon: <SiMongodb className="text-6xl text-green-500" />, name: "MongoDB", progress: 85 },
    { icon: <SiJavascript className="text-6xl text-amber-600" />, name: "JavaScript", progress: 77 },
    { icon: <SiHtml5 className="text-6xl text-orange-600" />, name: "HTML5", progress: 90 },
    { icon: <SiCss3 className="text-6xl text-blue-600" />, name: "CSS3", progress: 85 },
    { icon: <SiC className="text-6xl text-zinc-50" />, name: "C Programming", progress: 75 }
  ];

  // Function to convert progress to stars
  const progressToStars = (progress) => {
    const stars = Math.floor(progress / 20); // 5-star rating system
    const hasHalfStar = progress % 20 >= 10; // If the remaining percentage is 10 or above, show a half-star
    return { stars, hasHalfStar };
  };

  return (
    <>
      <div className="border-b border-neutral-200 pb-4 text-white">
        <h2 className="my-20 text-center text-4xl">
          <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent font-m">
            TECHNOLOGIES
          </span>
        </h2>

        {/* Grid for logos and progress */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center">
          {techData.map((tech, index) => {
            const { stars, hasHalfStar } = progressToStars(tech.progress);

            return (
              <motion.div
                key={index}
                className="relative group rounded-2xl border-4 border-neutral-800 p-4 w-48 h-48 flex flex-col items-center justify-center bg-gray-900 hover:bg-gray-800 shadow-lg hover:shadow-2xl"
                whileHover={{ scale: 1.1 }} // Scale effect on hover
                transition={{ duration: 0.3 }}
              >
                {/* Tech Icon */}
                {tech.icon}

                {/* Hover to display name and star ratings */}
                <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                  <p className="mt-4 text-white font-bold text-lg">{tech.name}</p>
                  <div className="flex items-center mt-2">
                    {[...Array(stars)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-xl" />
                    ))}
                    {hasHalfStar && <FaStarHalfAlt className="text-yellow-400 text-xl" />}
                  </div>
                  <p className="mt-2 text-white">{stars + (hasHalfStar ? 0.5 : 0)} / 5</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TechWithProgress;
