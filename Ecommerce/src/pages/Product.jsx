import React, { useState } from 'react'
import { useData } from '../Context/DataContext'
import { useCart } from '../Context/CartContext'
import Filter from '../components/Filter'
import { IoCartOutline } from 'react-icons/io5'
import Pagination from '../components/Pagination'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../Context/ThemeContext'   // ⭐ 1) Import ThemeContext

function Product() {
  const navigate = useNavigate()
  const { addToCart, cartItem } = useCart()
  console.log(cartItem)

  const { data } = useData()
  const { theme, toggleTheme } = useTheme()   // ⭐ 2) Get theme + toggle

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
    // ⭐ 3) Wrap page in theme-aware classes
    <div className={`min-h-screen transition-colors duration-300 ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>

    

      <div className='px-4 max-w-6xl mx-auto mb-10'>
        {
          data?.length > 0 ? (
            <div className='flex flex-col lg:flex-row gap-12'> {/*  layout stack on small screens */}

              <div className='w-full lg:w-1/3'> {/* filter full width on mobile */}
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

              <div className='flex flex-col gap-10 w-full'>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-10'> {/* responsive grid */}
                  {filteredData?.slice(page * 8 - 8, page * 8).map((item, index) => (
                    <div
                      key={index}
                      className={`  ${theme === "dark" ? "border-gray-500 text-white hover:shadow-gray-400 hover:scale-105" : "border-gray-300 text-black hover:shadow-gray-700 hover:scale-110"} border relative   rounded-md  hover:shadow-2xl  transition-all`}
                    >
                      <img
                        src={item.image}
                        alt=''
                        className={`aspect-square w-full object-contain  `}
                        onClick={() => navigate(`/products/${item.id}`)}
                      />
                      <h1 className='line-clamp-2 p-1 font-semibold'>{item.title}</h1>
                      <p className='py-1 text-lg font-bold'>${item.price}</p>
                      <button
                        onClick={() => addToCart(item)}
                        className={` ${theme === "dark" ? "bg-gradient-to-r from-gray-900 to-blue-300 text-white" : "bg-gradient-to-r from-gray-900 to-blue-300 text-white"}
                        rounded-md px-3 py-2 text-lg cursor-pointer flex gap-2 items-center justify-center font-bold w-full`}
                      >
                        <IoCartOutline className='w-6 h-6' />Add to Cart
                      </button>
                    </div>
                  ))}
                </div>

                <Pagination pageHandler={pageHandler} page={page} dynamicPage={dynamicPage} />
              </div>
            </div> 
            
            
          ) : (
            <div className='text-2xl  justify-center items-center'>
              no item found
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Product
