import React from 'react'

////////////////////////////////////////////////////
//  PROJECTS VIEW
////////////////////////////////////////////////////

const ProjectsView = () => {
  return (<div>
    <div className='container mt-2'>
      <h1>Projects</h1>
      <div className='row my-3 bg-lblue text-linen rounded p-3'>
        <div className='col-md-5'>
          <h2>Scrutineer</h2>
          <img className='project-screenshot' src="https://i.ibb.co/J2tKVLx/project-scrutineer-screenshot-1.jpg" alt="scrutineer screenshot" />
        </div>
        <div className='col-md-7'>
          <h4>Web Application for Digital Memorization and Studying of Objects</h4>
          <hr />
          <ul>
            <li>Developed a React front-end using bootstrap to create a Reponsive Web Design</li>
            <li>Developed an Express, Mongoose API back-end with MongoDB [NoSQL] database</li>
            <li>Deployed to AWS EC2 instance using SSH with Nginx server</li>
            <li>Served as SCRUM leader in Agile Development process</li>
            <li>Planned and implemented a stack based memory tool with dynamic game play</li>
          </ul>
        </div>

      </div>
      <div className='row mt-3 p-3'>
        <div className='col-md-5'>
          <h2>aBakery</h2>
          <img className='project-screenshot' src="https://i.ibb.co/d4rfFJS/project-abakery-screenshot-1.jpg" alt="aBakery screenshot" />
        </div>
        <div className='col-md-7'>
          <h4>Web Application for a Fondant Cake Shop that allows for quick searching of cake designs</h4>
          <hr />
          <ul>
            <li>Designed and implemented a Python based web server with Flask Framework and jinja notation with RESTful routing architecture</li>
            <li>Developed back end with MySQL database with Full CRUD functionality and MVC design</li>
            <li>Created a search bar with the ability to retrieve cakes from the database using search parameters</li>
            <li>Deployed to AWS EC2 instance using SSH with Gunicorn process manager and Nginx server</li>
          </ul>
        </div>

      </div>
    </div>
  </div>)
}

export default ProjectsView