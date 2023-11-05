import React from 'react'

interface AlarmsProps {
  alarms: string[]
}

const Alarms = ({alarms = []}: AlarmsProps) => {
  return (
    <div className="w-screen md:w-1/3">
      <h3 className="w-full px-4 py-2">Alarms</h3>
      <ul className="my-4 space-y-2 text-left">
        {
          alarms.map((alarm: string) => <li className="ms-8 md:ms-32" key={alarm}>{alarm}</li>)
        }
      </ul>
    </div>
  )
}

export default Alarms