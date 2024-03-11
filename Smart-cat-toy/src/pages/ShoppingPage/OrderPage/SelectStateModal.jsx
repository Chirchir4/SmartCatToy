import React, { useState } from 'react'
import ModalBasic from '../../../atoms/BasicModal';
import StatesDropdown from './StatesDropdown';
import {useSelector,useDispatch} from 'react-redux'
import { openCart } from '../../../redux/cart/cart.actions';
import { setStateModalOpen } from '../../../redux/cart/cart.slice';
const SelectStateModal = ({addToCart}) => {

  const dispatch=useDispatch()
  const {stateModalOpen}=useSelector((state)=>state.cart)
  
  const handleOpenCart=(e)=>{
    e.stopPropagation();
    addToCart()
    dispatch(setStateModalOpen(false))

     dispatch(openCart(true))


  }
  return (
    <div>
      <ModalBasic id="feedback-modal" modalOpen={stateModalOpen}  title="Send Feedback">
    {/* Modal content */}
    <div className="px-5 py-4">
      <div className="text-sm">
        <div className="font-medium text-slate-800 mb-3">Please Select the state you are in</div>
      </div>
    
      <div className="space-y-8 mt-8 mb-80 w-full flex ">
        <div>
        <StatesDropdown />
        </div>

      
       
      </div>
    </div>
    {/* Modal footer */}
    <div className="px-5 py-4 border-t border-slate-200">
      <div className="flex flex-wrap justify-end space-x-2">
        <button className="btn-sm border-slate-200 hover:border-slate-300 text-slate-600 px-4 rounded-sm" onClick={(e) => { e.stopPropagation(); dispatch(setStateModalOpen(false)); }}>Cancel</button>
        <button className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white px-4 rounded-sm" onClick={(e) => { handleOpenCart(e)}}>Send</button>
      </div>
    </div>
    </ModalBasic></div>
  )
}

export default SelectStateModal