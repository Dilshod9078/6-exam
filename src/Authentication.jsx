import React, { useEffect, useState } from 'react'

import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Navlink from './components/Navlink/Navlink'
import Modal from './components/Modal/Modal'

import DashboardPage from './Pages/Authentication/DashboardPage/DashboardPage'
import TeachersPage from './Pages/Authentication/TeachersPage/TeachersPage'
import StudentsPage from './Pages/Authentication/StudentsPage/StudentsPage'
import BellingPage from './Pages/Authentication/BellingPage/BellingPage'
import SettingsPage from './Pages/Authentication/SettingsPage/SettingsPage'
import ExamsPage from './Pages/Authentication/ExamsPage/ExamsPage'
import FeaturesPage from './Pages/Authentication/FeaturesPage/FeaturesPage'
import AddPage from './Pages/Authentication/AddPage/AddPage'

import { Features } from './assets/Images/Icon'
import SiteLogo from './assets/Images/logo.svg'
import Bell from './assets/Images/bell.svg'
import SingleTeacherPage from './Pages/Authentication/SingleTeacherPage/SingleTeacherPage'

function Authentication() {

  const [state, setState] = useState(false)
  const [modal, setModal] = useState(false)
  const [teachers, setTeachers] = useState(JSON.parse(window.localStorage.getItem("teachers")) || [])
const navigate = useNavigate()
  const logOutBtn = () => {
    navigate('/')
    setModal(false)
  }


  return (
    <div className='flex justify-between'>
      <nav className='w-[20%] h-[100vh] overflow-y-auto bg-[#152259]'>
        <Link className='flex flex-col items-center justify-center space-y-[22px] pt-[26px] pb-[40px] border-b-[0.5px] border-solid border-[#BDBDBD]'>
          <img src={SiteLogo} alt="Site logo" width={65} height={65}/>
          <p className='text-white text-[14px] font-semibold leading-[17.36px]'>Udemy Inter. school</p>
        </Link>
        <div className='pt-[16px] pl-[28px] pr-[21px]'>
          <Navbar/>
           <div className='pt-[114px]'>
            <Navlink url={'/features'}>
                <Features setState={setState}/> 
                <p className='pr-[20px] text-[14px] font-semibold leading-[17.38px]'>Features</p>
                <span className='block px-[8px] py-[1px] leading-[12px] text-center text-[#000000] text-[10px] font-semibold bg-[#B9D7F1] rounded-[8px]'>NEW</span>
            </Navlink>
           </div>
        </div>
      </nav>

      <div className='w-[80%]'>
        {
          state &&
          <>
      <div className=' pl-[124px] pr-[104px] bg-[#FCFAFA] flex items-start justify-between pt-[31px] pb-[15px]'>
          <div className='flex flex-col'>
          <p className='text-[#424242] text-[16px] leading-[19.84px] font-medium'> Learn  how to launch faster</p>
          <span className=' text-[#424242] text-[16px] leading-[19.84px] font-normal'>watch our webinar for tips from our experts and get a limited time offer.</span>
          </div>
        <div className='flex items-center space-x-[38px] '>
          <img src={Bell} alt="Bell icon" width={24} height={24} />
          <button onClick={() => {setModal(true)}} className='w-[120px] transition hover:opacity-60 rounded-[8px] bg-[#509CDB] py-[11.5px] text-center text-[14px]  font-semibold leading-[17.36px] text-white'>Log out</button>
        </div>
</div>
        </>
        }

{
  state ||
  <>
          <div className='flex items-start space-x-[38px] justify-end pt-[31px] pl-[38px] pr-[104px] pb-[8px]'>
          <img src={Bell} alt="Bell icon" width={24} height={24} />
          <button onClick={() => {setModal(true)}} className='text-[14px]  font-semibold leading-[17.36px] text-[#424242]'>Log out</button>
        </div>

        </>
}


        <div className='pl-[38px] pr-[104px]'>
          <Routes>
            <Route path='/' element={<DashboardPage setState={setState}/>}/>
            <Route path='/teachers' element={<TeachersPage teachers={teachers} setTeachers={setTeachers} setState={setState}/>}/>
            <Route path='/students' element={<StudentsPage setState={setState}/>}/>
            <Route path='/billing' element={<BellingPage setState={setState}/>}/>
            <Route path='/settings' element={<SettingsPage setState={setState}/>}/>
            <Route path='/exams' element={<ExamsPage setState={setState}/>}/>
            <Route path='/features' element={<FeaturesPage setState={setState}/>}/>
            <Route path='/add' element={<AddPage setTeachers={setTeachers} teachers={teachers} setState={setState}/>} />
            <Route path='/single-teacher/:id' element={<SingleTeacherPage teachers={teachers} setState={setState} />} />
          </Routes>
        </div>
      </div>

      <Modal modal={modal} setModal={setModal}>
          <p className='text-[30px] text-white text-center pt-[10px] font-semibold'>Do you really want to quit?</p>
         <div className='flex items-center mt-[20px] space-x-5 justify-center'>
          <button onClick={() => {setModal(false)}} className='text-white text-[20px] font-bold p-3 rounded-md text-center bg-blue-500'>Cancel</button>
          <button onClick={logOutBtn} className='text-white text-[20px] font-bold p-3 rounded-md text-center bg-red-500'>Log out</button>
         </div>
      </Modal>
    </div>
  )
}

export default Authentication