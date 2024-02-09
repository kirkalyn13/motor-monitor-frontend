"use client"
import { useState, useEffect } from "react"
import { getLatestMetrics } from "@/app/services/metricService";
import { getStatusTextColor } from "@/app/utils/helpers";
import { DEFAULT_LATEST_METRICS } from "@/app/utils/constants";
import { LatestMetricsSummary } from "@/app/types/metrics";
import Divider from "../../Divider/Divider";
import useMinuteListener from "@/app/hooks/useMinuteListener";

interface SummaryTableProps {
  unitID: string;
  ratedVoltage: number;
  ratedCurrent: number;
  maxTemperature: number;
}

const SummaryTable = ({unitID, ratedVoltage, ratedCurrent, maxTemperature}: SummaryTableProps) => {
  const [ summary, setSummary ] = useState<LatestMetricsSummary>(DEFAULT_LATEST_METRICS)
  const { currentMinute } = useMinuteListener()

  useEffect(() => {
      getLatestMetrics(unitID, ratedVoltage, ratedCurrent, maxTemperature)
        .then((res) => setSummary(res))
  },[currentMinute, maxTemperature, ratedCurrent, ratedVoltage, unitID])

  const renderDataRow = (data: any, label: string, unit: string) => {
      return (
        <tr>
          <td className="px-4 py-2">{label}</td>
          <td className={`px-4 py-2 ${getStatusTextColor(data?.status, false)}`}>
          {data?.value} {unit}
          </td>
        </tr>
      )
  }

  const renderTableDivider = () => <tr><td><Divider/></td><td><Divider/></td></tr>

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
          {renderTableDivider()}
          {renderDataRow(summary?.line1Voltage, "Phase 1 Voltage", "V")}
          {renderDataRow(summary?.line2Voltage, "Phase 2 Voltage", "V")}
          {renderDataRow(summary?.line3Voltage, "Phase 3 Voltage", "V")}
          {renderTableDivider()}
          {renderDataRow(summary?.line1Current, "Line 1 Current", "A")}
          {renderDataRow(summary?.line2Current, "Line 2 Current", "A")}
          {renderDataRow(summary?.line3Current, "Line 3 Current", "A")}
          {renderTableDivider()}
          {renderDataRow(summary?.temperature, "Temperature", "°C")}
      </tbody>
      : null}
    </table>
  )
}

export default SummaryTable