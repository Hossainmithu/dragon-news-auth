import React from 'react';
import logo from '../assets/logo.png'
import moment from 'moment';

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-2 py-4'>
      <div>
        <img src={logo} alt="" />
      </div>
      <h1 className='text-gray-500 text-xl'>Journalism Without Fear or Favour</h1>
      <p>{moment().format("dddd, MMMM DD,  YYYY")}</p>
    </div>
  );
};

export default Header;