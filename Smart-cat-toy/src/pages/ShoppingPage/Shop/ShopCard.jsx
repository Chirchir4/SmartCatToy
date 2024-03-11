import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import PatentPending from "../../../assets/PatentPending.png"
const ShopCard = ({productImage}) => {

  const navigate=useNavigate()
  const [likeButton, setLikeButton] = useState(false)

 
  const viewProduct = (event) => {

    if (event.target.closest('.like-button')) {
      event.preventDefault();
    } else {
      navigate('/product');
    }
  };

  const handleLikeClick = () => {
    setLikeButton(!likeButton);
   
  };
  return (
    <div className="col-span-full md:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200 overflow-hidden" onClick={(event)=>viewProduct(event)}>
    <div className="flex flex-col h-full">
   
      
      <div className="relative">
      <div className="inline-flex items-center mt-2 ml-2">
              <img src={PatentPending} className=' w-20 h-18 lg:w-32 lg:h-24'/>
              </div>
        <div className='flex justify-center items-center'>
        <img className="w-3/5 " src={productImage} width="301" height="226" alt="Application 25" />
        </div>
         <button className="absolute z-50 top-0 right-0 mt-4 mr-4 like-button" onClick={()=>handleLikeClick()}>
            <div className={`text-slate-100  rounded-full ${likeButton ? 'bg-rose-600' : 'bg-slate-500'}`}>
              <span className="sr-only">Like</span>
              <svg className="h-8 w-8  fill-current" viewBox="0 0 32 32">
              <path d="M22.682 11.318A4.485 4.485 0 0019.5 10a4.377 4.377 0 00-3.5 1.707A4.383 4.383 0 0012.5 10a4.5 4.5 0 00-3.182 7.682L16 24l6.682-6.318a4.5 4.5 0 000-6.364zm-1.4 4.933L16 21.247l-5.285-5A2.5 2.5 0 0112.5 12c1.437 0 2.312.681 3.5 2.625C17.187 12.681 18.062 12 19.5 12a2.5 2.5 0 011.785 4.251h-.003z" />
            </svg>
            </div>
          </button>
      </div>
      {/* Card Content */}
      <div className="grow flex flex-col p-5">
        {/* Card body */}
        <div className="grow">
          <header className="mb-2">
            <a href="#0">
              <h3 className="text-lg text-slate-800 font-semibold mb-1">Smart Cat Toy</h3>
            </a>
            <div className="text-sm w-30 flex-wrap">Both adaptive and automated toy,
            <br/> bringing unparalleled joy and exercise to your feline friend.</div>
          </header>
        </div>
        {/* Rating and price */}
        <div className="flex flex-wrap justify-between items-center">
          {/* Rating */}
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
                <svg className="w-4 h-4 fill-current text-slate-300" viewBox="0 0 16 16">
                  <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                </svg>
              </button>
            </div>
            {/* Rate */}
            <div className="inline-flex text-sm font-medium text-amber-600">4.7</div>
          </div>
          {/* Price */}
        
        </div>
        <div>
            <div className="inline-flex text-sm font-medium mt-4 bg-emerald-100 text-emerald-600 rounded-full text-center px-2 py-0.5">$84.00</div>
          </div>
        {/* <div className='mt-4 flex justify-center'>
          <div> 
             <button className=" py-3 px-20  rounded-3xl w-full bg-color1 hover:bg-color2 text-white" onClick={()=> viewProduct()}>Buy Now</button></div>
            
            </div> */}
      </div>
    </div>
  </div>

  )
}

export default ShopCard