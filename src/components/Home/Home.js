import React from 'react';
import banner from '../Usefull/Images/banner.jpg';
import './Home.css';
import smallBanner from '../Usefull/Images/banner-small.jpg';
import Reviews from '../Reviews/Reviews';

const Home = () => {
  return (
    <div>
      <div className='home-clr mx-3 flex justify-around'>
     <div className='rounded-md mr-5'>
        <div className='text-center p-3 Comp-product'>
        <h1 className='font-bold my-2'>Compare Products</h1>
          <p>Choose Two Products to Compare</p>
          <input placeholder="Search and Select Product" className='my-3 p-2 mx-4 text-1xl bg-white rounded w-25' type="text" /> <br />
          <input placeholder="Search and Select Product" className='p-2 mx-4 text-1xl bg-white rounded w-25' type="text" /> <br />
          <button className='btn-view mt-3'>Views Comparison</button>
        </div>
        <div className='rounded-md mt-4 mr-5'>
          <img src={smallBanner}  width='290px' alt="small-banner" />
        </div>
      </div>
      <img src={banner} className='rounded-md' width='1000px' alt="banner" />
    </div>
    <Reviews/>
    </div>
  );
};

export default Home;