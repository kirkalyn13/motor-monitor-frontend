"use client"
import useFirebaseAuth from "@/app/hooks/useFirebaseAuth"
import { useRouter } from 'next/navigation'
import Link from 'next/link'

function Registration() {
  const { register, setRegisterEmail, setRegisterPassword } = useFirebaseAuth()
  const router = useRouter()

  const handleRegister = () => {
    register()
            .then(() => {
              alert("User Successfully Created!")
              router.push("/")
            })
            .catch(err => console.error(err))
  }

  return (
      <div>
        <h3> Register User </h3>
        <input
          type="text"
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
        <button onClick={() => handleRegister()}> Create User</button>
        <div>
          Already have an account?
          <Link href="/login" scroll={false}>
          Login here
          </Link>
        </div>
      </div>
  );
}

export default Registration;