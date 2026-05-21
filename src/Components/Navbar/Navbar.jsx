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
        <div className="sticky top-0 z-50 bg-[#0f172a]/40 backdrop-blur-md w-11/12 mx-auto my-3">
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>

                    <a
                        href="#home"
                        // w-fit দেওয়ার কারণে বাটনটি ইমেজের সমান সাইজের থাকবে, ডানে-বামে বড় হবে না
                        className="w-fit flex items-center justify-center p-1 rounded-xl transition-all duration-300 hover:bg-white/5 active:scale-95"
                    >
                        <img
                            // ইমেজের হাইট বাড়িয়ে দিলাম যাতে লোগোটা বেশ বড় ও স্পষ্ট দেখায়
                            className="h-14 md:h-18 w-auto object-contain"
                            src={image}
                            alt="Logo"
                        />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;