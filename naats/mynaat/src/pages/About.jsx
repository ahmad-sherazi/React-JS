import React, { useState, useEffect } from 'react';
const image1 = '/naat-pics/ii.png';     // First image
const image2 = '/naat-pics/up.png';    // Second image
import { Typewriter } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';
import { Link } from 'react-router-dom';

export default function About() {
  // 👉 State to hold the current image
  const [currentImage, setCurrentImage] = useState(image1);

  // 👉 Repeatedly toggle the image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevImage => (prevImage === image1 ? image2 : image1));
    }, 5000); // Toggle every 5 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div className="bg-black text-white flex items-center justify-center px-6 py-10">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-10">
        
        {/* Text Section */}
        <div className="flex-1 text-left mt-10 ml-14">
          <h2 className="text-4xl font-bold mb-4 text-red-600">
            I am,
            <Typewriter
              words={["  M Ahmad Sherazi", " Naat Reciter", " Vocal Artist", " Spiritual Vocalist"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h2>
          <p className="text-lg leading-relaxed">
            I am a Naat Khawan by the grace of Allah Almighty and the love of Prophet Muhammad (S-A-W).
            Whatever I recite is not from me, but a blessing from my Lord and a gift inspired by devotion 
            to the Prophet (S-A-W).
          </p>

          {/* Resume Button */}
          <div className="flex items-center z-10 mt-6">
            <Link to="/">
              <h1 className="pr-96 font-bold font-serif text-sm">
                <span className="text-3xl font-bold text-red-500">N</span>aatify
              </h1>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center transition-transform duration-300 mr-5 bg-black">
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.03}
            transitionSpeed={1500}
            gyroscope={false}
            glareEnable={false}
            className="w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-auto border-4 border-red-600 rounded-full"
          >
            <img
              src={currentImage}
              alt="M Ahmad Sherazi"
              className="w-full h-full object-cover rounded-full"
            />
          </Tilt>
        </div>
      </div>
    </div>
  );
}
