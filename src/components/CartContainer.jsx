import React from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'

const CartContainer = () => {
  return (
    <div className='w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col top-0 right-0 fixed z-[101]'>
        <div className='w-full flex items-center justify-between p-4 cursor-pointer'>
            <MdOutlineKeyboardBackspace className='text-textColor text-3xl '/>
        </div>
    </div>
  )
}

export default CartContainer