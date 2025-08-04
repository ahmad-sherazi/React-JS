import React from 'react'
import { useNavigate } from 'react-router-dom'

const MidBanner = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-gray-100 md:py-24'>
      
      {/* 🟩 CHANGED: Made width full on small screens */}
      <div className='relative w-full max-w-7xl mx-auto md:rounded-2xl pt-20 sm:pt-24 bg-cover bg-center h-[400px] sm:h-[450px] md:h-[500px]'
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/4812923/pexels-photo-4812923.jpeg')`,
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* 🟩 CHANGED: Made overlay responsive */}
        <div className='absolute inset-0 bg-black/60 md:rounded-2xl bg-opacity-50 flex items-center justify-center'>
          <div className='text-center text-white px-4 sm:px-8'>
            
            {/* 🟩 CHANGED: Responsive font sizes */}
            <h1 className='text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4'>
              Next-Gen Electronics at Your Fingertips
            </h1>

            <p className='text-sm sm:text-base md:text-xl mb-6'>
              Discover the latest tech innovations with unbeatable prices and free shipping on all orders.
            </p>

            <button
              onClick={() => navigate('/product')}
              className='bg-gradient-to-r from-gray-900 to-blue-300 text-white font-extrabold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300 hover:opacity-90 hover:scale-105 transform'
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MidBanner
