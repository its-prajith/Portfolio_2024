
import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs, FaJava, FaDatabase, FaStar, FaStarHalfAlt } from "react-icons/fa";
import {
  SiExpress, SiMongodb, SiJavascript, SiHtml5, SiCss3, SiC,
  SiAngular, SiSpringboot, SiSpring, SiWordpress
} from "react-icons/si";

/** Map 0–100 -> 0–5 stars (0.5 increments) */
const progressToStars = (progress) => {
  const rating = Math.round((progress / 20) * 2) / 2;
  const stars = Math.floor(rating);
  const hasHalfStar = rating - stars >= 0.5;
  return { stars, hasHalfStar, rating };
};

/** UPDATED: Added Angular, Spring Boot, Spring Security, WordPress */
const TECH_DATA = [
  { icon: <RiReactjsLine className="text-4xl" />, name: "React.js", progress: 85, color: "#22d3ee" },
  { icon: <SiAngular className="text-4xl" />, name: "Angular", progress: 90, color: "#dd0031" },
  { icon: <FaNodeJs className="text-4xl" />, name: "Node.js", progress: 85, color: "#22c55e" },
  { icon: <SiExpress className="text-4xl" />, name: "Express", progress: 70, color: "#0ea5e9" },
  { icon: <FaJava className="text-4xl" />, name: "Java", progress: 90, color: "#ef4444" },
  { icon: <SiSpringboot className="text-4xl" />, name: "Spring Boot", progress: 90, color: "#6db33f" },
  { icon: <SiSpring className="text-4xl" />, name: "Spring Security", progress: 85, color: "#6db33f" },
  { icon: <FaDatabase className="text-4xl" />, name: "MySQL", progress: 80, color: "#34d399" },
  { icon: <SiMongodb className="text-4xl" />, name: "MongoDB", progress: 85, color: "#16a34a" },
  { icon: <SiJavascript className="text-4xl" />, name: "JavaScript", progress: 77, color: "#f59e0b" },
  { icon: <SiHtml5 className="text-4xl" />, name: "HTML5", progress: 90, color: "#f97316" },
  { icon: <SiCss3 className="text-4xl" />, name: "CSS3", progress: 85, color: "#2563eb" },
  { icon: <SiWordpress className="text-4xl" />, name: "WordPress", progress: 75, color: "#21759b" },
  { icon: <SiC className="text-4xl" />, name: "C Programming", progress: 75, color: "#93c5fd" },
];

const containerVariants = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.97, y: 10 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 220, damping: 22 } },
};

/** Compact circular progress (SVG) */
const CircularProgress = ({ progress, size = 96, stroke = 8, color }) => {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg width={size} height={size} className="drop-shadow-[0_0_6px_rgba(0,0,0,0.2)]">
      <circle cx={size / 2} cy={size / 2} r={radius} stroke="rgba(255,255,255,0.12)" strokeWidth={stroke} fill="none" />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        fill="none"
        initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
        animate={{ strokeDasharray: circumference, strokeDashoffset: offset }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        style={{ filter: `drop-shadow(0 0 6px ${color}55)` }}
      />
      <text
        x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"
        className="fill-white" style={{ fontSize: 14, fontWeight: 700 }}
      >
        {progress}%
      </text>
    </svg>
  );
};

const TechCard = ({ tech, size }) => {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useTransform(my, [-40, 40], [5, -5]);
  const rotateY = useTransform(mx, [-40, 40], [-5, 5]);

  const { stars, hasHalfStar, rating } = progressToStars(tech.progress);

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.03 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mx.set(e.clientX - rect.left - rect.width / 2);
        my.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
      style={{ rotateX, rotateY, transformPerspective: "800px" }}
      tabIndex={0}
      role="group"
      aria-label={`${tech.name} proficiency card`}
      className={`
        relative rounded-xl border border-white/10
        bg-gradient-to-br from-white/[0.055] to-white/[0.02]
        backdrop-blur-md shadow-md hover:shadow-xl
        ring-1 ring-white/10 hover:ring-white/20
        p-3 flex flex-col items-center justify-center
        ${size.minH} focus:outline-none focus:ring-2 focus:ring-cyan-400
      `}
    >
      <div
        aria-hidden
        className="absolute -z-10 inset-0 rounded-xl"
        style={{ background: `radial-gradient(100px 100px at 50% 28%, ${tech.color}30, transparent 60%)` }}
      />
      <div className={`text-white/90 ${size.iconMb}`}>
        <motion.div whileHover={{ color: tech.color }} transition={{ duration: 0.2 }} className="transition-colors">
          {tech.icon}
        </motion.div>
      </div>
      <CircularProgress progress={tech.progress} color={tech.color} size={size.ring} stroke={size.stroke} />
      <div className="mt-2 text-center">
        <p className={`text-white font-semibold ${size.nameText}`}>{tech.name}</p>
        <p className="text-white/60 text-xs mt-0.5">Proficiency</p>
      </div>

      {/* Overlay */}
      <div className="
        pointer-events-none absolute inset-0 rounded-xl
        bg-black/60 opacity-0 group-hover:opacity-100 group-focus:opacity-100
        transition-opacity duration-150 flex flex-col items-center justify-center
      ">
        <p className="text-white font-bold text-base">{tech.name}</p>
        <div className="flex items-center mt-1.5">
          {[...Array(stars)].map((_, i) => <FaStar key={i} className="text-yellow-400 text-lg" aria-hidden />)}
          {hasHalfStar && <FaStarHalfAlt className="text-yellow-400 text-lg" aria-hidden />}
        </div>
        <p className="mt-1 text-white text-sm">{rating} / 5</p>
        <p className="mt-0.5 text-white/70 text-xs">{tech.progress}% skill confidence</p>
      </div>
    </motion.div>
  );
};

/** cardSize lets you shrink or grow everything proportionally */
const TechWithProgress = ({ cardSize = "sm" }) => {
  const SCALES = {
    xs: { ring: 84, stroke: 7, minH: "min-h-[170px]", iconMb: "mb-2", nameText: "text-sm" },
    sm: { ring: 96, stroke: 8, minH: "min-h-[190px]", iconMb: "mb-2.5", nameText: "text-sm" },
    md: { ring: 112, stroke: 8, minH: "min-h-[210px]", iconMb: "mb-3", nameText: "text-base" },
  };
  const size = SCALES[cardSize] || SCALES.sm;

  return (
    <>
      <div className="border-b border-neutral-800 pb-5 text-white">
        <h2 className="my-8 text-center text-3xl font-bold">
          <span className="bg-gradient-to-r from-pink-300 via-slate-400 to-purple-500 bg-clip-text text-transparent tracking-tight">
            TECHNOLOGIES
          </span>
        </h2>

        {/* Compact grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        >
          {TECH_DATA.map((tech) => (
            <TechCard key={tech.name} tech={tech} size={size} />
          ))}
        </motion.div>

        <div className="mt-6 text-center text-xs text-white/60">
          Hover or focus to view ratings • Compact layout
        </div>
      </div>
    </>
  );
};

export default TechWithProgress;
