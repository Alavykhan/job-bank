import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Jobs from '../Jobs/Jobs';


const AppliedJobs = () => {
    const jobData= useLoaderData();
    const [job, setJob] = useState(jobData);
   
    const handleOnsiteJobs= onsite =>{
        const onsiteJobs = job.filter(newJobs=> newJobs.jobType == onsite)
        if(onsiteJobs){
            setJob(onsiteJobs)
        }
    }
    const handleRemoteJobs= remote =>{
        const remoteJobs = job.filter(newJobs=> newJobs.jobType == remote)
        if(remoteJobs){
            setJob(remoteJobs)
        }
    }
   
    
 
    return (
        <div className='px-32 my-10'>
            <h1 className='text-4xl font-bold text-center text-gray-800'>{jobData.length? 'Applied Jobs':'No Jobs Applied'}</h1>
            <div className='flex justify-end gap-5 mt-10'>
            <button className='font-semibold text-lg border-2 border-indigo-600 text-indigo-600 w-32 h-12 rounded mt-4' onClick={()=>handleOnsiteJobs('Onsite')}>Onsite Jobs</button>
            <button className='text-white font-semibold text-lg bg-indigo-600 w-32 h-12 rounded mt-4' onClick={()=>handleRemoteJobs('Remote')}>Remote Jobs</button>
            </div>
           <ul className='flex flex-col'>
                {
                    job.map(jobs=><Jobs
                    key ={jobs.id}
                    jobs={jobs}></Jobs>)
                }
           </ul>
        </div>
    );
};

export default AppliedJobs;