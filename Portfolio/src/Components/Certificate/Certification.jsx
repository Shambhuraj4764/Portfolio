import React from 'react'
import Cer from './Cer';

const Certification = () => {
    const cerData = [
        {
            Name: "MERN Stack Development",
            txt: "ItPreneur",
            msg: "Completed comprehensive training in the MERN stack, building full-stack web applications using MongoDB, Express.js, React.js, and Node.js with REST APIs and responsive UI design."
        },
        {
            Name: "Java for Beginner",
            txt: "Infosys Springboard",
            msg: "Learned Java programming fundamentals including object-oriented programming, exception handling, collections, and problem-solving through practical coding exercises."
        },
        {
            Name: "Frontend Development",
            txt: "InTrainz",
            msg: "Gained hands-on experience in HTML, CSS, JavaScript, Bootstrap, and React.js to develop responsive, interactive, and user-friendly web interfaces."
        },    
        {
            Name: "Full Stack Development",
            txt: "SWAYAM",
            msg: "Acquired knowledge of frontend and backend development, database management, web technologies, and software development practices for building complete web applications."
        },
    ];

  return (
    <div>
    <h1 className='text-6xl font-bold mx-20 mt-20 my-5 justify-self-center uppercase text-amber-600'>Cerfification</h1>    
    <div className='w-3/4 flex flex-wrap justify-center justify-self-center'>
        {cerData.map((cert, index) => {
            return (
                <Cer key={index} Name={cert.Name} msg={cert.msg} txt={cert.txt}/>
            );
        })}
    </div>
    </div>
  
  )
}

export default Certification
