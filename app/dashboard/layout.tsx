"use client"
import { useState, useEffect } from "react";
import useFirebaseAuth from "@/app/hooks/useFirebaseAuth"
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  const [ initialLoad, setInitialLoad ] = useState(true)
    const { user } = useFirebaseAuth()
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {setInitialLoad(false)}, 2000)
        if (!user) router.push("/")
    },[router, user])

  return (
    <>
      {!initialLoad ? 
        (
          <>
            <Navbar/>
              {children}
            <Footer/>
          </>
        )
        : <LoadingSpinner isLoading={initialLoad}/>
      }
    </>
  )
}

export default DashboardLayout