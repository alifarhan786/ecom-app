import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MdOutlineStar } from 'react-icons/md';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import InnerImageZoom from 'react-inner-image-zoom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/chicloomSlice';
import { ToastContainer, toast } from 'react-toastify';

const Product = () => {
  const dispatch = useDispatch()
  const [details, setDetails] = useState({});
  let[baseQty,setBaseQty] = useState(1)
  const [selectedImage, setSelectedImage] = useState('');
  const isToggleOn = useSelector((state)=>state.chicloom.isToggleOn)
  const location = useLocation();
  
  useEffect(() => {
    setDetails(location.state.item);
    if (location.state.item.image ) {
      setSelectedImage(location.state.item.image);
    }
  }, [location.state.item]);

  const [num, setNum] = useState(0);
  const inc = () => {
    setNum(num + 1);
  };
  const dec = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
console.log(details)
  return (
    <div className='max-w-screen-xl mx-auto my-10 px-2 sm:px-4 lg:px-8'>
      <div className='flex flex-col lg:flex-row gap-10'>
        <div className='w-full lg:w-2/5 relative'>
          {selectedImage && (
            <InnerImageZoom
              src={selectedImage}
              zoomSrc={selectedImage}
              zoomType="click"
              zoomPreload={true}
              className='w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[550px] object-cover'
            />
          )}
          
          <div className='flex mt-4 gap-2 overflow-x-auto'>
            {details.image && details.image.map((image, index) => (
              <img
                key={index}
                className={`w-20 h-20 object-cover cursor-pointer ${selectedImage === image ? 'border-2 border-black' : ''}`}
                src={image}
                alt={details.title}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>
        <div className='w-full lg:w-3/5 flex flex-col justify-center gap-8 lg:gap-12'>
          <div>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold'>{details.title}</h2>
            <div className='flex items-center gap-2 sm:gap-4 mt-2 sm:mt-3'>
              <p className="line-through text-sm sm:text-base text-gray-500">${details.oldPrice}</p>
              <p className="text-xl sm:text-2xl font-medium ">${details.price}</p>
            </div>
          </div>
          <div className='flex items-center gap-1 sm:gap-2 text-sm sm:text-base'>
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            {details.rating}
          </div>
          <p className='text-sm sm:text-base'>{details.description}</p>
          <div className='flex flex-col sm:flex-row gap-4'>
            <div className='w-full sm:w-52 flex items-center justify-between gap-4 border p-3'>
              <p className='text-sm'>Quantity</p>
              <div className='flex items-center gap-4 text-sm font-semibold'>
                <button onClick={()=>setBaseQty(baseQty===1?(baseQty=1):baseQty-1)}>-</button>
                <span>{baseQty}</span>
                <button onClick={()=>setBaseQty(baseQty+1)}>+</button>
              </div>
            </div>
            <div className='w-full mt-2 sm:w-auto'>
              <button
              onClick={()=>dispatch(addToCart({
                _id: details._id,
                  title: details.title,
                  image : details.image[0],
                  price: details.price,
                  quantity:baseQty,
                  description:details.description,
              })) & toast.success(`${details.title} is added to the cart!`)
            } 
              className={`w-full py-3 px-6 active:bg-gray-800 ${isToggleOn ? 'bg-white text-black' : 'bg-black text-white'}`}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position='top-left' autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme='dark' />
    </div>
  );
};

export default Product;
