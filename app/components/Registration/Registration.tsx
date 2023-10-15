"use client"
import useFirebaseAuth from "@/app/hooks/useFirebaseAuth"
import { useRouter } from 'next/navigation'
import Link from 'next/link'

function Registration() {
  const { authenticate, disable } = useFirebaseAuth()
  const router = useRouter()

  const handleRegister = () => {
    authenticate.register()
            .then(() => {
              alert("User Successfully Created!")
              router.push("/dashboard")
            })
            .catch(err => console.error(err))
  }

  return (
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <h3 className="text-2xl font-bold my-4">Register User</h3>
        <input
          className="md:w-1/4 w-full m-2 p-2
           text-sm border rounded-lg 
           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          type="text"
          placeholder="Email..."
          onChange={(event) => {
            authenticate.setRegisterEmail(event.target.value);
          }}
        />
        <input
          className="md:w-1/4 w-full m-2 p-2
          text-sm border rounded-lg 
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          type="password"
          placeholder="Password..."
          onChange={(event) => {
            authenticate.setRegisterPassword(event.target.value);
          }}
        />
        <button 
          disabled={disable.register}
          className={`md:w-1/4 w-full mx-2 my-4 p-2 text-white rounded-lg 
          ${!disable.register ? " bg-blue-500 hover:bg-blue-600 " : " bg-gray-300 "}
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
          onClick={() => handleRegister()}>
            Create User
        </button>
        <div>
          <span className="me-4">Already have an account?</span>
          <Link 
            className="text-blue-700"
            href="/login" scroll={false}>
            Login here
          </Link>
        </div>
      </div>
  );
}

export default Registration;