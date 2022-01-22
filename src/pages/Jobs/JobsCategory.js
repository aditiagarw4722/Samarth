import React from 'react';

export const JobsCategory = () => {
    return (
        <div class="w-full py-4 bg-white mb-10 pl-5">
            <h2 className='text-black text-2xl font-semibold mt-2'>Category</h2>
            <div class="grid grid-cols-3 gap-2">
                <div class="mt-2 text-base">Visually Impaired</div>
                <div class=""></div>
                <div class="ml-8 mt-2">
                    <button class="bg-violet-200 text-indigo-700 font-bold px-3 py-1 rounded-full">
                        320
                    </button>
                </div>
            </div>
            <div class="grid grid-cols-3 gap-2">
                <div class="mt-2 text-base">Hard of Hearing</div>
                <div class=""></div>
                <div class="ml-8 mt-2">
                    <button class="bg-violet-200 text-indigo-700 font-bold px-3 py-1 rounded-full">
                        320
                    </button></div>
            </div>
            <div class="grid grid-cols-3 gap-2">
                <div class="mt-2 text-base">Wheelchair Bound</div>
                <div class=""></div>
                <div class="ml-8 mt-2">
                    <button class="bg-violet-200 text-indigo-700 font-bold px-3 py-1 rounded-full">
                        320
                    </button></div>
            </div>
            <div class="grid grid-cols-3 gap-2">
                <div class="mt-2 text-base">Dumb and Deaf</div>
                <div class=""></div>
                <div class="ml-8 mt-2">
                    <button class="bg-violet-200 text-indigo-700 font-bold px-3 py-1 rounded-full">
                        320
                    </button></div>
            </div>
            <h3 className='text-indigo-600 font-semibold mt-3'>View More</h3>
            <h2 className='text-black text-2xl font-semibold mt-5'>Roles</h2>
            <div className='flex flex-row mt-3'>
                <div>
                    <button class="bg-transparent py-2 px-3 border rounded-md border-2">
                    </button>
                </div>
                <div>
                    <h2 className='mt-1 ml-3'>Accountant</h2>
                </div>
            </div>
            <div className='flex flex-row mt-3'>
                <div>
                    <button class="bg-transparent py-2 px-3 border rounded-md border-2">
                    </button>
                </div>
                <div>
                    <h2 className='mt-1 ml-3'>Product Manager</h2>
                </div>
            </div>
            <div className='flex flex-row mt-3'>
                <div>
                    <button class="bg-transparent py-2 px-3 border rounded-md border-2">
                    </button>
                </div>
                <div>
                    <h2 className='mt-1 ml-3'>Frontend Developer</h2>
                </div>
            </div>
            <div className='flex flex-row mt-3'>
                <div>
                    <button class="bg-transparent py-2 px-3 border rounded-md border-2">
                    </button>
                </div>
                <div>
                    <h2 className='mt-1 ml-3'>Designer</h2>
                </div>
            </div>
        </div>
    );
};
