import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
const Orders = () => {
  const orders = useSelector((state) => state.chicloom.orders);
  const user = useSelector((state)=> state.chicloom.userInfo)
  const isToggleOn = useSelector((state) => state.chicloom.isToggleOn);
  if (!user) {
    return <Navigate to="/login" />;
}

  return (
    <div className={`min-h-screen p-5 ${isToggleOn ? 'bg-black text-white' : 'bg-white text-black'}`}>     
      <div className='flex flex-col mx-2 items-center gap-4'>
                <h1 className={`text-2xl border-r ${isToggleOn?'bg-white text-black':'bg-black text-white'} py-2 w-80 text-center fade-in`}>My Orders</h1>
                <span className='w-20 h-[3px] bg-gray-500'></span>
            </div>
      <span className='w-30 h-[4px] bg-gray-500'></span>
      {orders.length === 0 ? (
        <p className=' text-center mt-2 font-bold font-bodyFont'>You have no orders yet.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className='mb-4 p-5 border rounded-md'>
            <div className='flex justify-between'>
              <h2 className='md:text-xl text-sm font-semibold'>Order Id:<br />#{order.id}</h2>
              <p className='md:text-xl text-sm text-center'>Order Date:<br />{order.date}</p>
            </div>
            <div className='mt-3'>
              <h3 className='text-lg font-medium mb-2'>Items Ordered:</h3>
              {/* Large Screen Table Layout */}
              <div className='hidden md:block overflow-x-auto'>
                <table className='min-w-full divide-y-2 divide-gray-500'>
                  <thead >
                    <tr>
                      <th scope='col' className='px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider'>
                        Image
                      </th>
                      <th scope='col' className='px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider'>
                        Title
                      </th>
                      <th scope='col' className='px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider'>
                        Quantity
                      </th>
                      <th scope='col' className='px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider'>
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody className=' divide-y-2 divide-gray-500'>
                    {order.items.map((item, index) => (
                      <tr key={index}>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <div className='flex items-center'>
                            <div className='flex-shrink-0 h-28 w-28'>
                              <img className='h-28 w-28 rounded-md' src={item.image} alt='' />
                            </div>
                          </div>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <div className='text-sm font-medium '>{item.title}</div>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <div className='text-sm '>Qty: {item.quantity}</div>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <div className='text-sm '>Rs. {item.price}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* Small Screen List Layout */}
              <div className='md:hidden'>
                {order.items.map((item, index) => (
                  <li key={index} className='flex justify-between px-3 py-4 md:flex-row'>
                  <span className='w-1/3 md:w-1/3'><img className='w-28 h-28 rounded-md' src={item.image} alt={item.title}/></span>
                 

                  <div className='w-2/3 md:w-2/3 flex flex-col justify-between md:flex-row  mt-3 md:mt-0  ml-4  md:items-center'>
                    
                  <span >{item.title}</span>
                  <span>Qty: {item.quantity}</span>
                  <span>Rs.{item.price}</span>
                  </div>
                  
                </li>
                ))}
              </div>
            </div>
            <div className='hidden md:flex mt-3 justify-between'>
              <p>Status: {order.status}</p>
              <p className='font-bold'>Total Amount: Rs. {Math.round(order.totalAmount * 100) / 100}</p>
            </div>
            <div className='md:hidden flex mt-3 justify-between'>
              <p>Status:<br /> {order.status}</p>
              <p className='font-bold'>Total Amount:<br /> Rs. {Math.round(order.totalAmount * 100) / 100}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
export const fetchOrders = async (userId) => {
  const response = await fetch(`/api/orders?userId=${userId}`);
  const orders = await response.json();
  return orders;
 
};

export default Orders;
