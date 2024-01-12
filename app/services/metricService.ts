import { buildUri } from "../utils/uriBuilder"
import { URL } from "../config/config"

const getEndpoint = (id: string, path: string = ""): string => URL + "/api/v1/metrics" + path + "/" + id

export const getLatestMetrics = async (id: string, ratedVoltage: number, ratedCurrent: number, maxTemperature: number): Promise<any> => {
    try {
        const queryParams = {
            ratedVoltage,
            ratedCurrent,
            maxTemperature
        }
        const response = await fetch(buildUri(getEndpoint(id), queryParams), {
            next: {
                revalidate: 60
            }
        })
        return await response.json()
    } catch(err) {
        console.error(err)
    }
}

export const getVoltageTrend = async (id: string, period: string = "15"): Promise<any> =>  {
    try {
        const queryParams = { period }
        const response = await fetch(buildUri(getEndpoint(id, "/voltage"), queryParams), {
            next: {
                revalidate: 60
            }
        })
        return await response.json()
    } catch (err) {
        console.error(err)
    }
}

export const getCurrentTrend = async (id: string, period: string = "15"): Promise<any> =>  {
    try {
        const queryParams = { period }
        const response = await fetch(buildUri(getEndpoint(id, "/current"), queryParams), {
            next: {
                revalidate: 60
            }
        })
        return await response.json()
    } catch (err) {
        console.error(err)
    }
}

export const getTemperatureTrend = async (id: string, period: string = "15"): Promise<any> =>  {
    try {
        const queryParams = { period }
        const response = await fetch(buildUri(getEndpoint(id, "/temperature"), queryParams), {
            next: {
                revalidate: 60
            }
        })
        return await response.json()
    } catch (err) {
        console.error(err)
    }
}

export const getMetricsSummary = async (id: string, ratedVoltage: number, ratedCurrent: number, maxTemperature: number): Promise<any> => {
    try {
        const queryParams = {
            ratedVoltage,
            ratedCurrent,
            maxTemperature
        }
        const response = await fetch(buildUri(getEndpoint(id, "/summary"), queryParams), {
            next: {
                revalidate: 60
            }
        })
        return await response.json()
    } catch(err) {
        console.error(err)
    }
}

export const getAlarms = async (id: string, ratedVoltage: number, ratedCurrent: number, maxTemperature: number): Promise<any> => {
    try {
        const queryParams = {
            ratedVoltage,
            ratedCurrent,
            maxTemperature
        }
        const response = await fetch(buildUri(getEndpoint(id, "/alarms"), queryParams), {
            next: {
                revalidate: 60
            }
        })
        return await response.json()
    } catch(err) {
        console.error(err)
    }
}

export const downloadMetrics = async (id: string, period: string = "15"): Promise<any> =>  {
    try {
        const queryParams = { period }
        const response = await fetch(buildUri(getEndpoint(id, "/download"), queryParams), {
            next: {
                revalidate: 60
            }
        })
        return await response.json()
    } catch (err) {
        console.error(err)
    }
}