import React from 'react';

////////////////////////////////////////////////////
//  PROJECTS VIEW
////////////////////////////////////////////////////

const ProjectsView = () => {
  return (<div>
    <div className='container mt-2'>
      <h1>Projects</h1>
      <div className='row my-3 p-3'>
        <div className='col-md p-r border round m-2'>
          <img className='project-screenshot' src="https://i.ibb.co/J2tKVLx/project-scrutineer-screenshot-1.jpg" alt="scrutineer screenshot" />
          <h2>Scrutineer</h2>
          <hr />
          <p>Web Application for Digital Memorization and Studying of Objects</p>
          <div className='row'>
            <a className='col btn text-light'
              href="http://18.188.120.249/"
              target="_blank"
              rel="noopener noreferrer" >
              <h4>Live App</h4>
            </a>
            <a  className='col btn text-light'
                href="https://github.com/Virgilio-D-Cabading-Jr/Scrutineer"
                target="_blank"
                rel="noopener noreferrer" >
              <h4>GitHub</h4>
            </a>
          </div>
        </div>
        <div className='col-md p-3 border round m-2'>
        <img className='project-screenshot' src="https://i.ibb.co/d4rfFJS/project-abakery-screenshot-1.jpg" alt="aBakery screenshot" />
          <h2>aBakery</h2>
          <hr />
          <p>Web Application for a Fondant Cake Shop that allows for quick searching of cake designs</p>
          <div className='row'>
            <a className='col btn text-light'
                href="http://52.15.49.125/"
                target="_blank"
                rel="noopener noreferrer">
              <h4>Live App</h4>
            </a>
            <a className='col btn text-light'
                href="https://github.com/Virgilio-D-Cabading-Jr/Python_aBakery"
                target="_blank"
                rel="noopener noreferrer">
              <h4>GitHub</h4>
            </a>
          </div>
        </div>
      </div>
    
    </div>
  </div>)
}

export default ProjectsView