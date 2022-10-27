import React from 'react'
import I1 from '../components/img/i1.png'
import { MdShoppingBasket } from 'react-icons/md'
import { motion } from 'framer-motion'

const RowContainer = ({flag}) => {
  return (
    <div className={`w-full  my-12 bg-orange-100 ${ flag ? 'overflow-x-scroll' : 'overflow-x-hidden'}`}>
        <div className='md:w-340 w-300 h-auto bg-cardOverlay rounded-lg p-2 my-12 shadow-md backdrop:blur-lg hover:drop-shadow-lg'>
            <div className='w-full flex items-center justify-between'>
                <motion.img whileHover={{scale : 1.2}} src={I1} alt='img' className='w-40 -mt-8 drop-shadow-2xl'/>
                <motion.div whileTap={{scale : 0.75}} className="w-8 h-8 rounded-full bg-red-600  flex cursor-pointer hover:shadow-md items-center justify-center">
                     <MdShoppingBasket className='text-white'/>                     
                </motion.div>
            </div>

            <div className="w-full flex flex-col gap-4 items-end justify-end">
                <p className='text-textColor font-semibold md:text-lg text-base'>Chocolate & Vanilla </p>
                <p className='mt-1 text-sm text-gray-500'>45 Calories</p>
                <div className='flex items-center gap-8'>
                    <p className='text-lg text-headingColor font-semibold'>
                        <span className='text-sm text-red-600'>$</span> 5.25
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RowContainer