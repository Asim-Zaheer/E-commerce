import React from 'react'
import Product from './Product'

export default function Home() {
  return (
    <>
    <div className="Hero">
    <div className="card text-bg-dark border-0"  >
  <img src="/images/bg4.png" className="card-img" alt="" height="650px" />
  <div className="card-img-overlay text-dark d-flex  justify-content-center" >
    <div className="container   ">

    <h5 className="card-title display-3 fw-bold mb-0 " >NEW SUMMER CRAVING ARRIVED</h5>
    <p className="card-text lead fs-2 ">Welcome to hot summer offer</p>
    </div>
  </div>
</div>
<Product/>
    </div>
    </>
  )
}


