import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    Icon: RxDesktop,
    title: "Full-Stack Development",
    description: "End-to-end web applications with React, Node.js, Next.js, and MongoDB. Scalable microservices architecture.",
  },
  {
    Icon: RxPencil2,
    title: "Mobile App Development",
    description: "Cross-platform mobile apps with Flutter. Native Android development with Kotlin and Java.",
  },
  {
    Icon: RxReader,
    title: "AI/ML Integration",
    description: "Integrate AI models using TensorFlow, PyTorch. NLP chatbots, image recognition, predictive analytics.",
  },
  {
    Icon: RxRocket,
    title: "Backend & APIs",
    description: "RESTful APIs with Node.js, Express, Flask. JWT authentication, RBAC, database optimization.",
  },
  {
    Icon: RxCrop,
    title: "UI/UX Design",
    description: "Modern, responsive designs with Figma. User-centric interfaces optimized for engagement.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[280px] sm:h-[320px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[rgba(65,47,123,0.15)] h-full rounded-lg px-6 py-8 flex flex-col group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* icon */}
            <div className="text-4xl text-accent mb-4">
              <item.Icon aria-hidden />
            </div>

            {/* title & description */}
            <div className="flex-1">
              <div className="mb-2 text-lg font-medium">{item.title}</div>
              <p className="text-sm text-white/70 leading-relaxed">{item.description}</p>
            </div>

            {/* arrow */}
            <div className="text-3xl mt-4">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
