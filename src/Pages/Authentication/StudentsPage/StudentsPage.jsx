import React, { useEffect } from 'react'

function StudentsPage({setState}) {
  useEffect(() => {
    setState(false)
  })
  return (
    <div>
      <h2 className='text-[#4F4F4F] text-[24px] leading-[24.8px] font-medium'>Students</h2>
    </div>
  )
}

export default StudentsPage