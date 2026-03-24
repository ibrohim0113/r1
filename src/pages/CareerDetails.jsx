import React from 'react'
import log from "../image/image 6.svg"
import log1 from "../image/Frame 81.svg"
import log2 from "../image/Frame 1707480642.svg"
import log3 from "../image/Message.svg"
import log4 from "../image/image 8.svg"
import log5 from "../image/Icon Container (1).svg"

const CareerDetails = () => {
  return (
    <>
      <div className="relative">
        <img className='absolute w-full top-0 left-0 z-0' src={log} alt="" />
        <div className='relative z-10 text-center pt-[94px]'>
          <p className='text-[64px] font-extrabold text-white'>Web Designer</p>
          <button className='mt-[17px] w-[235px] h-[50px] bg-[#0A84FF] text-white rounded-[12px]'>Apply Now</button>
        </div>
      </div>
      <div className='flex mt-[155px] gap-[33px] justify-center'>
        <div>

          <div className='w-[834px] pl-[32px] pr-[32px] bg-[#1A1A1A] h-[1324px] rounded-[12px]'>
            <p className='pt-[32px] font-medium text-[24px] text-[#F9EFEC]'>About this position</p>

            <p className='pt-3 text-[#B3B3B2] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p className='pt-6 text-[#B3B3B2] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>

            <p className='pt-6 text-[#B3B3B2]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>

            <p className='pt-6 font-medium text-[24px] text-[#F9EFEC]'>Responsibilities</p>

            <div className='flex gap-[10px] mt-[12px] items-center'>
              <img src={log1} alt="" />
              <p className='text-[#B3B3B2]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
            </div>
            <div className='flex gap-[10px] mt-[12px] items-center'>
              <img src={log1} alt="" />
              <p className='text-[#B3B3B2]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </div>
            <div className='flex gap-[10px] mt-[12px] items-center'>
              <img src={log1} alt="" />
              <p className='text-[#B3B3B2]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
            </div>
            <div className='flex gap-[10px] mt-[12px] items-center'>
              <img src={log1} alt="" />
              <p className='text-[#B3B3B2]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
            </div>
            <div className='flex gap-[10px] mt-[12px] items-center'>
              <img src={log1} alt="" />
              <p className='text-[#B3B3B2]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  ever since the 1500s,</p>
            </div>
            <div className='flex gap-[10px] mt-[12px] items-center'>
              <img src={log1} alt="" />
              <p className='text-[#B3B3B2]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
            </div>
            <p className='pt-6 font-medium text-[24px] text-[#F9EFEC]'>Benefits</p>
            <p className='pt-3 text-[#B3B3B2] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p className='pt-6 text-[#B3B3B2] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <p className='pt-6 text-[#B3B3B2]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          </div>
          <div className='w-[834px] h-[807px] bg-[#141414] mt-[30px]  rounded-[12px] pl-[40px] pr-[40px] pt-[32px]'>
            <p className='font-semibold text-[20px] text-white'>Apply Now</p>
            <div className='flex mt-[41px] gap-[14px]'>
              <input
                type="text"
                placeholder='First Name*'
                className="rounded-[5px] text-white w-[370px] pl-[14px] h-[42px] bg-[#FFFFFF0D] outline-none focus:outline-none"
              />
              <input
                type="text"
                placeholder='Last Name*'
                className="rounded-[5px] text-white w-[370px] pl-[14px] h-[42px] bg-[#FFFFFF0D] outline-none focus:outline-none"
              />
            </div>
            <input
              type="text"
              placeholder='Email*'
              className="mt-[24px] rounded-[5px] text-white w-[754px] pl-[14px] h-[42px] bg-[#FFFFFF0D] outline-none focus:outline-none"
            />
            <input
              type="text"
              placeholder='Headline (Optional)  '
              className="mt-[24px] rounded-[5px] text-white w-[754px] pl-[14px] h-[42px] bg-[#FFFFFF0D] outline-none focus:outline-none"
            />
            <div className='pl-[8px] rounded-[5px] flex items-center  w-[754px] h-[42px]  bg-[#FFFFFF0D] mt-[24px]'>
              <img className='w-[63px] h-[34px]' src={log2} alt="" />
              <input
                type="text"
                placeholder='Phone Number'
                className=" rounded-[5px] text-white w-[504px] pl-[14px] h-[42px] outline-none focus:outline-none"
              />
            </div>
            <div className='w-[754px] h-[114px] bg-[#FFFFFF0D] mt-[24px] rounded-[5px]'>
              <p className='p-[12px] text-[15px]  text-[#FFFFFF99] '>Application Submission </p>
            </div>
            <img className='mt-[24px]' src={log3} alt="" />
            <img className='mt-[41px]' src={log4} alt="" />
            <button className='w-[754px] h-[50px] rounded-[12px] bg-[#0A84FF] text-white font-medium mt-[41px]'>Submit Application</button>
          </div>
        </div>


        <div className='w-100 h-123.75 bg-[#1A1A1A] rounded-[14px] pl-[32px] pt-[36px] pr-[32px]'>
          <p className='pb-[24px] font-medium text-[24px] text-[#F9EFEC]'>WEB DESINGER</p>

          <div className='w-[259px] h-[41px] bg-[#1F1F1F] rounded-[45px] items-center flex'>
            <p className='pl-[16px] text-[#B3B3B2] text-[14px]'>Salary</p>
            <div className='w-1 h-1 bg-[#0A84FF] rounded-[50%] ml-2'></div>
            <p className='font-medium text-[#E6E6E6] text-[14px] pl-[8px]'>$45,000 - $60,000 per year</p>
          </div>
          <div className='w-[167px] h-[41px] bg-[#1F1F1F] rounded-[45px] items-center flex mt-[20px]'>
            <p className='pl-[16px] text-[#B3B3B2] text-[14px]'>Experience</p>
            <div className='w-1 h-1 bg-[#0A84FF] rounded-[50%] ml-2'></div>
            <p className='font-medium text-[#E6E6E6] text-[14px] pl-[8px]'>1+ year</p>
          </div>
          <div className='w-[179px] h-[41px] bg-[#1F1F1F] rounded-[45px] items-center flex mt-[20px]'>
            <p className='pl-[16px] text-[#B3B3B2] text-[14px]'>Deadline</p>
            <div className='w-1 h-1 bg-[#0A84FF] rounded-[50%] ml-2'></div>
            <p className='font-medium text-[#E6E6E6] text-[14px] pl-[8px]'>30/09/2025</p>
          </div>
          <p className='pt-[24px] font-medium text-[18px] text-[#F9EFEC]'>Skills</p>
          <p className='pt-[12px] text-[14px] text-[#B3B3B2]'>Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design expertise.</p>
          <button className='w-[336px] h-[50px] bg-[#0A84FF] mt-[24px] rounded-[12px] text-white font-medium'>Apply Now</button>
        </div>
      </div>

      <p className='pb-[50px] pl-[120px] font-semibold text-[36px] text-[#F9EFEC] pt-[111px]'>Similar Positions</p>
      <div className='flex flex-wrap gap-[20px] justify-center'>
        <div className='bg-[#1A1A1A] w-[623px] h-[600px] pl-[50px] rounded-[14px] '>
          <div className='flex items-center gap-[14px] pt-[50px] mb-[40px]'>
            <img src={log5} alt="" />
            <h1 className='text-[30px] text-[#F9EFEC] font-medium'>Web Designer</h1>
          </div>
          <div className='w-[314px] h-[47px] bg-[#1F1F1F] rounded-[45px] items-center flex'>
            <p className='pl-[16px] text-[#B3B3B2]'>Salary</p>
            <div className='w-1 h-1 bg-[#0A84FF] rounded-[50%] ml-2'></div>
            <p className='font-medium text-[#E6E6E6] text-[18px] pl-[8px]'>$45,000 - $60,000 per year</p>
          </div>
          <div className='flex  gap-[20px]'>
            <div className='w-[197px] h-[47px] bg-[#1F1F1F] rounded-[45px] items-center flex mt-[20px]'>
              <p className='pl-[16px] text-[#B3B3B2]'>Experience</p>
              <div className='w-1 h-1 bg-[#0A84FF] rounded-[50%] ml-2'></div>
              <p className='font-medium text-[#E6E6E6] text-[18px] pl-[8px]'>1+ year</p>
            </div>
            <div className='w-[212px] h-[47px] bg-[#1F1F1F] rounded-[45px] items-center flex mt-[20px]'>
              <p className='pl-[16px] text-[#B3B3B2]'>Deadline</p>
              <div className='w-1 h-1 bg-[#0A84FF] rounded-[50%] ml-2'></div>
              <p className='font-medium text-[#E6E6E6] text-[18px] pl-[8px]'>30/09/2025</p>
            </div>
          </div>
          <p className='font-medium text-[24px] text-[#F9EFEC] pt-[40px]'>SKILLS</p>
          <p className='w-[523px] text-[18px] text-[#B3B3B2] pt-[12px]'>Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design expertise.</p>
          <button className='w-[523px] h-[63px] bg-[#0A84FF] text-[18px] text-white rounded-[12px] mt-[40px]'>Apply Now</button>
        </div>
        <div className='bg-[#1A1A1A] w-[623px] h-[600px] pl-[50px] rounded-[14px] '>
          <div className='flex items-center gap-[14px] pt-[50px] mb-[40px]'>
            <img src={log5} alt="" />
            <h1 className='text-[30px] text-[#F9EFEC] font-medium'>Web Designer</h1>
          </div>
          <div className='w-[314px] h-[47px] bg-[#1F1F1F] rounded-[45px] items-center flex'>
            <p className='pl-[16px] text-[#B3B3B2]'>Salary</p>
            <div className='w-1 h-1 bg-[#0A84FF] rounded-[50%] ml-2'></div>
            <p className='font-medium text-[#E6E6E6] text-[18px] pl-[8px]'>$45,000 - $60,000 per year</p>
          </div>
          <div className='flex  gap-[20px]'>
            <div className='w-[197px] h-[47px] bg-[#1F1F1F] rounded-[45px] items-center flex mt-[20px]'>
              <p className='pl-[16px] text-[#B3B3B2]'>Experience</p>
              <div className='w-1 h-1 bg-[#0A84FF] rounded-[50%] ml-2'></div>
              <p className='font-medium text-[#E6E6E6] text-[18px] pl-[8px]'>1+ year</p>
            </div>
            <div className='w-[212px] h-[47px] bg-[#1F1F1F] rounded-[45px] items-center flex mt-[20px]'>
              <p className='pl-[16px] text-[#B3B3B2]'>Deadline</p>
              <div className='w-1 h-1 bg-[#0A84FF] rounded-[50%] ml-2'></div>
              <p className='font-medium text-[#E6E6E6] text-[18px] pl-[8px]'>30/09/2025</p>
            </div>
          </div>
          <p className='font-medium text-[24px] text-[#F9EFEC] pt-[40px]'>SKILLS</p>
          <p className='w-[523px] text-[18px] text-[#B3B3B2] pt-[12px]'>Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design expertise.</p>
          <button className='w-[523px] h-[63px] bg-[#0A84FF] text-[18px] text-white rounded-[12px] mt-[40px]'>Apply Now</button>
        </div>
        <div className='bg-[#1A1A1A] w-[623px] h-[600px] pl-[50px] rounded-[14px] '>
          <div className='flex items-center gap-[14px] pt-[50px] mb-[40px]'>
            <img src={log5} alt="" />
            <h1 className='text-[30px] text-[#F9EFEC] font-medium'>Web Designer</h1>
          </div>
          <div className='w-[314px] h-[47px] bg-[#1F1F1F] rounded-[45px] items-center flex'>
            <p className='pl-[16px] text-[#B3B3B2]'>Salary</p>
            <div className='w-1 h-1 bg-[#0A84FF] rounded-[50%] ml-2'></div>
            <p className='font-medium text-[#E6E6E6] text-[18px] pl-[8px]'>$45,000 - $60,000 per year</p>
          </div>
          <div className='flex  gap-[20px]'>
            <div className='w-[197px] h-[47px] bg-[#1F1F1F] rounded-[45px] items-center flex mt-[20px]'>
              <p className='pl-[16px] text-[#B3B3B2]'>Experience</p>
              <div className='w-1 h-1 bg-[#0A84FF] rounded-[50%] ml-2'></div>
              <p className='font-medium text-[#E6E6E6] text-[18px] pl-[8px]'>1+ year</p>
            </div>
            <div className='w-[212px] h-[47px] bg-[#1F1F1F] rounded-[45px] items-center flex mt-[20px]'>
              <p className='pl-[16px] text-[#B3B3B2]'>Deadline</p>
              <div className='w-1 h-1 bg-[#0A84FF] rounded-[50%] ml-2'></div>
              <p className='font-medium text-[#E6E6E6] text-[18px] pl-[8px]'>30/09/2025</p>
            </div>
          </div>
          <p className='font-medium text-[24px] text-[#F9EFEC] pt-[40px]'>SKILLS</p>
          <p className='w-[523px] text-[18px] text-[#B3B3B2] pt-[12px]'>Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design expertise.</p>
          <button className='w-[523px] h-[63px] bg-[#0A84FF] text-[18px] text-white rounded-[12px] mt-[40px]'>Apply Now</button>
        </div>
        <div className='bg-[#1A1A1A] w-[623px] h-[600px] pl-[50px] rounded-[14px] '>
          <div className='flex items-center gap-[14px] pt-[50px] mb-[40px]'>
            <img src={log5} alt="" />
            <h1 className='text-[30px] text-[#F9EFEC] font-medium'>Web Designer</h1>
          </div>
          <div className='w-[314px] h-[47px] bg-[#1F1F1F] rounded-[45px] items-center flex'>
            <p className='pl-[16px] text-[#B3B3B2]'>Salary</p>
            <div className='w-1 h-1 bg-[#0A84FF] rounded-[50%] ml-2'></div>
            <p className='font-medium text-[#E6E6E6] text-[18px] pl-[8px]'>$45,000 - $60,000 per year</p>
          </div>
          <div className='flex  gap-[20px]'>
            <div className='w-[197px] h-[47px] bg-[#1F1F1F] rounded-[45px] items-center flex mt-[20px]'>
              <p className='pl-[16px] text-[#B3B3B2]'>Experience</p>
              <div className='w-1 h-1 bg-[#0A84FF] rounded-[50%] ml-2'></div>
              <p className='font-medium text-[#E6E6E6] text-[18px] pl-[8px]'>1+ year</p>
            </div>
            <div className='w-[212px] h-[47px] bg-[#1F1F1F] rounded-[45px] items-center flex mt-[20px]'>
              <p className='pl-[16px] text-[#B3B3B2]'>Deadline</p>
              <div className='w-1 h-1 bg-[#0A84FF] rounded-[50%] ml-2'></div>
              <p className='font-medium text-[#E6E6E6] text-[18px] pl-[8px]'>30/09/2025</p>
            </div>
          </div>
          <p className='font-medium text-[24px] text-[#F9EFEC] pt-[40px]'>SKILLS</p>
          <p className='w-[523px] text-[18px] text-[#B3B3B2] pt-[12px]'>Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design expertise.</p>
          <button className='w-[523px] h-[63px] bg-[#0A84FF] text-[18px] text-white rounded-[12px] mt-[40px]'>Apply Now</button>
        </div>
      </div>
    </>

  )
}
export default CareerDetails
