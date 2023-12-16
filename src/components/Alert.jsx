import React, { useEffect } from 'react';
import { useAlertContext } from 'src/context/alertContext';

export default function Alert() {
  const { isOpen, duration, type, message, onClose } = useAlertContext();
  const color = {
    info: 'info',
    warning: 'yellow',
    success: 'green',
    danger: 'red',
  }
  const clr={
    text:`text-${color[type]}-800`,
    bg:`bg-${color[type]}-50`,
    border:`border-${color[type]}-400`,
    hoverBg:`hover:bg-${color[type]}-200`,
    focusRing:`focus:ring-${color[type]}-400`,
  }

  useEffect(()=>{
    if(!isOpen) return

    let timeOut=setTimeout(()=>{
      onClose()
    },duration*10)
    
    return()=>{
      clearTimeout(timeOut)
    }
  },[isOpen])

  return (
  <>
    {true&&
    <section onClick={onClose} id="alert-1" className={`fixed ${isOpen?'left-0':'left-[-100%]'} m-4 duration-${duration} flex items-center p-4 mb-4 ${clr.text} rounded-lg ${clr?.bg} `} role="alert">
      {/* alert icon */}
      <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
      </svg>
      {/* alert text */}
      <span className="sr-only">Info</span>
      <p className="ms-3 text-sm font-medium mx-3">
        {message}
      </p>
      {/* alert close button */}
        <button  onClick={onClose} type="button" className={`ms-auto -mx-1.5 -my-1.5 ${clr.bg} text-${color[type]}-500 rounded-lg focus:ring-2 ${clr.focusRing} p-1.5 ${clr.hoverBg} inline-flex items-center justify-center h-8 w-8 `} data-dismiss-target="#alert-1" aria-label="Close">
          <span className="sr-only">Close</span>
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
          </svg>
      </button>
    </section>
    }
  </>
  );
}
