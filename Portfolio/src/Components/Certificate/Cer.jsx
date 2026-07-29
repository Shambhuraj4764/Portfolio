import React from 'react'

const Cer = (props) => {
  return (
    <div className='w-9/10'>
        <div className='flex text-amber-50 text-3xl border-2 border-amber-400 my-8 p-6 '>
            <div className='flex flex-wrap p-5 '>
                <h1 className='text-4xl font-bold p-2'>{props.Name}</h1>
                <h1 className='text-2xl'>{props.txt}</h1>
            </div>
            <h1 className='text-lg items-center'>{props.msg}</h1>
        </div>
    </div>
  )
}

export default Cer