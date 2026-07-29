import React from 'react'

const Info = (props) => {
  return (
    <div className='flex flex-wrap w-3/7 h-full border-2 border-amber-400 rounded-4xl p-6 m-5'>
        <img className='w-10 m-5 ' src={props.img} alt="image is not found" />
        <div>
            <h1 className='text-2xl text-white font-bold'>{props.msg}</h1>
            <h4 className='text-xl  text-white'>{props.txt}</h4>
        </div>
    </div>
  )
}

export default Info