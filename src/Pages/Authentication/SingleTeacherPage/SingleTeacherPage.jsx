import React, { useEffect } from 'react'

import { useNavigate, useParams } from 'react-router-dom'
import StudentIcon from '../../../assets/Images/students.svg'
import Phone from '../../../assets/Images/tel.svg'
import Email from '../../../assets/Images/email.svg'
import Arrow from '../../../assets/Images/arrow-left.svg'
function SingleTeacherPage({setState, teachers}) {

    useEffect(() =>{
        setState(false)
      })

      const {id} = useParams()
      const data = teachers.find(item => item.id == id)

    const navigate = useNavigate()
    const arrowClick = () =>{
        navigate('/teachers')
    }

  return (
    <div className='pt-[66px] pl-[163px] pb-[60px] pr-[158px] relative'>
        <button onClick={arrowClick} className='absolute top-0 right-0 left-0'>
            <img src={Arrow} alt="Arrow icon" width={30} height={30} />
        </button>
       <div className='flex items-center mb-[40px] space-x-[105px]'>
        <div className='flex flex-col items-center justify-center'>
            <img className='mb-[50px]' src={data.avatarImg} alt="Teachers image"  width={280} height={280}/>
            <strong className='text-[16px] block mb-[5px] leading-[19.88px] font-bold text-[#1A1A1A]'>{data.name}</strong>
            <span className='text-[#A7A7A7] text-[14px] leading-[17.36px] font-bold'>{data.subject} teacher</span>
        </div>
        <div className='w-[335px]'>
            <h2 className='text-[16px] text-[#1A1A1A] leading-[19.84px] font-semibold mb-[16px]'>About</h2>
            <p className='text-[#A7A7A7] text-[16px] font-medium leading-[21px]'>{data.about}</p>
            <div className='flex items-center space-x-[150px] mt-[30px]'>
                <div className='flex flex-col space-y-[10px]'>
                    <strong className='text-[#1A1A1A] font-semibold text-[12px] leading-[14.88px]'>Age</strong>
                    <span className='text-[#A7A7A7] text-[14px] font-medium leading-[17.36px]'>{data.age}</span>
                </div>
                <div className='flex flex-col space-y-[6px]'>
                    <strong className='text-[#1A1A1A] font-semibold text-[12px] leading-[14.88px]'>Gender</strong>
                    <span className='text-[#A7A7A7] text-[14px] font-medium leading-[17.36px]'>{data.gender == "1" ? "Male" : ""}</span>
                    <span className='text-[#A7A7A7] text-[14px] font-medium leading-[17.36px]'>{data.gender == "2" ? "Female" : ""}</span>
                </div>
            </div>
        </div>
       </div>
       <div className='flex items-center pl-[11px] space-x-[25px]'>
        <a href="#">
            <img src={StudentIcon} alt="Students icon" width={60} height={60}/>
        </a>
        <a href="#">
            <img src={Phone} alt="Phone icon" width={60} height={60} />
        </a>
        <a href={`mailto:${data.email}`}>
            <img src={Email} alt="Email" width={60} height={60} />
        </a>
       </div>
    </div>
  )
}

export default SingleTeacherPage