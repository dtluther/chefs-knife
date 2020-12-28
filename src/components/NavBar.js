import React from "react";
import logo from "../assets/made_in_logo.png";

export const NavBar = () => (
  <div id='nav-bar'>
    <div id='nav-bar-upper' className='nav-bar-piece flexed-ai-center'>
      <div className='about-items flexed-ai-center'>
        <h3 className='about-item'>Our Story</h3>
        <h3 className='about-item'>Reviews</h3>
        <h3 className='about-item'>Care</h3>
        <h3 className='about-item'>Blog</h3>
      </div>
    </div>
    <div id='nav-bar-main' className='nav-bar-piece flexed-ai-center'>
      <div className='logo'>
        <img src={logo} alt='Made In Logo' />
      </div>
      <div className='product-types flexed-ai-center'>
        <h3 className='product-type nav-option'>Cookware & Bakeware</h3>
        <h3 className='product-type nav-option'>Knives</h3>
        <h3 className='product-type nav-option'>Tabletop</h3>
        <h3 className='product-type nav-option'>Accessories</h3>
        <h3 className='product-type nav-option'>Sets</h3>
      </div>
      <div className='right-nav flexed-ai-center'>
        <h3 className='nav-option'>Search</h3>
        <h3 className='nav-option'>Language</h3>
        <h3 className='nav-option'>Sign In</h3>
        <h3 className='nav-option'>Cart</h3>
      </div>
    </div>
  </div>
)