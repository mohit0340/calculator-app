
import React from 'react'
import { Navbar, NavbarBrand, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "../src/App.css"



const Nav = () => {
  return (
    <div className='bg-red'>
      
<Navbar  className="bg-warning d-flex justify-content-between">
  
  <h4 className='ms-5'>Calculator</h4>
  <div className='d-flex gap-5 me-5'>
        <Link className='nav-link p-2 ps-3 pe-3 rounded ' to="/">Home</Link>
        <Link className='nav-link p-2 ps-3 pe-3 rounded'  to="/about">About</Link>
        <Link className='nav-link p-2 rounded  '  to="/contac">Contact Us</Link>
        </div>
   
        </Navbar>
   

      
    </div>
  )
}

export default Nav
