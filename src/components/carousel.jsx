import React from 'react'
import img2 from '../assets/images/prodimage2.webp'
import img4 from '../assets/images/Grey Trousers.webp'
import img1 from '../assets/images/prodimage1.webp'
import img3 from '../assets/images/prodimage3.webp'
import img5 from '../assets/images/Black Trouser.webp'
import img6 from '../assets/images/Grey Trousers.webp'
import img7 from '../assets/images/Purple Cuban Shirt.webp'
import img8 from '../assets/images/Red Cuban Co-ord Set.webp'
import img9 from '../assets/images/Wornout Black Tshirt.webp'
import img10 from '../assets/images/Wornout Dark Navy Tshirt.webp'

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const Carousel = () => {

  const slideLeft = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideRight = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500
  }

  const changeSliderColor = target => {
    var element = document.getElementById(target)
    element.style.color="white";
    element.color='white'
  }

  const unchangeSliderColor = target => {
    var element = document.getElementById(target)
    element.style.color="black";
    element.color='black'
  }

  return (
    <div className='relative flex items-center space-x-10 px-10 mb-8'>
        <span onClick={() => slideLeft()} onMouseOver={() => changeSliderColor('left-scroller')} onMouseOut={() => unchangeSliderColor('left-scroller')} className='cursor-pointer bg-white w-10 h-10 flex items-center justify-center rounded-full border border-solid border-black hover:bg-black -translate-y-12'><AiOutlineLeft id='left-scroller' size={18} /></span>
        <div
        id='slider'
        className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
            <div className='inline-block w-60 h-96 mr-20'>
                <img src={img5} />
                <div className='flex flex-col space-y-2 mt-6 text-center'>
                    <span className=' text-sm font-normal'>Wornout Black Tshirt</span>
                    <span className='text-md'>Rs2950.00</span>
                </div>
            </div>
            
            <div className='inline-block w-60 h-96 mr-20'>
                <img src={img6} />
                <div className='flex flex-col space-y-2 mt-6 text-center'>
                    <span className=' text-sm font-normal'>Wornout Black Tshirt</span>
                    <span className='text-md'>Rs2950.00</span>
                </div>
            </div>

            <div className='inline-block w-60 h-96 mr-20'>
                <img src={img7} />
                <div className='flex flex-col space-y-2 mt-6 text-center'>
                    <span className=' text-sm font-normal'>Wornout Black Tshirt</span>
                    <span className='text-md'>Rs2950.00</span>
                </div>
            </div>

            <div className='inline-block w-60 h-96 mr-20'>
                <img src={img8} />
                <div className='flex flex-col space-y-2 mt-6 text-center'>
                    <span className=' text-sm font-normal'>Wornout Black Tshirt</span>
                    <span className='text-md'>Rs2950.00</span>
                </div>
            </div>

            <div className='inline-block w-60 h-96 mr-20'>
                <img src={img9} />
                <div className='flex flex-col space-y-2 mt-6 text-center'>
                    <span className=' text-sm font-normal'>Wornout Black Tshirt</span>
                    <span className='text-md'>Rs2950.00</span>
                </div>
            </div>

            <div className='inline-block w-60 h-96 mr-20'>
                <img src={img10} />
                <div className='flex flex-col space-y-2 mt-6 text-center'>
                    <span className=' text-sm font-normal'>Wornout Black Tshirt</span>
                    <span className='text-md'>Rs2950.00</span>
                </div>
            </div>

            <div className='inline-block w-60 h-96 mr-20'>
                <img src={img3} />
                <div className='flex flex-col space-y-2 mt-6 text-center'>
                    <span className=' text-sm font-normal'>Wornout Black Tshirt</span>
                    <span className='text-md'>Rs2950.00</span>
                </div>
            </div>

            <div className='inline-block w-60 h-96 mr-20'>
                <img src={img4} />
                <div className='flex flex-col space-y-2 mt-6 text-center'>
                    <span className=' text-sm font-normal'>Wornout Black Tshirt</span>
                    <span className='text-md'>Rs2950.00</span>
                </div>
            </div>
        </div>
        <span onClick={() => slideRight()} onMouseOver={() => changeSliderColor('right-scroller')} onMouseOut={() => unchangeSliderColor('right-scroller')} className='cursor-pointer bg-white w-10 h-10 flex items-center justify-center rounded-full border border-solid border-black hover:bg-black -translate-y-12'><AiOutlineRight id='right-scroller' size={18} /></span>

    </div>
  )
}

export default Carousel