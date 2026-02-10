
import './home.css';

function Home() {

  const style = {
    backgroundImage: "url('src/assets/Image/background image.avif')",
    backgroundSize: "cover",
    height: "87vh"
  }
  return (

    <div style={style}>

      <div className='overall'>
        <div className="hero">
          <div className='front'>Frontend <br /> Developer</div>
          <div className='s'>I'M Devika - Web developer with a passion<br/> for creating beautiful and responsive Websites</div>
        </div>
        <div className='developer'>
          <img src='src/assets/Image/developer.png'></img>
        </div>

      </div>
    </div>
  );
}
export default Home;
