import React from 'react'
import SummaryTable from './SummaryTable/SummaryTable'
import Alarms from './Alarms/Alarms'
import SummaryPie from './SummaryPie/SummaryPie'

const Summary = () => {
  return (
    <section className="w-screen flex flex-col md:flex-row justify-center align-center py-8 space-y-8">
        <SummaryTable />
        <SummaryPie />
        <Alarms />
    </section>
  )
}

export default Summary