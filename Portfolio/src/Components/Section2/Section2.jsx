import React from 'react'
import RightContent from './RightContent'
import LeftContent from './LeftContent'
import Combine from './Combine'

export const Section2 = () => {

  const Experiance=[
    {Company :"Clairiwel Technology",
     Type : "InternShip",
     Duration : "OCT-2024 TO SEP-2025",
     Describe : " Developed a responsive dashboard application using React.js and Bootstrap.Created reusable UI components such as Navbar, Forms, Tables, and Modals.Integrated REST APIs using Axios for real-time data display. Implemented form validation and dynamic routing using React Router. Improved UI performance by implementing lazy loading and component optimization. Managed project source code using GitHub version control."
    },
    {Company :"Probus Software Private Limited",
     Type : "Onroll",
     Duration : "JAN-26 - Working",
     Describe : "Provided SQL database support for 10+ client organizations using the payroll and HR management system. Wrote complex SQL queries, joins, and subqueries to troubleshoot payroll, attendance, and employee data issues. Generated custom reports for clients including salary breakdown, PF, TDS, and attendance summaries. Identified and resolved duplicate records and data mismatches across multiple database tables. Assisted clients by analyzing backend data issues and ensuring accurate payroll processing. Worked with SQL Server Management Studio (SSMS) to maintain and monitor client databases. Collaborated with technical and support teams to optimize database queries and improve system performance." 
    }    
  ]

  return (
    <div className='h-full'>
      <h1 className='text-6xl font-bold mx-20 mt-20 justify-self-center text-amber-600'>EXPERIANCE</h1>
      {Experiance.map(function(elem){
        return <Combine Company={elem.Company} Type={elem.Type} Duration={elem.Duration} Describe={elem.Describe} />
      })} 

    </div>
  )
}
