const dummyData = {
  line1Voltage: 220,
  line2Voltage: 225,
  line3Voltage: 215,
  line1Current: 10,
  line2Current: 15,
  line3Current: 20,
  temperature: 75,
}

interface SummaryTableProps {
  unitID: string | null;
}

const SummaryTable = ({unitID}: SummaryTableProps) => {
  // TODO: Add fetch for latest data for each metrics
  // TODO: REST API to return latest data and health status (boolean) for each:
  // {data: {line1Voltage: 230, ...}, status: {line1Voltage: true, ...}}

  const renderDataRow = (data: number, label: string, unit: string) => {
      return (
        <tr>
          <td className="px-4 py-2">{label}</td>
          <td className="px-4 py-2">
          {data} {unit}
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
          {renderDataRow(dummyData.line1Current, "Line 2 Current", "A")}
          {renderDataRow(dummyData.line1Current, "Line 3 Current", "A")}
          {renderDataRow(dummyData.temperature, "Temperature", "°C")}
      </tbody>
    </table>
  )
}

export default SummaryTable