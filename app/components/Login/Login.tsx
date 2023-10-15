"use client"
import useFirebaseAuth from '@/app/hooks/useFirebaseAuth'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { parseError } from '@/app/utils/helpers'

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
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <h3 className="text-2xl font-bold my-4"> Login </h3>
                <input
                className="md:w-1/4 w-full m-2 p-2
                text-sm border rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                type="text"
                placeholder="Email..."
                onChange={(event) => {
                    authenticate.setLoginEmail(event.target.value);
                }}
                />
                <input
                className="md:w-1/4 w-full my-2 p-2
                text-sm border rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                type="password"
                placeholder="Password..."
                onChange={(event) => {
                    authenticate.setLoginPassword(event.target.value);
                }}
                />
                {error !== "" && <p className="font-semibold py-2 text-red-500 my-">{parseError(error)}</p>}
                <button 
                    disabled={disable.login}
                    className={`md:w-1/4 w-full mx-2 my-4 p-2 text-white rounded-lg 
                    ${!disable.login ? " bg-blue-500 hover:bg-blue-600 " : " bg-gray-300 "}
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
                    onClick={() => handleLogin()}>
                        Login
                </button>
                <div>
                    <span className="me-4">Don&apos;t have an account yet?</span>
                    <Link 
                        className="text-blue-700"
                        href="/register" scroll={false}>
                        Register here
                    </Link>
                </div>
        </div>
    )
}

export default Login