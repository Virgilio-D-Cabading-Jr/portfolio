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
        <div className='col-3 d-flex justify-content-end'>
          <img className='img-thumb' src="https://i.ibb.co/3M8NM8j/email-thumb.png" alt="email" />
        </div>
        <div className='col-9'>
          <h3>virgilio.d.cabading.jr@gmail.com</h3>
        </div>
      </div>
      {/* Resume */}
      <div className='row m-3'>
        <div className='col-3 d-flex justify-content-end'>
          <img className='img-thumb' src="https://i.ibb.co/q7rkpRS/resume-thumb.png" alt="resume" />
        </div>
        <div className='col-9'>
          <a href="https://drive.google.com/file/d/1eQ47OPjhQiiqSZ0uY7EXeNV61AGn1TFo/view">
            <h3>Resume</h3>
          </a>
        </div>
      </div>
      {/* LinkedIn */}
      <div className='row m-3'>
        <div className='col-3 d-flex justify-content-end'>
          <img className='img-thumb' src="https://i.ibb.co/GdgpdcM/linkedin-thumb.png" alt="linkedIn" />
        </div>
        <div className='col-9'>
          <a href="https://www.linkedin.com/in/virgilio-cabading/">
            <h3>LinkedIn profile</h3>
          </a>
        </div>
      </div>
      {/* GitHub */}
      <div className='row m-3'>
        <div className='col-3 d-flex justify-content-end'>
          <img className='img-thumb' src="https://i.ibb.co/YyrzZzL/github-thumb.png" alt="github" />
        </div>
        <div className='col-9'>
          <a href="https://github.com/Virgilio-D-Cabading-Jr">
            <h3>GitHub Repository</h3>
          </a>
        </div>
      </div>
    </div>
  </div>)
}

export default ContactInfoView