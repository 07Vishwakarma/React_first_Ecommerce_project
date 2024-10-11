import React, { useContext, useState } from 'react'
import { nanoid } from 'nanoid';
import { productcontext } from './Utils/Context';
import { useNavigate } from 'react-router-dom';

function Create() {
  const navigate=useNavigate();
  const [products,setproducts]=useContext(productcontext);

  const [title,settitle]=useState("");
  const [image,setimage]=useState("");
  const [category,setcategory]=useState("");
  const [price,setprice]=useState("");
  const [description,setdescription]=useState("");
  

  const subminthandler=(e)=>{
    e.preventDefault();
    // console.log(products);

    console.log(title,image,category,price,description);

    if(title.trim().length < 5 || image.trim().length <5 || category.trim().length<5 || price.trim().length<1 || description.trim().length<5){
      alert("Every field must have five character...");
    }
    const product={
      id:nanoid(),
      title,
      image,
      category,
      price,
      description
    };
    setproducts([...products,product]);
    console.log(products);
    localStorage.setItem("products",JSON.stringify([...products,product]));
    navigate("/");


    // alert("this is done check console...");
  }
  return (
    <form action="" className='p-[5%] w-screen h-screen mt-4 flex flex-col items-center  ' onSubmit={subminthandler}>
      <h1 className='text-3xl w-1/2 mb-3' >Add New Product</h1>

      <input type="url" placeholder='Image Link' className='text-2xl bg-zinc-100 rounded p-2 mb-3 w-1/2' 
      onChange={(e)=>{
        return setimage(e.target.value);
      }} value={image}/>
      
      <input type="text" placeholder='title' className='text-2xl bg-zinc-100 rounded p-2 mb-3 w-1/2' 
      onChange={(e)=>{
        return settitle(e.target.value);
      }} value={title}/>
      
      <div className='flex justify-between items-center w-1/2'>

      <input type="text" placeholder='Category' className='text-2xl bg-zinc-100 rounded p-2 mb-3 w-[49%]' 
      onChange={(e)=>{
        return setcategory(e.target.value);
      }} value={category}/>
        
      <input type="number" placeholder='price' className='text-2xl bg-zinc-100 rounded p-2 mb-3 w-[49%]' 
      onChange={(e)=>{
        return setprice(e.target.value);
      }} value={price}/>
      
      </div>
      
      <textarea type="text" placeholder='Enter product description here...' className='text-2xl bg-zinc-100 rounded p-2 mb-3 w-1/2' rows="10"
      onChange={(e)=>{
        return setdescription(e.target.value);
      }} value={description}/>
      

      <button type="submit" className="w-1/2 py-3 px-5 border rounded border-blue-200 text-blue-300" >Add new product</button>

    </form>
  )
}

export default Create