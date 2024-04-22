import React from 'react'

import Support from '../../assets/Images/support.svg'
import Down from '../../assets/Images/down.svg'

function Connect() {
  return (
    <button className='w-[181px] flex items-center justify-center space-x-[39px] rounded-[30px] bg-[#152259] py-[21px]'>
        <div className='flex items-center space-x-[8px]'>
            <img src={Support} alt="Suppor icon" width={16} height={16} />
            <span className='text-[14px] text-[#FCFAFA] font-semibold leading-[17.36px]'>Support</span>
        </div>
        <img src={Down} alt="Down icon" width={16} height={16} />
    </button>
  )
}

export default Connect