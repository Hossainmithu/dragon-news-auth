import React from 'react';
import school from '../assets/class.png'
import playground from '../assets/playground.png'
import swimming from '../assets/swimming.png'

const QZone = () => {
  return (
    <div className='bg-gray-300 p-2 rounded'>
      <h2 className='font-semibold text-xl mb-3'>Q-Zone</h2>
      <div className='flex flex-col gap-4'>
        <img className='border p-2' src={school} alt="" />
        <img className='border p-2' src={playground} alt="" />
        <img className='border p-2' src={swimming} alt="" />
      </div>
    </div>
  );
};

export default QZone;