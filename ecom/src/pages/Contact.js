import React from 'react'
import { TbMessageSearch } from "react-icons/tb";
import { FaBoxesPacking } from "react-icons/fa6";
import { GiCardboardBoxClosed } from "react-icons/gi";
import { BsFillShieldLockFill } from "react-icons/bs";
import { MdOutlineSupportAgent } from "react-icons/md";
const Contact = () => {
  return (
    <div >
      <div class="relative w-full h-40">

        <img class="absolute inset-0 w-full h-full object-cover filter blur-sm" src="https://img.freepik.com/premium-photo/businessman-wearing-neat-suit-holding-mobile-phone-easier-communication_467541-1681.jpg?w=900" alt="Businessman" />
        <div class="relative flex items-center justify-center w-full h-full">
          <div class="text-center text-white px-4 py-2 bg-black bg-transparent rounded-lg">
            <h1 class="text-2xl">Contact Chicloom!</h1>
            <p>Connect with Chicloom for style advice, questions, and assistance!</p>
          </div>
        </div>
      </div>
      <div className='  w-full h-80 flex justify-center py-10 px-4  gap-3 md:gap-20 '>
        <p className='text-md text-center '> <TbMessageSearch className='text-4xl flex mx-auto' /> Product FAQ's</p>
        <p className='text-md text-center '><FaBoxesPacking className='text-4xl mx-auto'/>Shipping <br/>& Returns</p>
        <p className='text-md text-center '><BsFillShieldLockFill className='text-4xl mx-auto'/>Privacy Policy</p>
        <p className='text-md text-center '><MdOutlineSupportAgent className='text-4xl mx-auto'/>Customer Support</p>
      </div>
    </div>


  )
}

export default Contact