"use client"
import useFirebaseAuth from "@/app/hooks/useFirebaseAuth"
import Image from "next/image"
import { useRouter } from 'next/navigation'
import { useState } from "react"
import { BiMenu } from 'react-icons/bi'
import { LOGO_SRC } from "@/app/utils/src"
import { BiLogOut } from 'react-icons/bi'

const Navbar = () => {
    const { authenticate, user } = useFirebaseAuth()
    const [ showMenu, setShowMenu ] = useState(false)
    const router = useRouter()

    const handleLogout = () => {
        authenticate.logout()
            .then(() => {
                router.push("/login")
            })
            .catch(err => console.error(err))
    }

  return (
    <nav className="w-screen fixed bg-blue-600 p-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
            <div className="flex items-center">
                <Image 
                    className="me-4"
                    src={LOGO_SRC}
                    width={50}
                    height={50}
                    alt="logo"/>
            </div>

            <div className="md:hidden mt-4">
                <button 
                    className="text-white"
                    onClick={() => setShowMenu(!showMenu)}>
                    <BiMenu className="text-4xl"/>
                </button>
            </div>

            <ul className="hidden md:flex space-x-4 align-center items-center">
                <li><a href="#" className="text-white hover:text-amber-500">Home</a></li>
                <li><a href="#voltage" className="text-white hover:text-amber-500">Voltage</a></li>
                <li><a href="#current" className="text-white hover:text-amber-500">Current</a></li>
                <li><a href="#rpm" className="text-white hover:text-amber-500">RPM</a></li>
                <li><a href="#temperature" className="text-white hover:text-amber-500">Temperature</a></li>
            </ul>

            <div className="hidden md:flex align-center items-center">
                <span className="text-white text-md me-4">{user?.email}</span>
                <BiLogOut 
                    className="text-2xl text-white me-4 hover:text-amber-500"
                    onClick={() => handleLogout()} />
            </div>
        </div>

        { showMenu ?
                (<ul className="space-y-2 text-center">
                    <li><a href="#" className="text-white border-t-1 hover:text-amber-500">Home</a></li>
                    <li><a href="#voltage" className="text-white hover:text-amber-500">Voltage</a></li>
                    <li><a href="#current" className="text-white hover:text-amber-500">Current</a></li>
                    <li><a href="#rpm" className="text-white hover:text-amber-500">RPM</a></li>
                    <li><a href="#temperature" className="text-white hover:text-amber-500">Temperature</a></li>
                    <li className="md:hidden">
                        <button 
                            className="text-black hover:text-amber-500"
                            onClick={() => handleLogout()}>
                            Logout
                        </button>
                    </li>
                </ul>)
            : null}

    </nav>
    )
}

export default Navbar