import React from 'react'
import ProductCard from './ProductCard'
import {  useSelector } from 'react-redux';

const Products = ({products}) => {

    const isToggleOn = useSelector((state) => state.chicloom.isToggleOn);
    return (
        <div className='py-6 mx-2'>
            <div className='flex flex-col mx-2 items-center gap-4'>
                <h1 className={`text-2xl border-r ${isToggleOn?'bg-white text-black':'bg-black text-white'} py-2 w-80 text-center slide-in-left`}>Welcome to ChicLoom!</h1>
                <span className='w-20 h-[3px] bg-gray-500'></span>
               <p className={` ${isToggleOn ? 'text-cyan-200' : 'text-black'}  text-center text-base slide-in`}>Discover your unique style and elevate your wardrobe with ChicLoom – where fashion meets passion.<br/> Happy shopping!</p>
            </div>
            <div className=' max-w-screen-xl mx-auto py-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2 sm:gap-4'>
                {products.map((item)=>(
                    <ProductCard key={item._id} product={item} isToggleOn={isToggleOn}/>
                ))}
            </div>
        </div>
    )
}

export default Products
