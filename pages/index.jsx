import { motion } from "framer-motion";
import { FaDownload, FaCoffee } from "react-icons/fa";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full lg:h-screen relative overflow-y-auto lg:overflow-hidden scrollbar-hide">
      {/* text */}
      <div className="w-full min-h-screen lg:h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 relative z-10">
        <div className="text-center flex flex-col justify-start pt-60 sm:pt-64 md:pt-68 lg:pt-36 xl:pt-40 xl:text-left pb-44 lg:h-full container mx-auto relative z-20 px-4">

          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 text-[24px] sm:text-[28px] md:text-[40px] xl:text-[60px] leading-tight"
          >
            Rohit Singh <br />{" "}
            <span className="text-accent">Full-Stack Developer</span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-xs sm:max-w-sm md:max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-4 md:mb-6 xl:mb-8 text-xs sm:text-sm md:text-base leading-relaxed"
          >
            Full-stack developer skilled in React, Node.js, Flutter, and AI/ML with hands-on experience building real-world applications.
            Passionate about backend development, scalable systems, and integrating AI into mobile and web platforms.
          </motion.p>

          {/* Resume & Coffee Buttons */}
          <motion.div
            variants={fadeIn("down", 0.35)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center xl:justify-start mb-6 md:mb-8 xl:mb-12"
          >
            {/* Resume Download Button */}
            <a
              href="/resume.pdf"
              download="Rohit_Singh_Resume.pdf"
              className="flex items-center justify-center gap-2 px-3 sm:px-6 py-2 sm:py-3 bg-accent/20 sm:bg-accent sm:hover:bg-accent/80 text-white text-xs sm:text-base font-medium rounded-lg transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:scale-105 border border-accent/50 sm:border-0"
            >
              <FaDownload className="text-sm sm:text-lg" />
              <span>Resume</span>
            </a>

            {/* Buy Me Coffee Button */}
            <a
              href="https://www.buymeacoffee.com/yasuo72"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-3 sm:px-6 py-2 sm:py-3 bg-[#FFDD00]/20 sm:bg-[#FFDD00] sm:hover:bg-[#FFDD00]/80 text-[#000000] text-xs sm:text-base font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border border-[#FFDD00]/50 sm:border-0"
            >
              <FaCoffee className="text-sm sm:text-lg" />
              <span>Coffee</span>
            </a>
          </motion.div>

          {/* btn - hidden on mobile, shown on xl */}
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      {/* Project button fixed at bottom on mobile */}
      <div className="fixed bottom-8 left-0 right-0 flex justify-center xl:hidden z-30">
        <ProjectsBtn />
      </div>

      {/* image */}
      <div className="w-full md:w-[800px] lg:w-[1000px] xl:w-[1280px] h-full absolute right-0 bottom-0 pointer-events-none lg:pointer-events-auto">

        {/* bg img */}
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        {/* particles */}
        <ParticlesContainer />

        {/* avatar - positioned on right side, bottom aligned */}
       <motion.div
  variants={fadeIn("up", 0.5)}
  initial="hidden"
  animate="show"
  exit="hidden"
  transition={{ duration: 1, ease: "easeInOut" }}
  className="
    absolute inset-0 flex
    items-center justify-center
    md:items-end md:justify-end
    md:pr-16 md:pb-16
  "
>
  <Avatar />

        </motion.div>
      </div>
    </div>
  );
};

export default Home;
