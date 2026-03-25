import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaPython,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaBriefcase,
  FaCertificate,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFlutter,
  SiTensorflow,
  SiPytorch,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import BackgroundAnimation from "../../components/BackgroundAnimation";
import { fadeIn } from "../../variants";

// Animation variants
const slideInLeft = (delay) => ({
  hidden: { x: -30, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { delay, duration: 0.5, ease: "easeOut" } },
});

const fadeInUp = (delay) => ({
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { delay, duration: 0.5, ease: "easeOut" } },
});

const slideInRight = (delay) => ({
  hidden: { x: 30, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { delay, duration: 0.5, ease: "easeOut" } },
});

//  data
export const aboutData = [
  {
    title: "skills",
    icon: FaCode,
    info: [
      {
        title: "Frontend",
        icons: [
          { Icon: FaHtml5, name: "HTML" },
          { Icon: FaCss3, name: "CSS" },
          { Icon: FaJs, name: "JS" },
          { Icon: FaReact, name: "React" },
          { Icon: SiNextdotjs, name: "Next" },
          { Icon: SiFlutter, name: "Flutter" },
          { Icon: SiTailwindcss, name: "Tailwind" },
        ],
      },
      {
        title: "Backend",
        icons: [
          { Icon: FaNodeJs, name: "Node" },
          { Icon: SiExpress, name: "Express" },
          { Icon: SiMongodb, name: "MongoDB" },
          { Icon: SiFirebase, name: "Firebase" },
          { Icon: FaPython, name: "Python" },
        ],
      },
      {
        title: "AI/ML & Tools",
        icons: [
          { Icon: SiTensorflow, name: "TensorFlow" },
          { Icon: SiPytorch, name: "PyTorch" },
          { Icon: FaGitAlt, name: "Git" },
          { Icon: FaDocker, name: "Docker" },
          { Icon: FaFigma, name: "Figma" },
        ],
      },
    ],
  },
  {
    title: "experience",
    icon: FaBriefcase,
    info: [
      {
        title: "SDE-1",
        company: "Acceret Infotech Solutions",
        stage: "Jan 2026 - Present",
        description: "Building scalable web applications with React, Node.js, and cloud services",
      },
      {
        title: "Full-Stack Developer",
        company: "Freelance",
        stage: "2022 - 2025",
        description: "Developed 15+ projects for clients including e-commerce, SaaS, and mobile apps",
      },
      {
        title: "Open Source Contributor",
        company: "GitHub",
        stage: "2023 - Present",
        description: "Contributed to React ecosystem and AI/ML open source projects",
      },
    ],
  },
  {
    title: "certifications",
    icon: FaCertificate,
    info: [
      {
        title: "PU Code Hackathon 2.0",
        stage: "2025 - Finalist",
        issuer: "Parul University",
      },
      {
        title: "Vadodara Hackathon 5.0",
        stage: "2024 - Finalist",
        issuer: "Vadodara Tech Park",
      },
      {
        title: "SQL & Databases",
        stage: "2024",
        issuer: "Infosys Springboard",
      },
      {
        title: "Computer Networks",
        stage: "2023",
        issuer: "NPTEL - IIT Kharagpur",
      },
      {
        title: "IoT Fundamentals",
        stage: "2023",
        issuer: "NPTEL - IIT Kharagpur",
      },
      {
        title: "Theory of Computation",
        stage: "2023",
        issuer: "NPTEL - IIT Kharagpur",
      },
    ],
  },
  {
    title: "education",
    icon: FaGraduationCap,
    info: [
      {
        title: "B.Tech Computer Science & Engineering",
        stage: "Parul University (2022-2026)",
        gpa: "CGPA: 8.5/10",
      },
      {
        title: "Higher Secondary (GSEB)",
        stage: "St. Mary's School, Vapi (2020-2022)",
        gpa: "Science Stream - 85%",
      },
      {
        title: "Secondary School",
        stage: "St. Mary's School, Vapi (2020)",
        gpa: "10th Grade - 88%",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-screen bg-primary/30 overflow-y-auto lg:overflow-hidden relative scrollbar-hide">
      {/* Three.js Background Animation - lowest z-index */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <BackgroundAnimation />
      </div>
      
      {/* Circles decoration */}
      <div className="relative z-[1]">
        <Circles />
      </div>
      
      {/* Main Content - Full Viewport */}
      <div className="relative z-10 min-h-screen lg:h-full flex flex-col lg:flex-row pt-60 sm:pt-64 md:pt-72 lg:pt-24 xl:pt-20 pb-4 lg:pb-0">
        
        {/* ===== LEFT COLUMN - Mobile: auto height, Desktop: 40% ===== */}
        <div className="w-full lg:w-[40%] h-auto lg:h-full flex flex-col justify-between px-4 md:px-8 lg:px-12 py-2 lg:py-6 relative">
          
          {/* Top Section: Headline + Badge */}
          <motion.div 
            className="relative z-20"
            variants={slideInLeft(0.2)}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 lg:mb-3">
              Building <span className="text-accent">scalable</span> digital solutions.
            </h1>
            <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/20 text-accent rounded-full border border-accent/30">
              Full-Stack Developer
            </span>
          </motion.div>
          
          {/* Middle Section: Description - hidden on mobile */}
          <motion.div 
            className="hidden lg:block relative z-20"
            variants={fadeInUp(0.4)}
            initial="hidden"
            animate="visible"
          >
            <p className="text-sm text-white/70 max-w-sm leading-relaxed">
              Full-stack developer with expertise in React, Node.js, Flutter, and AI/ML.
              Building scalable microservices architectures and seamless user experiences
              across web and mobile platforms.
            </p>
          </motion.div>
          
          {/* Stats Section */}
          <motion.div 
            className="relative z-20 mt-3 lg:mt-0"
            variants={fadeInUp(0.6)}
            initial="hidden"
            animate="visible"
          >
            <div className="flex items-center gap-0 bg-white/5 rounded-xl p-3 lg:p-4 backdrop-blur-sm">
              <div className="flex-1 text-center">
                <div className="text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">
                  3+
                </div>
                <div className="text-[0.5rem] lg:text-[0.6rem] uppercase tracking-wider text-white/50 mt-1">Years Exp</div>
              </div>
              <div className="w-px h-8 lg:h-10 bg-white/20" />
              <div className="flex-1 text-center px-2 lg:px-3">
                <div className="text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">
                  15+
                </div>
                <div className="text-[0.5rem] lg:text-[0.6rem] uppercase tracking-wider text-white/50 mt-1">Projects</div>
              </div>
              <div className="w-px h-8 lg:h-10 bg-white/20" />
              <div className="flex-1 text-center px-2 lg:px-3">
                <div className="text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">
                  4
                </div>
                <div className="text-[0.5rem] lg:text-[0.6rem] uppercase tracking-wider text-white/50 mt-1">Hackathons</div>
              </div>
              <div className="w-px h-8 lg:h-10 bg-white/20" />
              <div className="flex-1 text-center">
                <div className="text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">
                  8
                </div>
                <div className="text-[0.5rem] lg:text-[0.6rem] uppercase tracking-wider text-white/50 mt-1">Certs</div>
              </div>
            </div>
          </motion.div>
          
          {/* Avatar - hidden on mobile */}
          <motion.div 
            className="hidden lg:block relative z-10 h-[280px] lg:h-[320px]"
            variants={fadeInUp(0.8)}
            initial="hidden"
            animate="visible"
          >
            <div className="absolute bottom-0 left-0 w-[220px] h-[280px] lg:w-[260px] lg:h-[320px] -translate-x-8 pointer-events-none">
              <Avatar />
            </div>
          </motion.div>
        </div>
        
        {/* ===== RIGHT COLUMN - Mobile: flex-1, Desktop: 60% ===== */}
        <motion.div 
          className="w-full lg:w-[60%] h-full flex flex-col px-4 md:px-6 lg:px-10 py-4 lg:py-6"
          variants={slideInRight(0.5)}
          initial="hidden"
          animate="visible"
        >
          
          {/* Glassmorphism Card - Tabs & Content */}
          <div className="flex-1 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden flex flex-col min-h-0 relative z-20">
            
            {/* Tabs Header - Scrollable on mobile */}
            <div className="flex gap-1 p-2 bg-white/5 border-b border-white/10 flex-shrink-0 overflow-x-auto scrollbar-hide">
              {aboutData.map((item, itemI) => (
                <button
                  key={itemI}
                  type="button"
                  onClick={() => {
                    console.log("Tab clicked:", itemI, item.title);
                    setIndex(itemI);
                  }}
                  className={`flex-shrink-0 px-3 py-2 lg:py-2.5 rounded-lg text-xs lg:text-sm font-medium transition-all duration-300 relative cursor-pointer ${
                    index === itemI
                      ? "bg-accent text-white shadow-lg shadow-accent/20"
                      : "text-white/60 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>
            
            {/* Tab Content - Fills Remaining Space */}
            <div className="flex-1 p-3 lg:p-4 overflow-y-auto min-h-0 relative">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                {/* Skills Tab */}
                {index === 0 && (
                  <div className="h-full flex flex-col gap-2 lg:gap-3">
                    {aboutData[0].info.map((category, catI) => (
                      <motion.div 
                        key={catI} 
                        className="bg-white/5 rounded-xl p-2 lg:p-3 flex-1"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: catI * 0.1 }}
                      >
                        <div className="text-[0.65rem] lg:text-xs font-semibold text-accent mb-1.5 lg:mb-2 uppercase tracking-wider">{category.title}</div>
                        <div className="flex flex-wrap gap-1.5 lg:gap-2">
                          {category.icons.map((item, iconI) => (
                            <motion.div 
                              key={iconI} 
                              className="flex flex-col items-center gap-0.5 lg:gap-1 p-1.5 lg:p-2 rounded-lg bg-white/5 hover:bg-accent/10 transition-all group cursor-default"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: catI * 0.1 + iconI * 0.03 }}
                              whileHover={{ scale: 1.15 }}
                            >
                              <item.Icon className="text-lg lg:text-xl text-white/70 group-hover:text-accent transition-colors group-hover:drop-shadow-[0_0_10px_rgba(241,48,36,0.6)]" />
                              <span className="text-[0.5rem] lg:text-[0.6rem] text-white/50 group-hover:text-white/70">{item.name}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
                
                {/* Experience Tab - Timeline */}
                {index === 1 && (
                  <div className="h-full flex flex-col gap-2 lg:gap-3">
                    {aboutData[1].info.map((item, itemI) => (
                      <motion.div 
                        key={itemI} 
                        className="flex gap-2 lg:gap-3 flex-1"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: itemI * 0.1 }}
                      >
                        <div className="flex flex-col items-center py-1 lg:py-2">
                          <div className="w-2 lg:w-3 h-2 lg:h-3 rounded-full bg-accent flex-shrink-0" />
                          {itemI < aboutData[1].info.length - 1 && (
                            <div className="w-0.5 flex-1 bg-gradient-to-b from-accent to-white/20 mt-1" />
                          )}
                        </div>
                        <div className="flex-1 bg-white/5 rounded-lg lg:rounded-xl p-2 lg:p-3 hover:bg-white/10 transition-colors">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                            <div className="text-xs lg:text-sm font-semibold text-white">{item.title}</div>
                            <div className="text-[0.65rem] lg:text-xs text-accent">{item.stage}</div>
                          </div>
                          <div className="text-[0.65rem] lg:text-xs text-white/60 mt-0.5 lg:mt-1">{item.company}</div>
                          <div className="text-[0.6rem] lg:text-xs text-white/40 mt-1 lg:mt-2 hidden sm:block">{item.description}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
                
                {/* Certifications Tab - Grid */}
                {index === 2 && (
                  <div className="h-full grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-3 auto-rows-fr">
                    {aboutData[2].info.map((item, itemI) => (
                      <motion.div 
                        key={itemI} 
                        className="bg-white/5 rounded-lg lg:rounded-xl p-2 lg:p-3 hover:bg-white/10 transition-colors flex flex-col justify-center"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: itemI * 0.05 }}
                      >
                        <div className="text-xs lg:text-sm font-medium text-white">{item.title}</div>
                        <div className="text-[0.65rem] lg:text-xs text-accent mt-0.5 lg:mt-1">{item.issuer}</div>
                        <div className="text-[0.6rem] lg:text-xs text-white/40 mt-0.5 lg:mt-1">{item.stage}</div>
                      </motion.div>
                    ))}
                  </div>
                )}
                
                {/* Education Tab - List */}
                {index === 3 && (
                  <div className="h-full flex flex-col gap-2 lg:gap-3">
                    {aboutData[3].info.map((item, itemI) => (
                      <motion.div 
                        key={itemI} 
                        className="bg-white/5 rounded-lg lg:rounded-xl p-3 lg:p-4 hover:bg-white/10 transition-colors flex-1 flex flex-col justify-center"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: itemI * 0.1 }}
                      >
                        <div className="text-xs lg:text-sm font-semibold text-white">{item.title}</div>
                        <div className="text-[0.65rem] lg:text-xs text-white/50 mt-0.5 lg:mt-1">{item.stage}</div>
                        <div className="text-[0.65rem] lg:text-xs text-accent mt-0.5 lg:mt-1">{item.gpa}</div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
