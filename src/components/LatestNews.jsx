import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
  return (
    <div className='flex gap-4 items-center bg-base-200 p-2 rounded'>
      <p className='bg-[#D72050] rounded text-base-100 px-3 py-1'>Latest</p>
      <Marquee pauseOnHover={true} speed={50} className='space-x-10'>
        <Link to='/news'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, dolor?</Link>
        {/* <Link to='/news'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, dolor?</Link>
        <Link to='/news'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, dolor?</Link> */}
      </Marquee>
    </div>
  );
};

export default LatestNews;