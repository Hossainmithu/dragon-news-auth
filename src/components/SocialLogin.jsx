import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
  return (
    <div className=''>
      <h2 className='font-semibold text-xl mb-3'>Login With</h2>
      <div className='flex flex-col gap-2'>
        <button className="btn text-lg font-medium"><FaGoogle /> Login with Goggle</button>
        <button className="btn text-lg font-medium"><FaGithub /> Login with Github</button>
      </div>
    </div>
  );
};

export default SocialLogin;