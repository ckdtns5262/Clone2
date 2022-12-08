import React from 'react'
import logo from '../image/logo2.png'
import {AiOutlineHome, AiOutlineCompass,AiOutlineSearch} from 'react-icons/ai'
import {RiPlayListFill} from 'react-icons/ri'

const Navbar = () => {
    return (
        <div className='bg- text-white flex items-center
        justify-between px-2 pt-4'>
            <img src={logo} alt="" className='w-24' />
            <div className=''>
                <ul className='flex items-center gap-9 lg:gap-10'>
                    <li>
                        <AiOutlineHome className='navbtn'/>
                        <p className='hidden lg:flex text-[22px]'>홈</p>
                    </li>
                    <li>
                        <AiOutlineCompass className='navbtn'/>
                        <p className='hidden lg:flex text-[22px]'>둘러보기</p>
                    </li>
                    <li>
                        <RiPlayListFill className='navbtn'/>
                        <p className='hidden lg:flex text-[22px]'>보관함</p>
                    </li>
                    <li>
                        <AiOutlineSearch className='navbtn'/>
                        <AiOutlineSearch className='hidden lg:flex text-[22px]'/>
                    </li>                   
                </ul>
            </div>
            <div className='bg-red-500 py-1.5 px-2.5 rounded-[0.5rem]'>
                <button className='text-white' >Log In</button>
            </div>
           
        </div>
    )
}

export default Navbar