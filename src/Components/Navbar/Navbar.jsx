import React from 'react';
import image from "../../assets/Name.svg";

const Navbar = () => {
    const navOptions = (
        <>
            <li><a href="/#home" className="hover:text-base-content/70 font-medium transition-colors py-1 text-sm focus:bg-transparent active:bg-transparent">Home</a></li>
            <li><a href="/#skills" className="hover:text-base-content/70 font-medium transition-colors py-1 text-sm focus:bg-transparent active:bg-transparent">Skill</a></li>
            <li><a href="/#projects" className="hover:text-base-content/70 font-medium transition-colors py-1 text-sm focus:bg-transparent active:bg-transparent">Projects</a></li>
            <li><a href="/#education" className="hover:text-base-content/70 font-medium transition-colors py-1 text-sm focus:bg-transparent active:bg-transparent">Education</a></li>
            <li><a href="/#contact" className="hover:text-base-content/70 font-medium transition-colors py-1 text-sm focus:bg-transparent active:bg-transparent">Contact</a></li>
        </>
    );

    return (
        // bg-base-100/80 এবং ওপরে একদম ফ্লাশ লকড, বর্ডার ফেলে দেওয়া হয়েছে যাতে পেজ ব্রেক না হয়
        <div className="navbar sticky top-0 z-50 w-full min-h-0 h-12 md:h-14 py-0 bg-base-100/80 backdrop-blur-md px-4 md:px-12 transition-all flex items-center">
            <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
                
                {/* NAVBAR START */}
                <div className="flex items-center gap-2 h-full">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-xs lg:hidden text-base-content p-0 mr-2 min-h-0 h-8 w-8 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-200 text-base-content rounded-xl z-20 mt-3 w-52 p-2 shadow-xl border border-base-300 gap-1">
                            {navOptions}
                        </ul>
                    </div>
                    <a href="/" className="flex items-center h-6 md:h-7 transition-transform hover:scale-102">
                        <img src={image} alt="Mahir Logo" className="h-full w-auto object-contain block" />
                    </a>
                </div>

                {/* NAVBAR CENTER */}
                <div className="hidden lg:flex h-full items-center">
                    <ul className="menu menu-horizontal px-1 gap-4 text-base-content h-full items-center py-0">
                        {navOptions}
                    </ul>
                </div>

                {/* NAVBAR END */}
                <div className="flex items-center h-full">
                    <a href="/#contact" className="btn btn-neutral text-neutral-content btn-sm min-h-0 h-8 md:h-9 rounded-lg px-4 font-semibold hover:scale-105 transition-transform normal-case text-xs md:text-sm flex items-center justify-center border border-base-300">
                        Resume 📥
                    </a>
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;