
import axios from 'axios'

export const BASE_URL = 'https://api.open5e.com/'

export const queryParamsBuilder = <U>(queryParameters: U): string => {
    return queryParameters ?
        Object.entries(queryParameters).reduce((queryString, [key, val]) => {
            const symbol = queryString.length === 0 ? '?' : '&';
            queryString += val ? `${symbol}${key}=${val}` : '';
            return queryString;
        }, '') : '';
};

export const getMonsters = async (pageParam: number) => {
    const request = await axios.get(`${BASE_URL}monsters/${queryParamsBuilder(pageParam)}`)
    return request
}