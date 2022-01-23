import React from 'react';
import Logo from '../public/images/nitro.png'
import Image from 'next/image'

const sectionOne = () => {
  return (
    <>
    <div className="flex">
      <div className="flex-1">
        <h1 className="text-amber-50 font-logo">NITRO</h1>
        <Image className="font-logo"  src={Logo} alt="Logo" />
      </div>
    </div>
    </>
  );
};

export default sectionOne;
