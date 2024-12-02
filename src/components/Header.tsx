import React from 'react';
import Image from 'next/image';
const Header = () => {
  return (
    <div>
       <div className='bg-[#F7F7F7] m-4 p-1 h-auto md:h-[72px] w-full max-w-[1280px] flex justify-between  gap-4 md:gap-20'>
         <Image  className='w-auto max-w-[130px] h-auto md:h-[41px]' src = "/image/logo.svg" alt ="" width={130} height={41} />
         <Image className='py-2 w-full max-w-[786px] h-auto md:h-[44px] ' src="/image/Column (1).svg" alt='' width={786} height={44}  />
    </div>
    </div>
  );
}

export default Header;