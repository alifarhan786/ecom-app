import React, { useState } from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { cartImg, logoDark, logoLight, userImg } from "../assets/index.js"
import { Link } from 'react-router-dom'
import { FaBars, FaTimes, FaToggleOn, FaToggleOff } from 'react-icons/fa';
import { BsBag } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMode } from '../redux/chicloomSlice.js';

const Header = () => {
    const dispatch = useDispatch();
    const isToggleOn = useSelector((state) => state.chicloom.isToggleOn);
    const productData = useSelector((state) => state.chicloom.productData);
    const userInfo = useSelector((state) => state.chicloom.userInfo)
  
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleCloseMenu = () => {
        setIsMenuOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const scroll =()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <div className={`w-full h-20 border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50 ${isToggleOn ? 'bg-black text-gray-300 border-b-gray-800' : 'bg-white text-black border-b-gray-300'}`}>
            <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between px-4'>
                <div className='md:hidden flex items-center gap-4'>
                    <button onClick={toggleMenu} className=' text-2xl'>
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
                <Link to="/" >
                    <div>
                        <img className='w-28 slide-in' src={isToggleOn ? logoLight : logoDark} alt="logo" />
                    </div>
                </Link>
                <div className='hidden md:flex item-center gap-8 slide-in' >
                    <ul className='flex item-center gap-8'>
                        <li className={`text-base font-bold ${isToggleOn ? " hover:text-cyan-500 " : "hover:text-orange-900"}  hover:underline underline-offset-1 decoration-[1px] cursor-pointer duration-300 flex items-center h-full`}>Home</li>
                        <li className={`text-base font-bold ${isToggleOn ? " hover:text-cyan-500 " : "hover:text-orange-900"}  hover:underline underline-offset-1 decoration-[1px] cursor-pointer duration-300 flex items-center h-full`}>Catagories</li>
                      <Link to="./my-orders"><li className={`text-base font-bold ${isToggleOn ? " hover:text-cyan-500 " : "hover:text-orange-900"}  hover:underline underline-offset-1 decoration-[1px] cursor-pointer duration-300 flex items-center h-full`}>Orders</li></Link>
                        <li className={`text-base font-bold ${isToggleOn ? " hover:text-cyan-500 " : "hover:text-orange-900"}  hover:underline underline-offset-1 decoration-[1px] cursor-pointer duration-300 flex items-center h-full`}>Contact</li>
                        <Link to="./about"><li className={`text-base font-bold ${isToggleOn ? " hover:text-cyan-500 " : "hover:text-orange-900"}  hover:underline underline-offset-1 decoration-[1px] cursor-pointer duration-300 flex items-center h-full`}>About</li></Link>
                    </ul>
                    <Link  to="./cart" onClick={handleCloseMenu}>
                        <div className='relative my-4 flex items-center'>
                            <BsBag className={`text-4xl w-6 h-6 ${isToggleOn ? 'text-white' : 'text-black'}`} />
                            <span className={`absolute w-6 top-2 left-0 text-xs flex items-center justify-center font-semibold ${isToggleOn ? 'text-white' : 'text-black'}`}>
                                {productData.length}
                            </span>
                        </div>
                    </Link>
                    <div className='flex items-center  gap-2'>
                        <Link to="/login">
                            <div className={`flex items-center  px-3 py-2 rounded-md gap-2`}>
                                {userInfo ? <img className='w-8 h-8 rounded-full border-[2px] border-cyan-700 ' src={userInfo.image} alt="userImg" /> : <FaRegUserCircle className='text-3xl' />}
                                {userInfo && <p className='text-base font-titleFont font-semibold '>{(userInfo.name).toUpperCase()}</p>}
                            </div>
                        </Link>
                    </div>
                    <div className='flex items-center'>

                        <button onClick={() => dispatch(toggleMode())} className=' text-3xl'>

                            {isToggleOn ? <FaToggleOn /> : <FaToggleOff />}
                        </button>


                    </div>
                </div>
                <Link to="./cart" onClick={handleCloseMenu}>
                    <div className='md:hidden relative '>
                        <BsBag className={`text-4xl w-6 h-6 ${isToggleOn ? 'text-white' : 'text-black'}`} />
                        <span className={`absolute w-6 top-2 left-0 text-xs flex items-center justify-center font-semibold ${isToggleOn ? 'text-white' : 'text-black'}`}>
                            {productData.length}
                        </span>
                    </div>
                </Link>

            </div>
            {isMenuOpen && (
                <div className={`md:hidden w-full min-h-screen flex flex-col items-center py-10 border-t-[1px]  border-t-gray-800 ${isToggleOn ? 'bg-black text-white border-b-gray-800' : 'bg-white text-black border-b-gray-300'}`}>
                    <div className='slide-in'>
                    <Link to="/login">
                        <div onClick={handleCloseMenu} className={`flex items-center gap-3 my-4  ${isToggleOn ? "border-2 border-gray-500" : "border-2 border-gray-400"}  rounded-md p-2`}>
                            {userInfo ? <img className={`w-8 h-8 rounded-full border-[2px] border-cyan-700 `} src={userInfo.image ? userInfo.image : userImg} alt="userImg" /> : <FaRegUserCircle className='text-3xl' />}
                            {userInfo && <p className='text-base font-titleFont font-semibold '>{(userInfo.name).toUpperCase()}</p>}
                        </div>
                    </Link>
                    <ul className='flex flex-col items-center gap-4' onClick={handleCloseMenu}>
                        <Link to="./"><li onClick={handleCloseMenu} className='text-base font-bold cursor-pointer duration-300'>Home</li></Link>
                        <li className='text-base font-bold cursor-pointer duration-300'>Categories</li>
                        <li className='text-base font-bold cursor-pointer duration-300'>Products</li>
                        <li className='text-base font-bold cursor-pointer duration-300'>Contact</li>
                       <Link to="./about"><li className='text-base font-bold cursor-pointer duration-300'>About</li></Link>
                    </ul>
                </div>
                    <Link to="./cart" onClick={handleCloseMenu}>
                        <div className='relative my-4 flex slide-in items-center'>
                            <BsBag className={`text-4xl w-6 h-6 ${isToggleOn ? 'text-white' : 'text-black'}`} />
                            <span className={`absolute w-6 top-2 left-0 text-xs flex items-center justify-center font-semibold ${isToggleOn ? 'text-white' : 'text-black'}`}>
                                {productData.length}
                            </span>
                        </div>
                    </Link>


                    <button onClick={() => dispatch(toggleMode())} className='mt-2 md:block slide-in text-3xl '>

                        {isToggleOn ? <FaToggleOn /> : <FaToggleOff />}
                    </button>
                </div>
            )}
        </div>

    )
}

export default Header