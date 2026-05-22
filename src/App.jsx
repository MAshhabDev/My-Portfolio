

import Navbar from "./Components/Navbar/Navbar"

// import Skills from "./Components/Skills/Skills"
import HeroSection from "./Components/Hero/Hero"
import SkillsScroll from "./Components/Skills/skills"
import Projects from "./Components/ProjectsSection/Projects"

function App() {

  return (
    <div className=" w-11/12 mx-auto my-3">
      <Navbar></Navbar>

      <main>
        <HeroSection></HeroSection>
        <SkillsScroll></SkillsScroll>
        <Projects></Projects>
      </main>

    </div>


  )
}

export default App
