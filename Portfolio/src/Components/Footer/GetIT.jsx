import React from 'react'
import Info from './Info'
import gps from "../../assets/gps.png";
import contact from "../../assets/contact.png";
import email from "../../assets/email.png";
import calendar from "../../assets/calendar.png";

const GetIT = () => {
    const infoData = [
        {
            img : gps,
            msg : 'Location',
            txt : 'Kolhapur'
        },
        {
            img : contact,
            msg : 'Contact',
            txt : '+91 9922083171'
        },
        {
            img : email,
            msg : 'Email',
            txt : 'shambhurajpatil2829@gmail.com'
        },
        {
            img :  calendar,
            msg : 'DOB',
            txt : '22/03/2004'
        }        
    ]


  return (
    <div className='w-3/4 flex flex-wrap justify-center justify-self-center'>
        {infoData.map((el, index) => {
            return (
                <Info key={index} img={el.img} msg={el.msg} txt={el.txt}/>
            );
        })}
    </div>
  )
}

export default GetIT