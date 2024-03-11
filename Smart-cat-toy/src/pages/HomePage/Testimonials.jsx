
import React, { useState } from 'react';
import { CustomerReviews } from '../utils/CustomerReviews';
const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);



  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : CustomerReviews.length - 1));
  };

  const handleNextClick = () => {
 
    setActiveIndex((prevIndex) => (prevIndex < CustomerReviews.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <section className="w-full h-auto flex flex-col items-start justify-center relative lg:px-24 md:px-10 px-6 mt-36 gap-5">
      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32 text-center">
          <h2 className="mb-12 text-3xl font-bold">Testimonials</h2>

          <div id="carouselExampleCaptions" className="relative" data-te-carousel-init data-te-carousel-slide>
            <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
              {CustomerReviews.map((testimonial, index) => (
                <div
                  key={index}
                  className={`relative float-left w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none ${
                    index === activeIndex ? 'block' : 'hidden'
                  }`}
                  data-te-carousel-active
                  data-te-carousel-item
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <img className="mx-auto mb-6 rounded-full shadow-lg dark:shadow-black/20 w-[150px]" src={testimonial.image}  />
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
                      <h5 className="mb-2 text-lg font-bold">{testimonial.name}</h5>
                      <p className="mb-4 font-medium text-neutral-700 dark:text-neutral-400"></p>
                      <p className="mb-6 text-neutral-800 dark:text-neutral-300">{testimonial.message}</p>
                      <div className="flex items-center  justify-center space-x-2">
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
              <div className="inline-flex text-sm font-medium text-amber-600">{testimonial.rating}</div>
            </div>
                    </div>
                  </div>
                </div>
              ))}
                <button
    class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none dark:text-white dark:opacity-50 dark:hover:text-white dark:focus:text-white"
    type="button"
    data-te-target="#carouselExampleCaptions"
    data-te-slide="prev"
    onClick={handlePrevClick}>
    <span class="inline-block h-8 w-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </span>
    <span
      class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Previous</span
    >
  </button>
           <button
    class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none dark:text-white dark:opacity-50 dark:hover:text-white dark:focus:text-white"
    type="button"
    data-te-target="#carouselExampleCaptions"
    data-te-slide="next"
    onClick={handleNextClick}>
    <span class="inline-block h-8 w-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </span>
    <span
      class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Next</span
    >
  </button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Testimonials;

