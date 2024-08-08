import React from 'react';
import { TbMessageSearch } from "react-icons/tb";
import { FaBoxesPacking } from "react-icons/fa6";
import { BsFillShieldLockFill } from "react-icons/bs";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useSelector } from 'react-redux';

const Contact = () => {
  const isToggleOn = useSelector((state) => state.chicloom.isToggleOn)
  const markerIconUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png';
  const customIcon = new L.Icon({
    iconUrl: markerIconUrl,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });

  return (
    <div className="relative z-0">
      {/* Heading Section */}
      <div className="relative w-full h-40">
        <img
          className="absolute inset-0 w-full h-full object-cover filter"
          src="https://img.freepik.com/premium-photo/businessman-wearing-neat-suit-holding-mobile-phone-easier-communication_467541-1681.jpg?w=900"
          alt="Businessman"
        />
        <div className="relative flex items-center justify-center w-full h-full">
          <div className="text-center text-white px-4 py-2 bg-black bg-opacity-50 rounded-lg">
            <h1 className="text-2xl">Contact Chicloom!</h1>
            <p>Connect with Chicloom for style advice, questions, and assistance!</p>
          </div>
        </div>
      </div>
      {/* Map Section */}
      <div className='flex flex-col mx-2 my-4 items-center gap-4'>
        <h1 className={` flex justify-center items-center text-2xl border-r ${isToggleOn ? 'bg-white text-black' : 'bg-black text-white'} py-2 w-80 text-center fade-in`}>Find Us Here!<FaMapLocationDot className='ml-2 text-4xl text-center' /></h1>
        <span className='w-20 h-[3px] bg-gray-500'></span>
      </div>
      {/* <h1 className='text-xl flex justify-center items-center mt-4 text-center'>Find Us Here! <FaMapLocationDot className='ml-2 text-4xl text-center'/></h1> */}
      <div className="md:w-1/2 mt-4 h-80 mx-auto rounded-xl overflow-hidden">
        <MapContainer center={[12.931860641595177, 77.59478009665548]} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          <Marker position={[12.931860641595177, 77.59478009665548]} icon={customIcon}>
            <Popup>
              Chicloom Headquarters<br />1st Cross Jayanagar, <br />Bangalore <br />
              <a href="https://www.google.com/maps/dir//12.931860641595177,77.59478009665548/@12.931860641595177,77.59478009665548,19z?entry=ttu" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Get Directions
              </a>
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Information Section */}
      <div className="w-full mt-10 flex justify-center my-5 px-4 gap-3 md:gap-20  no-tap-highlight">
        <p className={`text-md text-center ${isToggleOn ? "hover:text-white" : "hover:text-cyan-700"} duration-300 cursor-pointer`}>
          <TbMessageSearch className="text-4xl flex mx-auto" />
          Product FAQ's
        </p>
        <p className={`text-md text-center ${isToggleOn ? "hover:text-white" : "hover:text-cyan-700"} duration-300 cursor-pointer`}>
          <FaBoxesPacking className="text-4xl mx-auto" />
          Shipping <br />
          & Returns
        </p>
        <p className={`text-md text-center ${isToggleOn ? "hover:text-white" : "hover:text-cyan-700"} duration-300 cursor-pointer`}>
          <BsFillShieldLockFill className="text-4xl mx-auto" />
          Privacy Policy
        </p>
        <p className={`text-md text-center ${isToggleOn ? "hover:text-white" : "hover:text-cyan-700"} duration-300 cursor-pointer`}>
          <MdOutlineSupportAgent className="text-4xl mx-auto" />
          Customer Support
        </p>
      </div>
    </div>
  );
}

export default Contact;
