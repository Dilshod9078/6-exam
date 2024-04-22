import React, { useEffect } from 'react'

function BellingPage({setState}) {
  useEffect(() =>{
    setState(false)
  })
  return (
    <div>
      <h2 className='text-[#4F4F4F] text-[24px] leading-[24.8px] font-medium'>Billing</h2>
    </div>
  )
}

export default BellingPage