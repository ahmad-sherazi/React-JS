import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../Context/CartContext'

const ProductListView = ({ product }) => {
  const navigate = useNavigate()
  const { addToCart } = useCart()

  return (
    <div className='space-y-4 mt-2 rounded-md'>
      <div className='bg-gray-200 flex flex-row gap-3 sm:gap-7 items-start sm:items-center p-2 sm:p-4 rounded-md'>
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          className='w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 object-contain rounded-md cursor-pointer'
          onClick={() => navigate(`/products/${product.id}`)}
        />

        {/* Product Details */}
        <div className='space-y-2 sm:space-y-3 w-full'>
          <h1 className='font-bold text-sm sm:text-lg md:text-xl line-clamp-2 hover:scale-105'>
            {product.title}
          </h1>

          <p className='font-semibold flex items-center text-sm sm:text-base md:text-lg'>
            $<span className='text-xl sm:text-2xl md:text-4xl'>{product.price}</span>
            <span className='ml-2 text-xs sm:text-sm text-gray-900'>({product.discount}% off)</span>
          </p>

          <p className='text-xs sm:text-sm md:text-base text-gray-700'>
            FREE delivery <span className='font-semibold'>Fri, 18 Apr</span> <br />
            Or fastest delivery <span className='font-semibold'>Tomorrow, 17 Apr</span>
          </p>

          <button
            onClick={() => addToCart(product)}
            className='bg-gradient-to-r from-gray-900 to-blue-300 text-white px-3 py-1 sm:px-4 sm:py-2 font-semibold text-xs sm:text-sm md:text-lg rounded-md hover:scale-110 transition duration-200'
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductListView
