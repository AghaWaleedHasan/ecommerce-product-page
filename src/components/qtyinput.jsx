import React from 'react'

const QtyInput = props => {
  const {qty, setQty} = props;

  return (
    <div className='flex flex-row w-40 h-10 border-solid border border-gray-300'>
        <div className=' flex justify-center items-center w-10 h-full border-r border-gray-300 border-solid cursor-pointer'
             onClick={() => setQty(qty > 0 ? qty-1 : 0)} > - </div>
        <div className=' text-sm flex justify-center items-center w-20 h-full'>{qty}</div>
        <div className=' flex justify-center items-center w-10 h-full border-l border-gray-300 border-solid cursor-pointer'
             onClick={() => setQty(qty+1)}> + </div>
    </div>
  )
}

export default QtyInput