import React from 'react'
import { Link, Outlet } from 'react-router'
import log from "../image/Logo.svg"
import log1 from "../image/Logo (2).svg"
import log2 from "../image/Sub Container.svg"
import log3 from "../image/Icon (2).svg"
import log4 from "../image/Icon (3).svg"
import log5 from "../image/Icon (4).svg"
const Layout = () => {
    return (
        <div>
            <nav className='flex justify-center gap-66.25 p-4 items-center'>

                <img src={log} alt="" />
                <div>
                    <div className='flex gap-6 text-white'>
                        <Link className='p-2.5' to={"/"}>Home</Link>
                        <Link className='p-2.5' to={"/about"}>Services</Link>
                        <Link className='p-2.5' to={"/Careers"}>Careers</Link>
                        <Link className='p-2.5' to={"/CareerDetails"}>Career Details</Link>
                        <Link className='p-2.5' to={"/Contact"}>Contact</Link>
                    </div>
                </div>
                <button className='w-35 h-10.5 rounded-[10px] bg-[#0A84FF] font-semibold text-[14px] text-white' >Contact Us</button>
            </nav>
            <div>
                <Outlet />
                <div className='mt-[126px] border-t-[#858585] border pt-[50px]'>
                    <div className='flex items-center justify-center gap-[256px]'>
                        <img src={log1} alt="" />
                        <div className='text-white flex gap-[30px] '>
                            <Link className='' to={"/"}>Home</Link>
                            <Link className='' to={"/about"}>Services</Link>
                            <Link className='' to={"/Careers"}>Careers</Link>
                            <Link className='' to={"/CareerDetails"}>Career Details</Link>
                            <Link className='' to={"/Contact"}>Contact</Link>
                        </div>
                        <img src={log2} alt="" />
                    </div>
                    <div className='flex gap-[395px] pt-[50px] pl-[100px]'>
                        <div className='flex gap-[30px]'>
                            <div className='flex items-center gap-2.5'>
                                <img src={log3} alt="" />
                                <p className='text-[18px] text-[#E6E6E6]'>contact@catalystanalytics.io</p>
                            </div>
                            <div className='flex items-center gap-2.5'>
                                <img src={log4} alt="" />
                                <p className='text-[18px] text-[#E6E6E6]'>+1 (469) 712-4672</p>
                            </div>
                            <div className='flex items-center gap-2.5'>
                                <img src={log5} alt="" />
                                <p className='text-[18px] text-[#E6E6E6]'>+1 (469) 712-4672</p>
                            </div>
                        </div>
                        <div className='flex  gap-[24px]'>
                            <p className='text-[18px] text-[#98989A]'>Privacy Policy</p>
                            <p className='text-[18px] text-[#98989A]'>Terms of Service</p>
                        </div>
                    </div>
                <p className='text-[18px] pt-[50px] text-center text-[#98989A] pb-[20px] '>© 2025 Catalyst Analytics. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Layout
