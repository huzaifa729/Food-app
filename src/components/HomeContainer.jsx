import React from 'react';
import Delivery from './img/delivery.png';
import HeroBg from './img/heroBg.png';

const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id='home'>
    <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
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
    <div className="py-2 flex-1 flex items-center ">
       <img src={HeroBg} className="ml-auto h-650" alt='herobg'/>
      </div>
  </section>
  )
}

export default HomeContainer