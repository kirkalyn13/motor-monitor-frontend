import { parseError } from '@/app/utils/helpers'
import { BiErrorCircle } from 'react-icons/bi'
import React from 'react'

interface AuthErrorProps {
    errorMessage: string
}

const AuthError = ({errorMessage}: AuthErrorProps) => {
  return (
    <div className="md:w-1/4 w-4/5 flex justify-center">
        <BiErrorCircle className="text-2xl text-red-500 m-2"/>
        <p className="font-semibold py-2 text-red-500">
            {parseError(errorMessage)}
        </p>
    </div>
  )
}

export default AuthError