import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/images/nitro-coin.png'


const Navigation = () => {
    const links = [
        "Home",
        "Metaverse",
        "NFT",
        "NFT Marketplace",
        "Land"
    ]

    const scrollToElement = (toFind: String) => {
        window.scrollTo({ 
            top: window.scrollY + document.querySelector(`#${toFind.toLowerCase()}`).getBoundingClientRect().top - 120, 
            behavior: 'smooth' 
        })
    }

  return (
   <>
    <nav
        className="
          fixed
          flex flex-wrap
          items-center
          justify-between
          bg-zinc-900/70
          mb-3
          w-full
          z-20
          top-0
          shadow-sm
        "
      >
        <div className="
                container
                p-4
                flex flex-wrap flex-row
                items-center
                justify-between
                lg:px-0 md:px-0 px-4
                mx-auto
            "
        >
            <div className="relative lg:flexs flex lg:items-centers items-center justify-between w-full ">
                <div>
                    <Link href="/"> 
                        <a>
                            <Image 
                              src={Logo}
                              alt="Logo"
                              width="90"
                              height="75"
                              unoptimized={true}
                            />
                        </a>
                     </Link>
                </div>
                <ul className="list-none flex items-center xl:space-x-6 lg:space-x-4">
                    {
                        links.map((element,key) => {
                            return (
                                <li 
                                key={key} 
                                onClick={() => {scrollToElement(element)}}
                                className="cursor-pointer lg:inline-block md:inline-block hidden md:mr-3 mr-8 border-b-2 border-transparent hover:border-black transition-all ease-in duration-300">
                                    { element }
                                </li>
                            )
                        })
                    }
                    <button className="px-4  py-2  rounded-full text-white lg:inline-block md:inline-block hidden transition-all duration-300 custom-buy-now">Buy now</button>
                </ul>
            </div>
        </div>
    </nav>
   </>
  );
};

export default Navigation;
