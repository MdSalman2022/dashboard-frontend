import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom'; 
import DashboardHeader from '../components/DashboardHeader/DashboardHeader';

import { ImExit } from 'react-icons/im';
import { BiHomeAlt, BiCategoryAlt } from 'react-icons/bi';
import { BsBag } from 'react-icons/bs';
import { IoPeopleOutline } from 'react-icons/io5';
import { FiSettings } from 'react-icons/fi';
import { FaBars } from 'react-icons/fa';
import { TbDatabase } from 'react-icons/tb';


const Main = () => { 



    const [active, setActive] = useState('dashboard')


    return (
        <div className='bg-white'>
        <div className="drawer drawer-mobile mx-auto">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden"><FaBars/></label>
                <DashboardHeader/>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side bg-base-100">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="menu  w-72  text-neutral flex flex-col ">
                    <li className="flex justify-center items-center py-10">
                        <Link to='/dashboard'>
                            <div className="avatar">
                                <div className="w-14 rounded-full">
                                    <img src="https://i.ibb.co/dtr0NNy/screen-shot-2018-10-08-at-6-04-09-pm.png" />
                                </div>
                            </div>
                                <div className="flex items-center gap-5">
                                    <div className="flex flex-col items-start">
                                        <p>Hello,</p>  
                                        <p className="font-semibold">Soho Store</p>  
                                    </div>
                                    <ImExit/>
                                </div>
                        </Link>
                    </li>
                    <li className="flex justify-center items-center">
                        <div className="flex flex-col items-start gap-0 py-10 bg-base-100 border-b border-neutral border-opacity-20">
                            <span className="font-semibold text-lg text-gray-400">Earning</span>
                            <span className="font-bold text-3xl">$12,560.55</span>
                        </div>
                    </li> 
                    <li onClick={() => setActive('dashboard')} className={`cursor-pointer  bg-base-100  mt-10 hover:text-primary pl-10 ${active === 'dashboard' ? 'text-primary border-r-2 border-primary' : 'text-neutral'  } `}><Link className='hover:bg-base-100 focus:bg-base-100' to='/dashboard/'><BiHomeAlt/>Dashboard</Link></li>
                    <li onClick={() => setActive('products')} className={` cursor-pointer items-start hover:text-primary  pl-10 ${active === 'products' ? 'text-primary border-r-2 border-primary' : 'text-neutral'  } `}><Link className='hover:bg-base-100 focus:bg-base-100' to='/dashboard/'><TbDatabase/>Products</Link></li>
                    <li onClick={() => setActive('orders')} className={` cursor-pointer items-start hover:text-primary  pl-10 ${active === 'orders' ? 'text-primary border-r-2 border-primary' : 'text-neutral'  } `}><Link className='hover:bg-base-100 focus:bg-base-100' to='/dashboard/'><BsBag/>Orders</Link></li>
                    <li onClick={() => setActive('customers')} className={` cursor-pointer items-start hover:text-primary  pl-10 ${active === 'customers' ? 'text-primary border-r-2 border-primary' : 'text-neutral'  } `}><Link  className='hover:bg-base-100 focus:bg-base-100'to='/dashboard/'><IoPeopleOutline/>Customers</Link></li>
                    <li onClick={() => setActive('categories')} className={` cursor-pointer items-start hover:text-primary  pl-10 ${active === 'categories' ? 'text-primary border-r-2 border-primary' : 'text-neutral'  } `}><Link className='hover:bg-base-100 focus:bg-base-100' to='/dashboard/'><BiCategoryAlt/>Categories</Link></li>
                    <li onClick={() => setActive('settings')} className={` cursor-pointer items-start hover:text-primary  pl-10 ${active === 'settings' ? 'text-primary border-r-2 border-primary' : 'text-neutral'  } `}><Link className='hover:bg-base-100 focus:bg-base-100' to='/dashboard/'><FiSettings/>Settings</Link></li>
 
                </ul>

            </div>
        </div>
    </div>
    );
};

export default Main;