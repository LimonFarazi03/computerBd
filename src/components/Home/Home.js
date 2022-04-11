import React from 'react';
import banner from '../Usefull/Images/banner.jpg';
import './Home.css';

const Home = () => {
  return (
    <div className='home-clr mx-3 flex justify-between'>
     <div>
        <div className='text-center p-3 Comp-product'>
        <h1 className='font-bold my-2'>Compare Products</h1>
          <p>Choose Two Products to Compare</p>
          <input placeholder="Search and Select Product" className='my-3 p-2 mx-4 text-1xl bg-white rounded w-25' type="text" /> <br />
          <input placeholder="Search and Select Product" className='p-2 mx-4 text-1xl bg-white rounded w-25' type="text" /> <br />
          <button className='btn-view mt-3'>Views Comparison</button>
        </div>
        <div>
          <img src="" alt="" srcset="" />
        </div>
      </div>
      <img className='rounded-md' width='700px' src={banner} alt="" />
    </div>
  );
};

export default Home;