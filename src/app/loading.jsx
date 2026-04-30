import React from 'react';
import { RingLoader } from 'react-spinners';

const loading = () => {
    return (
      <div className='flex justify-between items-center text-8xl text-blue-500'>
        <RingLoader />
      </div>
    );
};

export default loading;