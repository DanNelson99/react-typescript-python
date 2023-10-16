export interface GETProps {
    requestUrl?: string | null
}

export interface FetchState {
    requestUrl?: GETProps | null
    timeStamp?: number | null
    data?: any | null
    status?: number | null
}