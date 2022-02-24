import React from 'react'
import { Link } from 'react-router-dom'

////////////////////////////////////////////////////
//  HOME VIEW
////////////////////////////////////////////////////

const HomeView = () => {
  return (<div className='bg-makati'>
    <div className='container'>
      <div className='d-flex flex-column justify-content-center align-items-center text-white text-center' style={{ height: '100vh' }}>
            <img className='main-pic' src='https://i.ibb.co/51DFzGb/val-self-2022-02.jpg' alt='virgilio profile picture' />
        <div className=''>
          <h1 className='main-name text-yellow mt-3'><strong>Virgilio D. Cabading Jr.</strong></h1>
          <h1>Software Developer</h1>
          {/* <p>Hello, I am a highly motivated Software Developer transitioning from the healthcare industry<br/>with a B.S. in Informatics.  My interests are many, but I am currently interested in<br/>expanding my knowledge on building a React.js front-end with various backend frameworks along with DevOps.</p> */}
        </div>
        <div className='btn-row row'>
          <Link to="/portfolio/aboutme" className='home-btn col btn m-3' ><h3>About Me</h3></Link>
          <Link to="/portfolio/projects" className='home-btn col btn m-3' ><h3>Projects</h3></Link>
          <Link to="/portfolio/contactinfo" className='home-btn col btn m-3' ><h3>Contact info</h3></Link>
        </div>
      </div>
    </div>
  </div>)
}

export default HomeView