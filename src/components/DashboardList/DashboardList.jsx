import React from 'react'

function DashboardList({img, alt, title, text}) {
  return (
    <li className='flex items-start space-x-[20px]'>
       <img src={img} alt={alt} width={36} height={36} />
       <div className='w-[483px] flex flex-col space-y-[16px]'>
        <h3 className='text-[#4F4F4F] text-[24px] font-medium leading-[29.77px]'>{title}</h3>
        <p className='text-[#4F4F4F] text-[14px] font-normal leading-[18.63px]'>{text}</p>
       </div>
    </li>
  )
}

export default DashboardList