import React from 'react';
import './Review.css'

const Review = ({review}) => {
  const {name,email,body,ratting} = review
  console.log(review)
  return (
    <div className='review-box'>
      
      <div>
      <h1 className='font-bold text-1xl mt-3'>{name}</h1>
      <h1 className='font-bold mb-4'>User Email: {email}</h1>
      <h1>"{body}"</h1>
      <h1 className='my-2'>{ratting}</h1>
      </div> 

    </div>
  );
};

export default Review;