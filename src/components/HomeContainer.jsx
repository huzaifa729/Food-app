import React from 'react';
import { heroData } from '../utils/data';
import Delivery from './img/delivery.png';
import HeroBg from './img/heroBg.png';
import I1 from './img/i1.png';



const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full " id='home'>
    <div className="py-2 -mt-40 flex-1 flex flex-col items-start justify-center gap-6">
      <div className="flex items-center gap-2 justify-center bg-orange-100 py-1 px-4 rounded-full">
      <p className="text-base text-orange-500 font-semibold">Bike Delivery</p>
      <div className="w-8 h-8 rounded-full bg-white overflow-hidden drop-shadow-xl" >
       <img src={Delivery} className="w-full h-full  object-contain" alt='delivery' />  
      </div>
     </div>

     <p className="text-[2.5rem] font-bold tracking-wide text-headingColor">
      The Fastest Delivery in 
      <span className="text-orange-600 text-[3rem]">Your City</span>
     </p>
     <p className="text-base text-textColor text-center md:text-left md:w-[88%]">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi earum neque voluptate? Tenetur facere, a aliquid rem aliquam autem enim placeat iusto quae. Eaque veniam ipsam qui impedit voluptatibus sit nobis odit saepe voluptatem!
     </p>

     <button type='button' className="bg-gradient-to-br from-orange-400 to-orange-500 w-full  md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100">Order Now</button>
    </div>
    <div className="py-2 flex-1 flex items-center relative">
       <img src={HeroBg} className=" ml-auto h-420 w-full lg:w-auto lg:h-650" alt='herobgs'/>

       <div className="w-full h-full justify-evenly absolute flex-wrap flex-col flex  top-0 left-0 items-center  px-32 py-4 gap-5 -mt-5 ">
          {heroData && heroData.map((n) => (
               <div key={n.id} className="w-190 m-2 p-4 bg-cardOverlay backdrop-blur-md rounded-2xl flex flex-col items-center justify-center  ">
               <img src={n.imageSrc} className="w-40 -mt-20"alt="I1"/>
               <p className="text-xl  font-semibold text-textColor">{n.name}</p>
               <p className="text-sm text-lighttextGrey font-semibold my-2">{n.decp}</p>
               <p className="text-sm font-semibold text-headingColor"><span className='text-xs text-red-600'>₹</span>{n.price}</p>
               </div>
            ))}
       </div>
      </div>
  </section>
  )
}

export default HomeContainer;