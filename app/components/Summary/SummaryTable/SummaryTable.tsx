import React from 'react'

const SummaryTable = () => {
  return (
    <table className="w-screen md:w-1/3">
      <thead>
        <tr>
          <td className="px-4 py-2">Metrics</td>
          <td className="px-4 py-2">Values</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-4 py-2">Line 1 Voltage</td>
          <td className="px-4 py-2">220 V</td>
        </tr>
        <tr>
          <td className="px-4 py-2">Line 2 Voltage</td>
          <td className="px-4 py-2">225 V</td>
        </tr>
        <tr>
          <td className="px-4 py-2">Line 3 Voltage</td>
          <td className="px-4 py-2">215 V</td>
        </tr>
        <tr>
          <td className="px-4 py-2">Line 1 Current</td>
          <td className="px-4 py-2">10 A</td>
        </tr>
        <tr>
          <td className="px-4 py-2">Line 2 Current</td>
          <td className="px-4 py-2">15 A</td>
        </tr>
        <tr>
          <td className="px-4 py-2">Line 3 Current</td>
          <td className="px-4 py-2">220 A</td>
        </tr>
        <tr>
          <td className="px-4 py-2">Temperature</td>
          <td className="px-4 py-2">70 &deg;C</td>
        </tr>
      </tbody>
    </table>
  )
}

export default SummaryTable