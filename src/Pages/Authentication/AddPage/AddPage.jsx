import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function AddPage({setState, teachers, setTeachers}) {

    useEffect(() => {
        setState(false)
    })
   const [save, setSave] = useState(false)
    const [imgUrl, setImgUrl] = useState(null)
   const navigate = useNavigate()

    const choosImgFile = (evt) =>{
      setImgUrl(URL.createObjectURL(evt.target.files[0]))
    }

const addTeachersSubmit = (evt) =>{
   evt.preventDefault()
   const data = {
      id: Date.now(),
      avatarImg: imgUrl,
      name: evt.target.name.value,
      subject: evt.target.subject.value,
      about: evt.target.about.value,
      class: evt.target.class.value,
      email: evt.target.email.value,
      gender: evt.target.gender.value,
      age: evt.target.age.value
   }
   if(imgUrl == null){
      toast.error('Rasm tanlanishi shart! :(')
  }
  else{
      toast.success("Muvaffiqatli qo'shild! :)");
      setTeachers([...teachers, data])
      setTimeout(() => {
        navigate('/teachers')
      }, 1000)
  }
  setSave(!save)
}
useEffect(() =>{
  window.localStorage.setItem("teachers", JSON.stringify(teachers))
}, [save])

  return (
    <form onSubmit={addTeachersSubmit}>
        <Toaster position="top-center" reverseOrder={false} />
    <div className='flex items-center mb-[24px] justify-between py-[14px]'>
      <h2 className='text-[#4F4F4F] text-[20px] leading-[24.8px] font-medium'>Add Teachers</h2>
      <button type='submit' className='w-[80px] rounded-[4px] transition hover:opacity-60 text-white py-[12px] font-semibold text-[14px] leading-[17.36px] text-center bg-[#509CDB]'>Save</button>
    </div>
    <div className='flex items-start space-x-[52px]'>
        <div className='w-[407px] flex flex-col space-y-[36px]'>
     <label className='flex flex-col space-y-[5px]'>
        <span className='text-[#8A8A8A] text-[14px] font-medium leading-[17.36px]'>Full Name</span>
        <input name='name' autoComplete='off' className='w-full rounded-[4px] border-[0.5px] border-solid border-[#A7A7A7] outline-none focus:shadow-md focus:shadow-[gray] placeholder:text-[#8A8A8A] placeholder:text-[14px] placeholder:font-medium pt-[13px] pb-[12px] px-[10px]' required type="text" placeholder='Full Name' />
     </label>
     <label className='flex flex-col space-y-[5px]'>
        <span className='text-[#8A8A8A] text-[14px] font-medium leading-[17.36px]'>Email address</span>
        <input name='email' autoComplete='off' className='w-full rounded-[4px] border-[0.5px] border-solid border-[#A7A7A7] outline-none focus:shadow-md focus:shadow-[gray] placeholder:text-[#8A8A8A] placeholder:text-[14px] placeholder:font-medium pt-[13px] pb-[12px] px-[10px]' required type="email" placeholder='Email address' />
     </label>
     <label className='flex flex-col space-y-[5px]'>
        <span className='text-[#8A8A8A] text-[14px] font-medium leading-[17.36px]'>Subject</span>
        <input name='subject' autoComplete='off' className='w-full rounded-[4px] border-[0.5px] border-solid border-[#A7A7A7] outline-none focus:shadow-md focus:shadow-[gray] placeholder:text-[#8A8A8A] placeholder:text-[14px] placeholder:font-medium pt-[13px] pb-[12px] px-[10px]' required type="text" placeholder='Subject' />
     </label>
     <label className='flex flex-col space-y-[5px]'>
        <span className='text-[#8A8A8A] text-[14px] font-medium leading-[17.36px]'>About</span>
        <textarea name='about' autoComplete='off' className='w-full h-[172px] rounded-[4px] border-[0.5px] border-solid border-[#A7A7A7] outline-none focus:shadow-md focus:shadow-[gray] placeholder:text-[#8A8A8A] placeholder:text-[14px] placeholder:font-medium pt-[13px] pb-[12px] px-[10px]' typeof='text' required placeholder='About'></textarea>
     </label>
        </div>

        <div className='w-[407px] flex flex-col space-y-[36px]'>
     <label className='flex flex-col space-y-[5px]'>
        <span className='text-[#8A8A8A] text-[14px] font-medium leading-[17.36px]'>Class</span>
        <select name='class' className='w-full text-[14px] font-medium leading-[17.36px] text-[#8A8A8A] rounded-[4px] border-[0.5px] border-solid border-[#A7A7A7] outline-none focus:shadow-md focus:shadow-[gray] py-[15px] px-[10px] '>
            <option value={1} className='text-[14px] font-medium leading-[17.36px] text-[#8A8A8A]'>React N1</option>
            <option value={2} className='text-[14px] font-medium leading-[17.36px] text-[#8A8A8A]'>React N2</option>
            <option value={3} className='text-[14px] font-medium leading-[17.36px] text-[#8A8A8A]'>React N3</option>
            <option value={4} className='text-[14px] font-medium leading-[17.36px] text-[#8A8A8A]'>React N4</option>
        </select>
     </label>
     <label className='flex flex-col space-y-[5px]'>
        <span className='text-[#8A8A8A] text-[14px] font-medium leading-[17.36px]'>Gender</span>
        <select name='gender' className='w-full text-[14px] font-medium leading-[17.36px] text-[#8A8A8A] rounded-[4px] border-[0.5px] border-solid border-[#A7A7A7] outline-none focus:shadow-md focus:shadow-[gray] py-[15px] px-[10px] '>
            <option value={1} className='text-[14px] font-medium leading-[17.36px] text-[#8A8A8A]'>Male</option>
            <option value={2} className='text-[14px] font-medium leading-[17.36px] text-[#8A8A8A]'>Female</option>
        </select>
     </label>
     <label className='flex flex-col space-y-[5px]'>
        <span className='text-[#8A8A8A] text-[14px] font-medium leading-[17.36px]'>Age</span>
        <input name='age' autoComplete='off' className='w-full rounded-[4px] border-[0.5px] border-solid border-[#A7A7A7] outline-none focus:shadow-md focus:shadow-[gray] placeholder:text-[#8A8A8A] placeholder:text-[14px] placeholder:font-medium pt-[13px] pb-[12px] px-[10px]' required type="number" placeholder='Age' />
     </label>
     
     <label className='flex flex-col space-y-[5px] pt-[23px] pl-[12px]'>
      <span className='text-[18px] leading-[22.32px] font-medium text-[#4F4F4F]'>Import Img</span>
      <input onChange={choosImgFile} className='scale-0 opacity-0' accept='image/*' type="file" />
      {imgUrl ?
        <img src={imgUrl} alt="choose img" width={100} height={100} />
          : ""}
     </label>
        </div>
    </div>

      </form>
  )
}

export default AddPage