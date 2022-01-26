import React from 'react';
import Logo from '../public/images/nitro.png'
import land from '../public/images/buyland.png'
import token from '../public/images/token.png'
import stocks from '../public/images/Stocks.png'
import meta from '../public/images/metaverse.png'



import Image from 'next/image'


const metaverse = () => {
  return (
      <>
         <div className="text-center w-full mb-4 my-44">
            <h2 className="lg:text-6xl text-4xl tracking-widest uppercase">Metaverse</h2>
            <p className="p lg:w-1/2 w-9/12 mx-auto mt-4 opacity-70 my-44">Simply put, the metaverse is a virtual reality world where users can interact, game and experience things as they would in the real world. Using current AR and VR tech, they can immerse into this world and interact with overlaying objects and people in the visual projected in front of them.</p>
          </div>
          <h3 className="text-2xl uppercase">4 Easy Ways To Invest In Metaverse</h3>
          <div className="flex lg:space-x-4 mt-12  lg:flex-row flex-col">
            <div className="lg:w-6/12 w-9/12 box-custom lg:mb-0 mb-12 mx-auto h-60 flex flex-col items-center justify-center">
            <div className="w-40 h-40 block relative box-1">
                  <Image 
                    src={meta}
                    alt="Logo"
                    layout="fill"
                    className="z-50"
                    unoptimized={true}
                  />
              </div>
              <h1>Metaverse NFTs</h1>
            </div>
            <div className="lg:w-6/12 w-9/12  box-custom mx-auto lg:mb-0 mb-12  h-60 flex flex-col items-center justify-center">
              <div className="w-40 h-40 block relative  box-2">
                   <Image 
                    src={land}
                    alt="Logo"
                    layout="fill"
                    unoptimized={true}
                  />
              </div>
              <h1>Buy Virtual Lands</h1>
            </div>
            <div className="lg:w-6/12 w-9/12 box-custom mx-auto lg:mb-0 mb-12  h-60 flex flex-col items-center justify-center">
              <div className="w-40 h-40 block relative  box-3">
                   <Image 
                    src={token}
                    alt="Logo"
                    layout="fill"
                    unoptimized={true}
                  />
              </div>
              <h1>Metaverse Tokens</h1>
            </div>
            <div className="lg:w-6/12 w-9/12 box-custom mx-auto lg:mb-0 mb-12  h-60 flex flex-col items-center justify-center">
              <div className="w-40 h-40 block relative  box-4">
                   <Image 
                    src={stocks}
                    alt="Logo"
                    layout="fill"
                    unoptimized={true}
                  />
              </div>
              <h1>Metaverse Stocks</h1>
            </div>
          </div>
      </>
  );
};

export default metaverse;
