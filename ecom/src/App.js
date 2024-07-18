import React,{useEffect} from 'react';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import { createBrowserRouter,Outlet,RouterProvider,ScrollRestoration } from 'react-router-dom';
import { productsData } from './api/Api';
import Product from './components/Product';
import { useSelector } from 'react-redux';
import Login from './pages/Login';
import About from './pages/About';
import Orders from './components/Orders'

const Layout=()=>{
  return(
    <div>
    <Header/>
    <Outlet/>
     <Footer/>
     </div>
  );
};


const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[{
      path:"/",
      element:<Home/>,
      loader: productsData,
    },
    {
      path:"/cart",
      element:<Cart />,
    },
    {
      path:"/product/:id",
      element:<Product/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path :"/about",
      element:<About/>
    
  },
  {
    path:"/my-orders",
    element:<Orders/>
  }
    
  ],
  },
]);
function App() {
  const isToggleOn = useSelector((state)=> state.chicloom.isToggleOn)
  useEffect(() => {
    if (isToggleOn) {
        document.body.classList.add('bg-black');
        document.body.classList.add('text-gray-300');
    } else {
        document.body.classList.remove('bg-black');
        document.body.classList.remove('text-gray-300');
    }
  }, [isToggleOn]);
  return (
    <div className='font-bodyFont select-none'>
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
