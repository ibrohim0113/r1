import React from 'react'
import log from "../image/Frame.svg"
import log1 from "../image/Group 20.svg"
import log2 from "../image/robot area (1).svg"
import log3 from "../image/Card.svg"
import log4 from "../image/Card (1).svg"
import log5 from "../image/Card (2).svg"
import log6 from "../image/Card (3).svg"
import log7 from "../image/Card (4).svg"
import log8 from "../image/Card (5).svg"
import log9 from "../image/Frame (1).svg"
import log10 from "../image/72355892508 1.svg"
import log11 from "../image/72355892508 1 (1).svg"
import log12 from "../image/72355892508 1 (2).svg"
import log13 from "../image/Container.svg"
import log14 from "../image/Icon.svg"
import log15 from "../image/Container (1).svg"
import log16 from "../image/Icon (1).svg"
import log17 from "../image/Container (2).svg"
import log18 from "../image/Container (3).svg"


const Home = () => {
  return (
    <>
      <div className='flex '>
        <img className=' absolute z-0' src={log} alt="" />
        <div className=' z-10 pt-45.25 pl-[120px] pb-70'>
          <h1 className='font-black text-white text-[72px] w-178'>Transforming Data into <span> Decisions</span></h1>
          <p className='text-[20px] text-white opacity-80 pt-7.5 w-137'>Leverage the power of machine learning and AI to unlock insights and drive business growth</p>
          <button className='text-[14px] font-bold w-41.5 h-10.5 bg-[#0A84FF] rounded-[10px] text-white mt-8'>Book a Meeting</button>
          <div className='flex gap-4 items-center mt-8' >
            <img src={log1} alt="" />
            <p className='text-[14px] text-white'>Over 100+ clients have worked with us</p>
          </div>
        </div>
        <img className='absolute top-[56px] left-[607px]' src={log2} alt="" />
      </div>
      <div className='flex justify-center ml-4 mr-4'>
        <div
          className="flex items-center gap-7 justify-center"
          style={{
            borderWidth: "2px 0px 2px 0px",
            borderStyle: "solid",
            borderImageSource: "linear-gradient(90deg, #0A84FF 0%, #8961FF 100%)",
            borderImageSlice: 1
          }}
        >
          <img src={log3} alt="" />
          <img src={log4} alt="" />
          <img src={log5} alt="" />
          <img src={log6} alt="" />
          <img src={log7} alt="" />
          <img src={log8} alt="" />
        </div>
      </div>
      <div className=''>
        <div className='flex justify-center'>
          <h1 className='w-[579px] text-white text-[36px] font-semibold text-center pt-[125px]'>Our Ultimate Set of Services for Your Ideas Implementation</h1>
        </div>
        <img className=' absolute top-[1280px] z-0' src={log9} alt="" />
        <img className=' absolute top-[1740px] left-[1260px] z-0' src={log9} alt="" />
        <div className='z-10 flex justify-center gap-[58px] mt-[70px]'>
          <div className='w-[377px] h-[480px] z-10 bg-[#141414] rounded-[36px] text-center'>
            <div className='flex justify-center z-10 pt-11 pb-9'>
              <img className='w-[223px] h-[231px]' src={log11} alt="" />
            </div>
            <p className='text-[24px] font-semibold text-white'>Predictive Analytics</p>
            <div className='flex justify-center'>
              <p className='text-white w-[270px] pt-[32px] text-center text-[16px] leading-[24px] font-normal'>Forecast trends and make data-driven decisions with our advanced ML models.</p>
            </div>
          </div>
          <div className='w-[377px] h-[480px] z-10 bg-[#141414] rounded-[36px] text-center'>
            <div className='flex justify-center z-10 pt-11 pb-9'>
              <img className='w-[223px] h-[231px]' src={log12} alt="" />
            </div>
            <p className='text-[24px] font-semibold text-white'>AI Consulting</p>
            <div className='flex justify-center'>
              <p className='text-white w-[270px] pt-[32px] text-center text-[16px] leading-[24px] font-normal'>Expert guidance on implementing AI solutions for your business needs.</p>
            </div>
          </div>
          <div className='w-[377px] h-[480px] z-10 bg-[#141414] rounded-[36px] text-center'>
            <div className='flex justify-center z-10 pt-11 pb-9'>
              <img className='w-[223px] h-[231px]' src={log10} alt="" />
            </div>
            <p className='text-[24px] font-semibold text-white'>Data Engineering</p>
            <div className='flex justify-center'>
              <p className='text-white w-[270px] pt-[32px] text-center text-[16px] leading-[24px] font-normal'>Build robust data pipelines and infrastructure for ML operations.</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className='font-semibold text-[36px] text-white text-center pt-[175px]'>Frequently Asked Questions</p>

        <div className='flex justify-center '>
          <div className=' w-[798px] rounded-[36px] bg-[#1E1E1E] h-[274px]'>
            <div className='flex items-center gap-8 justify-center pt-[34px]'>
              <img src={log13} alt="" />
              <p className='text-[#0A84FF] text-[22px] font-medium'>What services does Catalyst Analytics provide?
              </p>
              <img src={log14} alt="" />
            </div>
            <div className='flex pl-[190px]'>
              <p className='text-[#E6E6E6] w-[480px] text-[18px] '>Catalyst Analytics offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.</p>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='flex justify-center items-center mt-[24px] w-[798px] h-[140px] bg-[#141414] rounded-[36px] gap-[14.5px]'>
              <img src={log15} alt="" />
              <p className='font-medium text-[22px] text-white'>Lorem Ipsum is simply dummy text of the printing </p>
              <img src={log16} alt="" />
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='flex justify-center items-center mt-[24px] w-[798px] h-[140px] bg-[#141414] rounded-[36px] gap-[14.5px]'>
              <img src={log17} alt="" />
              <p className='font-medium text-[22px] text-white'>Lorem Ipsum is simply dummy text of the printing </p>
              <img src={log16} alt="" />
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='flex justify-center items-center mt-[24px] w-[798px] h-[140px] bg-[#141414] rounded-[36px] gap-[14.5px]'>
              <img src={log18} alt="" />
              <p className='font-medium text-[22px] text-white'>Lorem Ipsum is simply dummy text of the printing </p>
              <img src={log16} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home