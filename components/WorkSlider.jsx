import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Expense Tracker",
          path: "https://github.com/yasuo72/expense-manager-app/blob/main/docs/images/splash.png?raw=true",
          link: "https://github.com/yasuo72/expense-manager-app",
          github: "https://github.com/yasuo72/expense-manager-app.git",
          description: "Android expense manager app with Kotlin, SQLite & Firebase",
        },
        {
          title: "HabitIQ - AI Health Tracker",
          path: "https://github.com/yasuo72/assests/blob/main/WhatsApp%20Image%202025-01-31%20at%2022.34.26_55301c5a.png?raw=true",
          link: "https://habitiq.vercel.app/",
          github: "https://github.com/yasuo72/HabitiQ.git",
          description: "AI-powered health tracker with NLP chatbots and predictive analytics",
        },
        {
          title: "Image Recognition Chatbot",
          path: "https://github.com/yasuo72/assests/raw/main/Screenshot%202025-03-12%20220432.png?raw=true",
          link: "https://github.com/yasuo72/Image-reco-chatbot",
          github: "https://github.com/yasuo72/Image-reco-chatbot",
          description: "Multimodal AI chatbot using CNN/YOLO with 81% accuracy",
        },
        {
          title: "B.U.D.D.Y AI Assistant",
          path: "https://github.com/yasuo72/assests/blob/main/Screenshot%202025-03-11%20014154.png?raw=true",
          link: "https://github.com/yasuo72/Buddy-The-Voice-Assistant.git",
          github: "https://github.com/yasuo72/Buddy-The-Voice-Assistant.git",
          description: "Desktop voice assistant powered by AI",
        },
      ],
    },
    {
      images: [
        {
          title: "QuizZone",
          path: "https://github.com/user-attachments/assets/2ece3f4d-b7a0-4f70-af35-1dd63e07fb29",
          link: "https://github.com/yasuo72",
          github: "https://github.com/yasuo72",
          description: "Online quiz app with leaderboard & Firebase integration",
        },
        {
          title: "MedAssist+",
          path: "https://github.com/user-attachments/assets/2ece3f4d-b7a0-4f70-af35-1dd63e07fb29",
          link: "https://github.com/yasuo72/medassist_backend.git",
          github: "https://github.com/yasuo72/medassist_backend.git",
          description: "AI medical emergency assistant with QR/face scan",
        },
        {
          title: "FashionHub E-Commerce",
          path: "https://github.com/user-attachments/assets/2ece3f4d-b7a0-4f70-af35-1dd63e07fb29",
          link: "https://Fashionhub.up.railway.app/",
          github: "https://github.com/yasuo72/fashionwear.git",
          description: "Full-stack fashion e-commerce platform",
        },
        {
          title: "More Projects",
          path: "https://github.com/user-attachments/assets/2ece3f4d-b7a0-4f70-af35-1dd63e07fb29",
          link: "https://github.com/yasuo72",
          github: "https://github.com/yasuo72",
          description: "Check out more projects on GitHub",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {slide.images.map((image, imageI) => (
              <div
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                key={imageI}
              >
                <div className="flex items-center justify-center relative overflow-hidden group">
                  {/* image */}
                  <Image
                    src={image.path}
                    alt={image.title}
                    width={500}
                    height={300}
                    unoptimized
                  />

                  {/* overlay gradient */}
                  <div
                    className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                    aria-hidden
                  />

                  {/* title */}
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                    <Link
                      href={image.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]"
                    >
                      {/* title part 1 */}
                      <div className="delay-100">LIVE</div>
                      {/* title part 2 */}
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        PROJECT
                      </div>
                      {/* icon */}
                      <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        <BsArrowRight aria-hidden />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
