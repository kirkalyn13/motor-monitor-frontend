"use client"
import { useState, useEffect } from "react"
import { getLatestMetrics } from "@/app/services/metricService";
import { getStatusTextColor } from "@/app/utils/helpers";
import { METRICS_GRANULARITY } from "@/app/utils/constants";

interface SummaryTableProps {
  unitID: string;
  ratedVoltage: number;
  ratedCurrent: number;
  maxTemperature: number;
}

const SummaryTable = ({unitID, ratedVoltage, ratedCurrent, maxTemperature}: SummaryTableProps) => {
  const [refreshTrigger, setRefreshTrigger] = useState(false)
  const [ summary, setSummary ] = useState<any>(null)

  useEffect(() => {
      const refresh = () => setRefreshTrigger(!refreshTrigger)
      setTimeout(()=>{ refresh() }, METRICS_GRANULARITY)
      getLatestMetrics(unitID, ratedVoltage, ratedCurrent, maxTemperature)
        .then((res) => setSummary(res))
  },[maxTemperature, ratedCurrent, ratedVoltage, refreshTrigger, unitID])

  const renderDataRow = (data: any, label: string, unit: string) => {
      return (
        <tr>
          <td className="px-4 py-2">{label}</td>
          <td className={`px-4 py-2 ${getStatusTextColor(data.status, true)}`}>
          {data.value} {unit}
          </td>
        </tr>
      )
  }

  return (
    <table className="w-screen md:w-1/3">
      <thead>
        <tr>
          <td className="px-4 py-2">Metrics</td>
          <td className="px-4 py-2">Values</td>
        </tr>
      </thead>
      {summary !== null ?  
      <tbody>
          {renderDataRow(summary.line1Voltage, "Line 1 Voltage", "V")}
          {renderDataRow(summary.line2Voltage, "Line 2 Voltage", "V")}
          {renderDataRow(summary.line3Voltage, "Line 3 Voltage", "V")}
          {renderDataRow(summary.line1Current, "Line 1 Current", "A")}
          {renderDataRow(summary.line2Current, "Line 2 Current", "A")}
          {renderDataRow(summary.line3Current, "Line 3 Current", "A")}
          {renderDataRow(summary.temperature, "Temperature", "°C")}
      </tbody>
      : null}
    </table>
  )
}

export default SummaryTable