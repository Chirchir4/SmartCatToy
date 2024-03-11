import React, { useState } from 'react';
import catToy from '../../../assets/bluetoy.png'
import NavBar from '../../partials/Navbar';
import ShopCard from './ShopCard';
import ShopSidebar from './ShopSideBar';
import Footer from '../../partials/Footer';
import {useNavigate} from "react-router-dom"

function Shop() {
const navigate=useNavigate()
   
  return (
    <div className="flex mt-10 ml-0 lg:ml-10">

      {/* Content area */}
      <div className=" flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <main className='flex justify-center items-center '>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Page header */}
            <div className="mb-5 mt-20 flex justify-center">

              {/* Title */}
              <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">Find the right toy for your cat </h1>

            </div>
            {/* Page content */}
            <div className="flex flex-col space-y-10 sm:flex-row sm:space-x-6 sm:space-y-0 md:flex-col md:space-x-0 md:space-y-10 xl:flex-row xl:space-x-6 xl:space-y-0 mt-9">
  {/* Sidebar */}
<div className='w-full  md:w-fit lg:1/3'>
              {/* <ShopSidebar/> */}
              </div>
              <div>
               
                <div>
                  <div className="flex flex-wrap gap-4 ml-0 md:ml-2 sm:gap-2 lg:w-3/4">
                   
                    <ShopCard productImage={catToy} />
                
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

    </div>
  
  );
}

export default Shop;