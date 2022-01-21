import React from 'react';
import Google from "../../assets/Google.svg";
import Profile from "../../assets/Profile.svg";
import Profile_Email from "../../assets/Profile_Email.svg";
import Profile_LinkedIn from "../../assets/Profile_LinkedIn.svg";

export const AboutCompany = () => {
    return (
        <div className='bg-indigo-50 py-2'>
            <div className='justify-center w-11/12 h-full bg-white my-32 mx-14 py-20'>
                <div className='flex flex-row flex-wrap ml-36'>
                    <div>
                        <img src={Google} alt='pic' className=' h-full w-full' />
                    </div>
                    <div className='col-span-2'>
                        <h2 className='text-2xl font-semibold ml-5 mt-2 text-black'>Google</h2>
                        <h1 className='text-3xl font-bold ml-5 mt-1 text-black'>Product Designer</h1>
                    </div>
                    <div>
                        <button class="bg-indigo-600 hover:bg-indigo-800 text-white font-bold px-6 ml-5 mb-3 py-3 ml-96 rounded">
                            Apply Now
                        </button>
                    </div>
                </div>
                <div class="px-6 pt-4 pb-2 mt-3 ml-48">
                    <span class="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Mid-Level</span>
                    <span class="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Full-Time</span>
                    <span class="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Remote (India)</span>
                    <span class="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Product Development</span>
                    <span class="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">1-10 Employee</span>
                </div>
                <div>
                    <h2 className='text-2xl mt-3 ml-56 mb-10'>Expected Salary : <span className='text-green-700 font-bold'>Rs.52000</span></h2>
                </div>
                <hr />
                <div className='text-bold text-3xl mt-10 ml-10 font-bold'>
                    <h2>About the Company</h2>
                </div>
                <div>
                    <p className='ml-10 mt-5'>Working on a really interesting problem at the intersection of healthcare & fintech impacting millions of indians every year.Working on a really interesting problem at the intersection of healthcare & fintech impacting millions of indians every year</p>
                </div>
                <div className='text-bold text-3xl mt-10 ml-10 font-bold'>
                    <h2>Responsibilities</h2>
                </div>
                <div>
                    <p className='ml-10 mt-5'>- Working on a really interesting problem at the intersection of healthcare & fintech impacting millions of indians every year<br />
                        - Given full freedom to build & experiment on your own</p>
                </div>
                <div className='text-bold text-3xl mt-10 ml-10 font-bold'>
                    <h2>Required Skills and Experience</h2>
                </div>
                <div>
                    <p className='ml-10 mt-5'>- 3 to 7-year workex + eng team building exp<br />
                        - Built & scaled systems<br />
                        - High agency + ownership<br />
                        - Prev experience in building in healthcare/fintech is an advantage<br />
                        - Given generous ESOPs</p>
                </div>
                <button class="bg-indigo-600 hover:bg-indigo-800 text-white font-bold px-5 py-4 rounded mt-10 ml-10 mb-10">
                    Apply Now
                </button>
                <hr />
                <div>
                    <h1 className='mt-3 ml-6'>Job posted by</h1>
                </div>
                <div className='flex flex-row flex-wrap'>
                    <div>
                        <img src={Profile} alt='pic' className='lg:w-20 lg:h-5/6 ml-7 pt-5' />
                    </div>
                    <div className='col-span-2'>
                        <h2 className='ml-4 mt-5 text-3xl'>Mayank Dhankar</h2>
                        <h1 className='text-xl ml-4 text-black'>Sr. Product Designer at Google</h1>
                    </div>
                    <div className='col-span-2 flex ml-7'>
                        <img src={Profile_Email} alt='pic' className='lg:w-11/12 lg:h-5/6 ml-4 pt-5' />
                        <img src={Profile_LinkedIn} alt='pic' className='lg:w-11/12 lg:h-5/6 ml-4 pt-5' />
                    </div>
                </div>
            </div>
        </div>
    );
};
