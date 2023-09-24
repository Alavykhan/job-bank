import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div className='w-screen h-screen flex justify-center items-center text-center bg-gray-100'>
           <div>
           <h1 className='font-bold text-8xl text-gray-800'>404</h1>
            <h2 className='font-semibold text-4xl py-4'>This page is not found!</h2>
            <Link to='/'><button className='p-4 font-semibold bg-gray-700 text-white rounded'>Back to Home</button></Link>
           </div>
        </div>
    );
};

export default ErrorPage;