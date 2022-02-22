import axios, { AxiosError } from 'axios'

export default function useAxios() {
    
    const { REACT_APP_BE_URL: baseURL } = process.env

    const axiosRequest = async (url: string, method: any, data = {}) => {
        try {
            return await axios({ baseURL, url, method, data, withCredentials: true })
        } catch (error: any) {
            // const err = error as AxiosError
            console.error(error)
            return error.toJSON()
        }
    }

    return { axiosRequest }

}