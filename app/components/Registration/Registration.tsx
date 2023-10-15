"use client"
import useFirebaseAuth from "@/app/hooks/useFirebaseAuth";

function Registration() {
  const { register, setRegisterEmail, setRegisterPassword } = useFirebaseAuth()

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

        <button onClick={register}> Create User</button>
      </div>
  );
}

export default Registration;