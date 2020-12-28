import React, { useState } from "react";
import redKnife from '../assets/chef_knife_red.webp'
import engravingHandle from '../assets/engraving_handle.webp'
import engravingBlade from '../assets/engraving_blade.webp'

export const Product = () => {
  const [engraving, setEngraving] = useState('');
  const [engravingLength, setEngravingLength] = useState(0);

  const updateEngraving = e => {
    const text = e.target.value;
    const len = text.length
    setEngraving(text);
    setEngravingLength(len);
  }

  const togglePersonalizeCheckbox = e => {
    const outer = e.currentTarget;
    outer.classList.toggle('checked');

    const engravingDetailsBox = document.getElementById('engraving-details');
    const toggledEngravingImg = document.getElementById('toggled-eng-img');
    const picEngraving = document.getElementById('engraving-on-pic');
    if (outer.classList.contains('checked')) {
      engravingDetailsBox.classList.remove('undisplayed');
      picEngraving.classList.remove('undisplayed');
      toggledEngravingImg.classList.add('undisplayed');
    } else {
      engravingDetailsBox.classList.add('undisplayed');
      picEngraving.classList.add('undisplayed');
      toggledEngravingImg.classList.remove('undisplayed');
    }
  }

  return (
    <div id='product'>
      <div className='picture-container'>
        <div className='picture-box'>
          <img id='product-pic' src={redKnife} alt='Chef Knife Red' />
          <input id='engraving-on-pic'
                 placeholder='Julia Child'
                 value={engraving}
          />
        </div>
      </div>
      <div className='product-details-box'>
        <div id='product-details'>
          <div className='directory'>
            <a href='/' className='directory-link dir'>Home</a>
            <i className="fas fa-chevron-right directory-link"></i>
            <a href='/' className='directory-link dir'>Knives</a>
            <i className="fas fa-chevron-right directory-link"></i>
            <a href='/' className='directory-link dir selected'>8 Inch Chef Knife</a>
          </div>
          <h2 className='product-name'>8 Inch Chef Knife</h2>
          <div className='rating-reviews'>
            <div className='stars'>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
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
            <div className='design-option engraving'>
              <div className='personalize-box flexed-ai-center'>
                <div className='fill-box'>
                  <div id='personalize-checkbox' className='design-detail' onClick={e => togglePersonalizeCheckbox(e)}>
                    <div id='checkbox-fill' className='red'></div>
                  </div>
                  <h4 className='personalize-text design-detail'>Personalize It</h4>
                </div>
                <img id='toggled-eng-img' className='engraving-img' src={engravingBlade} alt='Engraving Blade' />
              </div>
              <div id='engraving-details' className='undisplayed'>
                <h4 className='engraving-instruction'>Where would you like your engraving?</h4>
                <div className='engraving-options flexed-ai-center'>
                  <div className='engraving-option'>
                    <img className='engraving-img selected' src={engravingBlade} alt='Engraving Blade' />
                    <p className='eng-option-txt'>Blade: +$20</p>
                  </div>
                  <div className='engraving-option'>
                    <img className='engraving-img' src={engravingHandle} alt='Engraving Blade' />
                    <p className='eng-option-txt'>Handle: +$20</p>
                  </div>
                </div>
                <h4 className='engraving-instruction'>What would you like to engrave?</h4>
                <div className='engraving-text-box'>
                  <input className='engraving-input'
                        type='text'
                        maxLength='25'
                        placeholder='Enter Engraving'
                        value={engraving}
                        onChange={updateEngraving}
                  />
                  <h4 id='input-count'>{25 - engravingLength}</h4>
                </div>
                <p className='engraving-note'>Please check spelling and capitalization. Text will be engraved exactly as typed. Text will be right aligned under Made In logo.</p>
              </div>
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
    </div>
  )
}
