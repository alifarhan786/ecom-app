import React from 'react'
import { useSelector } from 'react-redux'
const Catagory = () => {
    const isToggleOn = useSelector((state) => state.chicloom.isToggleOn)
  return (
    <div className='h-[100vw] md:h-[50vw] text-center'>
    <div className='w-full'>
        <h1 className='text-4xl mt-4'>New<br/> Collection!</h1>
    </div>
    <div className='flex gap-4 items-center justify-center mt-4 mx-2'>
        <div className='w-1/2 md:w-1/4 h-1/3 overflow-hidden rounded-xl'>
            <img className='w-full object-cover hover:scale-95 duration-300 ' src='https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600' alt='mens'/>
            <p className={`'mt-2  ${isToggleOn?"bg-cyan-300 text-black":"bg-black text-white"}`}>Men's Catagory</p>
        </div>
        <div className='w-1/2 md:w-1/4 h-1/3 overflow-hidden rounded-xl'>
            <img className='w-full object-cover hover:scale-95 duration-300 ' src='https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=600' alt='womens'/>
            <p className={`'mt-2  ${isToggleOn?"bg-cyan-300 text-black ":"bg-black text-white"}`}>Women's Catagory</p>
        </div>
    </div>
</div>

  )
}

export default Catagory