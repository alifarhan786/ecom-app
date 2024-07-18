import React from 'react'
import { logoLight, paymentLogo } from '../assets'
import { FaFacebook, FaGithub, FaFacebookF, FaInstagram, FaHome ,FaLocationArrow } from 'react-icons/fa'
import {BsPersonFill, BsPaypal } from "react-icons/bs"
const Footer = () => {
  return (
    <div className='bg-black text-gray-400 py-10 sm:py-20 font-titleFont'>
    <div className='max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
      <div className='flex flex-col gap-6 items-center lg:items-start'>
        <img className='w-32' src={logoLight} alt="logoLight" />
        <p className='text-white text-sm tracking-wide'>@ chicloom.com</p>
        <img className='w-56' src={paymentLogo} alt="paymentLogo" />
        <div className='flex cursor-pointer text-lg gap-5'>
          <FaGithub className='hover:text-white duration-300' />  
          <FaFacebook className='hover:text-white duration-300' />
          <FaInstagram className='hover:text-white duration-300' />
          <FaFacebookF className='hover:text-white duration-300' />
          <FaHome className='hover:text-white duration-300' />
        </div>
      </div>
      <div className='text-center lg:text-left'>
        <h2 className='text-2xl font-semibold text-white mb-4'>Locate Us</h2>
        <div className='flex flex-col gap-3'>
          <p>1st Cross Jayanagar, Bangalore</p>
          <p>Mobile: 8963079448</p>
          <p>Phone: 7895552552</p>
          <p>Email: chicloom@gmail.com</p>
        </div>
      </div>
      <div className='flex flex-col gap-2 text-base text-center lg:text-left'>
        <h2 className='text-2xl font-semibold text-white mb-4'>Profile</h2>
        <p className='flex items-center justify-center lg:justify-start gap-3 hover:text-white cursor-pointer duration-300'>
          <BsPersonFill /> My Account
        </p>
        <p className='flex items-center justify-center lg:justify-start gap-3 hover:text-white cursor-pointer duration-300'>
          <BsPaypal /> Checkout
        </p>
        <p className='flex items-center justify-center lg:justify-start gap-3 hover:text-white cursor-pointer duration-300'>
          <FaHome /> Order Tracking
        </p>
        <p className='flex items-center justify-center lg:justify-start gap-3 hover:text-white cursor-pointer duration-300'>
          <FaLocationArrow /> Help and Support
        </p>
      </div>
      <div className='flex flex-col items-center lg:items-start justify-center'>
        <input className='bg-transparent border px-4 py-2 text-sm w-full max-w-xs' type="text" placeholder='Email'/>
        <button className='text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black w-full max-w-xs mt-2'>Subscribe</button>
      </div>
    </div>
  </div>
  
  )
}

export default Footer
