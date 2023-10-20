import React, { CSSProperties } from 'react'
import RotateLoader from "react-spinners/RotateLoader"

interface LoadingSpinnerProps {
    isLoading: boolean
}
const COLOR = "#3b82f6"

const LoadingSpinner = ({isLoading}: LoadingSpinnerProps) => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <RotateLoader
            color={COLOR}
            loading={isLoading}
            size={15}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    </div>
  )
}

export default LoadingSpinner