import React from 'react';
import { Navbar } from '../../../pages/About/Navbar/Navbar';
import './AboutUs.css';
import CombinedImage from "../../../assets/CombinedImage.svg";
import Left_One from "../../../assets/Left_One.svg";
import Middle from "../../../assets/Middle.svg";
import Discovered from "../../../assets/Discovered.svg";


export const AboutUs = () => {
    return (
        <>
            <Navbar />

            <div className='bg-indigo-50 pt-16'>
            </div>
            <div className='bg-white py-5 mt-10'>
                <h2 className='text-6xl text-center font-bold tracking-wide'>About <span className='text-6xl text-center font-bold tracking-wide text-indigo-600'>Us</span></h2>
                <div className='grid grid-cols-6 gap-4'>
                    <div className='col-start-2 col-span-4'>
                        <p className='text-center text-2xl mt-10'>From a long time we have looked for modern and and new age farming techniques as a way to move ahead in the farming sector with company, our vision is to also make the transactions modern as well.</p>

                        <p className='text-center text-2xl mt-10'>At KrishiBimb, we intend to give the farmers a platform where they can sell their crops all over India and for the buyers the can buy the crops they want with assured quality, and therefore removing the middle men.</p>
                    </div>
                </div>
                <img src={CombinedImage} alt='img' className='mt-20 ml-32 h-96' />
            </div>
            <div className='bg-indigo-50 pt-5 mt-10'>
                <h2 className='text-6xl text-center font-bold tracking-wide mt-10'>Our <span className='text-6xl text-center font-bold tracking-wide text-indigo-600 mt-10'>Mission</span></h2>
                <div className='grid grid-cols-6 gap-4'>
                    <img src={Left_One} alt='img' className='mt-20 h-96' />
                    <div className='col-start-2 col-span-4'>
                        <p className='text-center text-2xl mt-10'>From a long time we have looked for modern and and new age farming techniques as a way to move ahead in the farming sector with company, our vision is to also make the transactions modern as well.</p>

                        <p className='text-center text-2xl mt-10'>At KrishiBimb, we intend to give the farmers a platform where they can sell their crops all over India and for the buyers the can buy the crops they want with assured quality, and therefore removing the middle men.</p>

                    </div>
                    <img src={Middle} alt='img' className='mt-20 h-96' />
                </div>
            </div>
            <div className='bg-white py-5 mt-10'>
                <h2 className='text-6xl text-center font-bold tracking-wide'>How to<span className='text-6xl text-center font-bold tracking-wide text-indigo-600'> Use?</span></h2>
                <div className='grid grid-cols-3 gap-4 ml-14 mb-24 mt-14'>
                    <div class="max-w-sm rounded-lg overflow-hidden border-indigo-700 border-2 mt-14">
                        <div class="px-6 py-4">
                            <img src={Discovered} alt='img' className='float-center ml-28' />
                            <div class="font-bold text-2xl mb-2 mt-4 text-center text-indigo-700">Get Discovered</div>
                            <p class="text-gray-700 text-base text-center">
                                Become searchable by top companies in your domain. Companies search for candidate CVs directly for open positions.
                            </p>
                        </div>
                    </div>
                    <div class="max-w-sm rounded-lg overflow-hidden border-indigo-700 border-2 mt-14">
                        <div class="px-6 py-4">
                            <img src={Discovered} alt='img' className='float-center ml-28' />
                            <div class="font-bold text-2xl mb-2 mt-4 text-center text-indigo-700">Visually Impaired</div>
                            <p class="text-gray-700 text-base text-center">
                                Become searchable by top companies in your domain. Companies search for candidate CVs directly for open positions.
                            </p>
                        </div>
                    </div>
                    <div class="max-w-sm rounded-lg overflow-hidden border-indigo-700 border-2 mt-14">
                        <div class="px-6 py-4">
                            <img src={Discovered} alt='img' className='float-center ml-28' />
                            <div class="font-bold text-2xl mb-2 mt-4 text-center text-indigo-700">Visually Impaired</div>
                            <p class="text-gray-700 text-base text-center">
                                Become searchable by top companies in your domain. Companies search for candidate CVs directly for open positions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-indigo-50 pt-16'>
            </div>
        </>
    );
};
