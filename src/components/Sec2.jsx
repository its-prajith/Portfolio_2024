import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

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
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <time className="text-white">2025</time>
              <div className="text-lg font-black text-white">B.Tech - Information Technology</div>
              <p className="text-white">Sri Ramakrishna Engineering College, Coimbatore, TN</p>
              <p className="text-white">Percentage: 68%</p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <time className="text-white">2021</time>
              <div className="text-lg font-black text-white">Higher Secondary Education (HSE)</div>
              <p className="text-white">Ambal Matric Higher Secondary School, Coimbatore, TN</p>
              <p className="text-white">Percentage: 82%</p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <time className="text-white">2019</time>
              <div className="text-lg font-black text-white">SSLC</div>
              <p className="text-white">Swami Vivekananda Matric Hr. Sec. School, Coimbatore, TN</p>
              <p className="text-white">Percentage: 80%</p>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
        <br />
      </div>
    </>
  );
}

