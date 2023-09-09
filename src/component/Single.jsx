import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from './Product'
// import Product from './Product'
let comMounted = true

export default function Single() {
    let {id} =useParams()
    const [product, SetProduct]=useState([]) 
    // const [filter , SetFilter]= useState([])
    let comMounted = true

    // useEffect(()=>{

    //     const getProducts=()=>{
    //         axios.get(`https://fakeapistore.com/products/${id}`).then((res)=>{
    //             console.log(res.data)
    //             SetProduct({...res.data})
    //         })
    //         .catch((err)=>{
    //             console.log(err)
    //         })
    //     }
    //     getProducts()
    // },[])
    useEffect(()=>{
            const getProducts = async ()=>{
              
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                // if (comMounted){

                SetProduct(await response.json())
                // SetFilter(await res.json())

                // console.log(filter)
                // }
                // return ()=>{
                //     comMounted=false
                // }
                
                 
                
                
            }
            getProducts()
        },[])

 const ShowProduct = ()=>{
    return (
        <>
    <div className="container">
        <p>single Post</p>
        <button className="btn btn-outline-dark"  > Get single post data </button>
        <p  > {product } </p>
        <p>hello</p>
        <p  > {product.title ?? "" }</p>
        <h3> 
             {product.description ?? ""}
        </h3>
        <p  > {product.price  ?? ""}</p>
    </div>

        </>
    )
 }

  return (
    <>
    <div className="container">
        <div className="row">
            {<ShowProduct/>}
        </div>
    </div>
    </>
  )
}

 