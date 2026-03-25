import { motion } from "framer-motion";

import TestimonialSlider from "../../components/TestimonialSlider";
import FloatingReviewButton from "../../components/FloatingReviewButton";
import { fadeIn } from "../../variants";

const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-16 md:py-24 xl:py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center px-4 md:px-8">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 text-2xl md:text-3xl xl:text-4xl mb-4 md:mb-6 xl:mb-8"
        >
          What clients <span className="text-accent">say.</span>
        </motion.h2>

        {/* slider */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex-1"
        >
          <TestimonialSlider />
        </motion.div>
        
        {/* Review count indicator */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex items-center justify-center gap-2 mt-6"
        >
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg 
              className="w-5 h-5 text-accent" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 19l-7-7 7-7" 
              />
            </svg>
          </motion.div>
          <motion.p
            className="text-accent text-sm md:text-base font-medium tracking-wide"
            animate={{ 
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Scroll to explore more reviews
          </motion.p>
          <motion.div
            animate={{ x: [0, -5, 0] }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg 
              className="w-5 h-5 text-accent" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Review Button */}
      <FloatingReviewButton />
    </div>
  );
};

export default Testimonials;
