"use client"
import { useState } from 'react'
import Divider from '../Divider/Divider';
import Button from '../Button/Button';
import { User, UserData } from '@/app/types/user';
import { BiX } from 'react-icons/bi'
import { Motor } from '@/app/types/motor';
import { editUserData } from '@/app/services/userService';

interface SettingsModalProps {
    closeModal: Function;
    userData: UserData;
}

const SettingsModal = ({closeModal, userData }: SettingsModalProps) => {
    const [ motor, setMotor ] = useState<Motor>(userData?.user.motors[0])
    const [ updatedUser, setUpdatedUser ] = useState<User>(userData.user)

    const needSetup = motor?.unitID === "" || !motor?.ratedVoltage || !motor?.ratedCurrent || !motor?.maxTemperature

    const handleSubmit = async (): Promise<void> => {
        try {
            const editedUser: UserData = {
                id: userData.id,
                user: {
                    email: updatedUser.email,
                    firstName: updatedUser.firstName,
                    lastName: updatedUser.lastName,
                    company: updatedUser.company,
                    motors: [ motor ],
                    alarms: updatedUser.alarms,
                }
            }
            debugger
            await editUserData(editedUser)
            closeModal()
            alert("User Update Successful!")
        } catch(err) {
            console.error(err)
        }
    }

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
        <div className="w-screen md:w-1/4 h-2/3 md:h-auto mx-8 bg-slate-800 text-white rounded-lg p-8 overflow-y-auto">
            <div className="flex flex-row justify-between align-center mb-4">
                <h2 className="text-2xl font-bold">{needSetup ? "Setup" : "Settings"}</h2>
                <BiX className="text-4xl" onClick={() => closeModal()}/>
            </div>
            <Divider />
                <h3 className="text-md my-2">User Information:</h3>
                <div className="flex flex-col md:flex-row justify-between">
                    <label className="text-md me-4 flex items-center">First Name: </label>
                    <input
                        className="md:w-1/2 w-full my-2 py-1 px-2
                        text-sm text-black border rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        type="text"
                        value={updatedUser?.firstName}
                        onChange={(e) => setUpdatedUser({...updatedUser, firstName: e.target.value})}
                        placeholder="First Name..." />
                </div>
                <div className="flex flex-col md:flex-row justify-between">
                    <label className="text-md me-4 flex items-center">Last Name: </label>
                    <input
                        className="md:w-1/2 w-full my-2 py-1 px-2
                        text-sm text-black border rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        type="text"
                        value={updatedUser?.lastName}
                        onChange={(e) => setUpdatedUser({...updatedUser, lastName: e.target.value})}
                        placeholder="Last Name..." />
                </div>
                <div className="flex flex-col md:flex-row justify-between">
                    <label className="text-md me-4 flex items-center">Company: </label>
                    <input
                        className="md:w-1/2 w-full my-2 py-1 px-2
                        text-sm text-black border rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        type="text"
                        value={updatedUser?.company}
                        onChange={(e) => setUpdatedUser({...updatedUser, company: e.target.value})}
                        placeholder="Company..." />
                </div>
                <h3 className="text-md my-2">Motor Specs and Thresholds:</h3>
                <div className="flex flex-col md:flex-row justify-between">
                    <label className="text-md me-4 flex items-center">Motor: </label>
                    <input
                        className="md:w-1/2 w-full my-2 py-1 px-2
                        text-sm text-black border rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        type="text"
                        value={motor?.unitID ?? null}
                        onChange={(e) => setMotor({...motor, unitID: e.target.value})}
                        placeholder="Unit Number..." />
                </div>
                <div className="flex flex-col md:flex-row justify-between">
                    <label className="text-md me-4 flex items-center">Rated Voltage (V): </label>
                    <input
                        className="md:w-1/2 w-full my-2 py-1 px-2
                        text-sm text-black border rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        type="number"
                        value={motor?.ratedVoltage ?? null}
                        onChange={(e) => setMotor({...motor, ratedVoltage: parseInt(e.target.value)})}
                        placeholder="Rated Voltage..." />
                </div>
                <div className="flex flex-col md:flex-row justify-between">
                    <label className="text-md me-4 flex items-center">Rated Current (A): </label>
                    <input
                        className="md:w-1/2 w-full my-2 py-1 px-2
                        text-sm text-black border rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        type="number"
                        value={motor?.ratedCurrent ?? null}
                        onChange={(e) => setMotor({...motor, ratedCurrent: parseInt(e.target.value)})}
                        placeholder="Rated Current..." />
                </div>
                <div className="flex flex-col md:flex-row justify-between">
                    <label className="text-md me-4 flex items-center">Overheat (&deg;C): </label>
                    <input
                        className="md:w-1/2 w-full my-2 py-1 px-2
                        text-sm text-black border rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        type="number"
                        value={motor?.maxTemperature ?? null}
                        onChange={(e) => setMotor({...motor, maxTemperature: parseInt(e.target.value)})}
                        placeholder="Temperature in Celsius..." />
                </div>
            <Divider />
            <div className='flex space-x-2 align-center justify-center'>
                <Button disable={needSetup} text="Save" handleOnClick={() => handleSubmit()}/>
                <Button 
                    text="Close" 
                    color="bg-red-500"
                    handleOnClick={() => closeModal()}/>
            </div>
        </div>
    </section>
  )
}

export default SettingsModal