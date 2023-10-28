interface ButtonProps {
    text: string;
    handleOnClick: Function;
}

const Button = ({text, handleOnClick}: ButtonProps) => {
  return (
    <button 
        className="hidden md:block bg-amber-500 px-4 py-2 rounded-lg hover:bg-amber-600 focus:outline-none"
        onClick={() => handleOnClick()}>
        {text}
    </button>
  )
}

export default Button