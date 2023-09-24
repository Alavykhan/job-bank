import React from 'react';
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';

const Jobs = ({jobs}) => {
    return (
        <div>
            <li className='border rounded p-12 my-3'>
               <div className='flex justify-between items-center'>
                        <div className='flex gap-10 items-center'>
                            <img className='w-30 h-16' src={jobs.logo} alt="" />
                                <div>
                                        <h1 className='text-xl font-semibold mt-6'>{jobs.jobTitle}</h1>
                                        <h2 className='text-lg'>{jobs.company}</h2>
                                        <div className='flex mt-2 gap-3'>
                                            <span className='font-bold text-indigo-500 p-2  border-solid border border-indigo-400 rounded'>{jobs.jobType}</span>
                                            <span className='font-bold text-indigo-500 p-2 border-solid border border-indigo-400 rounded'>{jobs.jobNature}</span>
                                        </div>
                                        <div className='flex my-2 gap-4'>
                                            <p className='flex items-center'><MapPinIcon className="h-5 w-5 "/> <span className='text-gray-500'>{jobs.location}</span></p>
                                            <p className='flex items-center'><CurrencyDollarIcon className="h-5 w-5 "/> <span className='text-gray-500'>{jobs.salary}</span></p>
                                        </div>
                                </div>
                        </div>
                        <Link to={`/job/${jobs.id}`}><button className='text-white font-semibold text-lg bg-indigo-500 w-32 h-12 rounded mt-4'>View Details</button></Link>
               </div>
            </li>
        </div>
    );
};

export default Jobs;