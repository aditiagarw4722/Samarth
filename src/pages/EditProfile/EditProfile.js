import React from 'react';
import { Navbar } from '../EditProfile/Navbar/Navbar';
import './EditProfile.css';
import Profile from "../../assets/Profile.svg";

export const EditProfile = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className='bg-indigo-50 py-1'>
                <div className='text-center mt-16'>
                    <h2 className='text-black text-4xl font-bold tracking-wide'>Edit <span className='text-indigo-700 font-bold text-4xl tracking-wide'>Profile</span></h2>
                </div>
                <div className='justify-center w-11/12 h-full bg-white my-14 mx-14 py-10'>
                    <div className='ml-14'>
                        <h2 className='text-indigo-600 font-bold text-3xl tracking-wide'>Edit Profile</h2>
                    </div>
                    <div className='flex flex-row flex-wrap'>
                        <div>
                            <img src={Profile} alt='img' className='mt-10 ml-10 h-28' />
                        </div>
                        <div>
                            <button className="bg-violet-500 hover:bg-violet-700 text-white font-bold rounded ml-10 px-8 py-3 mt-16">
                                Update Image
                            </button>
                            <button className="bg-transparent text-indigo-700 font-bold border border-indigo-700 border-2 rounded ml-10 py-3 px-8">
                                Remove Image
                            </button>
                        </div>
                    </div>
                    <div class="mb-2 mt-6">
                        <label class="mb-2 text-xl block ml-10">Full Name</label>
                        <input type="text" class="p-2 rounded-lg block w-11/12 ml-10 border-2 border-gray-500" placeholder="Your Name" />
                    </div>

                    <div class="grid grid-cols-6 gap-8 mb-2 mt-4">
                        <div class="col-span-6 sm:col-span-3">
                            <label class="my-2 text-xl block ml-10">Email</label>
                            <input type="text" class="p-2 rounded-lg block w-10/12 ml-10 border-2 border-gray-500" placeholder="Your Name" />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label class="my-2 text-xl block ml-10">Contact Number</label>
                            <input type="text" class="p-2 rounded-lg block w-10/12 ml-10 border-2 border-gray-500" placeholder="Your Name" />
                        </div>
                    </div>

                    <div class="mb-2 mt-6">
                        <label class="my-2 text-xl block ml-10">About You</label>
                        <textarea type="text" class="p-2 rounded-lg block w-11/12 ml-10 pb-20 border-2 border-gray-500" placeholder="Your Name" />
                    </div>

                    <div className='ml-10'>
                        <h2 className='text-indigo-600 font-bold text-3xl tracking-wide mt-10 '>Domain of Interest</h2>
                    </div>

                    <div class="grid grid-cols-6 gap-8 mb-2 mt-4">
                        <div class="col-span-6 sm:col-span-3">
                            <label class="my-2 text-xl block ml-10">Domain</label>
                            <select className='p-2 rounded-lg block w-11/12 ml-10 border-2 border-gray-500'>
                                <option value="grapefruit">Grapefruit</option>
                                <option value="lime">Lime</option>
                                <option selected value="coconut">Coconut</option>
                                <option value="mango">Mango</option>
                            </select>
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label class="my-2 text-xl block ml-10">Experience</label>
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
                            <label class="my-2 text-xl block ml-10">LinkedIn URL</label>
                            <input type="text" class="p-2 rounded-lg block w-11/12 ml-10 border-2 border-gray-500" placeholder="Your Name" />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label class="my-2 text-xl block ml-10">Portfolio Link(if any)</label>
                            <input type="text" class="p-2 rounded-lg block w-10/12 ml-10 border-2 border-gray-500" placeholder="Your Name" />
                        </div>
                    </div>

                    <div class="mb-2 mt-6">
                        <label class="mb-2 text-xl block ml-10">Skills</label>
                        <select className='p-2 rounded-lg block w-11/12 ml-10 border-2 border-gray-500'>
                                <option value="grapefruit">Grapefruit</option>
                                <option value="lime">Lime</option>
                                <option selected value="coconut">Coconut</option>
                                <option value="mango">Mango</option>
                            </select>
                    </div>

                    <div className='ml-10'>
                        <h2 className='text-indigo-600 font-bold text-3xl tracking-wide mt-10'>Edit Password</h2>
                    </div>
                    <div id="exper/location" class="grid grid-cols-6 gap-8 mb-2 mt-4">
                        <div class="col-span-6 sm:col-span-3">
                            <label class="my-2 text-xl block ml-10">New Password</label>
                            <input type="text" class="p-2 rounded-lg block w-11/12 ml-10 border-2 border-gray-500" placeholder="Your Name" />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label class="my-2 text-xl block ml-10">Confirm New Password</label>
                            <input type="text" class="p-2 rounded-lg block w-10/12 ml-10 border-2 border-gray-500" placeholder="Your Name" />
                        </div>
                    </div>
                    <div className='flex flex-row flex-wrap'>
                        <div>
                            <button className="bg-violet-500 hover:bg-violet-700 text-white font-bold rounded ml-10 px-8 py-3 mt-16">
                                Save Changes
                            </button>
                            <button className="bg-transparent text-indigo-700 font-bold border border-indigo-700 border-2 rounded ml-10 py-3 px-8">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
