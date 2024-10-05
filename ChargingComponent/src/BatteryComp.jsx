import React from 'react'
import thunder from './assets/thunder.svg'
import dot from './assets/dot.svg'
import { useState, useEffect } from 'react';

function BatteryComp() {

  const [battery, setBattery]=useState(30);
  //const [innerWidth, setInnerWidth]=useState(50);

  useEffect(() => {
    const interval = setInterval(() => {
        setBattery(prevBattery => {
          if (prevBattery >= 100) {
            clearInterval(interval); 
            return 100; 
          }
          return prevBattery + 1;
        });
      }, 1000);
      return () => clearInterval(interval);

  
  }, []);

  return (
    <div className='bg-[#101110] rounded-[100px] h-[400px] w-[350px] flex flex-col justify-center items-center'>
        <div className=''>
        <div className='flex flex-row'>
         <img src={thunder} className=''></img>
         <h1 className='text-[#ae86f4] text-[25px]'>{battery === 100 ? "Done" : "Charging..."}</h1>
        </div>
        <div className='flex mt-2'>
        <h1 className='text-[30px] text-white align-left'>{battery}%</h1>
        <img src={dot} className="align-middle"></img>
        <h1 className="text-[30px] text-white">{battery === 100 ? "Full" : `${100 - battery} min left`} </h1>
        </div>
        </div>
       <div className='bg-[#302441] h-[100px] w-[220px] mt-[50px] rounded-3xl relative'>
        <div className='absolute top-0 left-0  h-[100px] bg-[#bd5cee] rounded-3xl shadow-md shadow-custom pt-[20px] z-10 '  style={{ width: `${battery * 2.2}px` }}>
        </div>
      </div>
    </div>
  )
}

export default BatteryComp