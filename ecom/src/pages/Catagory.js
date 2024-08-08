import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Catagory = () => {
    const isToggleOn = useSelector((state) => state.chicloom.isToggleOn)
    return (
        <div className='h-[100vw] md:h-[50vw] text-center'>
            <div className='flex flex-col mx-2 my-5 items-center gap-4'>
                <h1 className={`text-2xl border-r ${isToggleOn ? 'bg-white text-black' : 'bg-black text-white'} py-2 w-80 text-center fade-in`}>New Collection!</h1>
                <span className='w-20 h-[3px] bg-gray-500'></span>
            </div>
            <div className='flex items-center justify-center mt-4 mx-2 gap-4'>
                <Link to="/mens-catagory" className='w-1/2 md:w-1/4 h-1/3 overflow-hidden rounded-xl'>
                    <img className='w-full object-cover hover:scale-95 duration-300 ' src='https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600' alt='mens' />
                    <p className={`'mt-2  ${isToggleOn ? "bg-cyan-300 text-black" : "bg-black text-white"}`}>Men's Catagory</p>
                </Link>
                <Link to='/womens-catagory' className='w-1/2 md:w-1/4 h-1/3 overflow-hidden rounded-xl'>
                    <img className='w-full object-cover hover:scale-95 duration-300 ' src='https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=600' alt='womens' />
                    <p className={`'mt-2  ${isToggleOn ? "bg-cyan-300 text-black " : "bg-black text-white"}`}>Women's Catagory</p>
                </Link>
            </div>
        </div>

    )
}

export default Catagory