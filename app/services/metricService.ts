import { buildUri } from "../utils/uriBuilder"
import { URL } from "../config/config"

const getEndpoint = (id: string): string => URL + "/api/v1/metrics/" + id

export const getLatestMetrics = async (id: string, ratedVoltage: number, ratedCurrent: number, maxTemperature: number): Promise<any> => {
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
}