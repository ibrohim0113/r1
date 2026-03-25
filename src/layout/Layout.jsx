import React from 'react'
import { Link, Outlet } from 'react-router'
import log from "../images/logo-softclub.svg"
const Layout = () => {
    return (
        <div>
            <nav className=''>
                <header className="fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-between bg-[#0a111e] px-6 text-white md:px-12">
                    <div className="flex items-center space-x-12">
                        <Link to={"/"}>
                            <img className='w-25' src={log} alt="" />
                        </Link>
                        <nav className="hidden space-x-8 md:flex">
                            <Link to={"/"} className="text-sm font-medium text-gray-300 transition-colors hover:text-white">Курсы</Link>
                            <Link to={"/"} className="text-sm font-medium text-gray-300 transition-colors hover:text-white">
                                О нас
                            </Link>
                            <Link to={"/"} className="text-sm font-medium text-gray-300 transition-colors hover:text-white">Контакты</Link>
                            <Link to={"/"} className="text-sm font-medium text-gray-300 transition-colors hover:text-white">Мнение</Link>
                        </nav>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="text-gray-400 transition-colors hover:text-white" aria-label="Toggle dark mode">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                            </svg>
                        </button>

                        {/* Выбор языка */}
                        <button className="flex items-center space-x-2 rounded-md border border-gray-700 bg-[#141d2b] px-3 py-1.5 transition-colors hover:border-gray-500">
                            <div className="flex h-4 w-6 flex-col overflow-hidden rounded-sm text-[5px]">
                                <div className="h-1/3 w-full bg-white"></div>
                                <div className="h-1/3 w-full bg-blue-600"></div>
                                <div className="h-1/3 w-full bg-red-600"></div>
                            </div>
                            <span className="text-sm font-medium text-gray-300">Ru</span>
                        </button>

                        {/* Кнопка Войти */}
                        <button className="rounded-md border border-[#3498db] px-5 py-1.5 text-sm font-medium text-[#3498db] transition-colors hover:bg-[#3498db] hover:text-white">
                            Войти
                        </button>
                    </div>
                </header>
            </nav>
            <Outlet />
        </div >
    )
}

export default Layout
