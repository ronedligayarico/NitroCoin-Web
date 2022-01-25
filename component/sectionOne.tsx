import React from 'react';
import Logo from '../public/images/nitro.png'
import Image from 'next/image'

const sectionOne = () => {
  return (
    <>
    <div className="flex">
      <div className="flex-1 mobile-margin">
        <h2 className="text-left text-1xl font-extrabold text-amber-400 ml-2">POWERED BY YOU</h2>
        <h1 className="text-amber-50 font-logo xl:text-9xl text-6xl text-left">NITRO</h1>
        <h2 className="text-amber-50 font-sub text-4xl text-left ml-2">COIN</h2><br />
        <p className="text-amber-50  text-2xl text-left w-3/4 ml-2">Explore the best collections from hand-picked digital artists out there and find your coin.</p>
        <button className="svg">Get your coin</button>
        {/* <button className="svg">Its free</button> */}
      </div>
    </div>
    </>
  );
};

export default sectionOne;
