import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import { Link } from 'react-router-dom';


const Reviews = () => {
  const [reviews, setReviews] = useState([])
  useEffect( ()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setReviews(data))
  },[])
  return (
    <div className='text-center mx-3 mt-5'>
    <h1 className='text-4xl review my-5'>Reviews Of Buyers</h1>
      <div className='flex'>
      {
        reviews.map(review => (<Review key={review.id} review={review}/>))
      }
      </div>
      <button className='rounded-md'> <Link to='/reviews'>Explore Review</Link> </button>
    </div>
  );
};

export default Reviews;