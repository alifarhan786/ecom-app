import React from 'react';
import { MdOutlineClearAll } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, deleteItem, incrementQuantity, resetCart } from '../redux/chicloomSlice';
import { toast, ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import { MdArrowBackIos } from 'react-icons/md';

const CartItem = () => {
    const dispatch = useDispatch();
    const isToggleOn = useSelector((state) => state.chicloom.isToggleOn);
    const productData = useSelector((state) => state.chicloom.productData);
        console.log(productData)

    return (
        <div className='w-full  mx-auto'>
            <div className='w-full'>
                <h2 className='text-3xl md:text-4xl font-titleFont font-bold  text-center md:text-left '>Shopping Cart</h2>
            </div>
            <div className='w-full flex justify-between items-center px-8 my-3'> {/* Added justify-between and px-4 for spacing */}
                <div className='flex items-center'>
                    <Link to="/">
                        <span className={`mt-0 text-xl flex items-center gap-2 ${isToggleOn ? "text-white hover:text-gray-400" : "text-gray-600 hover:text-gray-900"} duration-300 lg:hidden`}>
                            <MdArrowBackIos />
                            Go Shopping
                        </span>
                    </Link>
                </div>
                <div className='flex items-center cursor-pointer'>
                    <MdOutlineClearAll className='text-4xl' onClick={() => dispatch(resetCart()) && toast.error("Your Cart is Empty!")}/>
                </div>
            </div>
            <div>
                {productData.map((item) => (
                    <div key={item._id} className='flex lg:flex-row items-start lg:items-center justify-between gap-6 mt-6 border-b pb-6'>

                        <div className='flex items-center '>
                            <img className='w-32 h-32 object-cover' src={item.image} alt={item.title} />
                        </div>
                        <div className='flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-6 w-full'>
                            <h2 className=' md:text-xl  font-medium'>{item.title}</h2>
                            <p className='text-sm lg:text-base'>{item.size}</p>
                            <p className='text-lg lg:text-base font-semibold'>{`Rs. ${item.price * item.quantity}`}</p>
                            <div className='w-full lg:w-auto flex items-center justify-between gap-4 border p-3'>
                                <p className='text-sm lg:text-base'>Quantity</p>
                                <div className='flex items-center gap-4 text-sm font-semibold'>
                                    <button onClick={() => dispatch(decrementQuantity(item))}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => dispatch(incrementQuantity(item))}>+</button>
                                </div>
                            </div>
                        </div>
                        <FaTrash
                            onClick={() =>
                                dispatch(deleteItem(item._id)) 
                            }
                            className='block cursor-pointer text-2xl'
                        />
                    </div>
                ))}
            </div>
          
            <Link to="/" >
                <button className={`mt-4 ml-2 lg:ml-7 w-full text-2xl flex items-center ${isToggleOn ? "text-white hover:text-gray-400" : "hover:text-black"} duration-300 hidden lg:flex`}>
                    <MdArrowBackIos />
                    Go Shopping
                </button>
            </Link>

            <ToastContainer position='top-left' autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme='dark' />
        </div>
    );
};

export default CartItem;
