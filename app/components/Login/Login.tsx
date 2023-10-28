"use client"
import useFirebaseAuth from '@/app/hooks/useFirebaseAuth'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import AuthError from '@/app/components/AuthError/AuthError'
import Image from "next/image"
import { LOGO_SRC } from "@/app/utils/src"

const Login = () => {
    const { authenticate, disable, error } = useFirebaseAuth()
    const router = useRouter()

    const handleLogin = () => {
        authenticate.login()
            .then(() => {
                router.push("/dashboard")
            })
            .catch(err => console.error(err))
    }

    return (
        <section className="w-screen h-screen flex flex-col bg-slate-800 justify-center items-center">
            <Image 
                src={LOGO_SRC}
                width={100}
                height={100}
                alt="logo"/>
            <h3 className="text-2xl text-white font-bold my-4"> Login </h3>
                <input
                required
                className="md:w-1/4 w-4/5 my-2 p-2
                text-sm border rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                type="text"
                placeholder="Email..."
                onChange={(event) => {
                    authenticate.setLoginEmail(event.target.value);
                }}
                />
                <input
                required
                className="md:w-1/4 w-4/5 my-2 p-2
                text-sm border rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                type="password"
                placeholder="Password..."
                onChange={(event) => {
                    authenticate.setLoginPassword(event.target.value);
                }}
                />
                {error !== "" && <AuthError errorMessage={error} />}
                <button 
                    disabled={disable.login}
                    className={`md:w-1/4 w-4/5 mx-2 my-4 p-2 text-white rounded-lg 
                    ${!disable.login ? " bg-blue-600 hover:bg-blue-700 " : " bg-gray-300 "}
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
                    onClick={() => handleLogin()}>
                        Login
                </button>
                <div className="md:w-1/4 w-4/5 text-center">
                    <span className="me-4 text-white">Don&apos;t have an account yet?</span>
                    <Link 
                        className="text-amber-500"
                        href="/register" scroll={false}>
                        Register
                    </Link>
                </div>
        </section>
    )
}

export default Login