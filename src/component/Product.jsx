import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import single from './Single'

export default function Product() {
    const [data,SetData]=useState([])
    const [filter , SetFilter]= useState([])
    const [loading, SetLoading]= useState(false)
    let comMounted = true

    useEffect(()=>{
        const getProducts = ()=>{
            SetLoading(true)
            axios .get("https://fakestoreapi.com/products").then((res)=>{
            if (comMounted){
                SetData(res.data)
                SetFilter( res.data)
                SetLoading(false)
                console.log(filter)
            }})
            .catch((err)=>{
                console.log(err)
            })
            return ()=>{
                comMounted=false
            }
        }
        getProducts()
    },[])
    // useEffect(()=>{
    //     const getProducts = async ()=>{
    //         SetLoading(true)
    //         const res = await fetch("https://fakestoreapi.com/products")
    //         if (comMounted){
    //             SetData(await res.clone().json())
    //             SetFilter(await res.json())
    //             SetLoading(false)
    //             console.log(filter)
    //         }
    //         return ()=>{
    //             comMounted=false
    //         }
    //     }
    //     getProducts()
    // },[])

const Loading = ()=>{
    return(
        <>
       <div class="spinner-border  " role="status">
  <span class="visually-hidden">Loading...</span>
</div>
{/* loading.... */}
        </>
    )
}

const filterProduct = (cat)=>{
const updateList = data.filter((x)=>x.category===cat)
SetFilter(updateList)
}

// const navigate = useNavigate()
// let  clickCard = (id)=>{
//     navigate(`/component/Single/${id}`)
// }




const ShowProducts =()=>{
    return(
        <>
    <div className="buttons d-flex justify-content-center mb-5 pt-5 "> 
    <button className="btn btn-outline-dark me-2"  onClick={()=>SetFilter(data)} >
        All
    </button>
    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")} >
        Men's Clothing
    </button>
    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")}>
        Women's Clothing
    </button>
    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("jewelery")}>
        Jewellery
    </button>
    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")}>
        Electronic
    </button>
     </div>

    {filter.map((product)=>{
        return(
            <>
            <div className="col-md-3 mb-4">

            <div className="card h-100 text-center p-4 " key={product.id} >
  <img src={product.image} className="card-img-top " alt={product.title} height="250px"/>
  <div className="card-body">
    <h5 className="card-title mb-0 ">{product.title.substring(0,11)  }...</h5>
    <p className="card-text text-center  lead fw-bold"  >${product.price}</p>
    <Link className="btn btn-outline-dark text-center"   to={`/product/${product.id}`} >Grab It Now!</Link>
  </div>
</div>
            </div>
            </>
        )
    })}

        </>
    )
}



  return (
    <>
    <div className="container  my-5 py-5 ">
        <div className="row">
            <div className="col-12" >
                <h1 className='display-5  fw-bolder d-flex justify-content-center' >
                 OUR PRODUCTS
                </h1>
                <hr />
            </div>
        </div>
        <div className="row justify-content-center "  >
            {loading ? <Loading/> : <ShowProducts/>}
        </div>
    </div>
    </>
  )
}

 