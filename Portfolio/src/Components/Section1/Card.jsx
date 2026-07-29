import React from 'react'

const Card = (props) => {
  return (
   <div className='h-screen w-1/4 m-10 px-15 pt-15 rounded-4xl text-white border-4 border-amber-500'>
        <h2 className='text-3xl font-bold'>{props.id}</h2>
        <h2 className='text-3xl font-bold'>{props.degree}</h2>
        <h3 className='text-1xl font-bold'>{props.school}</h3>
        <h3 className='text-1xl'>{props.location}</h3>
        <h3 className='text-1xl'>{props.year}</h3>
        <h4 className='pt-20'>{props.des}</h4>
    </div>
  )
}

export default Card