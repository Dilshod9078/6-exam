import React, { useEffect } from 'react'

function FeaturesPage({setState}) {
   useEffect(() =>{
    setState(false)
   })
  return (
    <div>
      <h2 className='text-[#4F4F4F] text-[24px] leading-[24.8px] font-medium'>Features</h2>
      <div className='pt-[100px]'>
        <p className='text-[40px] text-center leading-[50px] text-[#4f4f4f] font-semibold'>The page is being updated!</p>
      </div>
    </div>
  )
}

export default FeaturesPage