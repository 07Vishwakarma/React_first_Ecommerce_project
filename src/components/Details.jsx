import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { productcontext } from '../Utils/Context'
import axios from '../Utils/Axios';
import Loading from './Loading';

function Details() {
  const [products,setproducts]=useContext(productcontext);
  const [product,setproduct]=useState(null);
  const {id}=useParams();
  // console.log(products);
  // console.log(id);

  // const getsingleproduct = async () => {
  //   try{
  //       const { data } = await axios.get(`/products/${id}`);
  //       setproducts(data);
  //   }catch(err){
  //     console.log(err);
  //   }
  // }
   
  useEffect(()=>{
    // getsingleproduct();
    if(!product){
      setproduct(products.filter( (p) => p.id == id)[0]);
    }

  },[])

  return( product ? 
    <div className='w-[80%] h-full m-auto flex justify-center items-center'>
      
      <img className='w-[50%] h-[80%] ml-[3%] box-border'
       src={`${product.image}`}/>

      <div className='content ml-[3%]'>

        <h1 className='text-4xl'>{`${product.title}`}</h1>
        <h3 className='text-red-400 text-xl'>{`${product.category}`}</h3>
        <h2 className='text-xl mt-[1%]'>{`$ ${product.price}`}</h2>
        <p className='text-lg text-black'>
          {`${product.description}`}
        </p>
        <div className='w-[40%] flex justify-between items-center mt-[3%]'>
          <Link className='bg-red-300 hover:bg-red-400 px-7 py-2 rounded-lg text-xl'>Edit</Link>
          <Link className='bg-red-300 hover:bg-red-400 px-7 py-2 rounded-lg text-xl'>Delete</Link>
        </div>
      </div>
    </div> : <Loading/>
  )
}

export default Details