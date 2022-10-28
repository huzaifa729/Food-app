import React, { useRef } from 'react'
// import I1 from '../components/img/i1.png'
import { MdShoppingBasket } from 'react-icons/md'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

const RowContainer = ({flag, data, scrollValue}) => {
    // console.log(data);
    const rowContainer = useRef()
    useEffect(() => {
        rowContainer.current.scrollLeft += scrollValue;

    }, [scrollValue])
  return (
    <div ref={rowContainer} className={`w-full flex  items-center gap-3 scroll-smooth  my-12 bg-orange-100 ${ flag ? 'overflow-x-scroll scrollbar-none' : 'overflow-x-hidden flex-wrap'}`}>
       {data && data.map(item => (
               <div key={item.id} className='md:w-340 w-275 min-w-[275px] md:min-w-[340px] h-[225px] bg-cardOverlay rounded-lg p-2 my-12 shadow-md backdrop:blur-lg hover:drop-shadow-lg items-center justify-evenly relative flx flex-col'>
               <div className='w-full flex items-center justify-between'>
                   <motion.img whileHover={{scale : 1.2}} src={item?.imageURL} alt='img' className='w-40 -mt-8 drop-shadow-2xl'/>
                   <motion.div whileTap={{scale : 0.75}} className="w-8 h-8 rounded-full bg-red-600  flex cursor-pointer hover:shadow-md items-center justify-center">
                        <MdShoppingBasket className='text-white'/>                     
                   </motion.div>
               </div>
      
               <div className="w-full flex flex-col gap-1 items-end justify-end">
                   <p className='text-textColor font-semibold md:text-lg text-base'>{item?.title} </p>
                   <p className='mt-1 text-sm text-gray-500'>{item?.calories} Calories</p>
                   <div className='flex items-center gap-8'>
                       <p className='text-lg text-headingColor font-semibold'>
                           <span className='text-sm text-red-600'>$</span> {item?.price}
                       </p>
                   </div>
               </div>
           </div>
       ))}
    </div>
  )
}

export default RowContainer