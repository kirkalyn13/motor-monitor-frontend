"use client"
import useFirebaseAuth from '@/app/hooks/useFirebaseAuth';
import { useRouter } from 'next/navigation';
import Link from 'next/link'

const Login = () => {
    const { setLoginEmail, setLoginPassword, login } = useFirebaseAuth()
    const router = useRouter()

    const handleLogin = () => {
        login()
            .then(() => {
                router.push("/")
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <h3> Login </h3>
                <input
                type="text"
                placeholder="Email..."
                onChange={(event) => {
                    setLoginEmail(event.target.value);
                }}
                />
                <input
                type="password"
                placeholder="Password..."
                onChange={(event) => {
                    setLoginPassword(event.target.value);
                }}
                />
                <button onClick={() => handleLogin()}> Login</button>
                <div>
                    Don&apos;t have an account yet?
                    <Link href="/register" scroll={false}>
                    Register here
                    </Link>
                </div>
        </div>
    )
}

export default Login