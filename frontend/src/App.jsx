import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import ThemeToggle from "./components/ThemeToggle"
import Navbar from "./components/Navbar"
import AboutMeSection from "./pages/AboutMeSection"
import SkillsSection from "./pages/SkillsSection"

function App() {

  return (
    <>
      <BrowserRouter>
        <ThemeToggle />
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/aboutme" element={<AboutMeSection />} />
          <Route path="/skills" element={<SkillsSection />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
