import React, { useEffect, useRef, useState } from 'react';
import User03 from '../../../assets/profile1.jpeg';
import User04 from '../../../assets/profile2.jpeg';
import User05 from '../../../assets/profile3.jpeg';
import User07 from '../../../assets/profile4.jpeg';
import CatToy from '../../../assets/CatToy.png'
import purpletoy from '../../../assets/purpletoy.png'
import pinktoy from '../../../assets/pinktoy.png'
import whitetoy from '../../../assets/whitetoy.png'
import greentoy from '../../../assets/greentoy.png'
import yellowtoy from '../../../assets/yellowtoy.png'
import bluetoy from '../../../assets/bluetoy.png'
import ProductGallery from './ProductGallery';
import {useNavigate} from 'react-router-dom'
import FAQ from './FAQ';
import { useDispatch, useSelector } from "react-redux";
import { addCartItems, openCart } from '../../../redux/cart/cart.actions';
import { setCartItems, setCartStatus, setSelectedColorToy, setStateModalOpen } from '../../../redux/cart/cart.slice';
import SelectStateModal from './SelectStateModal';
import { CustomerReviews } from '../../utils/CustomerReviews';
import Reviews from './Reviews';


function Product() {
const navigate=useNavigate()
const dispatch=useDispatch()
const dropdown = useRef(null);

const cartItems= JSON.parse(localStorage.getItem("cartItems") || "[]");
const {selectedState}=useSelector((state)=>state.cart)
  const photos=[
    {img:  bluetoy,
    color:"blue"},
    {img:  purpletoy,
      color:"purple"},
      {img:  yellowtoy,
        color:"gold"},
        {img:  greentoy,
          color:"green"},
          {img:  pinktoy,
            color:"pink"},
            {img:  whitetoy,
              color:"white"},
  ]
 
  
  const {selectedColorToy}=useSelector((state)=>state.cart)
  useEffect(() => {
 dispatch(setSelectedColorToy(photos[0]))
  }, [])
  

  const backToListing=()=>{
    navigate("/shop")
  }

  const handlePhotoClick = (photo) => {
  
    dispatch(setSelectedColorToy(photo))
  };
  const handlePrevClick = () => {
    const currentIndex = photos.findIndex((photo) => photo.color === selectedColorToy.color);
    const newIndex = currentIndex > 0 ? currentIndex - 1 : photos.length - 1;
    dispatch(setSelectedColorToy(photos[newIndex]));
  };
  
  const handleNextClick = () => {
    const currentIndex = photos.findIndex((photo) => photo.color === selectedColorToy.color);
    const newIndex = currentIndex < photos.length - 1 ? currentIndex + 1 : 0;
    dispatch(setSelectedColorToy(photos[newIndex]));
  };
 
  const addToCart=()=>{
    const existingCartItem = cartItems && cartItems.find((item) => 
     item.color === selectedColorToy.color
    );
    if (existingCartItem) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.color === selectedColorToy.color) {
          return {
            ...item,
            quantity: parseInt(item.quantity) + 1,
          };
        } else {
          return item;
        }
      });
    
    
    
      dispatch(addCartItems(updatedCartItems));
    
    
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
     
      return updatedCartItems;
    }
    
      let newCartItem={color:selectedColorToy.color, img:selectedColorToy.img, quantity:1, price:84, discount:15, total:71.4,shipping:8.20}
     
    
    let  updatedCartItems = [...cartItems, newCartItem];

    
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
   
      dispatch(addCartItems(cartItems));
  }
  
  const handleBuyNow = (e) => {
    e.stopPropagation();
    if(!selectedState){

      dispatch(setStateModalOpen(true))
    
    }
    else{
      dispatch(openCart(true))
      addToCart()
    }   
    }
;

 

 
  return (
    <div className="flex h-full overflow-hidden mt-40  ">
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full">
          
            {/* Page content */}
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:space-x-8 xl:space-x-16">
              {/* Content */}
              <div>
                <div className="mb-3">
                  <div className="text-sm font-medium text-indigo-500 hover:text-indigo-600 cursor-pointer xl:-ml-11" onClick={()=>backToListing()}>&lt;- Back To Listing</div>
                </div>
          

                {/* Image */}
               
         <ProductGallery  photos={photos}  handlePhotoClick={handlePhotoClick} handleNextClick={handleNextClick} handlePrevClick={handlePrevClick}/>
                {/* Product content */}
                <div>
                  <h2 className="text-xl leading-snug text-slate-800 font-bold mb-6 mt-6 mr-2"> Specifications<span ml-4> :</span></h2>
                
                  <ol className="list-disc list-inside space-y-1 mb-6">   
                    <li>Two configurations: Hang on to door knob or lay on floor</li>
                    
                    <li>Body material: Bio-based PLA and/or PETG plastic</li>
                    <li>Belt material: TPE</li>
                    <li>Weight:  288 grams  (without batteries)</li>
                    <li>Size: TBD </li>
                    <li>Two power sources: 3x AA battery or USB-C ( USB-C not included)</li>
                    <li>Colors: Made to order / select your own color</li>
                  </ol>
                  <div>Package includes: 1 x Max Play Smart Cat Toy</div>
                  
                </div>

                <hr className="my-6 border-t border-slate-200" />

                {/* Reviews */}
              <div><Reviews/></div>
                <hr className="my-6 border-t border-slate-200" />
                {/* Related */}
                <hr className="my-6 border-t border-slate-200" />
                <h2 className="text-xl leading-snug text-slate-800 font-bold mb-2"> FAQs</h2>
                <div className='flex-col gap-6 mb-6'>
               <div>
               <FAQ/>
             </div>
              </div>
              </div>
              <div>
                <div className="bg-white p-6 shadow-lg rounded-sm border border-slate-200 lg:w-72 xl:w-80 sm:w-1/2">      
                <div className="text-xl text-slate-800 font-semibold mb-1  items-center">Smart Cat Toy</div>
                <div className="flex items-center space-x-2 mr-2">

                      {/* Stars */}
                      <div className="flex space-x-1">
                        <button>
                          <span className="sr-only">1 star</span>
                          <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                        </button>
                        <button>
                          <span className="sr-only">2 stars</span>
                          <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                        </button>
                        <button>
                          <span className="sr-only">3 stars</span>
                          <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                        </button>
                        <button>
                          <span className="sr-only">4 stars</span>
                          <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                        </button>
                        <button>
                          <span className="sr-only">5 stars</span>
                          <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                        </button>
                      </div>
                      {/* Rate */}
                      <div className="inline-flex text-sm font-medium text-amber-600">5</div>
                    </div>
                    <div className='text-md text-emerald-500 font-semibold mb-1 mt-2'>$84.00</div>
                  
                    <div className='text-sm text-slate-800 mb-4'>MaxPlay Smart Cat Toy Selected: 1 pc</div>
                  <div className="mb-4">
                    <button
                       ref={dropdown}
                    className="px-4 py-2 rounded-xl w-full bg-color1 hover:bg-color2 text-white"  onClick={(e)=>handleBuyNow(e)}>Add To Cart </button>
                  </div>
                  <SelectStateModal addToCart={addToCart}  />
                  <div className="text-xs text-slate-500 italic text-center"> <a className="underline hover:no-underline" href="/terms">Terms</a> and conditions apply.</div>
                </div>
              </div>

            </div>

          </div>
        </main>

      </div>

    </div>
  );
}

export default Product;