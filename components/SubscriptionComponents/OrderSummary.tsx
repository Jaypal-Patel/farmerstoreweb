"use client"
import React, { useState } from 'react'
import SubscriptionModal from './SubscriptionModal'


const OrderSummary = () => {
    const [isSuccess,setIsSuccess]=useState(false)
    const [showModal, setShowModal] = useState(false);
    const textStlye=`text-[#727272] text-sm font-medium`
    const amountStyle="text-black font-semibold text-sm"
  return (
    <div className={`bg-[#FDF5DE] lg:p-5 p-3 rounded-md flex flex-col lg:gap-10 gap-6`}>
        <div className={`flex flex-col gap-6`}>
           <div className={`flex flex-col gap-1`}>
           <h3 className={`text-base font-semibold`}>Order summary</h3>
            <p className={`text-primary text-sm`}>You save Rs. 30/ month on subscription</p>
           </div>
            <div className={`flex flex-col gap-3`}>
                <div className={`flex items-center justify-between `}>
                    <h5 className={`${textStlye}`}>Price</h5>
                    <h5 className={`${amountStyle}`}>Rs. 399</h5>
                </div>
                <div className={`flex items-center justify-between `}>
                    <h5 className={`${textStlye}`}>Subtotal</h5>
                    <h5 className={`${amountStyle}`}>Rs. 399</h5>
                </div>
                <div className={`flex items-center justify-between `}>
                    <h5 className={`${textStlye}`}>Taxes</h5>
                    <h5 className={`${amountStyle}`}>Rs. 20</h5>
                </div>
                <div className={`w-full h-1 border-b border-b-[#727272]`}></div>
                <div className={`flex items-center justify-between `}>
                    <h5 className={`text-base font-semibold`}>Total</h5>
                    <h5 className={`text-base font-semibold`}>Rs. 419</h5>
                </div>
            </div>
        </div>
        <button onClick={()=>setShowModal(true)} className={`text-white font-semibold text-sm bg-[#4B2C10] rounded-md w-full lg:py-4 py-3`}>Proceed</button>
        {showModal&&<SubscriptionModal setShowModal={setShowModal}/>}
    </div>
  )
}

export default OrderSummary