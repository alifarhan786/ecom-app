import React from 'react';
import { BsBagPlus } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../redux/chicloomSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const _id = product.title;
  const rootId = String(_id).toLocaleLowerCase().split(" ").join("");
  const isToggleOn = useSelector((state) => state.chicloom.isToggleOn);

  const handleDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
      },
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className='group relative'>
      <div onClick={handleDetails} className='w-full h-96 cursor-pointer overflow-hidden shadow-sm shadow-cyan-400'>
        <img className='object-cover w-full h-full group-hover:scale-110 duration-300' src={product.image[0]} alt="CardImage" />
      </div>
      <div className={`w-full px-2 py-4 ${isToggleOn ? 'shadow-md shadow-cyan-400' : 'shadow-md shadow-cyan-500'} min-h-[180px] sm:min-h-0 flex flex-col justify-between`}>
        <div className='flex flex-col items-center text-center sm:flex-row sm:text-left sm:justify-between sm:items-center'>
          <div className='w-full'>
            <table className='table-fixed w-full'>
              <tbody>
                <tr className='flex flex-col items-center sm:items-start'>
                  <td className='text-sm mb-2 sm:mb-0'>{product.category}</td>
                  <td className='font-titleFont text-base font-bold'>{product.title}</td>
                  <td className='flex gap-2 mt-2 sm:mt-0'>
                    <span className='line-through text-gray-500'>${product.oldPrice}</span>
                    <span className='font-semibold'>${product.price}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='flex gap-2 relative overflow-hidden w-24 text-sm justify-center lg:justify-end sm:justify-start mt-2 sm:mt-0'>
            <button
              onClick={() => dispatch(addToCart({
                _id: product._id,
                title: product.title,
                image: product.image[0],
                price: product.price,
                quantity: 1,
                description: product.description,
              })) & toast.success(`${product.title} is added to the cart!`)}
            >
             <BsBagPlus className='flex text-2xl gap-4 hover:text-3xl duration-300' />
            </button>
          </div>
        </div>
        <div className='absolute top-4 right-0'>
          {product.isNew && (
            <p className='bg-black text-white font-semibold font-titleFont px-6 py-1'>Sale</p>
          )}
        </div>
      </div>
      <ToastContainer position='top-left' autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme='dark' />
    </div>
  );
};

export default ProductCard;
