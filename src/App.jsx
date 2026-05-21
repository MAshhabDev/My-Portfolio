

import Navbar from "./Components/Navbar/Navbar"

// import Skills from "./Components/Skills/Skills"
import HeroSection from "./Components/Hero/Hero"
import SkillsScroll from "./Components/Skills/skills"

function App() {

  return (
    <div className=" w-11/12 mx-auto my-3">
      <Navbar></Navbar>

      <main>
        <HeroSection></HeroSection>        
        <SkillsScroll></SkillsScroll>
        {/* <Skills></Skills> */}
      </main>

    </div>


  )
}

export default App
