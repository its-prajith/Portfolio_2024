import TimeTable from '../assets/TimeTable.png';
import WaterMap from '../assets/WaterMap.jpg';
import YarTech from '../assets/YarTech.jpg';
// import redShirt from '../assets/redShirt.jpg';
import AbtImg2 from '../assets/AbtImg2.jpg';
import SmartMart from '../assets/Smart-Mart-Portfolio.png';
import CarRental from '../assets/CarRental.jpg';


export const Data = [
  {
    title: "Time Table Generator Using Genetic Algorithm-2023",
    image: TimeTable,
    Description: "Timetable Generator web app with Django, SQLite3, and genetic algorithms. Employed Django for both frontend and backend, ensuring efficient development. Utilized SQLite3 and genetic algorithms to automate timetable creation.",
    technologies: ["HTML", "CSS", "Javascript", "Django", "C", "SQLite3"],
    githubLink: "https://github.com/its-prajith/Time_Table_Generator" // Time table generator git link
  },
  {
    title: "Web-Based Tool For Mapping Water Supply Network Using IOT - MAY 2024",
    image: WaterMap,
    Description: "Developed a web tool using ReactJS to map water supply networks with turbidity and pH sensors. Enabled real-time monitoring via wireless data transmission. Created interactive dashboards for easy visualization and management.",
    technologies: ["HTML", "CSS", "ReactJS", "Leaflet", "C", "EmailJS", "MongoDB"],
    githubLink: "https://github.com/its-prajith/Water-mapping" // Water mapping GitHub link
  },
  {
    title: "YAR Tech Services",
    image: YarTech,
    Description: "Developed dynamic and responsive websites for YAR Tech Services using JavaScript, enhancing user engagement and functionality. Collaborated with YAR Tech Services to deliver customized web solutions, ensuring optimal performance and client satisfaction.",
    technologies: ["HTML", "CSS", "ReactJS", "MongoDB"],
    githubLink: "https://github.com/its-prajith/YAR-TechServices" // YAR Tech Services GitHub link
  },
  {
    title: "Portfolio Using ReactJs",
    image: AbtImg2,
    // image: redShirt,
    Description: "A responsive portfolio built with React, Tailwind CSS, and Framer Motion, showcasing projects and skills with smooth animations. Designed for a modern, clean user experience across all devices.",
    technologies: ["HTML", "CSS","Tailwind", "ReactJs", "EmailJs","Framer Motion"],
    githubLink: "https://github.com/its-prajith/Portfolio_2024" // Portfolio GitHub link
  },
 
{
    title: "Car Rental Booking",
    image: CarRental,
    Description:
      "A full-stack car rental platform enabling real-time car availability, booking workflow, and dynamic pricing. Includes role-based access (admin/user), secure authentication with JWT, and protected API endpoints via Spring Security. Features an admin dashboard for fleet and user management, and Angular forms with validations, reusable services, and interceptors for authentication.",
    technologies: [
      "Angular",
      "TypeScript",
      "Spring Boot",
      "MySQL",
      "JWT",
      "Spring Security"
    ],
    githubLink: "https://github.com/its-prajith" // Replace with your actual repo link
    // liveDemo: "https://carrental.example.com" // Optional if you have a live demo
  }
,
 
{
  "title": "Smart Mart-Ecommerce",
  "image": SmartMart, // Replace with actual image import or path
  "Description": "Smart Mart is a full-stack e-commerce application featuring secure payment integration, AI-powered customer support, and robust backend APIs. It offers a responsive Angular UI with reusable components and state management for a seamless shopping experience.",
  "technologies": [
    "Angular",
    "TypeScript",
    "Spring Boot",
    "MySQL",
    "Spring Security",
    "PayPal SDK",
    "Dante AI Chatbot"
  ],
  githubLink: "https://github.com/its-prajith" // Replace with your actual GitHub repo link
},
];

export default Data;
