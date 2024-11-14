import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';

const FindUs = () => {
  return (
    <div>
      <h2 className='text-xl font-semibold mb-3'>Find Us On</h2>
      <div className='flex flex-col gap-2 '>
        <button className='btn text-lg justify-start font-medium gap-4'><FaFacebook/> Facebook</button>
        <button className='btn text-lg justify-start font-medium gap-4'><FaInstagram/> Instagram</button>
        <button className='btn text-lg justify-start font-medium gap-4'><FaTwitter/> Twitter</button>
      </div>
    </div>
  );
};

export default FindUs;