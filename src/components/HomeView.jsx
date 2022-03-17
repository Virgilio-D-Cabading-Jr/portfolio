import React from 'react'
import { Link } from 'react-router-dom'

////////////////////////////////////////////////////
//  HOME VIEW
////////////////////////////////////////////////////

const HomeView = () => {
  return (<div className='bg-manila-harbor'>
    <header>
      {/* **** Navigation Bar ******** */}
      <div className='navbar navbar-dark box-shadow'>
        <div className='container d-flex justify-content-between'>
          {/* **** Site Title ******** */}
          <div />
          {/* **** Link to Views ******** */}
          <div className='row nav-btns align-items-center'>
            <a href='#aboutme' className='col btn nav-btn-bg-clear' >
              <strong>About Me</strong>
            </a>
            <a href='#projects' className='col btn nav-btn-bg-clear' >
              <strong>Projects</strong>
            </a>
            <a href='#contactinfo' className='col btn nav-btn-bg-clear' >
              <strong>Contact Info</strong>
            </a>
          </div>
        </div>
      </div>
    </header>
    <div className='container'>
      <div className='text-white text-center' >
        {/* <img className='main-pic' src='https://i.ibb.co/51DFzGb/val-self-2022-02.jpg' alt='virgilio profile picture' /> */}
        {/* <div className=''> */}
        <br /><br />
        <h1 className='text-yellow mt-3'><strong>Virgilio D. Cabading Jr.</strong></h1>
        <h2>Software Developer</h2>
        <br />
        {/* <p>Hello, I am a highly motivated Software Developertransitioning from the healthcare industry<br/>with a B.S. in Informatics.My interests are many, but I am currently interested in<br/>expanding my knowledge on Javascript (React), Java (Spring) and Python (Flask).</p> */}
        <a href='#aboutme' className='col btn nav-btn-bg-clear mt-2' >
          <h3>About Me</h3>
        </a>
        {/* </div> */}
        {/* <div className='btn-row row'> */}
        {/* <Link to="/projects" className='home-btn col btn m-3' ><h3><strong>Projects 🍎</strong></h3></Link>
          <Link to="/contactinfo" className='home-btn col btn m-3' ><h3><strong>Contact info 📞</strong></h3></Link>
        </div> */}
      </div>
    </div>
  </div>)
}

export default HomeView