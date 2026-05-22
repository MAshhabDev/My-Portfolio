import React from 'react';
import { FaGithub, FaLinkedin, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import { PiBriefcaseBold } from 'react-icons/pi';
import pic from "../../assets/profile.png";

const HeroSection = () => {
    return (
        // bg-transparent এবং bg-grid-pattern ইউটিলিটি ব্যবহার করে ব্যাকগ্রাউন্ড সিঙ্ক করা হয়েছে
        <section id="home" className="bg-transparent bg-grid-pattern text-base-content w-full flex items-center px-6 md:px-16 py-16 md:py-28 relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

                {/* LEFT SIDE CONTENT */}
                <div className="space-y-5 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
                    <div className="badge badge-primary badge-outline gap-2 px-4 py-3 text-xs font-semibold tracking-wide rounded-full">
                        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                        AVAILABLE FOR HIRE
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                        Hi, I'm  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Mahir Ashhab</span>
                    </h1>

                    <h2 className="text-xl md:text-2xl font-medium text-base-content/80 mt-1">
                        <span className="inline-block bg-gradient-to-r from-primary via-[#5046E5] to-secondary text-white font-bold font-mono text-sm md:text-xl px-4 py-1.5 md:px-5 md:py-2 rounded-xl shadow-lg border border-white/10 ml-2 align-middle">
                            <Typewriter words={['Frontend Developer', 'React Specialist', 'MERN Developer']} loop={0} cursor cursorStyle="|" typeSpeed={70} deleteSpeed={50} delaySpeed={1500} />
                        </span>
                    </h2>

                    <p className="text-base-content/70 text-sm md:text-base max-w-md leading-relaxed">
                        Frontend Web Developer specializing in building modern, interactive, and highly responsive user interfaces. Focused on converting complex UI/UX designs into pixel-perfect, clean, and maintainable component architectures.
                    </p>

                    <div className="flex items-center gap-4 pt-2">
                        <a className="btn btn-primary rounded-xl px-6 font-bold normal-case gap-2 text-white shadow-md shadow-primary/20" href="#contact">
                            <PiBriefcaseBold className="text-lg" />  Hire Me
                        </a>
                        <a href="/#contact" className="btn btn-primary btn-outline rounded-xl px-6 font-bold normal-case gap-2 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download Resume
                        </a>
                    </div>

                    <div className="flex gap-3">
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="btn btn-outline btn-circle border-base-300 text-base-content/70 hover:text-secondary hover:border-secondary transition-all"><FaGithub className="text-xl" /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn btn-outline btn-circle border-base-300 text-base-content/70 hover:text-primary hover:border-primary transition-all"><FaLinkedin className="text-xl" /></a>
                    </div>
                </div>

                {/* RIGHT SIDE PORTRAIT WITH COUNTER ROTATION */}
                <div className="relative flex justify-center lg:justify-end items-center order-1 lg:order-2 w-full pr-0">
                    <div className="relative flex justify-center items-center w-[280px] h-[280px] md:w-[360px] md:h-[360px]">
                        
                        {/* সিএসএস ফাইল থেকে নতুন .animate-spin-slow ক্লাস অ্যাপ্লাই করা হয়েছে */}
                        <div className="absolute w-[240px] h-[240px] md:w-[320px] md:h-[320px] rounded-full border border-dashed border-primary/20 animate-spin-slow">
                            
                            {/* নতুন .animate-spin-slow-reverse ক্লাস দিয়ে আইকনগুলো সবসময় সোজা থাকবে */}
                            <div className="absolute top-[6%] left-[12%] z-20 w-9 h-9 md:w-11 md:h-11 rounded-full bg-[#F7DF1E] shadow-xl flex items-center justify-center p-1.5 animate-spin-slow-reverse"><FaJs className="w-full h-full text-black block" /></div>
                            <div className="absolute top-[35%] right-[-5%] w-9 h-9 md:w-11 md:h-11 rounded-full bg-base-200 border border-base-300 shadow-xl flex items-center justify-center p-2 animate-spin-slow-reverse"><FaNodeJs className="w-full h-full text-[#539E43]" /></div>
                            <div className="absolute bottom-[6%] left-[12%] w-9 h-9 md:w-11 md:h-11 rounded-full bg-base-200 border border-base-300 shadow-xl flex items-center justify-center p-2 animate-spin-slow-reverse"><FaReact className="w-full h-full text-[#00D8FF] animate-[spin_20s_linear_infinite]" /></div>
                        </div>

                        <div className="absolute w-[200px] h-[200px] md:w-[270px] md:h-[270px] rounded-full border border-base-300 pointer-events-none" />
                        
                        <div className="avatar p-1 bg-gradient-to-tr from-primary to-secondary rounded-full shadow-2xl group cursor-pointer relative z-10">
                            <div className="w-[150px] h-[150px] md:w-[220px] md:h-[220px] rounded-full overflow-hidden border-4 border-base-100 bg-base-200">
                                <img src={pic} alt="Mahir Ashhab Portrait" className="w-full h-full object-cover grayscale-[10%] transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;