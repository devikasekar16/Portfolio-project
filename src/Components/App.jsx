
import './App.css'
import { Link, Outlet } from "react-router"
import { FaHome } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { FaDesktop } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";


function App(){

const style = {
        backgroundImage: "url('src/assets/Image/background image.avif')",
        backgroundSize: "cover",
        height: "10vh"
}

    return (
        <div style={style}>
            <div className="all">
            <div className="logo">S.D</div>
                <ul type="none">
                    <li className='firstli'><Link to="/"><FaHome className="icon"/>Home</Link></li>
                    <li className='secondli'><Link to="about"><IoPerson className="icon"/>About</Link></li>
                    <li className='thirdli'><Link to="skill"><GiSkills className="icon"/>Skills</Link></li>
                    <li className='fourthli'><Link to="project"><FaDesktop className="icon"/>Projects</Link></li>
                    <li className='fifthli'><Link to="resume"><FaNewspaper className="icon"/>Resume</Link></li>
                    <li className='sixthli'><Link to="contact"><FaPhoneAlt className="icon"/>Contact</Link></li>
                </ul>
            <Outlet />
          </div>
        </div>
    )
}
export default App


