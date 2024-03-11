import React, { useRef, useState } from 'react'
import { CustomerReviews } from '../../utils/CustomerReviews'
import ReactPlayer from 'react-player/lazy';
const Reviews = () => {

  
  return (
    <div>
    <h2 className="text-xl leading-snug text-slate-800 font-bold mb-2">Featured Reviews ({CustomerReviews.length})</h2>
    <ul className="space-y-5 my-6">
      {/* Review */}
      {CustomerReviews.map((review)=>{
 
   return(
      <li>
        <div className="flex items-center mb-2">
          <img className="w-8 h-8 rounded-full mr-3" src={review.image} width="32" height="32"  />
          <div>
            <div className="text-sm font-semibold text-slate-800 mb-1">{review.name}</div>
            {/* Rating */}
            <div className="flex items-center space-x-2">
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
              <div className="inline-flex text-sm font-medium text-amber-600">{review.rating}</div>
            </div>
          </div>
        </div>
        <div className="text-sm italic">{review.message}</div>
      {review.video &&   <div className='mt-2 relative rounded-lg'>
      
        <ReactPlayer
        // ref={playerRef}
        url={review.video}
        width="200px"
        height="180px"
     
        controls={true}
     
        />
        <div>

        </div>
        </div>}
      </li>)
        })}
 
    </ul>

  </div>
  )
}

export default Reviews