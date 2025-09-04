import React from 'react'
import { useTheme } from '../Context/ThemeContext'

const getPages = (current, total) => {
  const pages = []
  if (total <= 5) {
    for (let i = 1; i <= total; i++) {
      pages.push(i)
    }
  } else {
    if (current <= 3) {
      pages.push(1, 2, 3, '...', total)
    } else if (current >= total - 2) {
      pages.push(1, '...', total - 2, total - 1, total)
    } else {
      pages.push(1, '...', current - 1, current, current + 1, '...', total)
    }
  }
  return pages
}

const Pagination = ({ page, pageHandler, dynamicPage }) => {
  const { theme } = useTheme() // ✅ hook must be inside component

  return (
    <div
      className={`flex justify-center items-center gap-5 flex-wrap ${
        theme === 'dark' ? 'mt-4 mb-8 bg-black text-white' : 'mt-3 text-black'
      }`}
    >
      {/* Prev Button */}
      <button
        disabled={page === 1}
        className={`font-bold px-4 py-1 rounded-md cursor-pointer 
          ${
            page === 1
              ? theme === 'dark'
                ? 'bg-gradient-to-r from-gray-600 to-blue-200 text-white cursor-not-allowed'
                : 'bg-gradient-to-r from-gray-600 to-blue-200 text-white cursor-not-allowed'
              : theme === 'dark'
              ? 'bg-gradient-to-r from-gray-900 to-blue-300 text-white'
              : 'bg-gradient-to-r from-gray-900 to-blue-300 text-white'
          }`}
        onClick={() => pageHandler(page - 1)}
      >
        Prev
      </button>

      {/* Page Numbers */}
      {getPages(page, dynamicPage)?.map((item, index) => (
        <span
          key={index}
          onClick={() => typeof item === 'number' && pageHandler(item)}
          className={`cursor-pointer ${
            item === page
              ? theme === 'dark'
                ? 'font-extrabold text-2xl text-white'
                : 'font-extrabold text-2xl text-black'
              : theme === 'dark'
              ? 'text-white'
              : 'text-black'
          }`}
        >
          {item}
        </span>
      ))}

      {/* Next Button */}
      <button
        disabled={page === dynamicPage}
        className={`font-bold px-4 py-1 rounded-md cursor-pointer 
          ${
            page === dynamicPage
              ? theme === 'dark'
                ? 'bg-gradient-to-r from-gray-600 to-blue-200 text-white cursor-not-allowed'
                : 'bg-gradient-to-r from-gray-600 to-blue-200 text-white cursor-not-allowed'
              : theme === 'dark'
              ? 'bg-gradient-to-r from-gray-900 to-blue-300 text-white'
              : 'bg-gradient-to-r from-gray-900 to-blue-300 text-white'
          }`}
        onClick={() => pageHandler(page + 1)}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
