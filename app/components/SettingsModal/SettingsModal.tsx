"use client"
import React from 'react'
import Divider from '../Divider/Divider';
import Button from '../Button/Button';

interface SettingsModalProps {
    closeModal: Function;
    isSetup?: boolean;
}

const SettingsModal = ({closeModal, isSetup = false }: SettingsModalProps) => {
  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
        <div className="w-screen md:w-1/4 h-2/3 md:h-auto mx-8 bg-slate-800 text-white p-8 overflow-y-scroll">
            <h2 className="text-2xl font-bold mb-4">{isSetup ? "Setup Wizard" : "Settings"}</h2>
            <Divider />
            <h3 className="text-xl my-2">User Information:</h3>
                <div className="flex flex-col md:flex-row justify-between">
                    <label className="text-md me-4 flex items-center">First Name: </label>
                    <input
                        className="md:w-1/2 w-full my-2 py-1 px-2
                        text-sm text-black border rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        type="text"
                        placeholder="First Name..." />
                </div>
                <div className="flex flex-col md:flex-row justify-between">
                    <label className="text-md me-4 flex items-center">Last Name: </label>
                    <input
                        className="md:w-1/2 w-full my-2 py-1 px-2
                        text-sm text-black border rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        type="text"
                        placeholder="Last Name..." />
                </div>
                <div className="flex flex-col md:flex-row justify-between">
                    <label className="text-md me-4 flex items-center">Company: </label>
                    <input
                        className="md:w-1/2 w-full my-2 py-1 px-2
                        text-sm text-black border rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        type="text"
                        placeholder="Company..." />
                </div>
                <div className="flex flex-col md:flex-row justify-between">
                    <label className="text-md me-4 flex items-center">Motor: </label>
                    <input
                        className="md:w-1/2 w-full my-2 py-1 px-2
                        text-sm text-black border rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        type="text"
                        placeholder="Unit Number..." />
                </div>
                <h3 className="text-xl my-2">Thresholds:</h3>
                <div className="flex flex-col md:flex-row justify-between">
                    <label className="text-md me-4 flex items-center">Over Voltage (V): </label>
                    <input
                        className="md:w-1/2 w-full my-2 py-1 px-2
                        text-sm text-black border rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        type="number"
                        placeholder="Over Voltage in Volts..." />
                </div>
                <div className="flex flex-col md:flex-row justify-between">
                    <label className="text-md me-4 flex items-center">Under Voltage (V): </label>
                    <input
                        className="md:w-1/2 w-full my-2 py-1 px-2
                        text-sm text-black border rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        type="number"
                        placeholder="Under Voltage in Volts..." />
                </div>
                <div className="flex flex-col md:flex-row justify-between">
                    <label className="text-md me-4 flex items-center">Overheat (Celsius): </label>
                    <input
                        className="md:w-1/2 w-full my-2 py-1 px-2
                        text-sm text-black border rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        type="number"
                        placeholder="Temperature in Celsius..." />
                </div>
            <Divider />
            <div className='flex space-x-2 align-center justify-center'>
                <Button text="Save" handleOnClick={() => console.log("Save Settings.")}/>
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