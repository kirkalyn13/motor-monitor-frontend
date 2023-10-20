import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin" />
    </div>
  )
}

export default LoadingSpinner