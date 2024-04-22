import React, { useEffect } from 'react'

function SettingsPage({setState}) {
  useEffect(() =>{
    setState(false)
  })
  return (
    <div>
       <h2 className='text-[#4F4F4F] text-[24px] leading-[24.8px] font-medium'>Settings and profile</h2>
    </div>
  )
}

export default SettingsPage