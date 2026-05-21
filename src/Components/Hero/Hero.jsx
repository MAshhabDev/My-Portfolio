import React from 'react';
import { FaGithub, FaJava, FaLinkedin } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import { PiBriefcaseBold } from 'react-icons/pi';
import { FaReact, FaNodeJs, FaJs } from 'react-icons/fa';
import pic from "../../assets/profile.png"

const HeroSection = () => {
    return (
        // Base background and text padding layout
        <section className="bg-base-100 text-base-content min-h-screen flex items-center px-6 md:px-16 pt-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full py-5">

                {/* ================= LEFT SIDE CONTENT ================= */}
                <div className="space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">

                    {/* Available for Hire Badge */}
                    <div className="badge badge-primary badge-outline gap-2 px-4 py-3 text-xs font-semibold tracking-wide rounded-full">
                        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                        AVAILABLE FOR HIRE
                    </div>

                    {/* Main Title Heading (Name) */}
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
                        Hi, I'm  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Mahir Ashhab</span>
                    </h1>

                    {/* Subtitle / Role Designation */}
                    <h2 className="text-xl md:text-2xl font-medium text-slate-300 mt-2">

                        <span className="inline-block bg-gradient-to-r from-primary via-[#5046E5] to-secondary text-white font-bold font-mono text-sm md:text-xl px-4 py-1.5 md:px-5 md:py-2 rounded-xl shadow-lg border border-white/10 ml-2 align-middle">
                            <Typewriter
                                words={['Frontend Developer', 'React Specialist', 'MERN Developer']}
                                loop={0}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </span>
                    </h2>

                    {/* Descriptive Short Bio Paragraph */}
                    <p className="text-base-content/70 text-base max-w-md leading-relaxed">
                        Frontend Web Developer specializing in building modern, interactive, and highly responsive user interfaces. Focused on converting complex UI/UX designs into pixel-perfect, clean, and maintainable component architectures.                    </p>

                    {/* Quantitative Stats Counters Matrix */}
                    {/* <div className="flex gap-8 md:gap-12 pt-2">
                        <div>
                            <div className="text-3xl md:text-4xl font-extrabold text-white">1+</div>
                            <div className="text-xs text-base-content/50 uppercase tracking-wider mt-1">Years Experience</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-extrabold text-white">10+</div>
                            <div className="text-xs text-base-content/50 uppercase tracking-wider mt-1">Projects Completed</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-extrabold text-white">15+</div>
                            <div className="text-xs text-base-content/50 uppercase tracking-wider mt-1">Technologies</div>
                        </div>
                    </div> */}

                    {/* Action CTAs (Download Resume & Core Social Anchor Icons) */}
                    <div className="flex items-center gap-4 pt-4">
                        <a className="btn btn-primary rounded-xl px-6 font-bold normal-case gap-2" href="" >
                            <PiBriefcaseBold className="ml-2" />  Hire Me
                        </a>
                        <a href="/#contact" className="btn btn-primary rounded-xl px-6 font-bold normal-case gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download Resume
                        </a>
                    </div>

                    <div>
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="btn btn-outline btn-circle border-base-300 text-base-content/70 hover:text-secondary hover:border-secondary">
                            <FaGithub className="text-xl" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn btn-outline btn-circle border-base-300 text-base-content/70 hover:text-primary hover:border-primary">
                            <FaLinkedin className="text-xl" />
                        </a>
                    </div>

                    {/* Outline Circular Custom Icon Buttons */}

                </div>

                {/* ================= RIGHT SIDE PORTRAIT WITH FIXED ORBIT ICONS ================= */}
                <div className="relative flex justify-center lg:justify-end items-center order-1 lg:order-2 w-full pr-0 lg:pr-8">

                    <div className="relative flex justify-center items-center w-[320px] h-[320px] md:w-[440px] md:h-[440px]">

                        {/* 1. DYNAMIC REVOLVING ORBIT: Pichhonaer ring ghurbe, sathe tar bhetore thaka icons guloo ghurbe */}
                        <div className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full border border-dashed border-primary/30 animate-[spin_40s_linear_infinite]">

                            {/* JavaScript Icon - Track Layer Fixed Position */}
                            <div className="absolute top-[8%] left-[12%] z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F7DF1E] shadow-xl flex items-center justify-center p-1.5 transition-transform hover:scale-110 cursor-pointer">
                                {/* FaJs use korle bhetore alada square box border ashbe na */}
                                <FaJs className="w-full h-full text-black block" />
                            </div>



                            {/* Node.js Icon - Track Layer Fixed Position */}
                            <div className="absolute top-[35%] right-[-6%] w-10 h-10 md:w-12 md:h-12 rounded-full bg-base-200 border border-[#539E43]/30 shadow-xl flex items-center justify-center p-2.5 transition-transform hover:scale-110 cursor-pointer">
                                <FaNodeJs className="w-full h-full text-[#539E43]" />
                            </div>

                            {/* React Icon - Track Layer Fixed Position */}
                            <div className="absolute bottom-[8%] left-[12%] w-10 h-10 md:w-12 md:h-12 rounded-full bg-base-200 border border-[#00D8FF]/30 shadow-xl flex items-center justify-center p-2.5 transition-transform hover:scale-110 cursor-pointer">
                                <FaReact className="w-full h-full text-[#00D8FF] animate-[spin_20s_linear_infinite]" />
                            </div>

                        </div>

                        {/* 2. INNER STATIC DECORATIVE RING */}
                        <div className="absolute w-[240px] h-[240px] md:w-[320px] md:h-[320px] rounded-full border border-base-content/10 pointer-events-none"></div>

                        {/* 3. CORE ROUNDED MASKED AVATAR FRAME (Hover Zoom Effect Unchanged) */}
                        <div className="avatar p-1.5 bg-gradient-to-tr from-primary to-secondary rounded-full shadow-2xl group cursor-pointer transition-transform duration-500 hover:shadow-primary/30 relative z-10">
                            <div className="w-[180px] h-[180px] md:w-[260px] md:h-[260px] rounded-full overflow-hidden border-4 border-base-100 bg-base-200">
                                <img
                                    src={pic}
                                    alt="Mahir Ashhab Portrait"
                                    className="w-full h-full object-cover grayscale-[10%] transition-all duration-700 ease-out group-hover:scale-110 group-hover:grayscale-0 group-hover:rotate-1"
                                />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;