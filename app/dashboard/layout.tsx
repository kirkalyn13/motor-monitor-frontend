"use client"
import { useState, useEffect } from "react";
import useFirebaseAuth from "@/app/hooks/useFirebaseAuth"
import { useRouter } from 'next/navigation';
import Navbar from '@/app/components/Navbar/Navbar'
import Footer from '@/app/components/Footer/Footer'
import LoadingSpinner from "@/app/components/LoadingSpinner/LoadingSpinner";

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  const [ initialLoad, setInitialLoad ] = useState(true)
    const { user } = useFirebaseAuth()
    const router = useRouter()

    useEffect(() => {
        if (!user) router.push("/")
        else setTimeout(() => setInitialLoad(false), 1000 ) //debounce
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