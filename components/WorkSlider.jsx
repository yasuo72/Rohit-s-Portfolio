import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsGithub } from "react-icons/bs";

const projects = [
  {
    title: "AI Video Background Removal",
    path: "https://github.com/yasuo72/assests/blob/main/Screenshot%202026-03-25%20154355.png?raw=true",
    link: "https://video-background-remover-app.vercel.app/",
    github: "https://github.com/yasuo72/VideoBackgroundRemoval",
    description: "AI-powered tool to remove backgrounds from videos by selecting a subject in a single frame. Optimized for CPU with Streamlit & React interface.",
    tech: ["Python", "AI/ML", "React", "Streamlit"],
  },
  {
    title: "Expense Tracker",
    path: "https://github.com/yasuo72/expense-manager-app/blob/main/docs/images/splash.png?raw=true",
    link: "https://github.com/yasuo72/expense-manager-app",
    github: "https://github.com/yasuo72/expense-manager-app.git",
    description: "Android expense manager app with Kotlin, SQLite & Firebase",
    tech: ["Kotlin", "SQLite", "Firebase"],
  },
  {
    title: "HabitIQ - AI Health Tracker",
    path: "https://github.com/yasuo72/assests/blob/main/WhatsApp%20Image%202025-01-31%20at%2022.34.26_55301c5a.png?raw=true",
    link: "https://habitiq.vercel.app/",
    github: "https://github.com/yasuo72/HabitiQ.git",
    description: "AI-powered health tracker with NLP chatbots and predictive analytics",
    tech: ["React", "AI/ML", "Node.js"],
  },
  {
    title: "Image Recognition Chatbot",
    path: "https://github.com/yasuo72/assests/raw/main/Screenshot%202025-03-12%20220432.png?raw=true",
    link: "https://github.com/yasuo72/Image-reco-chatbot",
    github: "https://github.com/yasuo72/Image-reco-chatbot",
    description: "Multimodal AI chatbot using CNN/YOLO with 81% accuracy",
    tech: ["Python", "CNN", "YOLO"],
  },
  {
    title: "B.U.D.D.Y AI Assistant",
    path: "https://github.com/yasuo72/assests/blob/main/Screenshot%202025-03-11%20014154.png?raw=true",
    link: "https://github.com/yasuo72/Buddy-The-Voice-Assistant.git",
    github: "https://github.com/yasuo72/Buddy-The-Voice-Assistant.git",
    description: "Desktop voice assistant powered by AI",
    tech: ["Python", "AI", "Speech Recognition"],
  },
  {
    title: "QuizZone - Trivia App",
    path: "https://github.com/user-attachments/assets/2ece3f4d-b7a0-4f70-af35-1dd63e07fb29",
    link: "https://github.com/yasuo72",
    github: "https://github.com/yasuo72",
    description: "Online quiz app with 7,000+ trivia questions from Open Trivia DB API. Features 20+ categories, 3 difficulty levels, leaderboard, Firebase auth, and Firestore database.",
    tech: ["Flutter", "Firebase", "Firestore", "Dart"],
  },
  {
    title: "Recipes App - Android",
    path: "https://github.com/yasuo72/assests/blob/main/Homepage.jpeg?raw=true",
    link: "https://github.com/yasuo72",
    github: "https://github.com/yasuo72",
    description: "Android recipe discovery app built with Kotlin. Features splash screen, home page, search, categories, recipe ingredients, and step-by-step cooking instructions.",
    tech: ["Kotlin", "XML", "Glide", "Android"],
  },
  {
    title: "MedAssist+ - Healthcare Platform",
    path: "https://github.com/yasuo72/assests/blob/main/app_icon.png?raw=true",
    link: "https://github.com/yasuo72/medassist_backend",
    github: "https://github.com/yasuo72/medassist_backend",
    description: "AI-powered medical emergency super-app with Flutter mobile app, emergency QR/NFC, crash detection, offline chatbot, and RAG-based AI backend. 37 screens, offline-first architecture.",
    tech: ["Flutter", "FastAPI", "FAISS", "AI/ML"],
  },
  {
    title: "FashionHub - E-Commerce Platform",
    path: "https://github.com/yasuo72/fashionwear/raw/main/screenshots/Screenshot%202025-10-16%20013214.png?raw=true",
    link: "https://web-production-454bd.up.railway.app/",
    github: "https://github.com/yasuo72/fashionwear",
    description: "Full-stack modern fashion e-commerce platform with 100+ products, admin dashboard, blog system, dark/light mode, payment integration, and order tracking.",
    tech: ["React", "TypeScript", "Node.js", "MongoDB"],
  },
  {
    title: "Deep Dive Portfolio Adventure",
    path: "https://github.com/yasuo72/assests/blob/main/Screenshot%202026-03-26%20003858.png?raw=true",
    link: "https://github.com/yasuo72",
    github: "https://github.com/yasuo72",
    description: "Immersive 3D underwater-themed portfolio experience with Three.js. Navigate ocean depths, discover 18 treasures (projects, skills, certificates), achievement system, mini-map, and responsive mobile controls.",
    tech: ["Three.js", "WebGL", "JavaScript", "3D"],
  },
  {
    title: "Finsaathi - Financial Companion",
    path: "https://github.com/yasuo72/assests/blob/main/icon_foreground.png?raw=true",
    link: "https://github.com/yasuo72/finnsathi-fresh-",
    github: "https://github.com/yasuo72/finnsathi-fresh-",
    description: "Flutter financial companion app with multi-backend architecture: main backend, shop backend, AI Python chatbot, and analytics. Modern onboarding, secure auth, and modular structure.",
    tech: ["Flutter", "Python", "Node.js", "AI/ML"],
  },
  {
    title: "UOMO - E-Commerce Website",
    path: "https://github.com/yasuo72/assests/blob/main/Screenshot%202026-03-25%20223344.png?raw=true",
    link: "https://uomo-ecommerce-website.netlify.app/",
    github: "https://github.com/shakti177/uomo-ecommerce-website-reactjs",
    description: "Modern React e-commerce platform with sleek UI, interactive 3D t-shirt model (Three.js), real-time cart management, Redux state management, and fully responsive design.",
    tech: ["React", "Redux", "Three.js", "Material-UI"],
  },
  {
    title: "Mova - Movie App",
    path: "https://github.com/yasuo72/assests/blob/main/243462084-49bf5741-ce14-4a1e-9586-95b49e3f269f.png?raw=true",
    link: "https://github.com/moha-b/Mova",
    github: "https://github.com/moha-b/Mova",
    description: "Flutter movie app with clean architecture and BLoC pattern. Features Now Playing, Top Rated, Upcoming movies, cast details, and multi-API endpoint handling.",
    tech: ["Flutter", "BLoC", "Clean Arch", "Dart"],
  },
  
];

const WorkSlider = () => {
  return (
    <div className="h-full max-h-[500px] overflow-y-auto scrollbar-hide pr-2">
      <div className="flex flex-col gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row gap-4 p-4">
              {/* Project Image */}
              <div className="relative w-full md:w-[200px] h-[150px] rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={project.path}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Info */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-accent/20 text-accent rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-2 text-sm text-white/80 hover:text-accent transition-colors"
                  >
                    <BsArrowRight className="text-lg" />
                    <span>Live Demo</span>
                  </Link>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-2 text-sm text-white/80 hover:text-accent transition-colors"
                  >
                    <BsGithub className="text-lg" />
                    <span>GitHub</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkSlider;
