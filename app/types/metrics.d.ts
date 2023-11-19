export type Metrics = {
    name: string;
    data: number[];
}

export type LatestMetricsSummary ={
    unitID: string;
    timestamp: string;
    line1Voltage: MetricSummary;
    line2Voltage: MetricSummary;
    line3Voltage: MetricSummary;
    line1Current: MetricSummary;
    line2Current: MetricSummary;
    line3Current: MetricSummary;
    temperature: MetricSummary;
}

export type MetricSummary = {
    status: string;
    value: number;
}

export type MetricsSummarySeries = {
    summary: numnber[];
}