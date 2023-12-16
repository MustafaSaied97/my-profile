import React, { useEffect, useRef, useState } from "react";
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
  const [isIntersected,setIsIntersected]=useState(false)

  function checkIntersection() {
    // Select the elements with id 'fixed' and 'static'
    const fixedElement = document.getElementById('navbar');
    const staticElement = document.getElementById('footer');
    
    // Get the bounding rectangles of the elements
    const fixedRect = fixedElement.getBoundingClientRect();//getBoundingClientRect() retrieves the size of  element and its position relative to the viewport,
    const staticRect = staticElement.getBoundingClientRect();

    // Check for intersection by comparing positions
    const isIntersecting =
      fixedRect.bottom > staticRect.top &&
      fixedRect.top < staticRect.bottom &&
      fixedRect.right > staticRect.left &&
      fixedRect.left < staticRect.right
    ;
    
    // Return whether elements are intersecting
    return isIntersecting;
  }

  useEffect(()=>{
    window.addEventListener('scroll', () => {
      const intersecting = checkIntersection();
      if (intersecting) {
        //console.log('Elements are intersecting');
        // Do something when elements intersect
        setIsIntersected(true)
      } else {
        //console.log('Elements are not intersecting');
        // Do something when elements don't intersect
        setIsIntersected(false)
      }
    });
  },[])

  return <nav id='navbar'  className={` fixed ${isIntersected? 'bottom-[--footer-height]':'bottom-2 lg:bottom-4'} duration-150   w-full overflow-hidden z-50`}  >
    <div className="container mx-auto mb-3 ">
        <div className="bg-black/20 lg:h-[96px] h-[70px] backdrop-blur-2xl w-full  max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl rounded-full text-white/50">
            {arrayIcons.map((item,index)=>
              <Link 
              key={index}
              to={item.path} 
              activeClass="active"
              smooth={true}
              spy={true}
              offset={item.path=='banner'?-200:0}
              className="cursor-pointer hover:bg-black/50 rounded-full flex justify-center items-center w-[60px] h-[60px]"
              > 
                {item.icon}
              </Link>
            )}
        </div>
    </div>
  </nav>;
}
