import React from 'react'

const CartState = props => {
  const { cart } = props;
  
  if (cart.length === 0) {
    return (
        <div className='w-100 h-24 flex flex-col justify-between text-center pt-4 tracking-wider'>
            <span className='text-xs'>Your cart is currently empty.</span>
            <button className='bg-white rounded-none border-solid border-1 h-10 border-gray-500 text-sm font-bold tracking-wider'>CONTINUE SHOPPING</button>
        </div>
    )
  } else {
    return (
        <div>

        </div>
    )
  }
}

export default CartState