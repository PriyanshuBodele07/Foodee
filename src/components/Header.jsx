import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName ] = useState("Login");
  // console.log("header renders")
  return(
    <div className='flex items-center justify-between h-20 px-16 shadow-md bg-white'>
      <div className='logo-container flex items-center gap-8'>
        <img className='w-12 h-12 cursor-pointer'  src={LOGO_URL} alt="" />
      </div>
      <div className=''>
        <ul className='flex items-center gap-12 text-lg font-medium '>
          <li  className='cursor-pointer hover:text-orange-500'>
            <Link to="/">Home</Link></li>
          <li className='cursor-pointer hover:text-orange-500'>
            <Link to="/about">About Us</Link></li>
          <li className='cursor-pointer hover:text-orange-500'>
            <Link to="/contact">Contact Us</Link></li>
          <li className='cursor-pointer hover:text-orange-500'>Cart</li>
          <button onClick={() => {
           btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  )
}
export default Header;