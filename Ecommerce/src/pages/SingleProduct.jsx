import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useCart } from '../Context/CartContext';
import { useParams, useNavigate } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, cartItem } = useCart()

  const [SingleProduct, setSingleProduct] = useState(null);

  const getSingleProduct = () => {
    axios
      .get(`https://fakestoreapi.in/api/products/${id}`)
      .then((resp) => {
        const product = resp.data.product;
        setSingleProduct(product);
        console.log("new", product);
      })
      .catch((error) => {
        console.error("Error fetching single product:", error.message);
      });
  };

  useEffect(() => {
    getSingleProduct();
  }, [id]);

  if (!SingleProduct) {
    return (
      <div className='flex items-center justify-center h-screen'>
        no item found
      </div>
    );
  }

  const OriginalPrice = Math.round(
    SingleProduct.price + (SingleProduct.price * SingleProduct.discount) / 100
  );

  return (
    <div className='px-4 pb-10 md:px-0'> {/* 🟩 Increased padding */}
      <div className='max-w-6xl mx-auto my-10'>
        <h1 className='text-xl text-gray-600 font-semibold tracking-wide'>
          <span className='cursor-pointer hover:text-black hover:text-2xl' onClick={() => navigate('/')}>
            Home
          </span>{' '}
          /{' '}
          <span className='cursor-pointer hover:text-black hover:text-2xl' onClick={() => navigate('/product')}>
            Products
          </span>{' '}
          / <span>{SingleProduct.title}</span>
        </h1>
      </div>

      {/* 🟩 Two-column layout with spacing */}
      <div className='max-w-6xl mx-auto md:p-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start'>
        <div className='w-full'>
          {/* 🟩 Improved image control */}
          <img
            src={SingleProduct.image}
            alt={SingleProduct.title}
            className='rounded-2xl w-full object-contain h-[600px] bg-white p-4'
          />
        </div>

        {/* 🟩 Product text content section */}
        <div className='flex flex-col gap-6 text-left'>
          <h1 className='md:text-3xl text-xl font-bold text-gray-800'>
            {SingleProduct.title}
          </h1>

          <div className='text-gray-700 font-medium tracking-wide'>
            {SingleProduct.brand?.toUpperCase()} / {SingleProduct.category?.toUpperCase()} / {SingleProduct.model}
          </div>

          {/* 🟩 Price line with discount badge */}
          <p className='text-2xl text-red-600 font-bold space-x-2'>
            ${SingleProduct.price}{' '}
            <span className='line-through text-gray-700'>${OriginalPrice}</span>{' '}
            <span className='bg-gradient-to-r from-gray-900 to-blue-300 text-white px-4 py-2 rounded-full'>
              {SingleProduct.discount}% discount
            </span>
          </p>

          {/* 🟩 Description paragraph - justified */}
          <p className='text-gray-600 text-justify leading-relaxed'>
            {SingleProduct.description}
          </p>

          {/* 🟩 Quantity input with spacing */}
          <div className='flex items-center gap-4 mt-4'>
            <label htmlFor='' className='text-lg font-medium text-black'>
              Quantity:
            </label>
            <input
              type='number'
              min={1}
              defaultValue={1}
              className='w-20 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-300'
            />
          </div>

          {/* 🟩 Add to Cart button with gradient */}
          <div className='flex gap-4 mt-4'>
            <button onClick={() => addToCart(SingleProduct)} className='px-6 flex gap-2 py-2 font-bold text-xl bg-gradient-to-r from-gray-900 to-blue-300 text-white rounded-md shadow-md hover:scale-110 transition-all'>
              <IoCartOutline className='w-6 h-6' /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
