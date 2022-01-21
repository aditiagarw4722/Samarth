import React from 'react';
import './Categories.css';
import Visually from "../../assets/Visually.svg";
import Hearing from "../../assets/Hearing.svg";
import WheelChair from "../../assets/WheelChair.svg";
import Autism from "../../assets/Autism.svg";
import Deaf from "../../assets/Deaf.svg";
import Disabled from "../../assets/Disabled.svg";

export const Categories = () => {
    return (
        <>
            <div>
                <h2 className='text-6xl font-semibold text-center text-black mt-20 mb-10'>Categories</h2>
            </div>
            <div className='grid grid-cols-3 gap-4 ml-14'>
                <div class="max-w-sm rounded-2xl overflow-hidden border-indigo-700 border-2 mt-8">
                    <div class="px-6 py-4">
                        <img src={Visually} alt='img' className='float-center ml-28' />
                        <div class="font-bold text-2xl mb-2 mt-4 text-center text-indigo-700">Visually Impaired</div>
                        <p class="text-gray-700 text-base text-center font-semibold">
                            2345 Jobs Available
                        </p>
                    </div>
                </div>
                <div class="max-w-sm rounded-2xl overflow-hidden border-indigo-700 border-2 mt-8">
                    <div class="px-6 py-4">
                        <img src={Hearing} alt='img' className='float-center ml-28' />
                        <div class="font-bold text-2xl mb-2 mt-4 text-center text-indigo-700">Hard of Hearing</div>
                        <p class="text-gray-700 text-base text-center font-semibold">
                            2345 Jobs Available
                        </p>
                    </div>
                </div>
                <div class="max-w-sm rounded-2xl overflow-hidden border-indigo-700 border-2 mt-8">
                    <div class="px-6 py-4">
                        <img src={WheelChair} alt='img' className='float-center ml-28' />
                        <div class="font-bold text-2xl mb-2 mt-4 text-center text-indigo-700">Wheelchair Bound</div>
                        <p class="text-gray-700 text-base text-center font-semibold">
                            2345 Jobs Available
                        </p>
                    </div>
                </div>
                <div class="max-w-sm rounded-2xl overflow-hidden border-indigo-700 border-2 mt-8">
                    <div class="px-6 py-4">
                        <img src={Autism} alt='img' className='float-center ml-28' />
                        <div class="font-bold text-2xl mb-2 mt-4 text-center text-indigo-700">Autism</div>
                        <p class="text-gray-700 text-base text-center font-semibold">
                            2345 Jobs Available
                        </p>
                    </div>
                </div>
                <div class="max-w-sm rounded-2xl overflow-hidden border-indigo-700 border-2 mt-8">
                    <div class="px-6 py-4">
                        <img src={Deaf} alt='img' className='float-center ml-28' />
                        <div class="font-bold text-2xl mb-2 mt-4 text-center text-indigo-700">Dumb and Deaf</div>
                        <p class="text-gray-700 text-base text-center font-semibold">
                            2345 Jobs Available
                        </p>
                    </div>
                </div>
                <div class="max-w-sm rounded-2xl overflow-hidden border-indigo-700 border-2 mt-8">
                    <div class="px-6 py-4">
                        <img src={Disabled} alt='img' className='float-center ml-28' />
                        <div class="font-bold text-2xl mb-2 mt-4 text-center text-indigo-700">Disabled person</div>
                        <p class="text-gray-700 text-base text-center font-semibold">
                            2345 Jobs Available
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
