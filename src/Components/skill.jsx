import './skill.css'

function Skill() {

  const style = {
    backgroundImage: "url('src/assets/Image/background image.avif')",
    backgroundSize: "cover",
    height: "87vh"
  }
  return (
    <div style={style}>
      <div className='skills'>
        <div className='first' >
          <div className='first-skill'>Skills</div>
        </div>
        <div className='firstbox'>
          <div className='box1'>
            <img src="src/assets/Image/html.jpeg" className='html'></img>
            <div className='name1'>HTML</div>
          </div>
          <div className='box2'>
            <img src='src/assets/Image/css.jpeg' className='css'></img>
            <div className='name2'>CSS</div>
          </div>
          <div className='box3'>

            <img src='src/assets/Image/Javascript.svg' className='javascript'></img>
            <div className='name3'>JAVASCRIPT</div>

          </div>
          <div className='box4'>
            <img src='src/assets/Image/React.svg' className='react'></img>
            <div className='name4'>REACT</div>

          </div>
        </div>

        <div className='secondbox'>
          <div className='box5'>
            <img src='src/assets/Image/boostrap.jpeg' className='boostrap'></img>
            <div className='name5'>BOOSTRAP</div>
          </div>
          <div className='box6'>
            <img src="src/assets/Image/npm.jpeg" className='npm'></img>
            <div className='name6'>NPM</div>
          </div>
          <div className='box7'>
            <img src="src/assets/Image/git.jpeg" className='git'></img>
            <div className='name7'>GIT</div>
          </div>
          <div className='box8'>
            <img src="src/assets/Image/github.jpeg" className='github'></img>
            <div className='name8'>GITHUB</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skill;