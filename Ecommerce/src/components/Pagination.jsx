import React from 'react'

const getPages = (current, total) =>{
    const pages = [];
    if(total <= 5){
        for (let i =1; i <= total; i++){
            pages.push(i)
        }
    }else {
        if(current <= 3) {
            pages.push(1,2,3,'...', total)
        } else if (current >= total-2){
            pages.push(1,'...', total-2, total-1, total)
        } else {
            pages.push(1, '...', current-1, current, current+1, '...', total)
        }
    }
    return pages;
}

const Pagination = ({page, pageHandler, dynamicPage}) => {
  return (
    <div className='flex justify-center items-center gap-5 mt-3 flex-wrap '>
        <button 
        disabled={page===1} 
        className={`${page === 1 ? "bg-gradient-to-r from-gray-600 to-blue-200":"bg-gradient-to-r from-gray-900 to-blue-300"} text-white font-bold px-4 py-1 rounded-md cursor-pointer`}
        onClick={()=>pageHandler(page - 1)}
        >Prev</button>
        {
            getPages(page, dynamicPage)?.map((item, index) =>{
                return (
                    <span key={index} 
                    onClick={()=> typeof item === "number" && pageHandler(item)}
                    className={`cursor-pointer ${item === page ? "font-extrabold text-2xl text-black": "text-black"}`}
                    >
                        {item}
                    </span>
                )
            })
        }
        <button 
        disabled={page===dynamicPage} 
        className={`${page === dynamicPage ? "bg-gradient-to-r from-gray-600 to-blue-200":"bg-gradient-to-r from-gray-900 to-blue-300"} text-white font-bold px-4 py-1 rounded-md cursor-pointer`}
        onClick={()=>pageHandler(page + 1)}
        >Next</button>
    </div>
  )
}

export default Pagination