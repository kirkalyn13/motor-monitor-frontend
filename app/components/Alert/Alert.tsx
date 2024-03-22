import { BiX } from "react-icons/bi"
import Button from "../Button/Button"
import { FiAlertCircle } from "react-icons/fi"

interface AlertProps {
    messages: string[]
    closeModal: Function
    severity: "warning" | "critical"
}

const Alert = ({ messages, closeModal, severity = "warning" }:  AlertProps) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className={`w-screen md:w-1/4 h-auto p-6 
            rounded-md shadow-md ${severity === "warning" ? "bg-amber-500" : "bg-red-500"}`}>
            <div className="flex flex-row justify-between align-center mb-4">
                <div className="flex justify-start align-center">
                    <FiAlertCircle className="text-3xl me-2"/>
                    <h2 className="text-2xl font-bold">{ severity === "warning" ? "WARNING" : "CRITICAL"}</h2>
                </div>
                <BiX className="text-4xl" onClick={() => closeModal()}/>
            </div>
            <p className="m-4 text-start">{messages}</p>
            <Button 
                text="Close" 
                color={severity === "warning" ? "bg-amber-700" : "bg-red-700"}
                handleOnClick={() => closeModal()}
                />
          </div>
        </div>
      )
}

export default Alert