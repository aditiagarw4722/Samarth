import React from 'react';
import Left from "../../assets/Left.svg";
import Middle from "../../assets/Middle.svg";

export const MainPage = () => {
    return (
        <div className='bg-indigo-50 pt-5'>
            <div className='mt-16'>
                <h1 className='text-7xl font-bold tracking-normal text-center text-black'>Get the <span className='text-7xl font-bold tracking-normal text-center text-indigo-600'>Chance</span></h1>
                <h2 className='text-7xl font-bold tracking-normal text-center text-black mt-4'>You Deserve</h2>
                <h2 className='text-3xl font-semibold tracking-normal text-center text-black tracking-wide mt-12'>5033 Jobs & 786 candidates are registered</h2>
            </div>
            <div className='grid grid-cols-6 mt-10'>
                <img src={Middle} alt='img' className='h-11/12' />
                <div class="col-start-2 col-span-4">
                    <div className='flex flex-row flex-wrap justify-center'>
                        <div class="flex justify-center">
                            <div class="mb-2 xl:w-60">
                                <input
                                    type="search"
                                    class="form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleSearch"
                                    placeholder="Search your job"
                                />
                            </div>
                        </div>
                        <div class="flex justify-center">
                            <div class="mb-3 ml-5 xl:w-80">
                                <input
                                    type="search"
                                    class=" form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleSearch"
                                    placeholder="Search in location"
                                />
                            </div>
                        </div>
                        <button class="bg-indigo-700 hover:bg-indigo-700 text-white font-bold px-6 ml-5 mb-3 rounded">
                            Search
                        </button>
                    </div>
                </div>
                <img src={Left} alt='img' className='h-11/12'  />
            </div>
        </div>
    );
};
