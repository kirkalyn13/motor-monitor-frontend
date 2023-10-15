"use client"
import useFirebaseAuth from '@/app/hooks/useFirebaseAuth';
import { useRouter } from 'next/navigation';

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
            placeholder="Email..."
            onChange={(event) => {
                setLoginEmail(event.target.value);
            }}
            />
            <input
            placeholder="Password..."
            onChange={(event) => {
                setLoginPassword(event.target.value);
            }}
            />

            <button onClick={() => handleLogin()}> Login</button>
        </div>
    )
}

export default Login