import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { CurrencyDollarIcon, BriefcaseIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { addToDb } from '../../utility/fakeDb';

const JobDetails = () => {
    const featureJobs = useLoaderData();
    const dynamic = useParams();
    // console.log(dynamic)

    const [job, setJob]= useState({});
    useEffect(()=>{
       const jobDetails = featureJobs.find(job=>job.id == dynamic.jobId);
       if(jobDetails){
        setJob(jobDetails)
       }
    },[]);

    // apply job handler

    const handleApplyJob = id=>{
        addToDb(id)
    }

    return (
        <div className='px-32 mt-10'>
            <h1 className='text-4xl font-bold text-center mt-5 text-gray-800'>Job Details</h1>
            <div className='flex justify-between gap-20 mt-10'>
                <div>
                <h1> <span className='font-semibold text-lg'>Job Description:</span> <span className='text-gray-500'>{job.jobDescription}</span></h1>
                <h1 className='mt-5'> <span className='font-semibold text-lg'>Job Responsibilities:</span> <span className='text-gray-500'>{job.jobResponsibility}</span></h1>
                <h1 className='mt-5'> <span className='font-semibold text-lg'>Educational Requirements:</span> <br /><span className='text-gray-500'>{job.education}</span></h1>
                <h1 className='mt-5'> <span className='font-semibold text-lg'>Experience:</span> <br /><span className='text-gray-500'>{job.experience}</span></h1>
                </div>
                <div>
                    <div className='bg-indigo-50 p-8 rounded'>
                        <h2 className='text-xl font-semibold mb-5'>Job Details</h2>
                        <hr />
                        <p className='flex items-center pb-2 mt-5'><CurrencyDollarIcon className="h-6 w-6 text-indigo-500"/> <span className='font-semibold text-lg ml-3'>Salary:</span> <span className='text-gray-500 text-base ml-2'>{job.salary} Per Month</span></p>
                        <p className='flex items-center mb-5'><BriefcaseIcon className="h-6 w-6 text-indigo-500"/> <span className='font-semibold text-lg ml-3'>Job Title:</span> <span className='text-gray-500 text-base ml-2'>{job.jobTitle}</span></p>
                        <hr />
                        <p className='flex items-center pb-2 mt-5'><PhoneIcon className="h-6 w-6 text-indigo-500"/> <span className='font-semibold text-lg ml-3'>Phone:</span> <span className='text-gray-500 text-base ml-2'>{job.phone}</span></p>
                        <p className='flex items-center pb-2'><EnvelopeIcon className="h-6 w-6 text-indigo-500"/> <span className='font-semibold text-lg ml-3'>Email:</span> <span className='text-gray-500 text-base ml-2'>{job.email}</span></p>
                        <p className='flex items-start'><MapPinIcon className="h-6 w-6 text-indigo-500"/> <span className='font-semibold text-lg ml-3'>Address:</span> <span className='text-gray-500 text-base ml-2'>{job.address}</span></p>
                    
                    </div>
                    <button className='bg-indigo-400 w-full h-12 mt-5 rounded text-lg font-semibold text-white' onClick={()=>handleApplyJob(job.id)}>Apply Job</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;