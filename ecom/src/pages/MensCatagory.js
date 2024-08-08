import React ,{useState,useEffect} from 'react'
import ProductCard from '../components/ProductCard'
import {  useSelector } from 'react-redux';
import { useLoaderData } from 'react-router-dom';

const MensCatagory = () => {
    const [products,setProducts] = useState([])
    const data =useLoaderData()
    
    useEffect(()=>{
        setProducts(data.data)
        window.scrollTo({ top: 0, behavior: "smooth" });
      },[data])

     const MenProduct = products.filter((product)=>  product.category=="men")
     console.log(MenProduct)
    const isToggleOn = useSelector((state) => state.chicloom.isToggleOn);
    return (
        <div className='py-6 mx-2'>
            <div className='flex flex-col mx-2 items-center gap-4'>
                <h1 className={`text-2xl border-r ${isToggleOn?'bg-white text-black':'bg-black text-white'} py-2 w-80 text-center fade-in`}>Mens Category</h1>
                <span className='w-20 h-[3px] bg-gray-500'></span>
            </div>
            <div className=' max-w-screen-xl mx-auto py-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2 sm:gap-4'>
                {MenProduct.map((item)=>(
                    <ProductCard key={item._id} product={item} isToggleOn={isToggleOn}/>
                ))}
            </div>
        </div>
    )
}

export default MensCatagory