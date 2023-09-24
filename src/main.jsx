import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Blog from './components/Blog/Blog.jsx';
import JobDetails from './components/JobDetails/JobDetails.jsx';
import { appliedJobs } from './loaders/appliedJobs.js';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'statistics',
        element:<Statistics/>
      },
      {
        path:'appliedJobs',
        element:<AppliedJobs/>,
        loader:appliedJobs

      },
      {
        path:'blog',
        element:<Blog/>
      },
      {
        path:'job/:jobId',
        element:<JobDetails/>,
        loader:({params})=> fetch("/featureJobs.json")
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router}/>
  </>,
)
