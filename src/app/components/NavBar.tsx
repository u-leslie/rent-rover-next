import React from 'react'
import Image from 'next/image';
import logo from '../../../public/assets/logo.svg'
import { UserButton, authMiddleware } from '@clerk/nextjs';

function NavBar() {
  return (
    <div className='bg-white text-black flex justify-between p-3 px-10 border-b-[1px]'>
        <div className='flex gap-10 items-center'>
      <div>
        <Image
        src={logo}
        alt='logo'
        />
      </div>
      <div className='hidden md:flex gap-10 items-center '>
        <h2 className='hover:bg-gray-200 p-2 cursor-pointer transition-all'>Home</h2>
        <h1 className='hover:bg-gray-200 p-2 cursor-pointer transition-all'>History</h1>
        <h2 className='hover:bg-gray-200 p-2 cursor-pointer transition-all'>Help</h2>
        </div>
      </div>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}

export default NavBar
