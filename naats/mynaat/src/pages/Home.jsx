import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
  return (
    <div className="p-4 text-center bg-black text-white mt-10">
      <h1 className="text-3xl font-bold">Welcome to My 
        <span className='text-red-500 text-5xl'>
        <Typewriter
                      words={[" Naat "]}
                      loop={0}
                      cursor
                      color="red"
                      cursorStyle="🎙️ "
                      typeSpeed={80}
                      deleteSpeed={50}
                      delaySpeed={2000}
                    />
                    </span>
         Collection</h1>
      <p className="mt-2 mb-24">Listen and watch beautiful Naats</p>

      {/* Flex container in column direction */}
      <div className="flex flex-col items-center gap-4">
        <Link to="/about" className="bg-red-600 text-white hover:bg-gray-300 hover:text-black hover:scale-105 font-semibold py-2 px-6 rounded transition duration-300">
          About
        </Link>
        <Link to="/audios" className="bg-red-600 text-white hover:bg-gray-300 hover:text-black hover:scale-105 font-semibold py-2 px-6 rounded transition duration-300">
          Audios
        </Link>
        <Link to="/videos" className="bg-red-600 text-white hover:bg-gray-300 hover:text-black hover:scale-105 font-semibold py-2 px-6 rounded transition duration-300">
          Videos
        </Link>
      </div>
    </div>
  );
}
