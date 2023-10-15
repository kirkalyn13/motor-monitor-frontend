"use client"
import useFirebaseAuth from "@/app/hooks/useFirebaseAuth"

export default function Home() {
  const { logout, user } = useFirebaseAuth()
  return (
    <main>
      <h1>INDUCTION MOTOR MONITORING SYSTEM</h1>
      <h4> User Logged In: </h4>
      {user?.email}
      <button onClick={logout}> Sign Out </button>
    </main>
  )
}
