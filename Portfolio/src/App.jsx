import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Section1 from './Components/Section1/Section1'
import Card from './Components/Section1/Card';
import { Section2 } from './Components/Section2/Section2';
import Footer from './Components/Footer/Footer';
import Intro from './Components/Intro/Intro';
import Certification from './Components/Certificate/Certification';

const App = () => {

  return (
    <div className='h-full'>

      <Navbar />
      <Intro />
      <Section1 />
      <Section2 />
      <Certification />
      <Footer />
    </div>
  )
}

export default App