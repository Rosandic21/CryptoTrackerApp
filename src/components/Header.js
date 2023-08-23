import React from 'react'
import { LogoIcon } from '../icons/icons'

const Header = () => {
  return (
    <div className="items-center flex text-white bg-gray-800">
        <div className='wrapper-container w-full'>
            <div className='flex items-center gap-1 cursor-pointer'>
                <LogoIcon />  
                <p className="font-montserrat font-extrabold">
                    <span className='text-yellow-500'>C</span>
                    rypto
                    <span className='text-yellow-500'>U</span>
                    pdates
                </p>
            </div>
        </div>
    </div>
  )
}

export default Header
