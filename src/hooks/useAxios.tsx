import axios, { AxiosError } from 'axios'

export default function useAxios() {
    
    const { REACT_APP_BE_URL: baseURL } = process.env
    const instance = axios.create()

    const axiosRequest = async (url: string, method: any, data = {}) => {
        try {
            return await instance({ baseURL, url, method, data, withCredentials: true })
        } catch (error: any) {
            // const err = error as AxiosError
            console.error(error)
            return error.toJSON()
        }
    }

    instance.interceptors.response.use(
        response => response,
        async error => {
            const failedRequest = error.config
            if (error.response.status === 401 && failedRequest.url !== '/users/refreshToken') {
                await axiosRequest('/users/refreshToken', 'POST')
                const retryRequest = instance(failedRequest)
                return retryRequest
            } else {
                return Promise.reject(error)
            }

        })

    return { axiosRequest }

}