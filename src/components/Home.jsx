import React from 'react';
import bg from '../assets/rect.png';
import upper from '../assets/Anniversary (7) 1.png'; // Import the new image
import upper2 from '../assets/18512590-ai (1) 1.png'
const Home = () => {
  return (
    <>
         <div className="relative">
      <img src={bg} alt="bg" className="mx-auto mb-4" />
      <h1 className='absolute top-20 left-20 text-6xl '>Let's Learn & Earn</h1>
      
      <img src={upper} alt="upper" className="absolute top-0 right-12 mx-auto mb-4" />
    </div>
    </>
   
  );
}

export default Home;
