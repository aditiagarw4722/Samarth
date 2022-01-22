import React from 'react';
import './Posts.css';
import { Navbar } from '../Posts/Navbar/Navbar';

export const Posts = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className='bg-indigo-50 py-1'>
                <div className='text-center mt-16'>
                    <h2 className='text-black text-4xl font-bold tracking-wide'>Post your <span className='text-indigo-700 font-bold text-4xl tracking-wide'>Job Opening</span></h2>
                </div>
                <div className='justify-center w-11/12 h-full bg-white my-14 mx-14 py-10'>
                    <div className='ml-14'>
                        <h2 className='text-indigo-600 font-bold text-3xl tracking-wide'>Job Information</h2>
                    </div>
                    <div class="mb-2 mt-6">
                        <label class="mb-2 text-xl block ml-10">Job Title</label>
                        <input type="text" class="p-2 rounded-lg block w-11/12 ml-10 border-2 border-gray-500" placeholder="Your Name" />
                    </div>

                    <div class="grid grid-cols-6 gap-8 mb-2 mt-4">
                        <div class="col-span-6 sm:col-span-3">
                            <label class="my-2 text-xl block ml-10">Job Category</label>
                            <select className='p-2 rounded-lg block w-11/12 ml-10 border-2 border-gray-500'>
                                <option value="grapefruit">Grapefruit</option>
                                <option value="lime">Lime</option>
                                <option selected value="coconut">Coconut</option>
                                <option value="mango">Mango</option>
                            </select>
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label class="my-2 text-xl block ml-10">Job Type</label>
                            <select className='p-2 rounded-lg block w-10/12 ml-10 border-2 border-gray-500'>
                                <option value="grapefruit">Grapefruit</option>
                                <option value="lime">Lime</option>
                                <option selected value="coconut">Coconut</option>
                                <option value="mango">Mango</option>
                            </select>
                        </div>
                    </div>

                    <div id="exper/location" class="grid grid-cols-6 gap-8 mb-2 mt-4">
                        <div class="col-span-6 sm:col-span-3">
                            <label class="my-2 text-xl block ml-10">Seniority/Experience Level</label>
                            <select className='p-2 rounded-lg block w-11/12 ml-10 border-2 border-gray-500'>
                                <option value="grapefruit">Grapefruit</option>
                                <option value="lime">Lime</option>
                                <option selected value="coconut">Coconut</option>
                                <option value="mango">Mango</option>
                            </select>
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label class="my-2 text-xl block ml-10">Job Location</label>
                            <input type="text" class="p-2 rounded-lg block w-10/12 ml-10 border-2 border-gray-500" placeholder="Your Name" />
                        </div>
                    </div>

                    <div id="salary/disability" class="grid grid-cols-6 gap-8 mb-2 mt-4">
                        <div class="col-span-6 sm:col-span-3">
                            <label class="my-2 text-xl block ml-10">Job Salary</label>
                            <input type="text" class="p-2 rounded-lg block w-11/12 ml-10 border-2 border-gray-500" placeholder="Your Name" />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label class="my-2 text-xl block ml-10">Disability</label>
                            <select className='p-2 rounded-lg block w-10/12 ml-10 border-2 border-gray-500'>
                                <option value="grapefruit">Grapefruit</option>
                                <option value="lime">Lime</option>
                                <option selected value="coconut">Coconut</option>
                                <option value="mango">Mango</option>
                            </select>
                        </div>
                    </div>

                    <div class="mb-2 mt-6">
                        <label class="my-2 text-xl block ml-10">Application Submission URL</label>
                        <input type="text" class="p-2 rounded-lg block w-11/12 ml-10 border-2 border-gray-500" placeholder="Your Name" />
                    </div>
                    <hr className='mt-20 border-4' />
                    <div className='ml-14'>
                        <h2 className='text-indigo-600 font-bold text-3xl tracking-wide mt-10 '>Company Information</h2>
                    </div>

                    <div class="grid grid-cols-6 gap-8 mb-2 mt-4">
                        <div class="col-span-6 sm:col-span-3">
                            <label class="my-2 text-xl block ml-10">Company Name</label>
                            <input type="text" class="p-2 rounded-lg block w-11/12 ml-10 border-2 border-gray-500" placeholder="Your Name" />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label class="my-2 text-xl block ml-10">Website URL</label>
                            <input type="text" class="p-2 rounded-lg block w-10/12 ml-10 border-2 border-gray-500" placeholder="Your Name" />
                        </div>
                    </div>

                    <div id="exper/location" class="grid grid-cols-6 gap-8 mb-2 mt-4">
                        <div class="col-span-6 sm:col-span-3">
                            <label class="my-2 text-xl block ml-10">Company Size</label>
                            <select className='p-2 rounded-lg block w-11/12 ml-10 border-2 border-gray-500'>
                                <option value="grapefruit">Grapefruit</option>
                                <option value="lime">Lime</option>
                                <option selected value="coconut">Coconut</option>
                                <option value="mango">Mango</option>
                            </select>
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label class="my-2 text-xl block ml-10">Company Email</label>
                            <input type="text" class="p-2 rounded-lg block w-10/12 ml-10 border-2 border-gray-500" placeholder="Your Name" />
                        </div>
                    </div>

                    <div id="salary/disability" class="grid grid-cols-6 gap-8 mb-2 mt-4">
                        <div class="col-span-6 sm:col-span-3">
                            <label class="my-2 text-xl block ml-10">Company Bio</label>
                            <textarea type="text" class="p-2 rounded-lg block w-11/12 ml-10 pb-20 border-2 border-gray-500" placeholder="Your Name" />
                        </div>
                    </div>

                    <div id="salary/disability" class="grid grid-cols-6 gap-8 mb-2 mt-4">
                        <div class="col-span-6 sm:col-span-3">
                            <label class="my-2 text-xl block ml-10">Company Logo URL</label>
                            <input type="text" class="p-2 rounded-lg block w-11/12 ml-10 border-2 border-gray-500" placeholder="Your Name" />
                        </div>
                    </div>
                    <hr className='mt-20 border-4' />
                    <div className='ml-14'>
                        <h2 className='text-indigo-600 font-bold text-3xl tracking-wide mt-10'>Job Description</h2>
                    </div>
                    <div class="mb-2 mt-6">
                        <label class="mb-2 text-xl block ml-10">Responsibilities</label>
                        <textarea type="text" class="p-2 rounded-lg block w-11/12 ml-10 pb-20 border-2 border-gray-500" placeholder="Your Name" />
                    </div>
                    <div class="mb-2 mt-6">
                        <label class="mb-2 text-xl block ml-10">Required Skills and Experience</label>
                        <textarea type="text" class="p-2 rounded-lg block w-11/12 ml-10 pb-20 border-2 border-gray-500" placeholder="Your Name" />
                    </div>
                    <div class="mb-2 mt-6">
                        <label class="mb-2 text-xl block ml-10">About Job Role</label>
                        <textarea type="text" class="p-2 rounded-lg block w-11/12 ml-10 pb-20 border-2 border-gray-500" placeholder="Your Name" />
                    </div>
                    <div class="mb-2 mt-6">
                        <label class="mb-2 text-xl block ml-10">Ideal Candidate</label>
                        <textarea type="text" class="p-2 rounded-lg block w-11/12 ml-10 pb-20 border-2 border-gray-500" placeholder="Your Name" />
                    </div>
                    <div class="mb-2 mt-6">
                        <label class="mb-2 text-xl block ml-10">Perks and Benefits</label>
                        <textarea type="text" class="p-2 rounded-lg block w-11/12 ml-10 pb-20 border-2 border-gray-500" placeholder="Your Name" />
                    </div>
                    <div class="mb-2 mt-6">
                        <label class="mb-2 text-xl block ml-10">Hiring Process/Stages</label>
                        <textarea type="text" class="p-2 rounded-lg block w-11/12 ml-10 pb-20 border-2 border-gray-500" placeholder="Your Name" />
                    </div>
                </div>
            </div>
        </>
    );
};
