import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Products from '../components/Products'
import { useLoaderData } from 'react-router-dom'


const Home = () => {
const [products,setProducts] = useState([])
  const data = useLoaderData()
  console.log(data)
  useEffect(()=>{
    setProducts(data.data)
    window.scrollTo({ top: 0, behavior: "smooth" });
  },[data])
  

  

  return (
    <div >
      <Banner />
      <Products products={products} />
      
    </div>
  )
}

export default Home
