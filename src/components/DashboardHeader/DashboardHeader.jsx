import React, { useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { IoExitOutline } from 'react-icons/io5';

const DashboardHeader = () => {

    const [searchActive, setSearchActive] = useState(false);
    
    return (
        <div className="navbar p-16 text-neutral">
            <div className="navbar-start">
                <div className="dropdown lg:hidden">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Homepage</a></li>
                    <li><a>Portfolio</a></li>
                    <li><a>About</a></li>
                </ul>
                </div>
                <div className="flex flex-col">
                    <span className="text-2xl font-bold">Dashboard</span>
                    <span className="">Everything her</span>
                </div>
            </div>
            <div className="navbar-center">
                <div className="relative">
                    <span className='absolute left-0 bottom-4 text-xl'><HiOutlineSearch /></span>
                    <input onClick={() => setSearchActive(!searchActive)} type="text" placeholder="Search something" className={`focus:outline-0 transition-all duration-300  hover:border-primary px-10 py-3 border-b  border-neutral border-opacity-30 w-[500px] bg-transparent ${searchActive === true && 'border-primary border-opacity-100'} `} />
                </div>
            </div>
            <div className="navbar-end"> 
                <div className='flex items-center gap-5'>
                        <p className='font-semibold text-sm'>VIEW YOUR STORE</p>
                        <IoExitOutline className='text-2xl'/>
                </div>
            </div>
            </div>
    );
};

export default DashboardHeader;