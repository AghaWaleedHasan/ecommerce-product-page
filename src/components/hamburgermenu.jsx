import React from 'react'
import { AiOutlineRight, AiOutlineClose } from 'react-icons/ai';

const HamburgerMenu = props => {
  const { menuOpen, setMenuOpen } = props;
  return (
    <div>
        <div className={(menuOpen ? 'z-10 bg-black fixed right-0 top-0 w-screen h-screen opacity-70' : '')}>
        </div>
        <div className={ (menuOpen ? 'translate-x-0 ' : ' -translate-x-full ') + 'z-20 2xl:hidden h-screen w-3/4 sm:w-2/3 md:w-1/3 fixed top-0 left-0 flex duration-300'}>
            <div className=' bg-white w-[calc(100%-40px)] flex flex-col'>
                <span className=' text-sm p-4 font-bold tracking-wider border-solid border-b border-gray-200'>HOME</span>
                <span className=' text-sm p-4 font-bold tracking-wider border-solid border-b border-gray-200 flex justify-between items-center'>COLLECTIONS <span className='cursor-pointer'><AiOutlineRight className=' opacity-70' color='gray' size={14}/></span></span>
                <span className=' text-sm p-4 font-bold tracking-wider border-solid border-b border-gray-200 flex justify-between items-center'>MEN <span className='cursor-pointer'><AiOutlineRight className=' opacity-70' color='gray' size={14}/></span></span>
                <span className=' text-sm p-4 font-bold tracking-wider border-solid border-b border-gray-200 flex justify-between items-center'>WOMEN <span className='cursor-pointer'><AiOutlineRight className=' opacity-70' color='gray' size={14}/></span></span>
                <div className='flex flex-col mt-8'>
                    <span className=' text-xs p-2 px-4'>Sign In</span>
                    <span className=' text-xs p-2 px-4'>Create an account</span>
                </div>
            </div>
            <div className=' w-10 h-10 bg-red-500 flex justify-center items-center text-white font-semibold text-2xl cursor-pointer' onClick={() => setMenuOpen(!menuOpen)}>
                <AiOutlineClose color='white'  />
            </div>
        </div>
    </div>
  )
}

export default HamburgerMenu