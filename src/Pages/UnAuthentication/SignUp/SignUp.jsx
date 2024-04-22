import React from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function SignUp({setSignUp}) {

    const navigate = useNavigate()

    const signUpSubmit = (evt) =>{
        evt.preventDefault()
        const signData = {
            newLogin: evt.target.newLogin.value,
            newPassword: evt.target.newPassword.value
        }
        toast.success("Ma'lumotlar yangilandi :)")
        setTimeout(() => {
            setSignUp(signData)
            navigate('/')
        }, 2000);
        window.localStorage.setItem("newToken", JSON.stringify(signData))
    }

  return (
    <div className='w-full h-[100vh] bg-[#FCFAFA] overflow-y-auto'>
        <Toaster position="top-center" reverseOrder={false} />
    <div className='flex flex-col items-center justify-center py-[98px]'>
        <h2 className='mb-[53px] text-[#4F4F4F] text-[36px] font-semibold leading-[44.65px]'>Welcome, Sign up</h2>
        <form onSubmit={signUpSubmit} className='w-[512px] pt-[72px] pb-[100px] bg-[#fff] flex flex-col items-center justify-center'>
            <div className='w-[238px] mb-[34px]'>
             <p className='text-[#667085] font-family: sans-serif, "Inter" font-medium text-center text-[16px] leading-[25px]'>It is our great pleasure to have you on board! </p>
            </div>
             <input name='email' autoComplete='off' className='w-[248px] placeholder:text-[#8A8A8A] placeholder:font-medium mb-[14px] rounded-[4px] border-[0.5px] border-solid border-[#A7A7A7] pt-[13px] pl-[13px] pb-[12px] outline-none focus:shadow-md focus:shadow-[#2D88D4]' type="email" aria-label='Enter your Email' required placeholder='Enter your Email' />
             <input name='newLogin' autoComplete='off' className='w-[248px] placeholder:text-[#8A8A8A] placeholder:font-medium mb-[14px] rounded-[4px] border-[0.5px] border-solid border-[#A7A7A7] pt-[13px] pl-[13px] pb-[12px] outline-none focus:shadow-md focus:shadow-[#2D88D4]' type="text" aria-label='Enter your Login' required placeholder='Enter your Login' />
             <input name='newPassword' autoComplete='off' className='w-[248px] placeholder:text-[#8A8A8A] placeholder:font-medium mb-[34px] rounded-[4px] border-[0.5px] border-solid border-[#A7A7A7] pt-[13px] pl-[13px] pb-[12px] outline-none focus:shadow-md focus:shadow-[#2D88D4]' type="password" aria-label='Enter Password' required placeholder='Enter Password' />
             <button type='submit' className='w-[248px] pt-[11px] pb-[12px] rounded-[4px] border-[0.5px] border-solid border-[#A7A7A7] transition hover:opacity-50 bg-[#2D88D4] text-white font-bold text-[14px] leading-[17.36px]'>Sign up</button>
        </form>
    </div>
  </div>
  )
}

export default SignUp