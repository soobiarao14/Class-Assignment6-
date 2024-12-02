

import React from 'react';
import Image from 'next/image';


const Footer = () => {
  return (
    <div>
    


    <Image src = "/image/Newsletter.svg" alt ="" width={1120} height={82} />
<Image className='m-7'   src = "/image/Links.svg" alt ="" width={1120} height={225} />
<div className='border-t border-black h-[75px] flex items-center justify-around'>
      <span>2023 Ddsgnr. All right reserved.</span>
      <span>Privacy Policy</span>
      <span>Terms of Service</span>
      <span>Cookies Settings</span>
      <Image
      src={"/image/Social Links.png"}
      alt='social link'
      width={132}
      height={24}
      />
    </div>

    </div>
  );
}

export default Footer;