import React from 'react';
import './AboveFooter.css';
import Standing from "../../assets/Standing.svg";
import Easy from "../../assets/Easy.svg";

export const AboveFooter = () => {
    return (
        <div className='bg-indigo-50 pt-20 mb-10 mt-20 flex flex-row flex-wrap'>
            <img src={Standing} alt='img' className='ml-44 mr-36 h-full' />
            <div className='mt-4'>
                <div className='flex flex-row'>
                    <h1 className='text-7xl font-bold tracking-normal text-center text-black leading-loose tracking-wide'>I don't need
                    </h1>
                    <img src={Easy} alt='img' className='h-20 ml-3 mt-8' />
                </div>
                <h2 className='text-7xl font-bold text-center text-black tracking-wide'>I just need<span className='text-7xl font-bold tracking-normal text-center text-indigo-600 tracking-wide'> possible.</span></h2>
            </div>
        </div>
    );
};
