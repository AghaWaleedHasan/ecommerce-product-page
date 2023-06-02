import React from 'react'
import img1 from '../assets/images/prodimage1.webp'
import QtyInput from './qtyinput';
import { RxRulerHorizontal } from 'react-icons/rx'
import { BsChevronDown } from 'react-icons/bs'
import img2 from '../assets/images/prodimage2.webp'
import img4 from '../assets/images/prod4.webp'
import img3 from '../assets/images/prodimage3.webp'
import Carousel from './carousel';

const ProductPage = () => {
  const sizes = ['S', 'M', 'L', 'XL']

  const [selectedSize, setSelectedSize] = React.useState(null)
  const [selectedImg, setSelectedImg] = React.useState(img1)
  const [qty, setQty] = React.useState(0)

  return (
    <div className={'bg-gray-100 w-screen h-full px-20 md:px-14 lg:px-10 py-4'}>
        <div className='text-xs text-gray-400 mb-8 mt-4'>
            Home {'>'} Black Cuban Shirt
        </div>
        <div className=' flex flex-col md:flex-row md:space-x-6 lg:mt-12 mb-24'>
            <div className=' hidden lg:flex lg:flex-col lg:w-1/12 justify-center items-end space-y-6'>
                <div onClick={() => setSelectedImg(img1)} className=' h-[calc(87.5px)] w-[calc(70px)] cursor-pointer'>
                    <img src={img1} />
                </div>
                <div onClick={() => setSelectedImg(img2)} className=' h-[calc(87.5px)] w-[calc(70px)] cursor-pointer'>
                    <img src={img2} />
                </div>
                <div onClick={() => setSelectedImg(img3)} className=' h-[calc(87.5px)] w-[calc(70px)] cursor-pointer'>
                    <img src={img3} />
                </div>
                <div onClick={() => setSelectedImg(img4)} className=' h-[calc(87.5px)] w-[calc(70px)] cursor-pointer'>
                    <img src={img4} />
                </div>
            </div>
            <div className=' w-full md:w-1/2 lg:w-[calc(41.66%)] mb-6 lg:mb-0' >
                <img src={selectedImg} className=' duration-200' />
            </div>
            <div className='flex flex-col space-y-6 w-full lg:w-1/2'>
                <span className='font-semibold text-2xl tracking-wide flex justify-start items-start'>
                    Black Cuban Shirt
                </span>
                <div className='flex flex-col space-y-2 text-sm'>
                    <div><span className='font-semibold'>Availability: </span>In stock</div>
                    <div><span className='font-semibold'>Delivery: </span>2 to 4 days</div>
                </div>
                <div className='font-semibold text-xl tracking-wide flex justify-start items-start'>
                    Rs. 2600.00
                </div>
                <div className='flex flex-col space-y-2'>
                    <span className='text-sm font-semibold'>Size<span className=' text-red-500'>*</span></span>
                    <div className=' flex space-x-4'>
                        {sizes.map(size => (
                            <div className={(selectedSize === size ? 'border-2 border-black' : 'border border-gray-200') + ' cursor-pointer font-semibold text-xs w-9 h-9 rounded-full border-solid flex justify-center items-center'}
                                 onClick={() => setSelectedSize(size)}>
                                {size}
                            </div>                            
                        ))}
                    </div>
                    <span className='text-sm font-semibold'>Quantity:</span>
                    <div>
                        <QtyInput qty={qty} setQty={setQty} />
                    </div>
                </div>
                <div className='flex space-x-2 items-center cursor-pointer'>
                        <RxRulerHorizontal size={24} /> <span>Size chart</span>
                </div>
                <div className='w-full flex flex-col space-y-6'>
                    <button className=' h-10 w-full lg:w-1/2 bg-black text-white font-bold text-sm tracking-wider'>ADD TO CART</button>
                    <button className=' h-10 w-full border border-black border-solid font-bold text-sm tracking-wider'>BUY IT NOW</button>
                </div>
                <div className='flex flex-col pt-6'>
                    <div className='w-full flex justify-between items-center font-bold pb-3'>
                        <span>DESCRIPTION</span><BsChevronDown color='gray'/>
                    </div>
                    <div className='w-full flex justify-between items-center font-bold pt-3 border-t border-solid border-gray-200'>   
                        <span>CUSTOMER REVIEWS</span><BsChevronDown color='gray'/>
                    </div>
                </div>
            </div>
        </div>
        <div className='font-bold flex flex-col space-y-8'>
           <span className='px-20'>RELATED PRODUCTS</span> 
           <div className=''>
               <Carousel />            
           </div>

        </div>
    </div>
  )
}

export default ProductPage