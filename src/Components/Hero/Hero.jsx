import React from "react";
import { Typewriter } from 'react-simple-typewriter';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaPaperPlane } from 'react-icons/fa';

import image from "../../assets/profile.png";

const Hero = () => {
    return (
        <div className="w-11/12 h-full mx-auto my-3 grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-0 mt-30">

            <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">

                <h1 className="text-3xl font-extrabold mb-4 text-white">
                    Hi, I'm <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 bg-clip-text text-transparent">Mahir Ashhab</span>
                </h1>

                <h2 className="text-2xl font-bold mb-4 min-h-[40px]">
                    <span className="text-cyan-400 font-bold font-mono">
                        <Typewriter
                            words={['Full Stack Web Developer', 'React Specialist', 'UI/UX Enthusiast']}
                            loop={0}
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </span>
                </h2>

                <p className="text-xl font-medium text-slate-400 leading-relaxed max-w-xl">
                    I am a passionate Frontend Developer who loves building fast,
                    responsive and visually stunning web experiences. Specializing in HTML, CSS, Tailwind CSS,
                    React and TypeScript, I focus on writing clean code and creating smooth, intuitive user interfaces.
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-5 mt-6 w-full">
                    <a href="#contact" className="group btn btn-primary flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95">
                        Hire Me
                        <FaPaperPlane className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                    <a href="#resume" className="btn btn-outline btn-secondary flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95">
                        <MdOutlineFileDownload className="text-xl" />
                        Download Resume
                    </a>
                </div>
            </div>

            <div className="lg:col-span-6 flex items-center justify-center">
                <div className="relative p-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 shadow-2xl transition-all duration-500 ease-out hover:scale-105 hover:rotate-2">
                    <img
                        className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-[#030014]"
                        src={image}
                        alt="Profile"
                    />
                </div>
            </div>

        </div>
    );
};

export default Hero;