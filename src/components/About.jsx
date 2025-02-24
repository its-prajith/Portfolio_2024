import React from "react";
import profileImg from "../assets/AbtImg1.jpg"; // Updated image path
import { FaDownload } from 'react-icons/fa'; // Import download icon

export default function About() {
  return (
    <div className="flex justify-center items-center py-12 bg-gradient-to-r from-gray-900 to-gray-800 min-h-screen text-white relative overflow-hidden">
      <div className="flex flex-wrap items-center justify-between max-w-6xl w-full z-10 relative">
        {/* Text Section */}
        <div className="flex-1 p-6 text-lg">
          <h2 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-text">
            Prajith A D
          </h2>
          <p className="text-2xl font-bold mb-4 text-gray-100 animate-fade-in">
            As a B.Tech Information Technology student, I'm passionate about IT's role in driving innovation.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6 animate-fade-in">
            I've explored programming, software development, networking, and database management. I'm eager to apply my skills to real-world challenges. I aim to join a forward-thinking team that makes a meaningful impact through technology and contribute to the organization and society.
          </p>

          {/* Download Resume Button */}
          <a
            href="https://drive.google.com/file/d/1YH_nd8xYkHuLGN_r63DslY7iQpNrotgy/view?usp=sharing" // Update with your actual resume path
            download="Prajith_Resume.pdf"   // File name for download
            className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg animate-fade-in"
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
            className="w-full h-auto rounded-lg shadow-lg transform transition duration-300 hover:scale-105 animate-fade-in"
          />
        </div>
      </div>

      {/* Background Animation */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50 z-0 animate-bg"></div>

      {/* Inline Styles for Animation */}
      <style jsx>{`
        @keyframes text-slide {
          0% {
            transform: translateY(-20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes bg-animation {
          0% {
            background-color: rgba(255, 255, 255, 0);
          }
          50% {
            background-color: rgba(255, 255, 255, 0.05);
          }
          100% {
            background-color: rgba(255, 255, 255, 0);
          }
        }

        .animate-text {
          animation: text-slide 1s ease forwards;
        }

        .animate-fade-in {
          animation: fade-in 1s ease forwards;
        }

        .animate-bg {
          animation: bg-animation 10s infinite alternate;
        }
      `}</style>
    </div>
  );
}
