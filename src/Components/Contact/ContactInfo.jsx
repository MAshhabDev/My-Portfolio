import React, { useState } from 'react';

const CONTACT_INFO = [
    {
        id: 1,
        type: "EMAIL",
        value: "mahirjr98@gmail.com",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        id: 2,
        type: "PHONE",
        value: "+8801708577675",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        )
    },
    {
        id: 3,
        type: "WHATSAPP",
        value: "+8801708577675",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        )
    },
    {
        id: 4,
        type: "ADDRESS",
        value: "Dhaka, Bangladesh",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        )
    },
];

export default function ContactSection() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted successfully:", formData);
    };

    return (
        <section id="contact" className="py-5 w-full bg-transparent relative overflow-hidden text-base-content flex items-center">

            <div className="absolute top-[10%] left-[-15%] w-[500px] h-[500px] bg-primary/5 blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full relative z-10 px-4">

                <div className="text-center mb-16">

                    <h2 className="text-4xl font-extrabold tracking-tight mt-4 text-white bg-gradient-to-r from-base-content to-base-content/70 bg-clip-text sm:text-5xl">
                        Let's <span className="text-primary">Build Together</span>
                        <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mt-3 mx-auto rounded-full"></div>

                    </h2>
                </div>

                {/* Main Split Layout Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12">

                    {/* Left Column: Contact Information Cards */}
                    <div className="lg:col-span-5 space-y-4">
                        <h3 className="text-2xl font-bold tracking-tight text-base-content mb-6">
                            Contact Information
                        </h3>

                        {CONTACT_INFO.map((info) => (
                            <div
                                key={info.id}
                                className="flex items-center gap-5 p-4 rounded-xl bg-base-200 border border-base-300 hover:border-primary/40 hover:shadow-lg transition-all duration-300 group"
                            >
                                {/* Custom Glass-Icon Orb */}
                                <div className="w-11 h-11 rounded-xl bg-base-300/50 border border-base-300 flex items-center justify-center shrink-0 text-base-content/80 group-hover:text-primary transition-colors duration-300">
                                    {info.icon}
                                </div>

                                {/* Meta text fields */}
                                <div className="overflow-hidden">
                                    <p className="text-[10px] font-bold tracking-widest text-base-content/40 uppercase">
                                        {info.type}
                                    </p>
                                    <p className="text-sm font-semibold text-base-content mt-0.5 truncate select-all">
                                        {info.value}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column: The Modern Glassmorphic Form Canvas */}
                    <div className="lg:col-span-7">
                        {/* ফর্মের মেইন বক্স ব্যাকগ্রাউন্ড ও বর্ডার স্লেট থিমে লকড */}
                        <div className="p-6 sm:p-10 rounded-2xl bg-base-200 border border-base-300 shadow-xl">

                            <form onSubmit={handleSubmit} className="space-y-5">

                                {/* Name Field */}
                                <div className="space-y-2">
                                    <label className="text-xs font-bold tracking-widest text-base-content/50 uppercase">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Your full name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3.5 rounded-xl bg-base-100/40 border border-base-300 text-base-content text-sm placeholder-base-content/30 focus:outline-none focus:border-primary/50 focus:bg-base-100/70 transition-all duration-300"
                                        required
                                    />
                                </div>

                                {/* Email Field */}
                                <div className="space-y-2">
                                    <label className="text-xs font-bold tracking-widest text-base-content/50 uppercase">Email</label>
                                    <input
                                        type="email"
                                        placeholder="hello@email.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3.5 rounded-xl bg-base-100/40 border border-base-300 text-base-content text-sm placeholder-base-content/30 focus:outline-none focus:border-primary/50 focus:bg-base-100/70 transition-all duration-300"
                                        required
                                    />
                                </div>

                                {/* Message Field */}
                                <div className="space-y-2">
                                    <label className="text-xs font-bold tracking-widest text-base-content/50 uppercase">Message</label>
                                    <textarea
                                        rows="4"
                                        placeholder="Tell me about your project or idea"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3.5 rounded-xl bg-base-100/40 border border-base-300 text-base-content text-sm placeholder-base-content/30 focus:outline-none focus:border-primary/50 focus:bg-base-100/70 resize-none transition-all duration-300"
                                        required
                                    />
                                </div>

                                {/* Elite High-Contrast Submit Trigger */}
                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        className="w-full btn btn-md sm:btn-lg btn-primary text-white font-semibold rounded-xl capitalize tracking-wide shadow-md hover:scale-102 transition-all duration-300 gap-2"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform rotate-45 -translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                        Send Message
                                    </button>
                                </div>

                            </form>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}