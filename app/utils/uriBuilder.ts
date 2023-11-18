// URI builder function
export const buildUri = (baseUri: string, params: Record<string, any>): string => {
    const queryString = Object.keys(params)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        .join('&');

    return `${baseUri}?${queryString}`;
}