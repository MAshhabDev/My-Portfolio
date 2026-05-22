import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EDUCATION_DATA = [
  {
    id: 1,
    year: "2022 - 2025",
    degree: "BSc in Computer Science & Engineering",
    institution: "Kishoreganj University (KJU)",
    side: "left",
    description: "University life reignited my passion for technology after the pandemic setback. This stage wasn't just about academics; it was a chance to reassess my skills and adapt to a fast-changing world. Here, I dove deep into algorithms, data structures, software architecture, and above all, real-world problem-solving, applying knowledge beyond theory to tackle practical challenges with impact."
  },
  {
    id: 2,
    year: "2018 - 2019",
    degree: "Higher Secondary School Certificate",
    institution: "Govt. College",
    side: "right",
    description: "Stepping into higher studies, I dove deeper into the science stream with emphasis on mathematics, physics, and foundational computer concepts, marking a big leap toward engineering life. The pandemic disrupted learning and brought unexpected isolation, yet it also became a period of adaptability and self-learning."
  },
  {
    id: 3,
    year: "2015 - 2016",
    degree: "Secondary School Certificate",
    institution: "Local High School",
    side: "left",
    description: "Core science subjects became my playground. Equations, logic, and experiments turned into my favorite puzzles to crack while developing strong analytical skills."
  },
  {
    id: 4,
    year: "2014",
    degree: "Junior School Certificate",
    institution: "Local School Cluster",
    side: "right",
    description: "I leveled up! This stage was all about building confidence, strengthening my foundation in science and mathematics, and actively participating in academic activities that pushed me to grow."
  }
];

export default function EducationTimeline() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    // bg-transparent ব্যবহার করা হয়েছে যাতে মেইন অ্যাপের রয়্যাল স্লেট ব্যাকগ্রাউন্ডের সাথে এটি এক হয়ে মিশে যায়
    <section id="education" className="py-10 w-full relative overflow-hidden text-base-content bg-transparent">
      
      {/* ব্যাকগ্রাউন্ড স্পেস গ্লো আকসেন্ট */}
      <div className="absolute top-[30%] left-[-15%] w-[500px] h-[500px] bg-primary/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[500px] h-[500px] bg-primary/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          
          <h2 className="text-4xl font-extrabold tracking-tight mt-4 text-white bg-gradient-to-r from-base-content to-base-content/70 bg-clip-text sm:text-5xl">
            Education <span className="text-primary">Timeline</span>
                            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mt-3 mx-auto rounded-full"></div>

          </h2>
          <p className="text-lg text-base-content/70 mt-4 leading-relaxed max-w-2xl font-light mx-auto">
            From pencils and notebooks to algorithms, data structures, and real-world problem solving, my journey has been one of growth, curiosity, and adaptation.
          </p>
        </div>

        {/* Timeline Dynamic Component */}
        <div className="relative mt-20">
          
          {/* সেন্ট্রাল টাইমলাইন অ্যাক্সিস লাইন */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-base-300 hidden md:block" />

          <div className="space-y-12 relative">
            {EDUCATION_DATA.map((edu) => {
              const isHovered = hoveredCard === edu.id;

              return (
                <div 
                  key={edu.id} 
                  className={`flex flex-col md:flex-row items-center justify-between relative w-full ${
                    edu.side === 'right' ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* সেন্ট্রাল টাইমলাইন ডট—হোভার করলে তোমার নিয়ন primary ভ্যারিয়েবলে নিখুঁত গ্লো করবে */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-base-100 border-2 border-base-300 hidden md:flex items-center justify-center z-20">
                    <div className={`w-2 h-2 rounded-full transition-all duration-300 ${isHovered ? 'bg-primary scale-110 shadow-[0_0_10px_var(--color-primary)]' : 'bg-base-300'}`} />
                  </div>

                  {/* Presentational Information Card */}
                  <div className="w-full md:w-[45%]">
                    <motion.div
                      layout
                      onMouseEnter={() => setHoveredCard(edu.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                      // কার্ডের ব্যাকগ্রাউন্ড ও বর্ডার গ্লোবাল স্লেট থিমে সিঙ্ক করা হয়েছে (bg-base-200)
                      className={`p-6 bg-base-200/90 backdrop-blur-md rounded-2xl border transition-all duration-500 cursor-pointer select-none ${
                        isHovered 
                          ? 'border-primary/40 shadow-xl' 
                          : 'border-base-300'
                      }`}
                      transition={{ 
                        layout: { 
                          type: "spring",
                          stiffness: 150,
                          damping: 25
                        }
                      }}
                    >
                      {/* Year badge block */}
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-bold text-primary font-mono tracking-wider">
                          {edu.year}
                        </span>
                      </div>

                      {/* Degree Title Text */}
                      <h3 className={`text-lg font-bold tracking-tight transition-colors duration-300 ${isHovered ? 'text-primary' : 'text-base-content'}`}>
                        {edu.degree}
                      </h3>
                      
                      {/* Subtitle location indicator */}
                      <p className="text-xs text-base-content/60 font-medium mt-1">
                        {edu.institution}
                      </p>

                      {/* ড্রয়ার শিট ওপেনিং অ্যানিমেশন মসৃণ এবং ফাস্ট করা হয়েছে */}
                      <AnimatePresence initial={false}>
                        {isHovered && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ 
                              height: { duration: 0.35, ease: "easeInOut" },
                              opacity: { duration: 0.25, delay: 0.05 }
                            }}
                            className="overflow-hidden"
                          >
                            <p className="text-xs leading-relaxed text-base-content/70 font-light pt-4 border-t border-base-300 mt-4">
                              {edu.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>

                    </motion.div>
                  </div>

                  {/* Spatial structure balance panel */}
                  <div className="hidden md:block w-[45%]" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}