import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div>
    <div className=' flex items-center justify-center w-full sm:w-[640px] md:w-[960px] lg:w-[1280px] h-[800px] bg-gray-200" '>
    <div className=' gap-3 "w-full lg:w-1/2 h-full pl-[60px] pr-[80px] flex flex-col justify-center'>
     <h1 className='w-[500] h-[134] "font-roboto text-[56px] font-bold leading-[67.2px] text-left underline-offset-2'>Learn new skills online with ease</h1>
    <p className='w-[500]   h-[45] font-roboto text-[18px] font-normal leading-[23.2px] text-left underline-offset-2'> Discover a wide range of courses covering a variety of 
      subjects, taught by expert instructors.
      </p>
     <div className="mt-6 flex space-x-4 justify-center md:justify-start">
            <button className="bg-[#000000] text-[#FFFFFF] px-6 py-3 rounded-md">
               Start learning now   </button>
        <button className="border-[#676767] border-[1px] bg-[#FFFFFF] text-[#000000] px-6 py-3 rounded-md">
             Explore Courses
</button></div>


              </div>


              
 {/* right side */}    
 <div className='w-full h-auto flex justify-center items-center p-4'>
   
 <Image className="mt-16 sm:mt-36 w-full max-w-[640px]" src="/image/figma6.jpg" alt='' width={640} height={300}/></div>
 

    </div> 
    </div>
  );
}

export default Hero;