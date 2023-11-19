import { Metrics } from '@/app/types/metrics'

// Duration of metrics fetching
export const METRICS_GRANULARITY = 10000 

// Default placeholder values:
export const DEFAULT_SERIES: Metrics[] = [{
        name: "",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: "",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: "",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }]

export const DEFAULT_TIMESTAMPS: string[] = 
    ["0:00", "0:00", "0:00", "0:00", "0:00", "0:00", "0:00", "0:00", "0:00", "0:00", "0:00", "0:00"]