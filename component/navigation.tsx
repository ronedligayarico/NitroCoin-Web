import React from 'react';

const Navigation = () => {
    const links = [
        "Menu 1",
        "Menu 2",
        "Menu 3",
        "Menu 4",
        "Menu 5"
    ]

  return (
   <>
    <nav
        className="
          absolute
          flex flex-wrap
          items-center
          justify-between
          bg-transparent
          mb-3
          w-full
          z-20
          top-0
          shadow-sm
        "
      >
        <div className="
            container
            p-8
            flex flex-wrap flex-row
            items-center
            justify-between
            lg:px-0 md:px-0 px-4
            mx-auto
            
            "
        >
            <div className="relative lg:flexs flex lg:items-centers items-center ">
                <ul className="list-none flex items-center xl:space-x-6 lg:space-x-4">
                    <li className="inline-block md:mr-2 mr-8">
                       {/* <span className="font-bold">Nitro Coin Logo</span>  */}
                       <img src="/nitro.ico"  alt="" className="nav-icon"/>
                    </li>
                    <li className="inline-block md:mr-3 mr-8 text-center">
                       <span className="font-bold">|</span> 
                    </li>
                    {
                        links.map((element,key) => {
                            return (
                                <li 
                                key={key} 
                                className="cursor-pointer lg:inline-block md:inline-block hidden md:mr-3 mr-8 border-b-2 border-transparent hover:border-black transition-all ease-in duration-300">
                                    { element }
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    </nav>
   </>
  );
};

export default Navigation;
