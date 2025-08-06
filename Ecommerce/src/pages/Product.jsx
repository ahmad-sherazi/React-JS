import React from 'react'
import { useState } from 'react';
import { useData } from '../Context/DataContext'
import { useCart } from '../Context/CartContext';
import Filter from '../components/Filter';
import { IoCartOutline } from 'react-icons/io5'
import Pagination from '../components/Pagination';
import { useNavigate } from 'react-router-dom';

function Product() {
  const navigate = useNavigate()
  const { addToCart, cartItem } = useCart()
  console.log(cartItem)

  const { data } = useData();
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [brand, setBrand] = useState("All")
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [page, setPage] = useState(1)
  const [openFilter, setOpenFilter] = useState(false)

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
    setPage(1)
    setOpenFilter(false)
  }

  const handleBrandChange = (e) => {
    setBrand(e.target.value)
    setPage(1)
    setOpenFilter(false)
  }

  const pageHandler = (selectedPage) => {
    setPage(selectedPage)
    window.scrollTo(0, 0)
  }

  const filteredData = data?.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) &&
    (category === "All" || item.category === category) &&
    (brand === "All" || item.brand === brand) &&
    item.price >= priceRange[0] && item.price <= priceRange[1]
  )

  const dynamicPage = Math.ceil(filteredData?.length / 8)

  return (
    <div className=''>
      <div className='px-4 max-w-6xl mx-auto mb-10'>
        {
          data?.length > 0 ? (
            <div className='flex flex-col lg:flex-row gap-12'> {/*  CHANGED: made layout stack on small screens */}

              <div className='w-full lg:w-1/3'> {/*  CHANGED: make filter full width on mobile */}
                <Filter
                  search={search}
                  setSearch={setSearch}
                  brand={brand}
                  setBrand={setBrand}
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                  category={category}
                  setCategory={setCategory}
                  handleCategoryChange={handleCategoryChange}
                  handleBrandChange={handleBrandChange}
                />
              </div>

              <div className='flex flex-col gap-10 w-full'> {/*  CHANGED */}
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-10'> {/*  CHANGED: responsive grid */}
                  {filteredData?.slice(page * 8 - 8, page * 8).map((item, index) => (
                    <div
                      key={index}
                      className='border relative border-gray-300 rounded-2xl hover:scale-110 hover:shadow-2xl hover:shadow-gray-700 transition-all'
                    >
                      <img
                        src={item.image}
                        alt=''
                        className='bg-gray-100 aspect-square w-full object-contain'
                        onClick={() => navigate(`/products/${item.id}`)}
                      />
                      <h1 className='line-clamp-2 p-1 font-semibold'>{item.title}</h1>
                      <p className='py-1 text-lg font-bold'>${item.price}</p>
                      <button
                        onClick={() => addToCart(item)}
                        className='bg-gradient-to-r from-gray-900 to-blue-300 
                        rounded-md px-3 py-2 text-lg cursor-pointer flex gap-2 items-center justify-center font-bold w-full text-white'
                      >
                        <IoCartOutline className='w-6 h-6' />Add to Cart
                      </button>
                    </div>
                  ))}
                </div>

                {/*  Moved inside for layout consistency */}
                <Pagination pageHandler={pageHandler} page={page} dynamicPage={dynamicPage} />
              </div>
            </div>
          ) : (
            <div className='text-2xl text-center text-black'>
              no item found
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Product
