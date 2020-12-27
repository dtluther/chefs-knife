import React from "react";

export const NavBarMain = () => (
  <div id='nav-bar-main'>
    <div className='logo'>
      LOGO GOES HERE
    </div>
    <div className='product-types'>
      <h3 className='product-type nav-option'>Cookware & Bakeware</h3>
      <h3 className='product-type nav-option'>Knives</h3>
      <h3 className='product-type nav-option'>Tabletop</h3>
      <h3 className='product-type nav-option'>Accessories</h3>
      <h3 className='product-type nav-option'>Sets</h3>
    </div>
    <div className='right-nav'>
      <h3 className='nav-option'>Search</h3>
      <h3 className='nav-option'>Language</h3>
      <h3 className='nav-option'>Sign In</h3>
      <h3 className='nav-option'>Cart</h3>
    </div>
  </div>
)