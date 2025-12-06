
import React from "react";
import profileImg from "../assets/AbtImg3.jpg";
import { FaDownload } from "react-icons/fa";
import Squares from "../components/Squares"; // default import works now

export default function About() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      {/* 🔲 Animated Squares Background */}
      <div className="absolute inset-0 pointer-events-none">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"   // up, down, left, right, diagonal
          borderColor="#ffffff22"
          hoverFillColor="#202020"
        />
      </div>

      {/* 💡 Soft vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 max-w-6xl w-full px-6 py-12">
        <div className="flex flex-wrap items-center justify-between gap-8">
          {/* Text Section */}
          <div className="flex-1 min-w-[280px] p-4 text-lg">
            <h2 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-text">
              Prajith A D
            </h2>

            <p className="text-2xl font-bold mb-4 text-gray-100 animate-fade-in">
              As a B.Tech Information Technology student, I'm passionate about IT's role in driving innovation.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6 animate-fade-in">
              I've explored programming, software development, networking, and database management. I'm eager to apply my
              skills to real-world challenges. I aim to join a forward-thinking team that makes a meaningful impact
              through technology and contribute to the organization and society.
            </p>

            {/* ✅ Download Resume Button */}
            <a
              href="https://drive.google.com/file/d/1EcFdoLIPAEKtvoEwDQ-xyvAIlIcRz6Mm/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-colors"
            >
              <FaDownload className="text-white" />
              <span>Download My CV/Resume</span>
            </a>
          </div>

          {/* Image Section */}
          <div className="flex-1 min-w-[280px] p-4">
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-auto rounded-lg shadow-lg transform transition duration-300 hover:scale-105 animate-fade-in"
            />
          </div>
        </div>
      </div>

      {/* Subtle animated overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900/10 z-0 animate-bg" />

      {/* Inline keyframes (Next.js only). If Vite/CRA, move to globals.css/index.css */}
      <style jsx>{`
        @keyframes text-slide {
          0% { transform: translateY(-20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes bg-animation {
          0% { background-color: rgba(255, 255, 255, 0); }
          50% { background-color: rgba(255, 255, 255, 0.05); }
          100% { background-color: rgba(255, 255, 255, 0); }
        }
        .animate-text { animation: text-slide 1s ease forwards; }
        .animate-fade-in { animation: fade-in 1s ease forwards; }
        .animate-bg { animation: bg-animation 10s infinite alternate; }
      `}</style>
    </div>
  );
}