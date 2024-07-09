import React from 'react'

const ReUse = ( {p1, span1, h1, h2, p2, btn} ) => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto flex flex-col items-center drop-shadow-2xl mt-3">
        <div className="flex items-center gap-5">
          <p className='border border-[#0B0A0A] h-px w-[5rem] ml-2 hidden sm:block lg:hidden xl:block'/>
          <p className='font-light text-sm sm:text-base lg:text-lg font-ClashDisplay'>{p1}</p>
        </div>
        <h1 className='font-normal text-2xl sm:text-3xl lg:text-4xl font-Neuropal'><span className='text-[#C92127]'>{span1}</span> {h1}</h1>
        <h2 className='font-medium text-xl sm:text-2xl lg:text-3xl font-ClashDisplay'>{h2}</h2>
        <p className='w-full xs:w-[70%] sm:w-[80%] xl:w-[976px] text-center mt-5 font-normal text-sm sm:text-base lg:text-lg font-ClashDisplay'> {p2} </p>
        
      </div>
    </>
  )
}

export default ReUse;
