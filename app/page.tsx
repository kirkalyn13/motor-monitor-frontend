"use client"
import { useEffect } from 'react'
import useFirebaseAuth from "@/app/hooks/useFirebaseAuth"
import LandingPage from "./components/LandingPage/LandingPage";
import { useRouter } from 'next/navigation'

export default function Home() {
  const { user } = useFirebaseAuth()
  const router = useRouter()

  useEffect(() => {
    if (user) router.push("/dashboard")
  },[router, user])

  return (
    <main>
      <LandingPage />
    </main>
  )
}
