import React from 'react';
import image from "../../assets/Name.svg"

const Navbar = () => {
    const links = (
        <>
            <li><a className="text-[#22d3ee]" href="#home">Home</a></li>
            <li><a className="text-[#22d3ee]" href="#about">About</a></li>
            <li><a className="text-[#22d3ee]" href="#skills">Skills</a></li>
            <li><a className="text-[#22d3ee]" href="#projects">Projects</a></li>
            <li><a className="text-[#22d3ee]" href="#contact">Contact</a></li>
        </>
    );

    return (
        <div className="sticky top-0 z-50 bg-[#0f172a]/40 backdrop-blur-md">
            <div className="navbar max-w-6xl mx-auto shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            {links}
                        </ul>
                    </div>
                    <a href="#home" className="flex items-center overflow-hidden h-14 w-20 md:h-16 md:w-24 relative">
                        <img
                            src={image}
                            alt="Logo"
                            // এখানে স্কেল কমিয়ে ১.৮ করলাম যাতে বেশি বড় না দেখায়
                            className="absolute inset-0 h-full w-full object-contain scale-[1.8] md:scale-[2.0] mix-blend-screen"
                        />
                    </a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-medium">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end">
                    <a className="btn btn-primary btn-sm md:btn-md">Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;