import React from 'react'
import {GoogleAuthProvider,getAuth,signInWithPopup,signOut} from 'firebase/auth'
import {useDispatch, useSelector} from 'react-redux'
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast,ToastContainer } from 'react-toastify';
import { addUser, removeUser } from '../redux/chicloomSlice';
import { useNavigate } from 'react-router-dom';
import { fetchOrders } from '../components/Orders';
import { setOrders } from '../redux/chicloomSlice';
const Login = () => {
    const isToggleOn = useSelector((state)=> state.chicloom.isToggleOn)
    const auth = getAuth()
    const provider = new GoogleAuthProvider()
    const dispatch = useDispatch()
    const navigate =useNavigate()
    const handleGoogleLogin = async (e) => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            dispatch(addUser({
                _id: user.uid,
                name: user.displayName,
                email: user.email,
                image: user.photoURL,
            }));
            const orders = await fetchOrders(user.uid);
            dispatch(setOrders(orders));
    
            setTimeout(() => {
                navigate("/");
            }, 1500);
        } catch (err) {
            console.log(err);
        }
    };
    const handleSignOut = async () => {
        try {
            await signOut(auth);
            toast.success("Logged Out Successfully!");
            dispatch(removeUser());
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className='w-full flex flex-col items-center justify-center py-20 gap-5 '>
            <div className='w-full flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10'>
                <div onClick={handleGoogleLogin} className='text-base w-60 h-12 tracking-wide items-center justify-center flex gap-2 border-[1px] border-gray-400 rounded-md cursor-pointer hover:border-blue-600 duration-300'>
                    <FcGoogle className='text-3xl' />
                    <span>Sign In with Google</span>
                </div>
               <button onClick={handleSignOut} className={` ${isToggleOn?"bg-cyan-200 text-black ":"bg-black text-white "} hover:bg-gray-700 hover:text-white text-base py-3 px-8 tracking-wide rounded-md  duration-300`}>Sign Out</button>
            </div>
            <div className='w-full flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10'>
                <div className='text-base w-60 h-12 tracking-wide items-center justify-center flex gap-2 border-[1px] border-gray-400 rounded-md cursor-pointer hover:border-blue-600 duration-300'>
                    <FaGithub className='text-3xl' />
                    <span>Sign In with GitHub</span>
                </div>
                <button className={` ${isToggleOn?"bg-cyan-200 text-black ":"bg-black text-white "} hover:bg-gray-700 hover:text-white text-base py-3 px-8 tracking-wide rounded-md  duration-300`}>Sign Out</button>
            </div>
            <ToastContainer position='top-left' autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme='dark' />
        </div>
    )
}

export default Login