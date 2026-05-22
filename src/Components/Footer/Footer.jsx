import React from 'react';

export default function Footer() {
  
  // ব্যাক-টু-টপ স্মুথ স্ক্রল ফাংশন
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    // bg-transparent ব্যবহার করা হয়েছে যাতে এটি পেজের মূল স্লেট ব্যাকগ্রাউন্ড কালারটিই ধরে রাখে
    <footer className="bg-transparent text-base-content/70 pt-20 pb-10 px-6 relative overflow-hidden  border-base-300">
      
      {/* ব্যাকগ্রাউন্ড স্পেস গ্লো—থিমের primary নিয়ন কালারে ম্যাপ করা */}
      <div className="absolute bottom-0 right-[10%] w-[350px] h-[350px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Grid Canvas */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12">
          
          {/* Brand/Identity Segment */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xl font-bold tracking-tight text-base-content font-mono flex items-center gap-1">
              &lt;<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Mahir</span>/&gt;
            </h3>
            <p className="text-sm leading-relaxed text-base-content/60 max-w-xs font-light">
              Crafting high-performance web experiences with clean code and thoughtful design.
            </p>
          </div>

          {/* Quick Links Sitemap */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold tracking-widest text-base-content uppercase mb-6 font-mono">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm font-medium">
              <a href="/#home" className="hover:text-primary transition-colors duration-300 w-fit">Home</a>
              <a href="/#skills" className="hover:text-primary transition-colors duration-300 w-fit">Skill</a>
              <a href="/#projects" className="hover:text-primary transition-colors duration-300 w-fit">Projects</a>
              <a href="/#education" className="hover:text-primary transition-colors duration-300 w-fit">Education</a>
              <a href="/#contact" className="hover:text-primary transition-colors duration-300 w-fit">Contact</a>
            </div>
          </div>

          {/* Social Connect Segment */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold tracking-widest text-base-content uppercase mb-6 font-mono">
              Connect
            </h4>
            
            {/* সোশ্যাল আইকন বক্সগুলোর ব্যাকগ্রাউন্ড নতুন স্লেট থিমের base-200 তে লক করা */}
            <div className="flex flex-wrap gap-3">
              
              {/* GitHub */}
              <a 
                href="https://github.com/MAshhabDev" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-xl bg-base-200 border border-base-300 hover:border-primary/40 flex items-center justify-center text-base-content/70 hover:text-primary transition-all duration-300 shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/mahir-ashhab-97a189224/" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-xl bg-base-200 border border-base-300 hover:border-primary/40 flex items-center justify-center text-base-content/70 hover:text-primary transition-all duration-300 shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* Email */}
              <a 
                href="mailto:mahirjr98@gmail.com" 
                className="w-10 h-10 rounded-xl bg-base-200 border border-base-300 hover:border-primary/40 flex items-center justify-center text-base-content/70 hover:text-primary transition-all duration-300 shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/8801708577675" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-xl bg-base-200 border border-base-300 hover:border-primary/40 flex items-center justify-center text-base-content/70 hover:text-primary transition-all duration-300 shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Metadata Border Rule */}
        <div className="pt-8 mt-4 border-t border-base-300/40 flex flex-col sm:flex-row justify-between items-center gap-4">
          
          <p className="text-xs text-base-content/40 font-medium tracking-wide">
            &copy; {new Date().getFullYear()} Mahir Ashhab. Built with React &amp; Tailwind CSS.
          </p>

          {/* Back To Top Button - থিমের নিয়ন primary বাটনের সাথে সিঙ্কড */}
          <button
            onClick={scrollToTop}
            className="btn btn-sm btn-primary text-white font-semibold rounded-xl capitalize tracking-wide px-4 shadow-md hover:scale-105 transition-all flex items-center gap-1.5 group"
          >
            Back To Top
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-3.5 w-3.5 transform group-hover:-translate-y-0.5 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>

        </div>

      </div>
    </footer>
  );
}