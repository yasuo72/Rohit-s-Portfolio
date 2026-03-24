import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full lg:h-screen relative overflow-y-auto lg:overflow-hidden scrollbar-hide">
      {/* text */}
      <div className="w-full min-h-screen lg:h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 relative z-10">
        <div className="text-center flex flex-col justify-center pt-32 pb-40 lg:pt-40 xl:text-left lg:h-full container mx-auto relative z-20 px-4">

          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 text-[28px] md:text-[40px] xl:text-[60px]"
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
            className="max-w-xs md:max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-8 md:mb-10 xl:mb-16 text-sm md:text-base"
          >
            Full-stack developer skilled in React, Node.js, Flutter, and AI/ML with hands-on experience building real-world applications.
            Passionate about backend development, scalable systems, and integrating AI into mobile and web platforms.
          </motion.p>

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
