import React, { useEffect, useState } from 'react';
import {  useSelector } from "react-redux";

const ProductGallery = ({  photos,handlePhotoClick,handleNextClick,handlePrevClick}) => {

  const {selectedColorToy}=useSelector((state)=>state.cart)
 

  return (
    <div>
      <div>
        <div className='flex'>
      <button className='text-3xl font-medium text-slate-400 hover:text-blue-500'  onClick={()=>handlePrevClick()}>&lt; </button>
      <figure className="mb-6" style={{ width: '300px', height: '400px' }}>

  <img
    className="w-full h-full object-cover rounded-sm"
    src={selectedColorToy.img}
    alt="Product"
  />
    
</figure>
<button className='text-3xl text-slate-500 hover:text-blue-500'  onClick={()=>handleNextClick()}> &gt;</button>
</div>



      </div>
      <div className="flex items-center">
        <div className="mr-2">Color Choice:<span className='ml-2 text-lg' >  {selectedColorToy.color}</span></div>
        <div
          className="w-6 h-6 rounded"
          style={{ backgroundColor: selectedColorToy.color ,border:selectedColorToy.color === "white"?' 1px solid black':""}}
        ></div>
      </div>
      <div style={{ display: 'flex', overflowX: 'auto', marginTop: '20px' }}>
      <button className='text-lg font-medium' onClick={handlePrevClick}>&lt; </button>
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo.img}
            alt={`Product ${index + 1}`}
            style={{
              width: '70px',
              height: '50px',
              marginRight: '5px',
              cursor: 'pointer',
              border:
              selectedColorToy === photo
                ? '2px solid blue'
                : '2px solid transparent'// Highlight selected photo
            }}
            onClick={() => handlePhotoClick(photo)}
          />
        ))}
   
  



          <button className='text-lg font-medium'  onClick={handleNextClick}> &gt;</button>
      </div>
    </div>
  );
};

export default ProductGallery;
