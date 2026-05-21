import React from 'react';

import image from "../../assets/Name.svg"
import image1 from "../../assets/Name1.png"

const Navbar = () => {
    // Menu options array - Pure regular HTML tags with section anchors
    const navOptions = (
        <>
            <li><a href="/#home" className="hover:text-secondary font-medium transition-colors">Home</a></li>

            {/* 2. Projects Section Link */}
            <li><a href="/#projects" className="hover:text-secondary font-medium transition-colors">Projects</a></li>

            <li><a href="/#skills" className="hover:text-secondary font-medium transition-colors">Skills</a></li>

            <li><a href="/blogs" className="hover:text-secondary font-medium transition-colors">Blogs</a></li>

            <li><a href="/#contact" className="hover:text-secondary font-medium transition-colors">Contact</a></li>
        </>
    );

    return (
        <div className="navbar sticky bg-base-100 border-b border-base-300 top-0 left-0  z-50 w-11/12 mx-auto  backdrop-blur-md  shadow-sm px-4 md:px-12">

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-base-content">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-200 text-base-content rounded-xl z-20 mt-3 w-52 p-3 shadow-2xl border border-base-300 gap-2">
                        {navOptions}
                    </ul>
                </div>

                <a href="/" className="flex items-center justify-center min-w-[50px] max-w-[20px] md:max-w-[80px] transition-transform hover:scale-105">
                    <img
                        src={image}
                        alt="Mahir Logo"
                        className="w-full h-auto object-contain block scale-125 origin-left"
                    />
                </a>
            </div>

            {/* Desktop Menu View */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-6 text-base-content">
                    {navOptions}
                </ul>
            </div>

            {/* Navbar End CTA Target */}
            <div className="navbar-end">
                <a href="/#contact" className="btn btn-primary rounded-xl px-5 font-bold shadow-md shadow-primary/20 hover:scale-105 transition-transform normal-case">
                    Resume 📥
                </a>
            </div>

        </div>
    );
};

export default Navbar;