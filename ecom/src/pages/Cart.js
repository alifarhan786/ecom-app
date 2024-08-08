import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { Link, useNavigate } from 'react-router-dom';
import { MdArrowBackIos } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { addOrder, resetCart } from '../redux/chicloomSlice'; // Import the actions

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productData = useSelector((state) => state.chicloom.productData);
  const userInfo = useSelector((state) => state.chicloom.userInfo);
  const isToggleOn = useSelector((state) => state.chicloom.isToggleOn);
  const [totalAmt, setTotalAmt] = useState("");


  useEffect(() => {
    let price = 0;
    productData.forEach((item) => {
      price += item.quantity * item.price;
    });
    setTotalAmt(price);
  }, [productData]);

  const handleCheckout = async () => {
    if (userInfo) {
      const orderUrl = 'https://ecom-app-backend-86re.onrender.com/create-order'; // Make sure this is the correct URL
      const orderData = {
        amount: totalAmt * 100, // Razorpay works with smallest currency unit (paise for INR)
        currency: 'INR',
        receipt: `receipt_${Date.now()}`,
        notes: {
          name: userInfo.name,
          email: userInfo.email,
          phone: userInfo.phone,
        },
      };

      try {
        const response = await axios.post(orderUrl, orderData);
        const { id: order_id, currency, amount } = response.data;
        const options = {
          key: 'rzp_test_8MpDTe0nL3tKft',
          amount,
          currency,
          name: 'Chicloom',
          description: 'Order Payment',
          order_id,
          handler: (response) => {
            const newOrder = {
              id: response.razorpay_payment_id,
              date: new Date().toISOString().split('T')[0], // Current date
              items: productData,
              totalAmount: totalAmt,
              status: 'Paymen Successful',
            };
            // Save order to backend after payment is successful


            dispatch(addOrder(newOrder)); // Dispatch the addOrder action
            dispatch(resetCart()); // Reset the cart
            toast.success('Payment successful');
            navigate('/my-orders'); // Navigate to the orders page
          },
          prefill: {
            name: userInfo.name,
            email: userInfo.email,
            contact: userInfo.phone,
          },
          notes: {
            address: 'Corporate Office',
          },
          theme: {
            color: '#000',
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      } catch (error) {
        console.log(error)
        toast.error('Error in creating order. Please try again.');
      }
    } else {
      toast.error('Sign in first to checkout!');
    }
  };

  return (
    <div>
      <img
        className='hidden md:flex w-full h-40 object-cover'
        src='https://images.pexels.com/photos/20791653/pexels-photo-20791653/free-photo-of-blurry-view-of-a-cloudy-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt='cartImg'
      />
      <div className='max-w-screen-xxl mx-4 py-6 md:py-10 flex flex-col md:flex-row
      '>
        {productData.length === 0 ? (
          <div className='w-full'>
            <div className='flex flex-col mx-2  items-center gap-4'>
              <h1 className={`text-2xl border-b-4 border-gray-500  py-2 w-80 text-center fade-in`}>Your Cart is Empty</h1>
              <span className='w-20 h-[3px] bg-gray-500'></span>
            </div>

            <Link to="/" className='flex justify-center no-tap-highlight'>
              <button
                className={`${isToggleOn
                    ? 'text-white hover:text-gray-400'
                    : 'text-gray-600 hover:text-gray-900'
                  } mt-8 text-2xl flex items-center justify-center gap-1 duration-300`}
              >
                <MdArrowBackIos />
                Go Shopping
              </button>
            </Link>
          </div>
        ) : (
          < div className=' md:flex w-full gap-6 md:mx-6'>
            <div className='w-full md:w-2/3 '>
              <CartItem />
            </div>
            <div className={`w-full max-h-[300px] md:w-1/3 ${isToggleOn ? 'bg-gray-800' : 'bg-gray-100'} py-6 px-4`}>
              <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-500 pb-6'>
                <h2 className='text-2xl font-medium'>Cart Totals</h2>
                <p className='flex items-center gap-4 text-base'>
                  Subtotal
                  <span className='text-lg font-titleFont font-bold'>
                    Rs. {Math.round(totalAmt * 100) / 100}
                  </span>
                </p>
                {/* <p className='flex items-start gap-4 text-base'>
                  Shipping
                  <span>
                    Amet ipsum sit nisi consequat fugiat anim dolor consequat. Sunt anim ea aliquip
                    cillum veniam aliqua duis aliquip esse magna ex reprehenderit elit consectetur.
                    Duis incididunt in incididunt aliqua officia ut voluptate tempor.
                  </span>
                </p> */}
              </div>
              <p className='font-titleFont font-semibold flex justify-between mt-6'>
                Total <span className='text-xl font-bold'>Rs.{Math.round(totalAmt * 100) / 100}</span>
              </p>
              <button
                onClick={handleCheckout}
                className=' w-full bg-white text-black py-3  text-base mt-6 hover:bg-black hover:text-white duration-300'
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
        )}
      </div>
      <ToastContainer
        position='top-left'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </div>
  );
};

export default Cart;
