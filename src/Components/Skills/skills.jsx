import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiFirebase } from 'react-icons/si';
import { motion } from 'framer-motion';

const SkillsScroll = () => {
    const skills = [
        { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
        { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
        { name: "React", icon: <FaReact />, color: "#00D8FF" },
        { name: "Node.js", icon: <FaNodeJs />, color: "#539E43" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
        { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
        { name: "Git", icon: <FaGitAlt />, color: "#F05032" }
    ];

    const duplicatedSkills = [...skills, ...skills, ...skills];

    return (
        <section id="skills" className="bg-base-100 text-base-content py-10 border-t border-base-300 overflow-hidden w-full">
            
            {/* Title Block Container: Standard center spacing dynamic match */}
            <div className="max-w-7xl mx-auto px-6 text-center mb-14">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-2">Technical <span className="text-primary">Skills</span></h2>
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mt-3 mx-auto rounded-full"></div>
            </div>

            {/* 🚀 FULL WIDTH CONTINOUS MARQUEE WRAPPER (Screen Er Kanamachhi Line Segment Match) */}
            <div className="relative w-full flex overflow-hidden whitespace-nowrap">
                
                {/* Optional Glassmorphism edge fading overlay layers (Video er moto left-right soft fade look) */}
                <div className="absolute top-0 left-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-base-100 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-base-100 to-transparent z-10 pointer-events-none"></div>

                <motion.div 
                    className="flex gap-6 py-4 pr-6"
                    animate={{ x: [0, "-33.33%"] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 25,
                            ease: "linear"
                        }
                    }}
                >
                    {duplicatedSkills.map((skill, index) => (
                        <div 
                            key={index} 
                            className="flex items-center gap-4 px-6 py-4 rounded-2xl border border-slate-800 shadow-xl bg-base-200 min-w-[190px] transition-all duration-300 hover:border-primary/40 group cursor-pointer"
                        >
                            <span className="text-3xl group-hover:scale-110 transition-transform" style={{ color: skill.color }}>
                                {skill.icon}
                              </span>
                              <span className="text-lg font-semibold text-white">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>

        </section>
    );
};

export default SkillsScroll;