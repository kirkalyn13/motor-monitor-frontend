import React from 'react'

const Alarms = () => {
  return (
    <div className="w-screen md:w-1/3">
      <h3 className="w-full px-4 py-2">Alarms</h3>
      <ul className="my-4 space-y-2">
        <li>Overvoltage detected</li>
        <li>Overcurrent detected</li>
        <li>Overvoltage detected</li>
      </ul>
    </div>
  )
}

export default Alarms