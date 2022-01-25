import React from 'react';
import Logo from '../public/images/nitro.png'
import Image from 'next/image'

const sectionOne = () => {
  return (
    <>
    <div className="flex">
      <div className="flex-1">
        <h1 className="text-amber-50 font-logo lg:text-9xl text-6xl">NITRO</h1>
        <h2 className="text-amber-50 font-sub lg:text-3xl text-6xl">Coin</h2><br />
        <span className="text-amber-50  sm:text-5sm text-3sm">Explore the best collections from hand-picked digital artists out there and find your coin.</span>
      </div>
    </div>
    </>
  );
};

export default sectionOne;
