import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Usefull/Images/logo.png';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const {pathname} = useLocation();
  // console.log(pathname)
  return (
    <div className=' colrs flex items-center justify-between p-2 mx-2 mt-2 mb-2 rounded-md'>
      <img width='56px' src={logo} alt="" />
      <ul className='flex'>
      <nav>
        <NavLink className='mr-5 text-bold text-white' to="/">Home</NavLink>
        <NavLink className='mr-5 text-bold text-white' to="/reviews">Reviews</NavLink>
        <NavLink className='mr-5 text-bold text-white' to="/dashboard">Dashboard</NavLink>
        <NavLink className='mr-5 text-bold text-white' to="/blogs">Blogs</NavLink>
        <NavLink className='mr-5 text-bold text-white' to="/about">About</NavLink>
      </nav>
      </ul>
    </div>
  );
};

export default Navbar;