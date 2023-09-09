import React from 'react'

function NAvbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container">
    <a className="navbar-brand fw-bold  fs-4" href="#">E-Shop by Asim</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active me-2 fs-10" aria-current="page" href="#">Home</a>
        </li>


        <li className="nav-item">
          <a className="nav-link active me-2" aria-current="page" href="#">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active me-2" aria-current="page" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active me-2" aria-current="page" href="#">About</a>
        </li>
       
      </ul>
    <div className="button">
        <a href="" className="btn btn-outline-dark">
        <i class="fa fa-sign-in me-1 ">login </i>
        </a>
        <a href="" className="btn btn-outline-dark ms-2 ">
        <i class="fa fa-user-plus me-1">Register </i>
        </a>
        <a href="" className="btn btn-outline-dark ms-2">
        <i class="fa fa-sign-in"> Cart(0) </i>
        </a>
    </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default NAvbar