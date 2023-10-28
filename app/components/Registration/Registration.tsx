"use client"
import useFirebaseAuth from "@/app/hooks/useFirebaseAuth"
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import AuthError from "@/app/components/AuthError/AuthError"
import { useState } from "react"
import Image from "next/image"
import { LOGO_SRC } from "@/app/utils/src"
import { addUserData } from "@/app/services/userService"
import { User } from "@/app/types/user"
import { defaultThresholds } from "@/app/utils/constants"

function Registration() {
  const { authenticate, disable, error, setError } = useFirebaseAuth()
  const [ confirmPassword, setConfirmPassword ] = useState("")
  const [ firstName, setFirstName ] = useState("")
  const [ lastName, setLastName ] = useState("")
  const [ company, setCompany ] = useState("")
  const router = useRouter()

  const disableRegister = disable.register || firstName === "" || lastName === "" || confirmPassword.length < 8

  const validatePassword = () => {
    if (authenticate.registerPassword !== confirmPassword) {
      setError("Passwords do not match")
      return false
    }
    return true
  }

  const handleRegister = () => {
    if (!validatePassword()) return
    authenticate.register()
            .then(() => {
              const newUser: User = {
                email: authenticate.registerEmail,
                firstName,
                lastName,
                company,
                motors: [],
                alarms:[],
                thresholds: defaultThresholds
              }
              addUserData(newUser)
              router.push("/dashboard")
            })
            .catch(err => console.error(err))
            .finally(() => {
              setConfirmPassword("")
              setFirstName("")
              setLastName("")
              setCompany("")
            })
  }

  return (
      <section className="w-screen h-screen flex flex-col justify-center items-center">
        <Image 
          src={LOGO_SRC}
          width={100}
          height={100}
          alt="logo"/>
        <h3 className="text-2xl font-bold my-4">Registration</h3>
        <input
          className="md:w-1/4 w-4/5 m-2 p-2
           text-sm border rounded-lg 
           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          type="text"
          placeholder="Email..."
          onChange={(event) => {
            authenticate.setRegisterEmail(event.target.value);
          }}
        />
        <input
          className="md:w-1/4 w-4/5 m-2 p-2
          text-sm border rounded-lg 
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          type="password"
          placeholder="Password..."
          onChange={(event) => {
            authenticate.setRegisterPassword(event.target.value);
          }}
        />
        <input
          className="md:w-1/4 w-4/5 m-2 p-2
           text-sm border rounded-lg 
           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
           type="password"
          placeholder="Confirm Password..."
          onChange={(event) => {
            setConfirmPassword(event.target.value);
          }}
        />
        <input
          className="md:w-1/4 w-4/5 m-2 p-2
           text-sm border rounded-lg 
           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          type="text"
          placeholder="First Name..."
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
        <input
          className="md:w-1/4 w-4/5 m-2 p-2
           text-sm border rounded-lg 
           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          type="text"
          placeholder="Last Name..."
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
        <input
          className="md:w-1/4 w-4/5 m-2 p-2
           text-sm border rounded-lg 
           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          type="text"
          placeholder="Company..."
          onChange={(event) => {
            setCompany(event.target.value);
          }}
        />
        {error !== "" && <AuthError errorMessage={error} />}
        <button 
          disabled={disableRegister}
          className={`md:w-1/4 w-4/5 mx-2 my-4 p-2 text-white rounded-lg 
          ${!disableRegister ? " bg-blue-500 hover:bg-blue-600 " : " bg-gray-300 "}
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
          onClick={() => handleRegister()}>
            Create User
        </button>
        <div className="md:w-1/4 w-4/5 text-center">
          <span className="me-4">Already have an account?</span>
          <Link 
            className="text-blue-700"
            href="/login" scroll={false}>
            Login here
          </Link>
        </div>
      </section>
  );
}

export default Registration;