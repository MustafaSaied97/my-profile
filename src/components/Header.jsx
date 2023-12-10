import React from "react";

export default function Header() {
  return (
    <header className='py-2'>
      <div className='container  mx-auto'>
          <div className='flex justify-between items-center'>
            <h1 className='font-Quaternary  lg:text-[65px] text-gradient-1 px-5 sm:text-[50px] text-[30px] '>Mustafa Saied</h1>
            <h1 className='bg-gradient btn sm:btn-lg btn-sm  text-center  '>Work with me</h1>
          </div>
      </div>
    </header>
  );
}
