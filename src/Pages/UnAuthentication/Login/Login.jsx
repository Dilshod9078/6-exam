import React from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'

function Login({setToken}) {
    const newData = JSON.parse(window.localStorage.getItem("newToken"))  || {newLogin:"dilshod"}

    const loginSubmit = (evt) =>{
        evt.preventDefault()
        const data = {
            login: evt.target.login.value,
            password: evt.target.password.value
        }
        if(data.login == newData.newLogin && data.password == newData.newPassword){
         toast.success("Siz tizimga muvaffaqiyatli kirdingiz! :)")
        }
        else if(data.login == "dilshod" && data.password == "0007"){
            toast.success("Siz tizimga muvaffaqiyatli kirdingiz! :)")
        }
        else{
            toast.error("Login yoki Parolda xatolik bor! :(")
        }
        setTimeout(() => {
            setToken(data);
        }, 1000);
        evt.target.reset()
        window.localStorage.setItem("token" , JSON.stringify(data))
    }


  return (
      <div className='w-full h-[100vh] bg-[#FCFAFA] overflow-y-auto'>
        <Toaster position="top-center" reverseOrder={false} />
        <div className='flex flex-col items-center justify-center pt-[184px] pb-[125px]'>
            <h2 className='mb-[53px] text-[#4F4F4F] text-[36px] font-semibold leading-[44.65px]'>Welcome, Log into you account</h2>
            <form onSubmit={loginSubmit} className='w-[512px] pt-[72px] pb-[39px] bg-[#fff] flex flex-col items-center justify-center space-y-[14px]'>
                <div className='w-[238px] mb-[10px]'>
                 <p className='text-[#667085] font-family: sans-serif, "Inter" font-medium text-center text-[16px] leading-[25px]'>It is our great pleasure to have you on board! </p>
                </div>
                 <input name='login' autoComplete='off' className='w-[248px] placeholder:text-[#8A8A8A] placeholder:font-medium rounded-[4px] border-[0.5px] border-solid border-[#A7A7A7] pt-[13px] pl-[13px] pb-[12px] outline-none focus:shadow-md focus:shadow-[#2D88D4]' type="text" aria-label='Enter your Login' required placeholder='Enter your Login' />
                 <input name='password' autoComplete='off' className='w-[248px] placeholder:text-[#8A8A8A] placeholder:font-medium rounded-[4px] border-[0.5px] border-solid border-[#A7A7A7] pt-[13px] pl-[13px] pb-[12px] outline-none focus:shadow-md focus:shadow-[#2D88D4]' type="password" aria-label='Enter Password' required placeholder='Enter Password' />
                 <button type='submit' className='w-[248px] pt-[11px] pb-[12px] rounded-[4px] border-[0.5px] border-solid border-[#A7A7A7] transition hover:opacity-50 bg-[#2D88D4] text-white font-bold text-[14px] leading-[17.36px]'>Login</button>
                 <Link to={'sign-up'} className='text-[#2D88D4] block text-center font-family: sans-serif, "Inter" font-bold text-[12px] leading-[24px]'>Sign up</Link>
            </form>
        </div>
      </div>
  )
}

export default Login