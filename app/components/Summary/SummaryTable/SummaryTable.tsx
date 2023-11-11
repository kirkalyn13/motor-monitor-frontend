import { getStatusTextColor } from "@/app/utils/helpers";

const dummyData = {
  line1Voltage: {value: 220, status: "normal"},
  line2Voltage: {value: 225, status: "normal"},
  line3Voltage: {value: 215, status: "normal"},
  line1Current: {value: 10, status: "normal"},
  line2Current: {value: 15, status: "warning"},
  line3Current: {value: 20, status: "critical"},
  temperature: {value: 75, status: "critical"}
}

interface SummaryTableProps {
  unitID: string | null;
}

const SummaryTable = ({unitID}: SummaryTableProps) => {
  // TODO: Add fetch for latest data for each metrics
  // TODO: REST API to return latest data and health status (boolean) for each:
  // {data: {line1Voltage: 230, ...}, status: {line1Voltage: true, ...}}

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
      <tbody>
          {renderDataRow(dummyData.line1Voltage, "Line 1 Voltage", "V")}
          {renderDataRow(dummyData.line2Voltage, "Line 2 Voltage", "V")}
          {renderDataRow(dummyData.line3Voltage, "Line 3 Voltage", "V")}
          {renderDataRow(dummyData.line1Current, "Line 1 Current", "A")}
          {renderDataRow(dummyData.line2Current, "Line 2 Current", "A")}
          {renderDataRow(dummyData.line3Current, "Line 3 Current", "A")}
          {renderDataRow(dummyData.temperature, "Temperature", "°C")}
      </tbody>
    </table>
  )
}

export default SummaryTable