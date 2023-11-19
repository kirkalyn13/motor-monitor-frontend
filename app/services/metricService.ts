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

export const getVoltageTrend = async (id: string): Promise<any> =>  {
    try {
        const response = await fetch(buildUri(getEndpoint(id, "/voltage")), {
            next: {
                revalidate: 60
            }
        })
        return await response.json()
    } catch (err) {
        console.error(err)
    }
}

export const getCurrentTrend = async (id: string): Promise<any> =>  {
    try {
        const response = await fetch(buildUri(getEndpoint(id, "/current")), {
            next: {
                revalidate: 60
            }
        })
        return await response.json()
    } catch (err) {
        console.error(err)
    }
}

export const getTemperatureTrend = async (id: string): Promise<any> =>  {
    try {
        const response = await fetch(buildUri(getEndpoint(id, "/temperature")), {
            next: {
                revalidate: 60
            }
        })
        return await response.json()
    } catch (err) {
        console.error(err)
    }
}