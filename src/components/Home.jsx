import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import axios from 'axios';
import { CalendarDays, Layers3 } from 'lucide-react';

import htmlLogo from '../images/html.png'
import jsLogo from '../images/js.png'
import reactLogo from '../images/react.png'
import designLogo from '../images/figma.png'
import cppLogo from '../images/cpp.png'
import pythonLogo from '../images/python.png'
import csharpLogo from '../images/c.png'
import gitLogo from '../images/git.png'
import mobileLogo from '../images/mobile.png'
import kidsLogo from '../images/kids.png'

const Home = () => {
    let api = "http://localhost:3000/curs"

    const [products, setProduct] = useState([]);

    async function get() {
        try {
            let { data } = await axios.get(api)
            setProduct(data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        get()
    }, [])

    const getImageByKey = (key) => {
        switch (key) {
            case 'html': return htmlLogo;
            case 'js': return jsLogo;
            case 'react': return reactLogo;
            case 'design': return designLogo;
            case 'cpp': return cppLogo;
            case 'python': return pythonLogo;
            case 'csharp': return csharpLogo;
            case 'git': return gitLogo;
            case 'mobile': return mobileLogo;
            case 'kids': return kidsLogo;
            default: return null;
        }
    }


    let navi = useNavigate()
    let handelChange = (el) => {
        navi(`/product/${el}`)
    }

    return (
        <div className='bg-[#0a111e] mt-10 flex flex-col gap-y-9 pb-[100px]'>
            <section className="flex flex-col items-center justify-center bg-[#0a111e] px-4 py-16 text-white">
                <h2 className="mb-4 text-center text-4xl font-bold tracking-tight md:text-5xl">
                    Курсы Академии
                </h2>
                <p className="mb-10 max-w-2xl text-center text-sm leading-relaxed text-gray-400 md:text-base">
                    Выберите свой путь обучения и развивайте навыки во Frontend, Backend, мобильной
                    разработке или начните с нашей программы для детей
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                    <button className="cursor-pointer rounded-full bg-white px-5 py-2 text-sm font-medium text-gray-900 shadow-lg transition-all duration-200">
                        Все
                    </button>
                    <button className="cursor-pointer rounded-full bg-[#141d2b] px-5 py-2 text-sm font-medium text-gray-300 transition-all duration-200 hover:bg-[#1e2a3b] hover:text-white">
                        Фронтенд
                    </button>
                    <button className="cursor-pointer rounded-full bg-[#141d2b] px-5 py-2 text-sm font-medium text-gray-300 transition-all duration-200 hover:bg-[#1e2a3b] hover:text-white">
                        Бэкенд
                    </button>
                    <button className="cursor-pointer rounded-full bg-[#141d2b] px-5 py-2 text-sm font-medium text-gray-300 transition-all duration-200 hover:bg-[#1e2a3b] hover:text-white">
                        Мобильная разработка
                    </button>
                    <button className="cursor-pointer rounded-full bg-[#141d2b] px-5 py-2 text-sm font-medium text-gray-300 transition-all duration-200 hover:bg-[#1e2a3b] hover:text-white">
                        Дети
                    </button>
                    <button className="cursor-pointer rounded-full bg-[#141d2b] px-5 py-2 text-sm font-medium text-gray-300 transition-all duration-200 hover:bg-[#1e2a3b] hover:text-white">
                        Олимпиада
                    </button>
                    <button className="cursor-pointer rounded-full bg-[#141d2b] px-5 py-2 text-sm font-medium text-gray-300 transition-all duration-200 hover:bg-[#1e2a3b] hover:text-white">
                        Дизайн
                    </button>

                </div>

            </section>
            <div className='flex flex-wrap gap-[30px] justify-center'>
                {products.map((el) => {
                    const logoSrc = getImageByKey(el.key);

                    return (
                        <div onClick={() => handelChange(el.id)} key={el.id} className={`border-l-6 border-${el.accentColor}-400 rounded-2xl w-[450px] h-[260px]  bg-gradient-to-r ${el.bgColor}`}>

                            <div className='flex items-center justify-between pr-[30px] pt-[30px] '>
                                <h1 className='text-[28px] font-bold text-white pl-[30px]'>
                                    {el.title}
                                </h1>
                                {logoSrc && (<img className='w-[70px] ' src={logoSrc} alt={el.title} />)}
                            </div>
                            <p className='text-gray-200 pl-[30px] w-[350px] '>{el.description}</p>
                            <div className='pt-[30px] justify-between pr-[100px] flex items-center pt-['>
                                <p className='text-gray-200 text-[18px] pl-[30px] '>{el.duration}</p>
                                <p className='text-[15px] text-gray-50'>{el.category}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default Home