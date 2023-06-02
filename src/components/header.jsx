import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsCart2 } from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'
import CartBar from './cartbar'
import HamburgerMenu from './hamburgermenu'
import bspokn from '../assets/images/bspkn-web-logo.webp'

const HeadBar = props => {
  const [cartOpen, setCartOpen] = React.useState(false)
  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <div>
    <div>
    <div className="w-screen h-9 bg-red-500 text-center text-white flex items-center justify-center font-semibold text-xs tracking-wider">
      FREE DELIVERY ALL OVER PAKISTAN
    </div>
    <div className="hidden lg:flex w-screen h-12 justify-between items-center shadow-md p-10">
        <div>
            <img className='w-32 h-9' src={bspokn} alt='logo' />
        </div>
        <div className="flex w-1/4 justify-between items-center text-xs tracking-wider font-bold static">
            <span>HOME</span>
            <span>COLLECTIONS</span>
            <span>MEN</span>
            <span>WOMEN</span>
        </div>        
        <div className='flex w-20 justify-between items-center'>
            <BiSearch className='cursor-pointer' size={24}/>
            <BsCart2 className='cursor-pointer' size={24}
                      onClick={() => setCartOpen(!cartOpen)}/>
        </div>
    </div>
    <div className="lg:hidden flex w-screen h-12 justify-between items-center shadow-md md:px-14 px-4 py-10">
      <div className=' w-20 min-w-20 flex justify-between'>
        <AiOutlineMenu className='cursor-pointer' size={24}
                        onClick={() => setMenuOpen(!menuOpen)}/>
        <BiSearch className='cursor-pointer' size={24}/>
      </div>
      <img className='w-32 h-9 object-scale-down mx-10' src={bspokn} alt='logo' />
      <BsCart2 className='cursor-pointer' size={24}
                      onClick={() => setCartOpen(!cartOpen)}/>
    </div>
    </div>
    {<CartBar cartOpen={cartOpen} setCartOpen={setCartOpen}/>}
    {<HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>}    
    </div>
  )
}

export default HeadBar