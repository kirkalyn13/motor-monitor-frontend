import { FaWrench } from "react-icons/fa";

const SetupNotice = () => {
  return (
    <section className="w-screen h-screen">
        <div className="mt-32 mx-4 flex flex-row align-center md:align-start justify-center">
            <FaWrench className="text-8xl"/>
            <div className="flex flex-col align-center justify-start ms-8">
                <h2 className="text-2xl md:text-4xl mt-4 mb-2">No Motor Specified.</h2>
                <p>Please enter motor details on settings to get started.</p>
            </div>
        </div>
    </section>
  )
}

export default SetupNotice