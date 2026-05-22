import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/Hero/Hero";
import SkillsScroll from "./Components/Skills/skills";
import Projects from "./Components/ProjectsSection/Projects";
import EducationTimeline from "./Components/Education/EducationTimelinse";
import ContactSection from "./Components/Contact/ContactInfo";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    // Removed outer margins so the sticky header fits edge-to-edge seamlessly
    <div className="min-h-screen w-11/12 max-w-7xl mx-auto bg-base-100 text-base-content ">
      <Navbar />

      {/* Main container controls the global consistent alignment */}
      <main className="w-11/12 max-w-7xl mx-auto space-y-10 py-10">
        <HeroSection />
        <SkillsScroll />
        <Projects />
        <EducationTimeline />
        <ContactSection />
      </main>

      <footer className="w-11/12 max-w-7xl mx-auto py-6">
        <Footer />
      </footer>
    </div>
  );
}

export default App;