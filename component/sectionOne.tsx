import React from 'react';
import Logo from '../public/images/nitro.png'
import Image from 'next/image'

const sectionOne = () => {
  return (
    <>
    <div className="flex">
      <div className="flex-1 mobile-margin">
        <h1 className="text-amber-50 font-logo lg:text-9xl text-6xl text-left">NITRO</h1>
        <h2 className="text-amber-50 font-sub text-left">COIN</h2><br />
        <p className="text-amber-50  text-2xl text-left w-3/4">Explore the best collections from hand-picked digital artists out there and find your coin.</p>
      </div>
    </div>
    </>
  );
};

export default sectionOne;
