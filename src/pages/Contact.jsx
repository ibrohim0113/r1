import React from 'react'
import log from "../image/Frame 24 (2).svg"
import log1 from "../image/calogo1 2 (1).svg"
import log2 from "../image/Frame 1707480642.svg"
import log3 from "../image/ic_outline-email.svg"
import log4 from "../image/solar_phone-outline.svg"
import log5 from "../image/proicons_location.svg"

const Contact = () => {
  return (
    <>
      <div className='flex justify-center mt-[53px]'>
        <img src={log} alt="" />
      </div>
      <img className='absolute top-35 left-230' src={log1} alt="" />
      <div className='flex justify-center gap-[55px] mt-[30px]'>
        <div className='w-[642px] h-[577px] bg-[#141414]   rounded-[12px] pl-[40px] pr-[40px] pt-[32px]'>
          <p className='font-semibold text-[20px] text-white'>Send Us a Message</p>
          <div className='flex mt-[41px] gap-[14px]'>
            <input
              type="text"
              placeholder='First Name'
              className="rounded-[5px] text-[15px] text-white w-[274px] pl-[14px] h-[42px] bg-[#FFFFFF0D] outline-none focus:outline-none"
            />
            <input
              type="text"
              placeholder='Last Name'
              className="rounded-[5px] text-[15px] text-white w-[274px] pl-[14px] h-[42px] bg-[#FFFFFF0D] outline-none focus:outline-none"
            />
          </div>
          <input
            type="text"
            placeholder='Email'
            className="mt-[24px] rounded-[5px] text-white w-[562px] text-[15px] pl-[14px] h-[42px] bg-[#FFFFFF0D] outline-none focus:outline-none"
          />
          <input
            type="text"
            placeholder='Headline (Optional)  '
            className="mt-[24px] rounded-[5px] text-white w-[562px] text-[15px] pl-[14px] h-[42px] bg-[#FFFFFF0D] outline-none focus:outline-none"
          />
          <div className='pl-[8px] rounded-[5px] flex items-center  w-[562px] h-[42px]  bg-[#FFFFFF0D] mt-[24px]'>
            <img className='w-[63px] h-[34px]' src={log2} alt="" />
            <input
              type="text"
              placeholder='Phone Number'
              className="text-[15px] rounded-[5px] text-white w-[404px] pl-[14px] h-[42px] outline-none focus:outline-none"
            />
          </div>
          <div className='w-[562px] h-[114px] bg-[#FFFFFF0D] mt-[24px] rounded-[5px]'>
            <p className='p-[12px] text-[15px]  text-[#FFFFFF99] '>Application Submission </p>
          </div>
          <button className='w-[562px] h-[46px] rounded-[12px] bg-[#0A84FF] text-white font-medium mt-[24px]'>Send</button>
        </div>
        <div>
          <div className='w-[559px] h-[319px] bg-[#141414] pl-[40px] pt-[32px] rounded-[24px]'>
            <p className='text-[20px] font-bold text-white'>Contact Information</p>
            <div className='flex  gap-[9px] mt-[20px]'>
              <img className='mt-[4px] w-[24px] h-[24px]' src={log3} alt="" />
              <div>
                <p className='font-semibold text-white'>Email</p>
                <p className='text-[14px] text-[#FFFFFFCC]'>contact@catalystanalytics.io</p>
              </div>
            </div>
            <div className='flex  gap-[9px] mt-[24px]'>
              <img className='mt-[6px] w-[20px] h-[20px]' src={log4} alt="" />
              <div>
                <p className='font-semibold text-white'>Phone</p>
                <p className='text-[14px] text-[#FFFFFFCC]'>(469) 712-4672</p>
              </div>
            </div>
            <div className='flex gap-[9px] mt-[24px]'>
              <img className='mt-[4px] w-[18px] h-[18px]' src={log5} alt="" />
              <div>
                <p className='font-semibold text-white'>Office</p>
                <p className='text-[14px] text-[#FFFFFFCC]'>5511 Parkcrest Dr, Suite 103</p>
                <p className='text-[14px] text-[#FFFFFFCC]'>Austin, TX 78731</p>
                <p className='text-[14px] text-[#FFFFFFCC]'>United States</p>
              </div>
            </div>
          </div>
          <div className='pt-[32px] pl-[40px]  w-[555px] h-[230px] pr-[40px] bg-[#141414] mt-[28px] rounded-[24px]'>
            <p className='text-white font-bold text-[20px]'>Contact Information</p>
            <p className='text-[14px] font-normal text-[#FFFFFFCC] pt-[20px]'>Want to discuss your project in detail? Schedule a free 30-minute consultation with our team of experts. We'll help you understand how our solutions can benefit your business.</p>
            <button className='w-[475px] h-[42px] bg-[#0A84FF] mt-[12.8px] rounded-[10px] text-white text-[14px] font-semibold'>Book a Meeting</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
