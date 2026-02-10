




import './resume.css'



function Resume() {

  const style = {
    backgroundImage: "url('src/assets/Image/background image.avif')",
    backgroundSize: "cover",
    height: "87vh"
  }
  const downloadResume = () =>{
    const link =document.createElement("a");
    link.href="/resumeimg.jpeg";
    link.download="Resume.jpeg";
    link.click();
  }

  return (
    <div style={style}>
      <div className='project'>
        <div className='project-heading'>Resume</div>
      </div>
      <div className='project-photo'>
        <img src='src/assets/Image/resumeimg.jpeg' className='project-image'></img>
      </div>
      <div className='project-button'>
        <button onClick={downloadResume} className='project-download'>Download Resume</button>
      </div>


    </div>
  )
}
export default Resume;