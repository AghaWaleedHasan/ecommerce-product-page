import React from 'react'
import CartState from './cartstate';

const CartBar = props => {
  const { cartOpen, setCartOpen } = props;

  return (
    <div>
      <div className={(cartOpen ? 'z-10 bg-black fixed right-0 top-0 w-screen h-screen opacity-70' : '')}>
      </div>
      <div className={ (cartOpen ? 'translate-x-0 ' : 'translate-x-full ') + ' z-20 opacity-100 backdrop-blur h-screen w-3/4 md:w-1/2 lg:w-1/3 2xl:w-1/4 fixed flex flex-col space-y-2 right-0 top-0 bg-gray-100 py-8 px-4 duration-300'}>
          <div className='h-20 w-full flex flex-col justify-between pb-4 border-b-2 border-solid border-gray-200 border-opacity-50'>
              <div className='flex justify-end text-xs cursor-pointer'
                  onClick={() => setCartOpen(!cartOpen)}>
                  CLOSE
              </div>
              <div className='font-bold text-xs tracking-wider font'>
                  SHOPPING CART:
              </div>
          </div>
          <CartState cart={[]} />
      </div>
    </div>
  )
}

export default CartBar