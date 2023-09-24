import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import { Outlet, useNavigation } from 'react-router-dom'
import Footer from './components/Footer/Footer'

function App() {
  const navigation = useNavigation();
  return (

    <>
    <Header/>
      <div>{navigation.state === 'loading' && <button type="button" className="bg-gray-900 ..." disabled>
      <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
      </svg>
      Loading...
      </button> }</div>
      <div className='min-h-[calc(100vh-192px)]'>
      <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default App
