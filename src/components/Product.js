import React, { useState } from "react";
import redKnife from '../assets/chef_knife_red.webp'
import { ProductDetails } from "./ProductDetails";

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
                 className='undisplayed'
                 placeholder='Clark Griswold'
                 value={engraving}
                 readOnly
          />
        </div>
      </div>
      <ProductDetails engraving={engraving}
                      engravingLength={engravingLength}
                      updateEngraving={updateEngraving}
                      togglePersonalizeCheckbox={togglePersonalizeCheckbox}
      />
    </div>
  )
}
