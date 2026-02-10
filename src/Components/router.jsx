import { Route, Routes } from "react-router-dom"
import Home from "./home"
import About from "./about"
import Skill from "./skill"
import Project from "./project"
import Resume from "./resume"
import Contact from "./contact"


const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skill" element={<Skill />} />
                <Route path="/project" element={<Project />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />

            </Routes>
        </div>
    )
}
export default Router