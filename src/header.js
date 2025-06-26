
import React from 'react'
import { Link } from 'react-router-dom'

function header() {
  return (
    <nav id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">

        <Link to="/" className="logo d-flex align-items-center me-auto">
          <img src="assets/img/new-logo.png" alt="Shree Harikrishna Alluminium" />
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li className="dropdown"><Link to="#"><span>Our products</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
              <ul>

                <li className="dropdown"><Link to="#"><span>Windows</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                  <ul>
                    <li><Link to="/openable">Openable Window</Link></li>
                    <li><Link to="/slider">Slider Window</Link></li>
                    <li><Link to="/tilt">Tilt & Slide Windows.</Link></li>
                    <li><Link to="/staking"> Stacking Windows</Link></li>

                  </ul>
                </li>
                <li><Link to="/doors">Doors</Link></li>
                <li><Link to="/kitchen">Kitchen Cabinet</Link></li>
                <li><Link to="/office">Office Partition</Link></li>
              </ul>
            </li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
      </div>
    </nav>
  )
}

export default header
