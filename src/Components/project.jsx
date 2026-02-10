import './project.css'


function Project() {

  const style = {
    backgroundImage: "url('src/assets/Image/background image.avif')",
    backgroundSize: "cover",
    height: "87vh"
  }

  return (
    <div style={style}>
      <div className='project-start'>
        <div className='project-sentence'>Some of my recent works</div>
      </div>
      <div className='project'>
        <div className='project-heading'>Project</div>
      </div>
      <div className='square'>
        <div className='square1'>
          <img src='src/assets/Image/portfolio.jpeg' className='image'></img>
          <div className='word'>Portfolio</div>
          <div className='words'>This portfolio project showcases my skills and the work I have completed. It includes examples that highlight my learning, creativity, and improvement over time.</div>
        </div>
        <div className='square1'>
          <img src='src/assets/Image/to do list.jpeg' className='image'></img>
          <div className='word'>To Do List</div>
          <div className='words'>This project is a simple to-do list app that helps users organize tasks and manage their time. Users can add, edit, and delete tasks easily.</div>
        </div>
        <div className='square1'>
          <img src='src/assets/Image/calculator.jpeg' className='image'></img>
          <div className='word'>Calculator</div>
          <div className='words'>This project is a simple calculator that performs basic mathematical operations. It is designed to help users calculate results quickly and easily.</div>
        </div>
      </div>
    </div>
  )
}
export default Project;