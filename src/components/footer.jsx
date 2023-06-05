import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='px-20 md:px-14 lg:px-10 bg-black w-full flex flex-wrap justify-between lg:grid lg:grid-cols-4 py-8'>
        <div className='flex flex-col space-y-4 text-xs text-gray-300'>
            <span className='text-white font-bold mb-2 text-sm'>CUSTOMER SERVICE</span>
            <span>Shipping Policy</span>
            <span>Refund Policy</span>
            <span>Privacy Policy</span>
            <span>Terms and Conditions</span>
            <span>FAQs</span>
        </div>
        <div className='flex flex-col space-y-2 text-xs text-gray-300'>
            <span className='text-white font-bold mb-2 text-sm'>ABOUT US</span>
            <span>Contact Us</span>
        </div>
        <div className='flex flex-col space-y-2 text-xs text-gray-300'>
            <span className='text-white font-bold mb-2 text-sm'>FOLLOW US</span>
            <span className='flex space-x-4'><FaFacebookF className='bg-white rounded-full w-8 h-8 p-2 cursor-pointer hover:bg-blue-500' color='black' size={16}/><AiOutlineInstagram className='bg-white rounded-full w-8 h-8 p-2 cursor-pointer hover:bg-pink-600' color='black' size={24}/></span>
        </div>
    </div>
  )
}

export default Footer