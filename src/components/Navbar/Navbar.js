import React from 'react';
import './Navbar.css';
import Logo from "../../assets/Logo.svg";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Link } from 'react-router-dom';

export const Navbar = ({ toggle }) => {
    return (
        <nav
            className='flex justify-between items-center h-16 bg-white text-black relative font-sans border-b-2 mt-2'
            role='navigation'
        >
            <div className='flex'>
                <img src={Logo} alt='img' className='w-10 h-10 ml-14 mt-1' />
                <span className='text-3xl font-bold text-black mt-1 ml-3'>HireMe</span>
            </div>
            <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
                <svg
                    className='w-8 h-8'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M4 6h16M4 12h16M4 18h16'
                    />
                </svg>
            </div>
            <div className='pr-8 md:flex  hidden'>
                <Link to='/AboutUs'>
                    <span className='text-xl font-bold text-black'>About Us</span>
                </Link>
                <Link to='/Jobs'>
                    <span className='text-xl font-bold text-blac ml-8'>Jobs</span>
                </Link>
                <button className="bg-transparent text-violet-700 font-bold border border-violet-700 border-2 rounded ml-20 py-2 px-8">
                    Post a Job
                </button>
                <NotificationsOutlinedIcon className='ml-9 mt-1'></NotificationsOutlinedIcon>
                <div className='flex flex-row'>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-12 mb-2 ml-9">😎<KeyboardArrowDownOutlinedIcon></KeyboardArrowDownOutlinedIcon></span>
                </div>
            </div>
        </nav>
    );
};
