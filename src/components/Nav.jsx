import React, { useContext } from 'react'
import { productcontext } from '../Utils/Context'
import { Link } from 'react-router-dom';

function Nav() {
  
  const [product]=useContext(productcontext);
  
  let distinctCategory =product && product.reduce( (accum,val) => [...accum ,val.category],[]);
  distinctCategory = [...new Set(distinctCategory)];

  // console.log("new data",distinctCategory);

  return (
    <nav className="w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5">
        
        <Link to='/Create'className="py-3 px-5 border rounded border-blue-200 text-blue-300" >Add new product</Link>
        <hr className="w-[80%] my-3 bg-black" />
        <h1 className="text-xl mb-3 w-[80%]">Category Filter</h1>
        
        <div className=" w-[80%]">
          
        {
          distinctCategory.map((dist,index)=>(
          <Link to={`/?category=${dist}`} className="mb-3 hover:bg-orange-300 hover:p-2 hover:rounded-lg transition flex items-center" key={index}>
            <span className="rounded-full mr-2 ml-1 w-[15px] h-[15px]  bg-blue-100"></span>
            {
              dist
            }
          </Link>
          ))
        }


        </div>
      </nav>
  )
}

export default Nav