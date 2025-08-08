import React from 'react';
import image from '../assets/hero3.png';
import { Typewriter } from 'react-simple-typewriter';
import { useTheme } from '../context/ThemeContext';
import Tilt from 'react-parallax-tilt';
import Skill from './Skill';

function About() {
  const { theme } = useTheme();
  

  return (
    <div>
    <div className="bg-gradient-to-r from-gray-700 to-black text-white min-h-screen flex items-center justify-center px-6 py-10">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-10">
        
        {/* Text Section */}
        <div className="flex-1 text-left mt-10 md:mt-32">
          <h2 className={`text-4xl font-bold mb-4 text-${theme.name}-${theme.shade}`}>
            Hi I am,
            <Typewriter
              words={[" M Ahmad Sherazi",  " Full Stack Developer", " React Enthusiast", " Coder"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h2>
          <p className="text-lg leading-relaxed">
            I'm a passionate developer with experience in React, Tailwind CSS, and modern web technologies.
            I love building responsive and user-friendly web applications.
          </p>
           {/* Resume Button */}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform 
              hover:scale-105 bg-gradient-to-r from-${theme.name}-300 to-black`}
            style={{
              
             // boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center transition-transform duration-300 mt-6">
            <Tilt
  tiltMaxAngleX={20}
  tiltMaxAngleY={20}
  perspective={1000}
  scale={1.03}
  transitionSpeed={1500}
  gyroscope={false}
  glareEnable={false}
  className={`w-52 h-64 sm:w-60 sm:h-72 md:w-72 md:h-96
              border-x-2 border-${theme.name}-300 rounded-full`}
>
  <img
    src={image}
    alt="M Ahmad Sherazi"
    className={`w-52 h-64 sm:w-60 sm:h-72 md:w-72 md:h-96 object-cover bg-gradient-to-t from-${theme.name}-300 to-black rounded-full cursor-move py-2 `}
  />
</Tilt>


        </div>
      </div>
      
    </div>
    {/* <Skill/> */}
    </div>

  );
}

export default About;
