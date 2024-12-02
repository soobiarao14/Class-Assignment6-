import React from 'react';
import Image from 'next/image';

const Navber = () => {
  return (
    <div>
      <div  className='bg-[#F7F7F7]  gap-4px'  >
    <nav className='gap-32px py-0 pl-[10] flex justify-between top-12 bottom-12 gap-32 h-[45px]  w- w-full max-w-[1154px]'>
    <Image className='left-[100px] px-[62px] pr-[64px] m-1' src = "/image/Nav.svg" alt ="" width={386} height={30}/>
    <Image className='w-full max-w-[162px] py-2 sm:py-3 sm:pr-[64px] '  src="/image/Social Links.png" alt='' width={162} height={24}/>
    </nav>
    </div>
    </div>
  );
}

export default Navber;