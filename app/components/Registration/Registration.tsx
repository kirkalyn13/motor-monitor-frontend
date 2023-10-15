"use client"
import useFirebaseAuth from "@/app/hooks/useFirebaseAuth";
import { useRouter } from 'next/navigation'

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
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />

        <button onClick={() => handleRegister()}> Create User</button>
      </div>
  );
}

export default Registration;