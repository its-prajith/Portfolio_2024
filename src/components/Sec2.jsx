import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaBook } from 'react-icons/fa'; // Import React Icons
import { GiBookmarklet,GiGraduateCap } from "react-icons/gi";

export default function Sec2() {
  return (
    <>
      <div className="border-b border-neutral-200 pb-4 text-white">
        <h2 className="my-20 text-center text-4xl">
          <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent font-m">
            EDUCATION
          </span>
        </h2>

        <Timeline position="alternate">
          {/* Timeline Item 1 */}
          <TimelineItem>
            <TimelineSeparator>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                {/* React Icon for B.Tech */}
                <GiGraduateCap className="text-pink-500 w-8 h-8" />
              </div>
              <TimelineConnector className="bg-gray-400" />
            </TimelineSeparator>
            <TimelineContent>
              <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: 30 }} 
                transition={{ duration: 0.6 }} 
                className="transition-transform duration-300 hover:scale-105 bg-neutral-800 p-6 rounded-lg shadow-lg"
              >
                <time className="text-pink-300 text-lg font-semibold">2025</time>
                <div className="text-xl font-bold text-white">B.Tech - Information Technology</div>
                <p className="text-neutral-400">Sri Ramakrishna Engineering College, Coimbatore, TN</p>
                <p className="text-neutral-400">Percentage: 68%</p>
              </motion.div>
            </TimelineContent>
          </TimelineItem>

          {/* Timeline Item 2 */}
          <TimelineItem>
            <TimelineSeparator>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                {/* React Icon for HSE */}
                <GiBookmarklet className="text-purple-500 w-8 h-8" />
              </div>
              <TimelineConnector className="bg-gray-400" />
            </TimelineSeparator>
            <TimelineContent>
              <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: 30 }} 
                transition={{ duration: 0.6 }} 
                className="transition-transform duration-300 hover:scale-105 bg-neutral-800 p-6 rounded-lg shadow-lg"
              >
                <time className="text-purple-300 text-lg font-semibold">2021</time>
                <div className="text-xl font-bold text-white">Higher Secondary Education (HSE)</div>
                <p className="text-neutral-400">Ambal Matric Higher Secondary School, Coimbatore, TN</p>
                <p className="text-neutral-400">Percentage: 82%</p>
              </motion.div>
            </TimelineContent>
          </TimelineItem>

          {/* Timeline Item 3 */}
          <TimelineItem>
            <TimelineSeparator>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                {/* React Icon for SSLC */}
                <FaBook className="text-blue-500 w-8 h-8" />
              </div>
              <TimelineConnector className="bg-gray-400" />
            </TimelineSeparator>
            <TimelineContent>
              <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: 30 }} 
                transition={{ duration: 0.6 }} 
                className="transition-transform duration-300 hover:scale-105 bg-neutral-800 p-6 rounded-lg shadow-lg"
              >
                <time className="text-blue-300 text-lg font-semibold">2019</time>
                <div className="text-xl font-bold text-white">SSLC</div>
                <p className="text-neutral-400">Swami Vivekananda Matric Hr. Sec. School, Coimbatore, TN</p>
                <p className="text-neutral-400">Percentage: 80%</p>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
        <br />
      </div>
    </>
  );
}
