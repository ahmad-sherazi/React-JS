import React from 'react'
import { useData } from '../Context/DataContext'
import { useNavigate } from 'react-router-dom'

const Category = () => {
  const navigate = useNavigate()
  const { data } = useData()

  const getUniqueCategory = (data, property) => {
    let newVal = data?.map((curElem) => {
      return curElem[property]
    })
    newVal = [...new Set(newVal)]
    return newVal
  }

  const categoryOnlyData = getUniqueCategory(data, "category")

  return (
    <div className='bg-gray-800'>
      <div className='max-w-7xl mx-auto flex flex-wrap gap-4 items-center justify-center md:justify-around py-7 px-4'>
        {categoryOnlyData?.map((item, index) => {
          const categorySlug = encodeURIComponent(item.toLowerCase())  // ✅ ensures safe URL
          return (
            <div key={index}>
              <button
                onClick={() => navigate(`/category/${categorySlug}`)} // ✅ updated
                className='uppercase bg-gradient-to-r from-gray-700 to-blue-300 text-white px-3 py-1 rounded-md cursor-pointer font-semibold hover:opacity-90 hover:scale-110 transform'
              >
                {item}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Category
