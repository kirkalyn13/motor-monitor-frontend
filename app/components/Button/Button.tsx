interface ButtonProps {
    text: string;
    color?: string;
    hoverColor?: string;
    handleOnClick: Function;
}

const Button = ({text, 
  color = "bg-amber-500",
  hoverColor = "bg-amber-600",
  handleOnClick
}: ButtonProps) => {
  return (
    <button 
        className={`${color} px-8 py-2 rounded-lg hover:${hoverColor} focus:outline-none`}
        onClick={() => handleOnClick()}>
        {text}
    </button>
  )
}

export default Button