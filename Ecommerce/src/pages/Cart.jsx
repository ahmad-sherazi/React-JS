import React from 'react'
import { useCart } from '../Context/CartContext';
import { FaRegTrashAlt } from 'react-icons/fa';
import { LuNotebookText } from 'react-icons/lu';
import { MdDeliveryDining } from 'react-icons/md';
import { GiShoppingBag } from 'react-icons/gi';
import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import emptyCart from "../assets/nocart.png"

const Cart = ({ location, getLocation }) => {
  const { cartItem, updateQuantity, deleteItem } = useCart()
  const { user } = useUser()
  const navigate = useNavigate()




  const totalPrice = cartItem.reduce((total, item) => total + item.price * item.quantity, 0)
  return (
    <div className='mt-10 max-w-6xl mx-auto mb-5 px-4 md:px-0'>
      {
        cartItem.length > 0 ? <div>
          <h1 className='font-bold text-2xl '>My Cart ({cartItem.length})</h1>
          <div>
            <div className='mt-10'>
              {cartItem.map((item, index) => {
                return <div key={index} className='bg-gray-200 p-5 rounded-md flex items-center justify-between mt-6 w-full'>
                  <div className='flex items-center gap-4'>
                    <img src={item.image} alt={item.title} className='w-32 h-32 rounded-full' />
                    <div>
                      <h1 className='md:w-[300px] line-clamp-2 '>{item.title}</h1>
                      <p className='text-red-500 font-semibold text-lg'>${item.price}</p>
                    </div>
                  </div>
                  <div className='bg-gradient-to-r from-gray-900 to-blue-300 text-white flex gap-4 p-2 rounded-md font-bold text-2xl '>
                    <button onClick={() => updateQuantity(cartItem, item.id, "decrease")} className='cursor-pointer'>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(cartItem, item.id, "increase")} className='cursor-pointer'>+</button>
                  </div>
                  <span className='hover:bg-white/60 transition-all rounded-full p-3 hover:shadow-2xl'>
                    <FaRegTrashAlt onClick={() => deleteItem(item.id)} className=' text-2xl cursor-pointer hover:text-red-600 ' />
                  </span>
                </div>
              })}
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-20'>
              <div className='bg-gray-200 rounded-md p-7 mt-4 space-y-2'>
                <h1 className='text-gray-800 font-bold text-xl'>Delivery Info</h1>
                <div className='flex flex-col space-y-1'>
                  <label htmlFor="">Full Name</label>
                  <input type="text" placeholder='Enter your name' className='p-2 rounded-md' value={user?.fullName} />
                </div>
                <div className='flex flex-col space-y-1'>
                  <label htmlFor="">Address</label>
                  <input type="text" placeholder='Enter your address' className='p-2 rounded-md' value={location?.town} />
                </div>
                <div className='flex w-full gap-5'>
                  <div className='flex flex-col space-y-1 w-full'>
                    <label htmlFor="">State</label>
                    <input type="text" placeholder='Enter your state' className='p-2 rounded-md w-full' value={location?.state} />
                  </div>
                  <div className='flex flex-col space-y-1 w-full'>
                    <label htmlFor="">PostCode</label>
                    <input type="text" placeholder='Enter your postcode' className='p-2 rounded-md w-full' value={location?.postcode} />
                  </div>
                </div>
                <div className='flex w-full gap-5'>
                  <div className='flex flex-col space-y-1 w-full'>
                    <label htmlFor="">Country</label>
                    <input type="text" placeholder='Enter your country' className='p-2 rounded-md w-full' value={location?.country} />
                  </div>
                  <div className='flex flex-col space-y-1 w-full'>
                    <label htmlFor="">Phone No</label>
                    <input type="text" placeholder='Enter your Number' className='p-2 rounded-md w-full' />
                  </div>
                </div>
                <button className='bg-gradient-to-r from-gray-900 to-blue-300 text-white px-3 py-1 rounded-md cursor-pointer mt-4 font-semibold text-xl hover:scale-105 transition-all'>Submit</button>
                <div className='flex items-center justify-center w-full text-gray-700'>
                  ---------OR-----------
                </div>
                <div className='flex justify-center'>
                  <button onClick={getLocation} className='bg-gradient-to-r from-gray-900 to-blue-300 text-white px-3 py-2 rounded-md cursor-pointer mt-3 font-semibold text-xl hover:scale-110 transition-all'>Detect Location</button>
                </div>
              </div>
              <div className='bg-white border border-gray-300 shadow-2xl rounded-md p-7 mt-4 space-y-2 h-max'>
                <h1 className='text-gray-800 font-bold text-xl'>Bill details</h1>
                <div className='flex justify-between items-center'>
                  <h1 className='flex gap-1 items-center text-gray-700'><span><LuNotebookText /></span>Items total</h1>
                  <p>${totalPrice}</p>
                </div>
                <div className='flex justify-between items-center'>
                  <h1 className='flex gap-1 items-center text-gray-700'><span><MdDeliveryDining /></span>Delivery Charge</h1>
                  <p className='text-red-500 font-semibold'><span className='text-gray-600 line-through'>$25</span> FREE</p>
                </div>
                <div className='flex justify-between items-center'>
                  <h1 className='flex gap-1 items-center text-gray-700'><span><GiShoppingBag /></span>Handling Charge</h1>
                  <p className='text-red-500 font-semibold'>$5</p>
                </div>
                <hr className='text-gray-200 mt-2' />
                <div className='flex justify-between items-center'>
                  <h1 className='font-semibold text-lg'>Grand total</h1>
                  <p className='font-semibold text-lg'>${totalPrice + 5}</p>
                </div>
                <div>
                  <h1 className='font-semibold text-gray-700 mb-3 mt-7'>Apply Promo Code</h1>
                  <div className='flex gap-3'>
                    <input type="text" placeholder='Enter code' className='p-2 rounded-md w-full' />
                    <button className='bg-white text-black border border-gray-200 px-4 cursor-pointer py-1 rounded-md'>Apply</button>
                  </div>
                </div>
                <button className='bg-gradient-to-r from-gray-900 to-blue-300 text-white px-3 py-2 rounded-md w-full cursor-pointer mt-3 font-semibold text-xl hover:scale-110 transition-all'>Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </div> : <div className='flex flex-col gap-3 justify-center items-center h-[500px]'>
          <h1 className='text-gray-500 font-bold text-5xl text-muted'>Oh no! Your cart is empty</h1>
           <img src={emptyCart} alt="" className='w-[300px]'/>
          <button onClick={() => navigate('/product')}
            className='bg-gradient-to-r from-gray-900 to-blue-300  
                         rounded-xl px-5 py-3 text-2xl cursor-pointer items-center justify-center 
                         font-bold mt-5 text-white shadow-md 
                         hover:scale-110 transition-all'>Continue Shopping</button>
        </div>
      }
    </div>
  )
}

export default Cart