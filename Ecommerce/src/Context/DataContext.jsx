import React from "react";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";


export const DataContext = createContext(null);


export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [categoryOnlyData, setCategoryOnlyData] = useState([]);
  const [brandOnlyData, setbrandOnlyData] = useState([]);


  const getUniqueCategory = (data, property) =>{
      let newVal = data?.map((curElem) =>{
          return curElem[property]
      })
      newVal = ["All",...new Set(newVal)]
      return newVal
    }

    const fetchData = async () => {
      
        const res = await axios.get('https://fakestoreapi.in/api/products?limit=150');
        const productsData = res.data.products;
        setData(productsData);
        //console.log("API Response products:", res.data.products);

        const categories = getUniqueCategory(productsData, "category");
        setCategoryOnlyData(categories);

        const brand = getUniqueCategory(productsData, "brand");
        setbrandOnlyData(brand);

        console.log("API All products only:", productsData);
        console.log("API Unique products only:",categories );
        console.log("API Unique brand only:",brand );

      
    };



  useEffect(() => {
       fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, setData,categoryOnlyData,brandOnlyData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
