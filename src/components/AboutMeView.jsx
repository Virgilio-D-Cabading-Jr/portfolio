import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import TopicButtonComp from './TopicButtonComp';

////////////////////////////////////////////////////
//  ABOUT ME VIEW
////////////////////////////////////////////////////

const AboutMeView = () => {
  // **** Fields ********

  const [topics, settopics] = useState([
    {
      name: "I am a Developer",
      picHeader: "https://i.ibb.co/DgMcqKB/aboutme-developer.gif",
      content: "I am able to plan, implent, and deploy full stack web applications using the Javascript (MERN framework), Java (Spring Boot framework), and Python (Flask Framework).  I excel in Using the Agile / SCRUM Development Process from planning, to implementing and deploying."
    },
    {
      name: "I am a Quick Learner",
      picHeader: "https://i.ibb.co/6BD61Gf/about-me-coding-dojo-1.jpg",
      content: "I recently graduated from the Coding Dojo full-stack developer program.  During those four months of intense study, I was able to achieve to learn and gain black belts in Java and Javascript, which are the highest achievement possible to receive for those stacks."
    },
    {
      name: "I am a Team Player",
      picHeader: "https://i.ibb.co/9WFvsG6/healthcare-team-experience.jpg",
      content: "My experience in working in the healthcare field thought me the importance of communicating between all staff members.  In the healthcare field, minor lapses in communication may lead to life or death consequences.  My appreciation for clear communication lead to the position of SCRUM leader during project implementation in Coding Dojo."
    },
    {
      name: "I am Educated",
      picHeader: "https://i.ibb.co/MsgpzH2/about-me-educated-1450.jpg",
      content: "I graduated near the top of my class with a Bachelor's of Science in Informatics from Baylor University College of Engineering and Computer Science.  Four years of hard work led to two years on-hand experience with programming in C, C++, and Java along with an appreciation for and ability to implement various algorithms and data structures."
    }
  ]);
  const [currentTopic, setCurrentTopic] = useState(topics[0]);

  console.log("In About me, Topic", topics);

  return (<div>
    <div className='container my-2'>
      <h1>About Me</h1>
      {/* <p>Current Topic: {JSON.stringify(currentTopic.name)}</p>
      <p>Topics: {JSON.stringify(topics)}</p> */}
      <div className='row'>
        {
          topics.map((topic, idx) => {
            let colClass;
            if (idx % 2 === 1) {
              colClass = "col-md bg-lblue text-linen  m-1 rounded";
            } else {
              colClass = "col-md m-1 rounded"
            }
            return <div className={colClass}>
              <img className='topic-pic-header rounded' src={topic.picHeader} alt={currentTopic.name} />
              <h3 className='mt-2 text-center'>{topic.name}</h3>
              <p>{topic.content}</p>
            </div>
          })
        }
      </div>
    </div>
  </div>)
}

export default AboutMeView