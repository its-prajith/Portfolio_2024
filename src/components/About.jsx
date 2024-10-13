import React from "react";
import profileImg from "../assets/AbtImg.jpg";
import { FaDownload } from 'react-icons/fa'; // Import download icon

export default function About() {
  return (
    <>
      <div className="flex justify-center items-center py-12 bg-gradient-to-r from-gray-900 to-gray-800 min-h-screen text-white">
        <div className="flex flex-wrap items-center justify-between max-w-6xl w-full">
          {/* Text Section */}
          <div className="flex-1 p-6 text-lg">
            <h2 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
              Prajith A D
            </h2>
            <p className="text-2xl font-bold mb-4 text-gray-100">
              As a B.Tech Information Technology student, I'm passionate about IT's role in driving innovation.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              I've explored programming, software development, networking, and database management. I'm eager to apply my skills to real-world challenges. I aim to join a forward-thinking team that makes a meaningful impact through technology and contribute to the organization and society.
            </p>

            {/* Download Resume Button */}
            <a
              href="https://drive.google.com/file/d/1YH_nd8xYkHuLGN_r63DslY7iQpNrotgy/view?usp=sharing" // Update with your actual resume path
              download="Prajith_Resume.pdf"   // File name for download
              className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
              <FaDownload className="mr-2" />  {/* Download Icon */}
              Download My CV/Resume
            </a>
          </div>

          {/* Image Section */}
          <div className="flex-1 p-6">
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-auto rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </>
  );
}

