import React, { useRef } from "react";
import { BiHomeAlt,BiUser  } from "react-icons/bi";
import {BsClipboardData  , BsChatSquare} from "react-icons/bs"
import { PiBriefcaseLight } from "react-icons/pi";

import {Link} from 'react-scroll'
export default function NavBar() {
  const arrayIcons=[
    {
      icon:<BiHomeAlt/>,
      path:'banner'
    },
    {
      icon:<BiUser/>,
      path:'about'
    },
    {
      icon:<BsClipboardData/>,
      path:'services'
    },
    {
      icon:<PiBriefcaseLight/>,
      path:'work'
    },
    {
      icon:<BsChatSquare/>,
      path:'contact'
    },
  ]

  return <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50"  >
    <div className="container mx-auto ">
        <div className="bg-black/20 lg:h-[96px] h-[70px] backdrop-blur-2xl w-full  max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl rounded-full text-white/50">
            {arrayIcons.map((item,index)=>
              <Link 
              key={index}
              to={item.path} 
              activeClass="active"
              smooth={true}
              spy={true}
              offset={item.path=='banner'?-200:0}
              className="cursor-pointer active:bg-gradient hover:bg-black/50 rounded-full flex justify-center items-center w-[60px] h-[60px]"
              > 
                {item.icon}
              </Link>
            )}
        </div>
    </div>
  </nav>;
}
