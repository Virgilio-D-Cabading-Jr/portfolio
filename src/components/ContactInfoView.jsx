import React from 'react'

////////////////////////////////////////////////////
//  CONTACT INFO VIEW
////////////////////////////////////////////////////

const ContactInfoView = () => {
  return (<div>
    <div className='container mt-2'>
      <h1>Contact Information</h1>
      {/* Email */}
      <div className='row m-3'>
        <img className='col-1' src="https://i.ibb.co/3M8NM8j/email-thumb.png" alt="email" />
        <div className='col-9'>
          <h3>virgilio.d.cabading.jr@gmail.com</h3>
        </div>
      </div>
      {/* Resume */}
      <div className='row m-3'>
        <img className='col-1' src="https://i.ibb.co/q7rkpRS/resume-thumb.png" alt="resume" />
        <div className='col-9'>
          <a href="https://drive.google.com/file/d/1zNYGycxB7ivAclbv6XxiJojFpPPK-h0B/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer">
            <h3 className='text-light'>Resume</h3>
          </a>
        </div>
      </div>
      {/* LinkedIn */}
      <div className='row m-3'>
        <img className='col-1' src="https://i.ibb.co/GdgpdcM/linkedin-thumb.png" alt="linkedIn" />
        <div className='col-9'>
          <a href="https://www.linkedin.com/in/virgilio-cabading/" 
              target="_blank"
              rel="noopener noreferrer">
            <h3 className='text-light'>LinkedIn profile</h3>
          </a>
        </div>
      </div>
      {/* GitHub */}
      <div className='row m-3'>
        <img className='col-1' src="https://i.ibb.co/YyrzZzL/github-thumb.png" alt="github" />
        <div className='col-9'>
          <a href="https://github.com/Virgilio-D-Cabading-Jr"
              target="_blank"
              rel="noopener noreferrer">
            <h3 className='text-light'>GitHub Repository</h3>
          </a>
        </div>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  </div>)
}

export default ContactInfoView