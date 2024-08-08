import React from 'react'
import { useSelector } from 'react-redux'

const About = () => {

  const isToggleOn = useSelector((state) => state.chicloom.isToggleOn)
  return (
    <div className='px-4 md:px-28'>
      <div className='flex flex-col my-5 items-center gap-4'>
        <h1 className={`text-2xl border-r ${isToggleOn ? 'bg-white text-black' : 'bg-black text-white'} py-2 w-80 text-center fade-in`}>About Us</h1>
        <span className='w-20 h-[3px] bg-gray-500'></span>
      </div>
      <p className={`  text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start `}>At ChicLoom, we believe that fashion is an expression of individuality and confidence. Our curated collection features an array of stunning designs, from timeless classics to the latest trends, ensuring that you find the perfect outfit for any occasion.</p>
      <p className='text-gray-500 dark:text-gray-400'> Whether you're stepping into the office, heading out for a night on the town, or enjoying a casual day out, our pieces are crafted to make you feel stylish and empowered every day. Discover your unique style and elevate your wardrobe with ChicLoom – where fashion meets passion. Happy shopping!</p>
    </div>
  )
}

export default About