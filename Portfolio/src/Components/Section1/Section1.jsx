import React from 'react'
import Card from './Card'

const Section1 = () => {

const education = [
  {
    id: "Secondary School",
    degree: "10th",
    school: "Sadhna Vidhyalay",
    location: "Pune, Maharashtra",
    year: "2018-19",
    description:
      "I completed my 10th with good academic performance. This stage helped me build discipline, confidence, and a strong interest in computers, motivating me to choose computer engineering."
  },
  {
    id: "Diploma",
    degree: "Computer Engineering",
    school: "Pune District Education Association",
    location: "Pune, Maharashtra",
    year: "2021-22",
    description:
      "I learned programming, web development, databases, and networking during my diploma. Practical projects improved my technical knowledge and prepared me for a bachelor's degree in computer science."
  },
  {
    id: "B.Tech",
    degree: "Computer Science & Engineering",
    school: "Dr. D. Y. Patil Agricultural and Technical University",
    location: "Kolhapur, Maharashtra",
    year: "2024-25",
    description:
      "I studied software development, data structures, databases, and full-stack technologies. Projects and internships improved my coding, problem-solving, and teamwork skills, preparing me for a software development career."
  }
];


  return (

  <div>
     <h1 className='text-6xl justify-self-center font-bold mx-20 mt-20 text-amber-600'>EDUCATION</h1>
    <div className='flex flex-wrap justify-between items-center mx-5'>
      
        {education.map(function(elem){
            return <Card degree={elem.degree} id={elem.id} school={elem.school} location={elem.location} year={elem.year} des={elem.description}/>
            }  
        )}
    </div>
  </div>  
  )
}

export default Section1