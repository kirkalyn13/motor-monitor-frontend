import React from 'react'
import Link from 'next/link'

const LandingPage = () => {
  return (
    <div>
        <h1>Welcome to Three-Phase Induction Motor Monitor!</h1>
        <div>
            Don&apos;t have an account yet?
            <Link href="/register" scroll={false}>
            Register here
            </Link>
        </div>
        <div>
          Already have an account?
          <Link href="/login" scroll={false}>
          Login here
          </Link>
        </div>
    </div>
  )
}

export default LandingPage