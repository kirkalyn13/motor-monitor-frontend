"use client"
import useFirebaseAuth from "@/app/hooks/useFirebaseAuth"
import { useRouter } from 'next/navigation';

const Dashboard = () => {
    const { logout, user } = useFirebaseAuth()
    const router = useRouter()

    const handleLogout = () => {
        logout()
            .then(() => {
                router.push("/login")
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <h1>INDUCTION MOTOR MONITORING SYSTEM</h1>
            <h4> User Logged In: </h4>
            {user?.email}
            <button onClick={() => handleLogout()}> Sign Out </button>
        </div>
    )
}

export default Dashboard