import React from 'react'

////////////////////////////////////////////////////
//  ABOUT ME VIEW
////////////////////////////////////////////////////

const AboutMeView = () => {
  // **** Fields ********

  const topics = [
    {
      name: "I am a Quick Learner",
      picHeader: "https://i.ibb.co/ypvmXRr/val-self-comp-office-450-v2-2022-03.jpg",
      content: "I recently graduated from the Coding Dojo full-stack developer program.  During those four months of intense study, I was able to learn and gain black belts in Java and Javascript, which are the highest achievements possible for those stacks."
    },
    {
      name: "I am a Team Player",
      picHeader: "https://lh3.googleusercontent.com/pw/AM-JKLXvM3nbBlxWK1dq0v_xX8mGjwHFsioAbU8S7idf0Lz-3CjaTG2s37ZrTO67_2_jXc2w-RNzD6YOfqdxuCxTmZ0QYwj6N3GqaBPL03Le3ZUI3feSC_dHe7ZMx4R59nZnVcOYh7ILmf8Qm62JLqrPsSit=s538-no?authuser=0",
      content: "My experience in working in the healthcare field thought me the importance of communicating between all staff members.  In the healthcare field, minor lapses in communication may lead to life or death consequences.  My appreciation for clear communication lead to the position of SCRUM leader during project implementation in Coding Dojo."
    },
    {
      name: "I am a Developer",
      picHeader: "https://lh3.googleusercontent.com/pw/AM-JKLVTR898I-h0F9q-gdgdpIPA2vdlcCaAPAF3oBc-iwXYJcDfXsdYDgnaBuabfNhop5mlApOI4rukPPuvz4b_S7QMUJ0UA6nznxBgP8DaROCs8H1vRvYTIIwBYM4t5adf6qTbgCfIXOJ3Qo-E7fE7YecV=s625-no?authuser=0",
      content: "I am able to plan, implent, and deploy full stack web applications using the Javascript (MERN framework), Java (Spring Boot framework), and Python (Flask Framework).  I excel in Using the Agile / SCRUM Development Process from planning, to implementing and deploying."
    },
  ];

  console.log("In About me, Topic", topics);

  return (<div>
    <div className='container my-2'>
      <h1>About Me</h1>
        {
          topics.map((topic, idx) => {
            let rowClass;
            if (idx % 2 === 1) {
              return <div className='row'>
                <img className='topic-pic col-md-3' src={topic.picHeader} alt={topics[0].name} />
                <div className='col-md-8'>
                  <h3 className='mt-2 text-center'>{topic.name}</h3>
                  <hr/>
                  <p>{topic.content}</p>
                </div>
            </div>
            } else {
              return <div className='row'>
                <div className='col-md-8'>
                  <h3 className='mt-2 text-center'>{topic.name}</h3>
                  <hr />
                  <p>{topic.content}</p>
                </div>
                <img className='topic-pic col-md-3' src={topic.picHeader} alt={topics[0].name} />
            </div>
            }
              
            
          })
        }
    </div>
  </div>)
}

export default AboutMeView