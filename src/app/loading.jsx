import React from 'react';
import { RingLoader } from 'react-spinners';

const loading = () => {
    return (
      <div className=' flex justify-center items-center text-8xl '>
        <RingLoader className='text-blue-700 bg-blue-800 rounded-full'/> 
      </div>
    );
};

export default loading;