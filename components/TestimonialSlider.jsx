import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  FaQuoteLeft, FaUserCircle, FaCat, FaDog, FaDragon, FaGhost, FaRobot, 
  FaStar, FaHeart, FaUserTie, FaUserNinja, FaUserAstronaut,
  FaHorse, FaFrog, FaFish, FaOtter
} from "react-icons/fa";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { 
  BsEmojiSmile, BsEmojiFrown, BsEmojiHeartEyes, BsEmojiNeutral, 
  BsEmojiLaughing, BsEmojiSunglasses
} from "react-icons/bs";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const emojiComponents = {
  happy: BsEmojiSmile,
  love: BsEmojiHeartEyes,
  excited: BsEmojiLaughing,
  neutral: BsEmojiNeutral,
  sad: BsEmojiFrown,
};

// Avatar icon mapping - matches FloatingReviewButton exactly
const avatarIconMap = {
  // Male
  male1: FaUserCircle,
  male2: FaUserTie,
  male3: FaUserNinja,
  male4: FaUserAstronaut,
  male5: FaRobot,
  // Female
  female1: FaUserCircle,
  female2: FaOtter,
  female3: FaCat,
  female4: FaFish,
  female5: FaFrog,
  // Animals
  cat: FaCat,
  dog: FaDog,
  dragon: FaDragon,
  frog: FaFrog,
  fish: FaFish,
  otter: FaOtter,
  horse: FaHorse,
  // Characters
  ghost: FaGhost,
  robot: FaRobot,
  // Emojis
  smile: BsEmojiSmile,
  love: BsEmojiHeartEyes,
  laugh: BsEmojiLaughing,
  cool: BsEmojiSunglasses,
  // Symbols
  star: FaStar,
  heart: FaHeart,
};

const defaultTestimonials = [
  {
    image: "/t-avt-1.png",
    name: "Alex Johnson",
    position: "Client",
    message:
      "Great full-stack developer! Delivered a complex React and Node.js project on time with excellent code quality.",
    emotion: "happy",
  },
  {
    image: "/t-avt-2.png",
    name: "Priya Patel",
    position: "Startup Founder",
    message:
      "Rohit built our entire mobile app with Flutter. His AI/ML integration skills are impressive!",
    emotion: "excited",
  },
  {
    image: "/t-avt-3.png",
    name: "David Chen",
    position: "Tech Lead",
    message:
      "Excellent work on our e-commerce platform. Scalable architecture and clean code. Highly recommended!",
    emotion: "love",
  },
];

const TestimonialSlider = () => {
  const [testimonials, setTestimonials] = useState(defaultTestimonials);
  const [mounted, setMounted] = useState(false);

  // Fetch reviews from API
  const fetchReviews = async () => {
    try {
      const response = await fetch('/api/reviews');
      if (response.ok) {
        const data = await response.json();
        console.log("Fetched reviews from API:", data.reviews.length);
        const allTestimonials = [...data.reviews, ...defaultTestimonials];
        setTestimonials(allTestimonials);
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  // Load reviews on mount and listen for new reviews
  useEffect(() => {
    setMounted(true);
    fetchReviews();

    // Listen for new reviews
    const handleNewReview = () => {
      console.log("Review added event received, refetching...");
      fetchReviews();
    };
    window.addEventListener("reviewAdded", handleNewReview);

    return () => {
      window.removeEventListener("reviewAdded", handleNewReview);
    };
  }, []);

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <div className="h-[350px] md:h-[400px] xl:h-[480px] overflow-y-auto scrollbar-hide md:overflow-hidden">
      {/* Mobile: Vertical scroll */}
      <div className="md:hidden space-y-6 px-4 py-4">
        {testimonials.map((person, i) => {
          const EmotionIcon = emojiComponents[person.emotion] || BsEmojiSmile;
          
          // Check if this is a custom review with avatar
          const isCustomReview = person.avatar && !person.image;
          const AvatarIcon = person.avatar ? avatarIconMap[person.avatar.id] || BsEmojiSmile : null;
          const avatarColor = person.avatar?.color || "#f472b6";
          
          return (
            <div key={person.id || i} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex flex-col items-center gap-4">
                {/* avatar, name, position */}
                <div className="flex flex-col items-center text-center">
                  {/* avatar */}
                  <div className="mb-3 relative">
                    {isCustomReview ? (
                      // Custom avatar icon
                      <div 
                        className="w-[60px] h-[60px] rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${avatarColor}20` }}
                      >
                        <AvatarIcon 
                          className="text-2xl"
                          style={{ color: avatarColor }}
                        />
                      </div>
                    ) : (
                      // Default image avatar
                      <Image
                        src={person.image}
                        width={60}
                        height={60}
                        alt={person.name}
                        className="rounded-full object-cover"
                      />
                    )}
                    {/* Emotion emoji overlay */}
                    {person.emotion && (
                      <div className="absolute -bottom-1 -right-1 bg-secondary rounded-full p-1">
                        <EmotionIcon className="text-sm" />
                      </div>
                    )}
                  </div>

                  {/* name */}
                  <div className="text-sm font-medium">{person.name}</div>

                  {/* position or date */}
                  <div className="text-[10px] uppercase font-extralight tracking-widest text-white/60">
                    {person.position || (person.date ? new Date(person.date).toLocaleDateString() : "Reviewer")}
                  </div>
                </div>

                {/* message */}
                <div className="text-center">
                  {/* quote icon */}
                  <div className="mb-2">
                    <FaQuoteLeft
                      className="text-xl text-white/20"
                      aria-hidden
                    />
                  </div>

                  {/* message */}
                  <div className="text-sm leading-relaxed text-white/80">
                    {person.message}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop: Swiper */}
      <Swiper
        navigation
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="hidden md:block h-full"
      >
        {testimonials.map((person, i) => {
          const EmotionIcon = emojiComponents[person.emotion] || BsEmojiSmile;
          
          // Check if this is a custom review with avatar
          const isCustomReview = person.avatar && !person.image;
          const AvatarIcon = person.avatar ? avatarIconMap[person.avatar.id] || BsEmojiSmile : null;
          const avatarColor = person.avatar?.color || "#f472b6";
          
          return (
            <SwiperSlide key={person.id || i}>
              <div className="flex flex-col items-center md:flex-row gap-x-4 xl:gap-x-8 h-full px-4 md:px-8 xl:px-16">
                {/* avatar, name, position */}
                <div className="w-full max-w-[200px] md:max-w-[250px] xl:max-w-[300px] flex flex-col justify-center items-center relative mx-auto md:mx-0">
                  <div className="flex flex-col justify-center text-center">
                    {/* avatar */}
                    <div className="mb-2 mx-auto relative">
                      {isCustomReview ? (
                        // Custom avatar icon
                        <div 
                          className="w-[70px] h-[70px] md:w-[85px] md:h-[85px] xl:w-[100px] xl:h-[100px] rounded-full flex items-center justify-center"
                          style={{ backgroundColor: `${avatarColor}20` }}
                        >
                          <AvatarIcon 
                            className="text-3xl md:text-4xl xl:text-5xl"
                            style={{ color: avatarColor }}
                          />
                        </div>
                      ) : (
                        // Default image avatar
                        <Image
                          src={person.image}
                          width={100}
                          height={100}
                          alt={person.name}
                          className="rounded-full w-[70px] h-[70px] md:w-[85px] md:h-[85px] xl:w-[100px] xl:h-[100px] object-cover"
                        />
                      )}
                      {/* Emotion emoji overlay */}
                      {person.emotion && (
                        <div className="absolute -bottom-1 -right-1 bg-secondary rounded-full p-1">
                          <EmotionIcon className="text-sm md:text-lg" />
                        </div>
                      )}
                    </div>

                    {/* name */}
                    <div className="text-sm md:text-base xl:text-lg">{person.name}</div>

                    {/* position or date */}
                    <div className="text-[10px] md:text-[11px] xl:text-[12px] uppercase font-extralight tracking-widest">
                      {person.position || (person.date ? new Date(person.date).toLocaleDateString() : "Reviewer")}
                    </div>
                  </div>
                </div>

                {/* quote & message */}
                <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                  {/* quote icon */}
                  <div className="mb-2 md:mb-4">
                    <FaQuoteLeft
                      className="text-2xl md:text-3xl xl:text-6xl text-white/20 mx-auto md:mx-0"
                      aria-hidden
                    />
                  </div>

                  {/* message */}
                  <div className="text-sm md:text-base xl:text-lg text-center md:text-left leading-relaxed">
                    {person.message}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
