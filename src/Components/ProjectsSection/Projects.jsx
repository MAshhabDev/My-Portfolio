import React from 'react';
import { motion } from 'framer-motion';

const ProjectsJ = [
  {
    id: 1,
    title: "News Portal Website",
    description: "Developed a responsive news portal featuring category-based news filtering and dynamic content display. Integrated Firebase for secure user authentication and reliable hosting, ensuring a clean UI with trending and latest news sections across all screen sizes[cite: 24, 25, 26, 29, 30, 31].",
    stack: ["React.js", "Tailwind CSS", "Firebase", "JavaScript", "HTML", "CSS"],
    liveLink: "https://dragon-news-fdc6a.web.app/", 
    codeLink: "https://github.com/MAshhabDev/Dragon-News",
    image: "https://i.ibb.co.com/KjBH8tts/Screenshot-2026-05-30-134139.png"
  },
  {
    id: 2,
    title: "Travel Booking Website",
    description: "Built a responsive travel booking web application with an interactive UI for exploring destinations. Implemented a scalable component-based architecture with dynamic content rendering, with ongoing development for an advanced navigation and booking system[cite: 32, 34, 35, 36, 37, 38].",
    stack: ["React.js", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
    liveLink: "https://travel-guru-tour.firebaseapp.com", 
    codeLink: "https://github.com/MAshhabDev/Travel-Guru", 
    image: "https://i.ibb.co.com/bgtWTpmj/Screenshot-2026-05-30-134922.png"
  },
  {
    id: 3,
    title: "Healthcare Expenditure Prediction",
    description: "Developed multiple machine learning models (Logistic Regression, Random Forest, SVM, XGBoost, LGBM) utilizing the national HIES 2022-23 dataset to predict out-of-pocket healthcare expenditure risks in Bangladesh. Achieved ~73% accuracy using advanced ensemble models[cite: 39, 40, 42, 43, 44, 45].",
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Machine Learning"],
    liveLink: null, // ML প্রজেক্টের জন্য লাইভ ডেমো বাটন হাইড থাকবে
    codeLink: "https://github.com/MAshhabDev", // আপনার গিটহাব প্রজেক্ট লিঙ্ক [cite: 4]
    image: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?q=80&w=600"
  },
  {
    id: 4,
    title: "AI in Education Impact Analysis",
    description: "Built and optimized classification models including Decision Trees, Naive Bayes, and Random Forests to evaluate the structural advantages and disadvantages of AI in the education sector. Conducted intensive data preprocessing and achieved an 81% accuracy metric[cite: 46, 47, 49, 50, 51, 52, 53].",
    stack: ["Python", "Scikit-learn", "Pandas", "Google Colab", "Machine Learning"],
    liveLink: null, // ML প্রজেক্টের জন্য লাইভ ডেমো বাটন হাইড থাকবে
    codeLink: "https://github.com/MAshhabDev", // আপনার গিটহাব প্রজেক্ট লিঙ্ক [cite: 4]
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=600"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-5 w-full relative overflow-hidden text-base-content bg-transparent">
      
      {/* Space Glow Accents */}
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 px-4">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight mt-4 text-white bg-gradient-to-r from-base-content to-base-content/70 bg-clip-text sm:text-5xl">
            Featured <span className="text-primary">Projects</span>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mt-3 mx-auto rounded-full"></div>
          </h2>
        </div>

        {/* Symmetric Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {ProjectsJ.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.3, ease: "easeInOut" }
              }}
              className="group flex flex-col bg-base-200/40 backdrop-blur-md rounded-2xl overflow-hidden border border-base-300 hover:border-primary/40 shadow-xl transition-all duration-500 ease-out"
            >

              {/* Cover Image Wrapper */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-base-300 border-b border-b-base-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform transition-all duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-base-950/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Information / Content Card Core */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-base-content tracking-tight mb-3 transition-colors duration-300 group-hover:text-primary">
                  {project.title}
                </h3>

                <p className="text-sm leading-relaxed text-base-content/70 font-normal mb-6 flex-grow line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack Layer */}
                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-base-content/50 mb-2.5">
                    Stack:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, techIdx) => (
                      <span 
                        key={techIdx} 
                        className="px-3 py-1 text-xs font-medium tracking-wide rounded-lg bg-base-300/60 text-base-content border border-base-300 shadow-sm hover:bg-base-300 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Control Navigation Links */}
                <div className="flex gap-3 mt-auto pt-2">
                  {/* কন্ডিশনাল লাইভ ডেমো বাটন */}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-primary text-primary-content rounded-xl capitalize font-semibold px-5 shadow-sm hover:scale-105 transition-all duration-300"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}

                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-outline border-base-300 text-base-content/80 hover:bg-base-content hover:text-base-100 rounded-xl capitalize font-medium px-5 transition-all duration-300"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      Code
                    </a>
                  )}
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}