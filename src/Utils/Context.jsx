import axios from"./Axios";
import React, { createContext, useEffect, useState } from 'react'

export const productcontext=createContext();

function Context(props) {

    const [products,setproducts]=useState(JSON.parse(localStorage.getItem("products")) || null);

    const getproducts = async () =>{
      try{
            const {data}=await axios('/products');
            // console.log(data);
            setproducts(data);
      }catch(error){
        console.log(error);
      }
    }

    useEffect(()=>{
      getproducts();
    },[])

  return (
    <productcontext.Provider value={[products,setproducts]}>
      {
        props.children
      }
    </productcontext.Provider>
  )
}

export default Context