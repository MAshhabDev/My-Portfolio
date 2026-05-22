import React from 'react';
import { motion } from 'framer-motion';

// Upgraded structure using stack arrays instead of raw comma-separated text strings
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
    <section className="py-20 w-11/12 mx-auto px-4 min-h-screen relative overflow-hidden text-slate-100">
      
      {/* Space Glow Accents */}
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-indigo-900/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Heading */}
        <div className="text-center mb-16">
         
          <h2 className="text-4xl font-extrabold tracking-tight mt-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-primary sm:text-5xl">
            Featured Projects
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
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, borderColor: 'rgba(99, 102, 241, 0.4)' }}
              className="flex flex-col bg-slate-900/40 backdrop-blur-md rounded-2xl overflow-hidden border border-slate-800 shadow-2xl transition-all duration-300"
            >

              {/* Cover Image Wrapper */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950 group border-b border-slate-800/60">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  loading="lazy"
                />
              </div>

              {/* Information / Content Card Core */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
                  {project.title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-400 font-normal mb-6 flex-grow line-clamp-3">
                  {project.description}
                </p>

                {/* UPDATED LAYER: High contrast matching image button chips */}
                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2.5">
                    Stack:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, techIdx) => (
                      <span 
                        key={techIdx} 
                        className="px-3.5 py-1.5 text-xs font-medium tracking-wide rounded-xl bg-purple-950/40 text-[#ec4899] border border-purple-900/30 shadow-inner"
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
                    className="btn btn-sm btn-primary rounded-xl capitalize font-medium text-white px-5 shadow-lg shadow-primary/20"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 2 0 00-2 2v10a2 2 2 0 002 2h10a2 2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>

                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-outline rounded-xl capitalize font-medium text-slate-300 border-slate-700 hover:bg-white hover:text-slate-950"
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