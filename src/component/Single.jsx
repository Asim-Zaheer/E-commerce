import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
// import Product from './Product'

export default function Single() {
    let params =useParams()
    const [model, SetModel]=useState([])
    const getProducts=()=>{
        axios.get("https://fakeapistore.com/products").then((res)=>{
            console.log(res.data)
            SetModel({...res.data})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
  return (
    <>
    <div className="container">
        <p>single Post</p>
        <button className="btn btn-outline-dark" onClick={getProducts} > Get single post data </button>
        <p display-3 > {model.id } </p>
        <p  > {model.title }</p>
        <p  > {model.price }</p>
    </div>
    </>
  )
}

 