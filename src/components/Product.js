import React from "react";
import image from '../assets/chef_knife_red.jpg'

export const Product = () => {
  return (
    <div id='product'>
      <div className='picture-box'>
        <img id='product-pic' src={image} alt='Chef Knife Red' />
      </div>
      <div id='product-details'>
        <div className='directory'>
          <a href='/' className='directory-link'>Home</a>
          <i class="fas fa-chevron-right directory-link"></i>
          <a href='/' className='directory-link'>Knives</a>
          <i class="fas fa-chevron-right directory-link"></i>
          <a href='/' className='directory-link selected'>8 Inch Chef Knife</a>
        </div>
        <h2 className='product-name'>8 Inch Chef Knife</h2>
        <div className='rating-reviews'>
          <div className='stars'>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
          </div>
          <p className='num-reviews'>1226 Reviews</p>
        </div>
        <a href='/' className='promise'>Made In Promise</a>
        <div className='design-options'>
          <div className='design-option flexed-ai-center'>
            <h4 className='design-detail'>Color: Pomme Red</h4>
            <div className='colors flexed-ai-center'>
              <div className='color red'>
                <div className='selected-color'></div>
              </div>
              <div className='color black'></div>
              <div className='color gray'></div>
            </div>
          </div>
          <div className='design-option flexed-ai-center'>
            <h4 className='design-detail'>Size</h4>
            <div className='size-input flexed-ai-center'>8"</div>
          </div>
          <div className='design-option fill-box'>
            <div className='design-detail personalize-checkbox'>
              <div className='checkbox-fill red'></div>
            </div>
            <h4 className='personalize-text design-detail'>Personalize It</h4>
          </div>
          <div className='price-info'>
            <h4 className='design-detail price'>$89</h4>
            <div className='purchase-options'>
              <select className='quantity'></select>
              <button className='add-to-cart'>Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
