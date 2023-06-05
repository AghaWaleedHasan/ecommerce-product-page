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

  const men = [
    'Tees', 'Shorts', 'Cuban Shirts', 'Vests', 'Trousers', 'Hoodies', 'Jackets', 'Sweatshirts', 'Co-ord Sets'
  ]

  const women = [
    'Tees', 'Shorts', 'Cuban Shirts', 'Vests', 'Trousers', 'Hoodies', 'Jackets', 'Sweatshirts', 'Co-ord Sets'
  ]

  const collections = [
    'Basics \'23',
    'Carbon \'22',
    'Athleisure',
    'Spring Collection'
  ]

  const Dropdown = props => {
    const { menu } = props;
    return (
      <div className=' w-64 fixed hidden hover:block group-hover:block mt-8 bg-white shadow-lg'>
      <ul className='flex flex-col space-y-4 font-normal p-4 px-6'>
        {menu.map(menuItem => (
          <li className={(menu.indexOf(menuItem) === menu.length-1 ? ' pb-2' : ' border-solid border-b pb-4') + ' border-gray-200 text-gray-700'}>{menuItem}</li>
        ))}
      </ul>
    </div>
    )
  }

  return (
    <div>
    <div>
    <div className="w-screen h-9 bg-red-500 text-center text-white flex items-center justify-center font-semibold text-xs tracking-wider">
      FREE DELIVERY ALL OVER PAKISTAN
    </div>
    <div className="hidden lg:flex w-screen h-12 justify-between items-center shadow-md p-10">
        <div>
            <img className='w-32 h-9 cursor-pointer' src={bspokn} alt='logo' />
        </div>
        <div className="flex w-1/4 justify-between items-center text-xs tracking-wider font-bold static">
            <span className='cursor-pointer hover:text-gray-500'>HOME</span>
            <span className='group cursor-pointer hover:text-gray-500'>
              COLLECTIONS
              <Dropdown menu={collections}/>
            </span>
            <span className='group cursor-pointer hover:text-gray-500'>
              MEN
              <Dropdown menu={men}/>
            </span>
            <span className='group cursor-pointer hover:text-gray-500'>
              WOMEN
              <Dropdown menu={women} />
            </span>
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