import React from 'react'
import TrendPeriod from '../TrendPeriod/TrendPeriod'
import { BiDownload } from 'react-icons/bi'
import { downloadMetrics } from '@/app/services/metricService'
import { useSearchParams } from 'next/navigation'
import { jsonToCsvWriter } from '@/app/utils/writer'
import { getCurrentTimestampString } from '@/app/utils/helpers'

interface ExtractProps {
  unitID: string
}

const CSV_HEADERS = {
  id: "id",
  line1_current: "line1_current",
  line1_voltage: "line1_voltage",
  line2_current: "line2_current",
  line2_voltage: "line2_voltage",
  line3_current: "line3_current",
  line3_voltage: "line3_voltage",
  temperature: "temperature",
  timestamp: "day,timestamp"
}

const Extract: React.FC<ExtractProps> = ({ unitID }) => {
  const searchParams = useSearchParams()
  const period = searchParams.get("period") ?? "15"

  const extractData = async (): Promise<void> => {
      downloadMetrics(unitID, period)
        .then((res: any) => {
          const filename = `motor-logs-${getCurrentTimestampString()}.csv`
          const logs = [ CSV_HEADERS, ...res ]
          jsonToCsvWriter(logs, filename)
        }).catch((err) => {
          console.error(err)
        })
  }

  return (
    <div className="flex justify-center align-center space-x-4 mt-4 md:mt-0 md:me-24">
        <TrendPeriod />
        <div className="flex flex-col justify-center align-center">
            <BiDownload 
                title="Extract Data"
                className="text-3xl hover:text-amber-500"
                onClick={() => extractData()}/>
        </div>
    </div>
  )
}

export default Extract