import React from 'react'
import { useData } from '../Context/DataContext';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import Category from './Category';

const Carousel = () => {
  const { data } = useData();
  const navigate = useNavigate();

  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    accessibility: true,
    focusOnSelect: false,
  };

  return (
    <div>
      <Slider {...settings}>
        {
          data?.slice(0, 7)?.map((item, index) => {
            return (
              <div key={index} className='bg-gradient-to-r from-gray-800 via-gray-500 to-black -z-10'>
                
                <div className='flex flex-col sm:flex-col md:flex-row gap-10 justify-center h-auto md:h-[600px] my-10 md:my-0 items-center px-4'>

                  {/* 🟩 Text first on small screens */}
                  <div className='order-2 md:order-1 space-y-3 md:space-y-6 text-center md:text-left'>
                    <h3 className='text-blue-200 font-semibold font-sans text-sm'>
                      Powering Your World with the Best in Electronics
                    </h3>

                    <h1 className='text-base sm:text-xl md:text-4xl font-bold uppercase line-clamp-2 md:line-clamp-3 md:w-[500px] text-white'>
                      {item.title}
                    </h1>

                    <p className='text-sm sm:text-base md:w-[500px] line-clamp-3 text-white pr-2 sm:pr-5 md:pr-7'>
                      {item.description}
                    </p>

                    <button
                      onClick={() => navigate('/product')}
                      className='bg-gradient-to-r from-gray-900 to-blue-300 text-white font-extrabold px-3 py-2 rounded-md cursor-pointer lg:ml-32 mt-6  hover:opacity-90 hover:scale-110 transform'
                    >
                      Shop Now
                    </button>
                  </div>

                  {/* 🟩 Image below text on small screens */}
                  <div className='order-1 md:order-2'>
                    <img
                      src={item.image}
                      alt={item.title}
                      onClick={() => navigate(`/products/${item.id}`)}
                      className='rounded-full w-52 sm:w-72 md:w-[500px] hover:scale-110 transition-all shadow-2xl shadow-blue-500'
                    />
                  </div>

                </div>
              </div>
            );
          })
        }
      </Slider>

      <Category />
    </div>
  );
}

export default Carousel;
