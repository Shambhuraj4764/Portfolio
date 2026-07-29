import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Combine = (props) => {

  
  return (
    
    <div className='h-full w-7/9 gap-40 text-amber-50 border-2 p-25 m-15 border-amber-400 flex justify-self-center'>
        <LeftContent Company={props.Company} Type={props.Type} Duration={props.Duration}/>
        <RightContent Describe={props.Describe} />
    </div>
  )
}

export default Combine