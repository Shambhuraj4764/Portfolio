import { useEffect, useState } from "react";

const TextChanger = () => {
  const texts = [
    "Frontend Developer",
    "React.js Developer",
    "Full Stack Developer",
    "Database Developer",
    "MERN developer"
  ];

  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setAnimate(true);
      }, 300);

    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    
    <div className="overflow-hidden h-full justify-items-center text-4xl font-bold">
      <h1 className='text-white text-xl font-bold ite'>Welcome to my Digital Portfolio</h1>
      <h1 className='text-white text-xl font-bold ite'>Hi, I'm</h1>
      <h1 className='text-white text-6xl py-5 font-bold ite'>Shambhuraj Patil</h1>
      <h1 className= {`text-4xl font-bold text-white py-2 transition-all duration-500 ${
          animate
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >{texts[index]}</h1>
      <h1 className='text-white text-xl py-3'>A Full Stack Developer passionate about creating responsive, high-performance web applications. .</h1>
    
    </div>
  );
};

export default TextChanger;