import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import ProductListView from '../components/ProductListView'

const CategoryProduct = () => {
  const [searchData, setSearchData] = useState([])
  const params = useParams()
  const category = params.category
  const navigate = useNavigate()

  const getFilterData = async () => {
    const fixedCategory = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()
    const setData = fixedCategory.toLowerCase()

    try {
      const res = await axios.get(`https://fakestoreapi.in/api/products/category?type=${setData}`)
      const data = res.data.products
      setSearchData(data || [])
    } catch (error) {
      console.log("Error fetching category data:", error)
    }
  }

  useEffect(() => {
    getFilterData()
    window.scrollTo(0, 0)
  }, [category])

  return (
    <div>
      {searchData.length > 0 ? (
        <div className='max-w-6xl mx-auto mt-10 mb-10 px-4'>
          <button
            onClick={() => navigate('/')}
            className='bg-gray-800 mb-5 text-white hover:scale-105 px-3 py-1 rounded-md cursor-pointer flex gap-1 items-center'>
            <ChevronLeft /> Back
          </button>

          {/* ✅ Responsive grid wrapper */}
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
            {searchData.map((product, index) => (
              <ProductListView key={index} product={product} />
            ))}
          </div>
        </div>
      ) : (
        <div className='flex items-center justify-center h-[400px] text-lg font-semibold'>
          No items found for category <span className="ml-1 text-red-500">{category}</span>
        </div>
      )}
    </div>
  )
}

export default CategoryProduct
