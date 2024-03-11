import React from 'react'
import { TermsContent } from '../utils/TermsContent'

const Terms = () => {
  return (
    <div className=" h-full overflow-hidden mt-40  mx-10 lg:mx-40 justify-center ">
         <h1 className='text-2xl font-bold'>Terms and Conditions</h1>
        {TermsContent.map((item)=>{
            return(
                <div className='flex-col'>               
                <p>
                    <div className='font-medium text-lg'> {item.title}</div> 
                    {item.condition}
                    </p>
           </div>
            )
        })}
 
    </div>
  )
}

export default Terms