import RotateLoader from "react-spinners/RotateLoader"

interface LoadingSpinnerProps {
    isLoading: boolean
}
const COLOR = "#f97316"

const LoadingSpinner = ({isLoading}: LoadingSpinnerProps) => {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-slate-800'>
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