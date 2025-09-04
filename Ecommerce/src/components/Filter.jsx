import React from 'react'
import { useData } from '../Context/DataContext'
import { useTheme } from '../Context/ThemeContext'   // ⭐ Import ThemeContext

const FilterSection = ({search, setSearch, brand, setBrand, priceRange, setPriceRange, category, setCategory, 
    handleBrandChange, handleCategoryChange}) => {
    
    const { categoryOnlyData , brandOnlyData } = useData()
    const { theme } = useTheme()   // ⭐ Get current theme

    return (
        <div className={`mt-10 p-4 py-20 rounded-md h-max transition-colors duration-300
            ${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-200 text-black"}`}>

            {/* Search Input */}
            <input type="text" 
               placeholder='Search..' 
               value={search}
               onChange={(e)=>setSearch(e.target.value)} 
               className={`p-2 rounded-md border-2 w-full transition-colors duration-300
                   ${theme === "dark" ? "bg-gray-700 border-gray-600 text-white hover:bg-gray-500" : "bg-white border-gray-400 text-black"}`}
            />

            {/* category only data */}
            <h1 className='mt-5 font-semibold text-xl'>Category</h1>
            <div className='flex flex-col gap-2 mt-3'>
                {categoryOnlyData?.map((item, index) => (
                    <div key={index} className='flex gap-2'>
                        <input type="checkbox" name={item} checked={category === item} value={item} 
                               onChange={handleCategoryChange} 
                               className={`${theme === "dark" ? "accent-blue-300" : "accent-blue-300"}`}
                        />
                        <button className={`cursor-pointer uppercase transition-colors duration-300
                            ${theme === "dark" ? "text-white" : "text-black"}`}
                        >
                            {item}
                        </button>
                    </div>
                ))}
            </div>

            {/* brand only data */}
            <h1 className='mt-5 font-semibold text-xl mb-3'>Brand</h1>
            <select
                className={`w-full p-2 border-2 rounded-md text-center transition-colors duration-300
                    ${theme === "dark" ? "bg-gray-700 border-gray-600 text-white hover:bg-gray-500" : "bg-white border-gray-200 text-black"}`}
                value={brand}
                onChange={handleBrandChange}
            >
                {brandOnlyData?.map((item, index) => (
                    <option key={index} value={item}>{item.toUpperCase()}</option>
                ))}
            </select>

            {/* price range */}
            <h1 className='mt-5 font-semibold text-xl mb-3'>Price Range</h1>
            <div className='flex flex-col gap-2'>
                <label htmlFor="">Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
                <input type="range" min="0" max="5000" value={priceRange[1]} 
                       onChange={(e)=>setPriceRange([priceRange[0], Number(e.target.value)])} 
                       className={`transition-all ${theme === "dark" ? "accent-blue-300" : "accent-blue-300"}`}
                />
            </div>

            {/* Reset Button */}
            <button
                className={`mt-5 px-3 py-2 rounded-md font-bold text-lg w-full transition-colors duration-300
                    ${theme === "dark" ? "bg-gray-700 text-white hover:bg-gray-500" : "bg-gradient-to-r from-gray-900 to-blue-300 text-white"}`}
                onClick={() => {setSearch(''); setCategory('All'); setBrand('All'); setPriceRange([0,5000])}}
            >
                Reset Filters
            </button>
        </div>
    )
}

export default FilterSection
