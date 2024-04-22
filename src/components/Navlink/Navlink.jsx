import React from 'react'
import { NavLink } from 'react-router-dom'

function Navlink({url, children, title}) {
  return (
    <NavLink className={`text-white transition hover:bg-blue-300 pt-[11.5px] pb-[12.5px] pl-[16px] rounded-[4px] flex items-center space-x-[16px]`} to={url}>
        {children}
        <span className='text-[14px] leading-[17.38px] font-semibold'>{title}</span>
    </NavLink>
  )
}

export default Navlink