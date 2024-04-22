import React, { useEffect } from 'react'

import DashboardList from '../../../components/DashboardList/DashboardList'

import AdminIcon from '../../../assets/Images/admin-icon.svg'
import ClassIcon from '../../../assets/Images/class.svg'
import Students from '../../../assets/Images/students.svg'
import Connect from '../../../components/Connect/Connect'


function DashboardPage({setState}) {

  useEffect(() =>{
    setState(true)
  }, [])

  return (
    <div className='pl-[89px] pt-[53px]'>
      <h1 className='text-[rgb(79,79,79)] mb-[23px] text-[36px] leading-[44.65px] font-semibold'>Welcome to your dashboard, Udemy school</h1>
      <p className='pl-[100px] text-[#4F4F4F] mb-[74px] text-[24px] leading-[29.77px] font-semibold'>Uyo/school/@teachable.com</p>
      <div className='flex items-end justify-between'>
      <ul className='pl-[89px] flex flex-col space-y-[51px]'>
       <DashboardList img={AdminIcon} title={"Add other admins "} text={"Create rich course content and coaching products for your students. When you give them a pricing plan, they’ll appear on your site!"} />
       <DashboardList img={ClassIcon} title={"Add classes"} text={"Create rich course content and coaching products for your students. When you give them a pricing plan, they’ll appear on your site!"} />
       <DashboardList img={Students} title={"Add students"} text={"Create rich course content and coaching products for your students. When you give them a pricing plan, they’ll appear on your site!"} />
      </ul>
      <div className='pb-[17px]'>
        <Connect/>
      </div>
      </div>
    </div>
  )
}

export default DashboardPage