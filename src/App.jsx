import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom' 
import {Time} from './components/Time'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <>
    <div className='min-h-screen flex flex-wrap content-between bg-blue-300'>
      <div className='w-full block'>
        <Header />
        <main>
        <h1 className='py-4 text-2xl'> Add Your Post......</h1>
        <Outlet />
        </main>
        <Footer />
      </div>
    </div>

    <div className='py-10 text-right'> <Time/>  </div>
    
    </>

  ) : null
}

export default App