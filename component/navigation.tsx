import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/images/nitro.png'


const Navigation = () => {
    const links = [
        "Home",
        "Metaverse",
        "NFT",
        "NFT Marketplace",
        "Land"
    ]

    const [mobileOpen, setMobileOpen] = useState(false);

    const scrollToElement = (toFind: String) => {
        const section = document.querySelector(`#${toFind.toLowerCase()}`)
        if(toFind == 'NFT Marketplace' || toFind == 'Land' ){
            window.scrollTo({ 
                top: window.scrollY + document.querySelector(`#commingsoon`).getBoundingClientRect().top - 120, 
                behavior: 'smooth' 
            })
        }else{
            window.scrollTo({ 
                top: window.scrollY + section.getBoundingClientRect().top - 120, 
                behavior: 'smooth' 
            })
            addRemoveClass(toFind);
        }
        setMobileOpen(false);
    }
    const addRemoveClass = (toFind) =>{
        links.forEach((element)=>{
            const tag = (element == 'NFT Marketplace' || element == 'Land') ? 'commingsoon' : element
            if(element== toFind){
                document.querySelector(`#${tag.toLowerCase()}`)?.classList.add('slide-in-bottom');
            }else{
                document.querySelector(`#${tag.toLowerCase()}`)?.classList.remove('slide-in-bottom');
            }
        })
    }
  
    useEffect(() => {
      addRemoveClass(links[0]);
    }, []);

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
            <div className="relative lg:flexs flex lg:items-centers items-center justify-between lg:w-full ">
                <div>
                    <Link href="/"> 
                        <a className="flex">
                            <Image 
                              src={Logo}
                              alt="Logo"
                              width="95"
                              height="30"
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
                                className="cursor-pointer lg:inline-block md:inline-block hidden md:mr-3 mr-8 border-b-2 border-transparent hover:opacity-70 transition-all ease-in duration-300">
                                    { element }
                                </li>
                            )
                        })
                    }
                    <button className="px-4  py-2  rounded-full text-white lg:inline-block md:inline-block hidden transition-all duration-300 w-54 h-10 custom-buy-now" onClick={() => window.open("https://pancakeswap.finance/swap",'_blank')} >Buy now</button>
                </ul>
            </div>
            <div className="lg:space-x-6 space-x-1">
                <button className="lg:hidden  md:hidden inline-block w-10 h-10 text-black p-1" onClick={() => setMobileOpen(true) }>
                    <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
              
            </div> 
        </div>
    </nav>
    <div className="fixed top-0 left-0 z-50 w-screen flex transition-all ease-in-out duration-500" style={{ "transform": mobileOpen ? "translateY(0)" : "translateY(-100%)","pointerEvents":mobileOpen ? "initial":"none"}}>
        <div className="  bg-zinc-900 p-12 w-full text-center h-screen  transition-all duration-500">
            <ul className="list-none flex items-start justify-center text-center flex-col space-y-8">
                <li className="inline-block relative">
                    <div className="relative ">
                        <Link href="/"> 
                        <a className="flex" >
                            <Image
                                src={Logo}
                                alt="Logo"
                                width="95"
                                height="28"
                                unoptimized={true}
                            />
                        </a>
                        </Link>
                        
                    </div>
                </li>
                {
                    links.map((element,key) => {
                        return (
                            <li 
                            key={key} 
                            onClick={() => {scrollToElement(element)}}
                            className="cursor-pointer text-white  md:mr-3 mr-8 border-b-2 border-transparent hover:border-black transition-all ease-in duration-300">
                                { element }
                            </li>
                        )
                    })
                }
                <button className="px-4  py-2  rounded-full text-white transition-all duration-300 custom-buy-now">Contact us</button>
            </ul>
            <button
                className="
                    absolute
                    top-10
                    right-9
                    inline-flex
                    items-center
                    justify-center
                    p-2
                    rounded-md
                    text-black-400
                "
                onClick={() => setMobileOpen(false) }
                >
                <svg
                    className="h-8 w-8"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                    className="inline-flex"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
        </div>
    </div>
   </>
  );
};

export default Navigation;
