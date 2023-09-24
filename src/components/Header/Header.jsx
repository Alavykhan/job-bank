import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import './Header.css'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'


const Header = () => {
    const [isMenuOpen, setIsMenuOpen]= useState(false)
    return (
        <div className='bg-gray-50 px-4 py-4 mx-auto md:px-24 lg:px-32'>
            <div className='flex items-center justify-between'>
                   {/* logo */}
            <Link className='font-bold text-3xl text-gray-700' to="/">JobBank</Link>
            <nav className='navigation sm:invisible lg:visible'>
                <ActiveLink className='font-semibold pr-5' to='/'>Home</ActiveLink>
                <ActiveLink className='font-semibold pr-5' to='/statistics'>Statistics</ActiveLink>
                <ActiveLink className='font-semibold pr-5' to='/appliedJobs'>Applied Jobs</ActiveLink>
                <ActiveLink className='font-semibold pr-5' to='/blog'>Blog</ActiveLink>
            </nav>
            <button className='sm:invisible lg:visible font-semibold p-4 bg-gray-700 rounded text-white'>Start Applying</button>
          
         {/* Responsive drop down menu */}
         <div className='lg:hidden'> 
            <button
            title='Open Menu'
            onClick={()=>setIsMenuOpen(true)}>
                <Bars3BottomRightIcon className='w-8 text-gray-600'/>
            </button>
            {isMenuOpen && (
                <div className='absolute top-0 left-0 w-full z-10'>
                    <div className='px-5 py-5 bg-gray-100 border rounded shadow-sm'>
                        <div className='flex items-center justify-between mb-4'>
                        <Link className='font-bold text-2xl' to="/">Job Bank</Link>
                       <div>
                       <button
                         title='Close Menu'
                         onClick={()=>setIsMenuOpen(false)}>
                           <XMarkIcon className='w-5 text-gray-600'/>
                        </button>
                       </div>
                        </div>
                        <nav className='navigation '>
                            <ActiveLink className='font-semibold pr-5' to='/'>Home</ActiveLink>
                            <ActiveLink className='font-semibold pr-5' to='/statistics'>Statistics</ActiveLink>
                            <ActiveLink className='font-semibold pr-5' to='/appliedJobs'>Applied Jobs</ActiveLink>
                            <ActiveLink className='font-semibold pr-5' to='/blog'>Blog</ActiveLink>
                        </nav>
                    </div>
                </div>

            )}
         </div>
         </div>
        </div>
    );
};

export default Header;