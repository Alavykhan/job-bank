import React from 'react';

const JobCategory = ({category}) => {
    return (
        <div className=' bg-indigo-50 p-6 rounded'>
             <img className='w-16 h-16 bg-indigo-100 p-2' src={category.icon} alt="" />
            <h2 className='text-xl font-semibold mt-4'>{category.title}</h2>
            <h3 className='text-gray-500'>{category.jobs}</h3>
           
        </div>
    );
};

export default JobCategory;