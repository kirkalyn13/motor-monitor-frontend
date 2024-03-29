import {useState, useEffect, ChangeEvent } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

const TrendPeriod: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();  
    const [ period, setPeriod ] = useState("15")
    
    useEffect(() => {
        router.replace(`/dashboard/?period=${period}`)
    },[period, router])

  return (
    <>
        <span className="flex flex-col justify-center align-center">Trend Period:</span>
        <div className="flex flex-col justify-center align-center">
          <select
            value={searchParams.get("period") ?? ""}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setPeriod(e.target.value)}
            className="bg-slate-800 text-white p-2 rounded-md border-0"
            >
            <option value={15}>15 min</option>
            <option value={30}>30 min</option>
            <option value={60}>1 hr</option>
            <option value={1440}>1 day</option>
            {/* <option value={10080}>1 week</option> */}
          </select>
        </div>
    </>
  );
};

export default TrendPeriod;
