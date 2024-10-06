import React, { useEffect } from 'react'
import check from './assets/check.png'
import { useState } from 'react'

function TransferComponent() {

const [uploadingHeight, setUploadingHeight]=useState(0);
const [dotCount, setDotCount] = useState(0);


useEffect(() => {
    const interval = setInterval(() => {
        setUploadingHeight(prevHeight => {
          if (prevHeight >=4) {
            clearInterval(interval); 
            return 10; 
          }
          return prevHeight + 1;
        });
      }, 1000);
      return () => clearInterval(interval);  
  }, []);

  useEffect(() => {
    if (uploadingHeight < 4) {
      const dotInterval = setInterval(() => {
        setDotCount((prevDotCount) => (prevDotCount + 1) % 3); 
      }, 500); 

      return () => clearInterval(dotInterval);
    }
  }, [uploadingHeight]);

  return (
    <div className='bg-[#e6dbe7] rounded-[100px] h-[400px] w-[350px] flex flex-col justify-center items-center'>
       <div className='relative shadow-md shadow-[#6f28c1] rounded-3xl space-x-5'>
        <button className='bg-[#9a5ae4] px-[60px] py-3 rounded-3xl text-white text-start min-w-[230px]'>
        {uploadingHeight<4 && <span className=''>
            Uploading
            <span className='animate-bounce'>
                {'.'.repeat(dotCount+1)}
              </span>
          </span>}
          {uploadingHeight>=4 && <span className='animate-slideOut'>
            Uploaded
          </span> } 
        </button>
        <div className='rounded-full bg-[#DCB3EA]  absolute top-1 left-[160px] w-10 h-10 z-10 overflow-hidden'>
        <div className=' bg-[#6324f4] w-10 absolute bottom-0' style={{ height: `${uploadingHeight * 10}px` }}> </div>
        {uploadingHeight>=4 && <img src={check} className='absolute z-10 left-3 top-3'></img>}
        </div>
      </div>
    </div>
  )
}

export default TransferComponent