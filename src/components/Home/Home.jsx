import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react'
import job from '../../assets/job.json'
import { useLoaderData } from 'react-router-dom';
import JobCategory from '../JobCategory/JobCategory';
import FeatureJobs from '../FeatureJobs/FeatureJobs';


const Home = () => {
    const jobs = useLoaderData();
    const [showAll, setShowAll]= useState(false);
    const [jobCategories, setJobCategories] = useState([]);
        useEffect(()=>{
        fetch('category.json')
        .then(res=>res.json())
        .then(data=>setJobCategories(data))
    },[]);

    const [featureJobs, setFeatureJobs] =useState();
    useEffect(()=>{
        fetch('featureJobs.json')
        .then(res=>res.json())
        .then(data=>setFeatureJobs(data))
    },[])

    const handleShowAll=()=>{
        setShowAll(true);
    }

    return (
        <div>
            {/* Hero section */}
           <div className='px-32 py-6 lg:flex justify-between items-center bg-indigo-50'>
            <div>
                    <h1 className='lg:text-8xl sm:text-4xl font-bold mb-5'>One Step <br/> Closer To You <br/><span className='text-indigo-500'>Dream Job</span></h1>
                    <p className='mb-5 text-lg'>Explore thousands of job opportunities with all the information you need.<br/> Its your future. Come find it. Manage all your job application from start to<br/> finish.</p>
                    <button className='p-4 rounded bg-indigo-500 font-semibold text-white'>Get Started</button>
                </div>
                <div className='relative lg:w-1/2 '>
                    <div className='lg:ml-auto '>
                    <Lottie animationData={job} loop={true} />
                    </div>
                </div>
           </div>
           {/* job category */}
                <div>
                    <h2 className='text-4xl font-bold text-center mt-24 text-gray-800'>Job Category List</h2>
                    <p className='text-lg mt-3 text-center text-gray-800'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-5 px-32 mt-10 p-5'>
                      {
                        jobCategories.map(category=><JobCategory
                        key={category.id}
                        category={category}></JobCategory>)
                      }
                    </div>
                </div>
                {/* Feature Job */}
                <div>
                <h2 className='text-4xl font-bold text-center mt-24 text-gray-800'>Feature Jobs</h2>
                    <p className='text-lg mt-3 text-center text-gray-800'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-5 px-32 my-10'>
                        {
                            featureJobs?.slice(0, showAll? 8:4).map(job=><FeatureJobs
                            key={job.id}
                            job={job}></FeatureJobs>)
                        }
                        
                    </div>
                    <div className='flex justify-center mb-16'>  
                    {
                        !showAll &&(
                            <button onClick={handleShowAll} className='text-white font-semibold text-lg bg-indigo-500 w-36 h-12 rounded mt-4'>See All Job</button>
                   
                        )
                    }
                     </div>
                </div>
        </div>
    );
};

export default Home;