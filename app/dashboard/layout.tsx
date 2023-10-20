import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const dashboardLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
        <Navbar/>
            {children}
        <Footer/>
    </>
  )
}

export default dashboardLayout