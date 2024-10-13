import { RiReactjsLine } from "react-icons/ri"; // React
import { FaNodeJs, FaJava } from "react-icons/fa"; // Node.js, Java
import { FaDatabase } from "react-icons/fa"; // MySQL, can represent databases
import { SiExpress } from "react-icons/si"; // Express
import { SiMongodb } from "react-icons/si"; // MongoDB
import { SiJavascript } from "react-icons/si"; // JavaScript
import { SiHtml5 } from "react-icons/si"; // HTML
import { SiCss3 } from "react-icons/si"; // CSS
import { SiC } from "react-icons/si"; // C
import { motion } from 'framer-motion';

const Tech = () => {
  const techData = [
    { icon: <RiReactjsLine className="text-6xl text-cyan-400" />, name: "React.js" },
    { icon: <FaNodeJs className="text-6xl text-green-700" />, name: "Node.js" },
    { icon: <FaJava className="text-6xl text-red-600" />, name: "Java" },
    { icon: <FaDatabase className="text-6xl text-green-400" />, name: "MySQL" },
    { icon: <SiExpress className="text-6xl text-sky-700" />, name: "Express" },
    { icon: <SiMongodb className="text-6xl text-green-500" />, name: "MongoDB" },
    { icon: <SiJavascript className="text-6xl text-amber-600" />, name: "JavaScript" },
    { icon: <SiHtml5 className="text-6xl text-cyan-400" />, name: "HTML5" },
    { icon: <SiCss3 className="text-6xl text-blue-500" />, name: "CSS3" },
    { icon: <SiC className="text-6xl text-zinc-50" />, name: "C Programming" }
  ];

  return (
    <>
      <div className="border-b border-neutral-200 pb-4 text-white">
        <h2 className="my-20 text-center text-4xl">
          <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent font-m">
            TECHNOLOGIES
          </span>
        </h2>
        {/* Icon Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center">
          {techData.map((tech, index) => (
            <motion.div 
              key={index} 
              className="relative group rounded-2xl border-4 border-neutral-800 p-4 w-32 h-32 flex flex-col items-center justify-center transition-transform duration-200 bg-gray-900 hover:bg-gray-800 shadow-lg hover:shadow-2xl" // Added background and shadow effects
              whileHover={{ scale: 1.15, rotate: 5, y: -8 }}  // Scale effect, rotation, and upward motion on hover
              transition={{ duration: 0.3 }}  // Faster transition for smoother effect
            >
              {/* Icon */}
              {tech.icon}
              {/* Tooltip */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 bg-neutral-900 text-white text-sm py-1 px-2 rounded-md transition-opacity duration-200">
                {tech.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tech;
