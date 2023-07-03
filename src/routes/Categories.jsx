import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useEffect } from "react";
function Categories(){
    const [categories,setCategories] = useState([])
    function useFetchAPI(url)
  {
    fetch(url)
    .then(res =>res.json())
    .then(data=>{setCategories(data)})
    
  }
  useEffect(() => {
    useFetchAPI(`https://api.coingecko.com/api/v3/coins/categories/list`)
   
  },[]);
    console.log(categories)
    return(
        <>
        <Navbar/>
        </>
    )
}
export default Categories