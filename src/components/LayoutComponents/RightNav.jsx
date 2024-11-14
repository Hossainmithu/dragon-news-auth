import React from 'react';
import SocialLogin from '../socialLogin';
import FindUs from '../FindUs';
import QZone from '../QZone';

const RightNav = () => {
  return (
    <div className='space-y-4 p-2 fixed'>
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
      <QZone></QZone>
    </div>
  );
};

export default RightNav;