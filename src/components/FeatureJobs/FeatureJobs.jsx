import React from 'react';
import { Link } from 'react-router-dom';
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/outline'

const FeatureJobs = ({job}) => {
    return (
        <div className='border rounded p-12'>
            <img className='w-30 h-12' src={job.logo} alt="" />
            <h1 className='text-xl font-semibold mt-6'>{job.jobTitle}</h1>
            <h2 className='text-lg'>{job.company}</h2>
            <div className='flex mt-2 gap-3'>
                <span className='font-bold text-indigo-500 p-2  border-solid border border-indigo-400 rounded'>{job.jobType}</span>
                <span className='font-bold text-indigo-500 p-2 border-solid border border-indigo-400 rounded'>{job.jobNature}</span>
            </div>
            <div className='flex my-2 gap-4'>
                <p className='flex items-center'><MapPinIcon className="h-5 w-5 "/> <span className='text-gray-500'>{job.location}</span></p>
                <p className='flex items-center'><CurrencyDollarIcon className="h-5 w-5 "/> <span className='text-gray-500'>{job.salary}</span></p>
            </div>
            <Link to={`/job/${job.id}`}><button className='text-white font-semibold text-lg bg-indigo-500 w-32 h-12 rounded mt-4'>View Details</button></Link>
        </div>
    );
};

export default FeatureJobs;