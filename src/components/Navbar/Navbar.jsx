import React from 'react'
import Navlink from '../Navlink/Navlink'
import { Dashboard,Teachers, Students, Billing, Settings, Exams, Features } from '../../assets/Images/Icon'

function Navbar() {
  return (
    <ul className='flex flex-col space-y-[8px]'>
        <Navlink url={'/'} title={"Dashboard"}>
            <Dashboard/>
        </Navlink>
        <Navlink url={'/teachers'} title={"Teachers"}>
            <Teachers/>
        </Navlink>
        <Navlink url={'/students'} title={"Students"}>
            <Students/>
        </Navlink>
        <Navlink url={'/billing'} title={"Billing"}>
            <Billing/>
        </Navlink>
        <Navlink url={'/settings'} title={"Settings and profile"}>
            <Settings/>
        </Navlink>
        <Navlink url={'/exams'} title={"Exams"}>
            <Exams/>
        </Navlink>
    </ul>
  )
}

export default Navbar