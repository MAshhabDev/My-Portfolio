import React from 'react';
import { motion } from 'framer-motion';

const ProjectsJ = [
  {
    id: 1,
    title: "ShelfShare",
    description: "A platform for book lovers to trade books with each other. Users can create an account, add books to their collection, and trade books with other users.",
    stack: ["React", "Node.js", "Express", "MongoDB", "TypeScript", "Redux", "NextAuth"],
    liveLink: "https://example.com",
    codeLink: "https://github.com",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600"
  },
  {
    id: 2,
    title: "Career.Go",
    description: "A platform for career seekers to find job opportunities. Users can create an account, search for jobs, and apply for jobs.",
    stack: ["Next.js", "Express.js", "MongoDB", "JWT", "Redux", "DaisyUI"],
    liveLink: "https://example.com",
    codeLink: "https://github.com",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=600"
  },
  {
    id: 3,
    title: "Learn With Shahanar",
    description: "A learning platform for the students to master MERN stack from basic to advanced knowledge.",
    stack: ["React", "MongoDB", "Express", "Node.js", "TailwindCSS", "Firebase"],
    liveLink: "https://example.com",
    codeLink: "https://github.com",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600"
  },
  {
    id: 4,
    title: "Daily Drafts",
    description: "Explore insightful blogs, write your own, and be a part of our ever-growing community of thinkers.",
    stack: ["React", "MongoDB", "Express", "Node.js", "TailwindCSS", "Firebase"],
    liveLink: "https://example.com",
    codeLink: "https://github.com",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=600"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-5 w-full relative overflow-hidden text-base-content">
      
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
                borderColor: 'var(--p)',
                transition: { duration: 0.3, ease: "easeInOut" }
              }}
              className="group flex flex-col bg-base-200/40 backdrop-blur-md rounded-2xl overflow-hidden border border-base-300 shadow-xl transition-all duration-500 ease-out"
            >

              {/* Cover Image Wrapper */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-base-300 border-b border-base-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform transition-all duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                {/* ইমেজের ওপর একটি হালকা ডার্ক ওভারলে যা হোভারে ক্লিয়ার হবে */}
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
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}