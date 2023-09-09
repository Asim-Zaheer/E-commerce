import React from 'react'
import { NavLink } from 'react-router-dom'

function NAvbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container">
    <NavLink className="navbar-brand fw-bold  fs-4" to="/">E-Shop by Asim</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active me-2 fs-10" aria-current="page" to="/">Home</NavLink>
        </li>


        <li className="nav-item">
          <NavLink className="nav-link active me-2" aria-current="page" to="/product">Product</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active me-2" aria-current="page" to="/">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active me-2" aria-current="page" to="/about">About</NavLink>
        </li>
       
      </ul>
    <div className="button">
        <NavLink to="#" className="btn btn-outline-dark">
        <i class="fa fa-sign-in me-1   " to="#" >login </i>
        </NavLink>
        <NavLink to="" className="btn btn-outline-dark ms-2 ">
        <i class="fa fa-user-plus me-1" to="#" >Register </i>
        </NavLink>
        <NavLink to="" className="btn btn-outline-dark ms-2">
        <i class="fa fa-sign-in" to="#" > Cart(0) </i>
        </NavLink>
    </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default NAvbar