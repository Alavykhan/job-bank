import React from 'react';

const Blog = () => {
    return (
        <div className='px-32 mt-10'>
            <ul className='flex flex-col'>
                <li className='border-2 rounded p-8 my-3'>
                    <h1 className='text-lg font-semibold'>Question-1: What is context API and when should you use it?</h1>
                    <p><span className='font-semibold'>Answer:</span> Context API is a process where data shared in every component without passing props manually. When you are working in the medium or large application where you have to share the data in different component but parent component is very far from the child component that time you can setup the props in the central area so that every component can use it easily and pass the data from API.</p>
                </li>
                <li className='border-2 rounded p-8 my-3'>
                    <h1 className='text-lg font-semibold'>Question-2: What is react custom hook? </h1>
                    <p><span className='font-semibold'>Answer:</span> React has some built-in Hooks like useState, useEffect and useContext, which usually used for specific purpose in the application. But in React you can make hook from the react library which you can use multiple location. This helps in making the code clean and readable and make the code clean.</p>
                </li>
                <li className='border-2 rounded p-8 my-3'>
                    <h1 className='text-lg font-semibold'>Question-3: What is useRef and how it works? </h1>
                    <p><span className='font-semibold'>Answer:</span> useRef is one of the built-in hooks in the world of React. It is useful for persisting mutable data between component renders. By using useRef you can easily store a mutable value that does not cause a re-render when updated, and you can access a DOM element directly and you can also keep the track of the state changes as well.</p>
                </li>
                <li className='border-2 rounded p-8 my-3'>
                    <h1 className='text-lg font-semibold'>Question-4: What is useMemo and how it works? </h1>
                    <p><span className='font-semibold'>Answer:</span> The react useMemo hook returns a memorized value, as a result you don’t need to recalculate the value. It only run when one of its dependencies update and this hook improve the overall performance of the application.</p>
                </li>
            </ul>
        </div>
    );
};

export default Blog;