import { useNavigate } from 'react-router-dom';
import './about.css'

function About() {

  const navigate = useNavigate();

  const style = {
    backgroundImage: "url('src/assets/Image/background image.avif')",
    backgroundSize: "cover",
    height: "87vh"
  }
  return (
    <div style={style}>

      <div className='overall'>
        <div className='image'>
          <img src="src/assets/Image/devika.jpeg" height={490} className='devika' ></img>
        </div>

        <div className='aboutme'>
          <div className='about-me'>ABOUT ME</div>
          <div className='about-name'>Hi, My Name is Devika</div>
          <div className='about-line'>I am completed my degree in Dr.Mgr.Chockalingam Arts College. I have a <br /> interest in problem solving and finding new and dynamic ideas.</div>
          <div className='about-line'>I am a motivated and detail - oriented individual with a strong interest in learning, problem-solving,<br /> and continuous personal growth. I enjoy applying my skills to real - world challenges and delivering<br /> quality results. I value creativity, adaptability, and collaboration, and I am always eager to explore<br /> new ideas, improve my abilities, and contribute positively to any team or project I am part of.</div>
          <button className='button' onClick={() => navigate("/contact")}>contact us</button>
        </div>

      </div>

    </div>
  );
}
export default About