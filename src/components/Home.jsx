import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import { Link, useLocation, useParams } from 'react-router-dom'
import { productcontext } from '../Utils/Context'
import Loading from './Loading';
import axios from '../Utils/Axios';


function Home() {
    const [products] = useContext(productcontext);
    const {search} = useLocation();
    const category=decodeURIComponent(search.split("=")[1]);
    
    // let filterproducts=products && products;

    const [filterproducts,setfilterproducts]=useState(null);

    // console.log(category)
    // console.log(search);

    const getproductcategory= async () =>{
        try{
            const {data} = await axios.get(`/products/category/${category}`);
            // filterproducts=data;
            // console.log(data);
            setfilterproducts(data);
        }catch(err){
            console.log(err);
        }
    }

    useEffect( ()=>{
        if(!filterproducts || category=="undefined") setfilterproducts(products);
        if(category !="undefined") getproductcategory();
    },[category,products]);


    // console.log(filterproducts);
  return products ? ( 
    <div  className='h-screen w-screen flex'>
        <Nav/>
        <div className="w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto ">

            {
                filterproducts && filterproducts.map((val,ind) => {
                    return <>
                    <Link key={ind} to={`/details/${val.id}`} className="card shadow rounded-md w-[18%] h-[35vh] border m-2 flex justify-center items-center flex-col">

                        <div className="w-full h-[80%] m-0 p-0 bg-contain bg-no-repeat box-border bg-center hover:scale-110 transition" 
                        style={{
                            backgroundImage : `URL(${val.image})`,
                        }}></div>

                        <h1 className="text-center hover:text-blue-400 transition">
                            {
                                val.title
                            }
                        </h1>

                    </Link>
                    </>
                })
            }

            
        </div>
    </div> ) : <Loading/>
}

export default Home