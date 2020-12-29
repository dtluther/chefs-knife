import React, { useState } from "react";
import redKnife from '../assets/chef_knife_red.webp'
// import engravingHandle from '../assets/engraving_handle.webp'
// import engravingBlade from '../assets/engraving_blade.webp'
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

  const updateSelect = e => {
    const selected = e.target;
    const newVal = selected.textContent;
    const selectMenu = document.querySelector('#select-menu');   
    // remove selected highlight
    document.querySelectorAll('.select-option').forEach(el => {
      el.classList.remove('selected');
    })
    // add to the new one
    selected.classList.add('selected');
    const chosenQty = document.getElementById('chosen-qty');
    chosenQty.textContent = newVal;
    const dropdown = document.querySelector('#select-dropdown');   
    selectMenu.classList.remove('active');
    dropdown.classList.add('undisplayed')

  }

  const toggleDropdown = () => {
    const dropdown = document.querySelector('#select-dropdown');   
    const selectMenu = document.querySelector('#select-menu');   
    const purchaseActions = document.querySelector('#purchase-options');
    const selectChevron = document.querySelector('#select-chevron');
    if (dropdown.classList.contains('undisplayed')) {
      dropdown.classList.remove('undisplayed');
      selectMenu.classList.add('active');
      purchaseActions.classList.add('space-bottom');
      selectChevron.classList = 'fas fa-chevron-up';
    } else {
      dropdown.classList.add('undisplayed');
      selectMenu.classList.remove('active');
      purchaseActions.classList.remove('space-bottom');
      selectChevron.classList = 'fas fa-chevron-down';
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
                      updateSelect={updateSelect}
                      toggleDropdown={toggleDropdown}

      />
    </div>
  )
}
