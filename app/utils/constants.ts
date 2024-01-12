import { Metrics, MetricsSummarySeries } from '@/app/types/metrics'

// Duration of metrics fetching
export const METRICS_GRANULARITY = 60000 

// Default placeholder values:
export const DEFAULT_METRIC_SUMMARY = {
    status: "normal",
    value: 0
}

export const DEFAULT_LATEST_METRICS = {
    line1Current: DEFAULT_METRIC_SUMMARY,
    line1Voltage: DEFAULT_METRIC_SUMMARY,
    line2Current: DEFAULT_METRIC_SUMMARY,
    line2Voltage: DEFAULT_METRIC_SUMMARY,
    line3Current: DEFAULT_METRIC_SUMMARY,
    line3Voltage: DEFAULT_METRIC_SUMMARY,
    temperature: DEFAULT_METRIC_SUMMARY,
    timestamp: "",
    unitID: ""
}

export const DEFAULT_SERIES: Metrics[] = [{
        name: "",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: "",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        name: "",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }]

export const DEFAULT_TIMESTAMPS: string[] = 
    ["0:00", "0:00", "0:00", "0:00", "0:00", "0:00", "0:00", "0:00", "0:00", "0:00", "0:00", "0:00", "0:00", "0:00", "0:00"]

export const DEFAULT_SUMMARY_SERIES: MetricsSummarySeries = {
    summary: [7, 0, 0]
}