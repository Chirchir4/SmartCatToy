import React, { useEffect, useMemo, useRef, useState } from 'react'
import CatToy from '../../../assets/CatToy.png'
import Transition from '../../utils/Transition'
import { useDispatch, useSelector } from "react-redux";
import {ShoppingCart} from "@phosphor-icons/react";
import { setCartItems, setCartStatus } from '../../../redux/cart/cart.slice';
import { openCart } from '../../../redux/cart/cart.actions';

const Cart = ({align}) => {
  const trigger = useRef(null);
  const dropdown = useRef(null);
  const dispatch=useDispatch()

  const [newQuantity, setNewQuantity] = useState();
  const cartItems= JSON.parse(localStorage.getItem("cartItems") || "[]");
  const {cartStatus}=useSelector((state)=>state.cart)
  const {selectedState}=useSelector((state)=>state.cart)
  
    // close on click outside
    useEffect(() => {
      const clickHandler = ({ target }) => {
        if (!dropdown.current) return;
        if (!cartStatus || dropdown.current.contains(target) || trigger.current.contains(target)) return;
        handleDropdownOpen(false)
 
      };
      document.addEventListener('click', clickHandler);
      return () => document.removeEventListener('click', clickHandler);
    });
  
    // close if the esc key is pressed
    useEffect(() => {
      const keyHandler = ({ keyCode }) => {
        if (!cartStatus || keyCode !== 27) return;
        handleDropdownOpen(false)
     
      };
      document.addEventListener('keydown', keyHandler);
      return () => document.removeEventListener('keydown', keyHandler);
    });
    const handleDropdownOpen=(status)=>{
      
      dispatch(openCart(status))
    }
    const handleCheckout=()=>{
      dispatch(setCartItems(""))
      localStorage.removeItem("cartItems")
    }
   
    const priceBeforeShipping=useMemo(() => {
      return cartItems.reduce((acc, item) => {
        const discountedPrice = item.price * (1 - item.discount / 100);
        const afterTaxes = item.price * (selectedState.rate / 100) + discountedPrice;
        let itemSubtotal = item.quantity * afterTaxes;    
        return acc + itemSubtotal;
      }, 0);
     }, [cartItems, selectedState.rate]);
  

     
    const totalCost = () => {
      if (priceBeforeShipping < 150) {
        return (priceBeforeShipping + 8.2).toFixed(2);
      } else {
        return priceBeforeShipping.toFixed(2);
      }
    };
    
  
    const changeQuantity = (color, value) => {
      setNewQuantity((prevState) => ({
        ...prevState,
      value
      }));
    
      const updatedCartItems = cartItems.map((item) => {
        if (item.color === color) {
          let newQuantity = item.quantity + value;
          if (newQuantity <= 0) {
            newQuantity = 1;
          }
          return {
            ...item,
            quantity: newQuantity
          };
        } else {
          return item;
     } })
  
    
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };
 
    const handleRemoveCartItem=(e,selectedItem)=>{
     e.stopPropagation()
      let filteredItems=cartItems.filter((item)=>{
       return item.color !== selectedItem.color
      })
  dispatch(setCartItems(filteredItems))
      localStorage.setItem("cartItems",JSON.stringify(filteredItems))
    }
 
    
  return (
      <div className="relative inline-flex  " >
    <button
      ref={trigger}
      className={`w-8 h-8 flex items-center justify-center  hover:bg-slate-200 transition duration-150 rounded-full ${cartStatus && 'bg-slate-200'}`}
      aria-haspopup="true"
      onClick={() => handleDropdownOpen(!cartStatus)}
      aria-expanded={cartStatus}
    >
      <span className="sr-only">Cart</span>

  <div> <ShoppingCart size={25} color="currentColor"  /></div>
  
  
      {cartItems.length!==0  && <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-rose-500 border-2 border-white rounded-full"></div>}
    </button>

    <Transition
      className={`origin-top-right z-10 absolute top-full -mr-48 sm:mr-0 min-w-80 bg-slate-100 border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${align === 'right' ? 'right-0' : 'left-0'}`}
      show={cartStatus}
      enter="transition ease-out duration-200 transform"
      enterStart="opacity-0 -translate-y-2"
      enterEnd="opacity-100 translate-y-0"
      leave="transition ease-out duration-200"
      leaveStart="opacity-100"
      leaveEnd="opacity-0"
    >
         <div
          ref={dropdown}
          onFocus={() => handleDropdownOpen(true)}
          onBlur={() => handleDropdownOpen(false)}
        >
    <div className="lg:sticky lg:top-16  bg-slate-50 lg:overflow-x-hidden lg:overflow-y-hidden no-scrollbar lg:shrink-0 border-t lg:border-t-0 lg:border-l border-slate-200 lg:w-[320px] xl:w-[352px] 2xl:w-[calc(352px+80px)] lg:h-[calc(100vh-64px)]">
      <div className="py-4 px-4 lg:px-8 2xl:px-12">
        <div className="max-w-sm mx-auto lg:max-w-none">
          <h2 className="text-xl text-slate-800 font-bold mb-2">Order Summary</h2>
          {cartItems.length!==0  &&   <div className="space-y-6">

{/* Order Details */}
<div>
<div className='flex justify-between px-4 text-slate-500'>
  <div>img</div>
  <div>color</div>
  <div>quantity</div>
  <div></div>
</div>
  {/* Cart items */}
  <ul>
  <div className='overflow-y-scroll h-52 w-full'>
    {/* Cart item */}
    {cartItems.map((items)=>{ 
  return(

    <div className="flex items-center justify-between py-0 border-b border-slate-200">
      <div className="block mr-2 xl:mr-4 shrink-0" >
        <img className="w-16 xl:w-20" src={items.img}  width="200" height="132" alt="Product 01" />
      </div>
      <div className='mr-6'>
        <div >
          <h4 className="text-sm font-medium text-slate-800 ">    {items.color}</h4>
        </div>
      </div>
      <div  className="sm:px-1 sm:first:pl-1 sm:last:pr-1 py-1 whitespace-nowrap mr-2">
        <div className="font-medium text-slate-500 flex gap-2 items-center">
        <div className='w-6 h-6 rounded-full bg-slate-300 flex items-center justify-center text-slate-900 hover:bg-blue-300 cursor-pointer' onClick={() => changeQuantity(items.color, 1)}>+</div>
       <div>{items.quantity}</div>
<div className='w-6 h-6 rounded-full bg-slate-300  cursor-pointer flex items-center justify-center text-slate-900 hover:bg-blue-300 ' onClick={() => changeQuantity(items.color, -1)}>-</div>
  </div></div>
  <div className='pr-1'>
     <button className="btn border-slate-200 hover:border-slate-300" onClick={(e)=>handleRemoveCartItem(e,items)}>
                        <svg className="w-3 h-3 fill-current text-rose-500 shrink-0" viewBox="0 0 16 16">
                          <path d="M5 7h2v6H5V7zm4 0h2v6H9V7zm3-6v2h4v2h-1v10c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1V5H0V3h4V1c0-.6.4-1 1-1h6c.6 0 1 .4 1 1zM6 2v1h4V2H6zm7 3H3v9h10V5z" />
                        </svg>
                      </button></div>
    </div>
  
   )})}
  </div>
  </ul>
  {/* Fees, discount and total */}
  <ul>
  <li className="flex items-center justify-between py-1 mt-1 border-b border-slate-200">
      <div className="text-sm">State</div>
      <div className="text-sm font-medium text-slate-800 ml-2">{selectedState.state} </div>
    </li>
    <li className="flex items-center justify-between py-1 mt-2 border-b border-slate-200">
      <div className="text-sm">Taxes</div>
      <div className="text-sm font-medium text-slate-800 ml-2"><span className='mr-2'>{selectedState.rate}%</span> </div>
    </li>
    <li className="flex items-center justify-between py-1 mt-2 border-b border-slate-200">
      <div className="text-sm">Shipping Fee</div>
      <div className="text-sm font-medium text-slate-800 ml-2">
        {totalCost()> 150 && <div>    <span className="text-xs inline-flex whitespace-nowrap font-medium uppercase bg-amber-300 text-slate-500 rounded-full text-center px-2.5 ">
        Free above $150
        </span></div>}
        {totalCost()< 150 && <div>$8.2</div>}
      
        </div>
    </li>
    <li className="flex items-center justify-between py-1 border-b border-slate-200">
      <div className="flex items-center">
        <span className="text-sm mr-2">Discount</span>
        <span className="text-xs inline-flex whitespace-nowrap font-medium uppercase bg-slate-200 text-slate-500 rounded-full text-center px-2.5 py-1">
         Limited offer
        </span>
      </div>
      <div className="text-sm font-medium text-slate-800 ml-2">15%</div>
    </li>
    <li className="flex items-center justify-between py-1 border-b border-slate-200">
      <div className="text-sm">Total</div>
      <div className="text-sm font-medium text-emerald-600 ml-2">{totalCost()}</div>
    </li>
  </ul>
</div>
<div className="mt-1">
  <div className="mb-4">
    <button className=" py-2 px-0  rounded-md w-full bg-color1 hover:bg-color2 text-white" onClick={()=>handleCheckout()}>
 Checkout
    </button>
  </div>
</div>

</div> }
{cartItems.length===0  &&   <div className="space-y-6">
  <div>Cart is Empty</div>
  </div>}
        
        </div>
      </div>
    
  </div>
  </div>
  </Transition> </div>
  )
}

export default Cart