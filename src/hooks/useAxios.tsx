import axios, { AxiosError } from 'axios'

export default function useAxios() {
    
    const { REACT_APP_BE_URL: baseURL } = process.env
    // const instance = axios.create()

    const axiosRequest = async (url: string, method: any, data = {}) => {
        try {
            return await axios({ baseURL, url, method, data, withCredentials: true })
        } catch (error: any) {
            // const err = error as AxiosError
            console.error(error)
            return error.toJSON()
        }
    }

    axios.interceptors.response.use(
        response => response,
        async error => {
            const failedRequest = error.config
            if (error.response.status === 401 && failedRequest.url !== '/users/refreshToken' && failedRequest.url !== '/users/login') {
                await axiosRequest('/users/refreshToken', 'POST')
                const retryRequest = axios(failedRequest)
                return retryRequest
            } else {
                return Promise.reject(error)
            }

        })

    return { axiosRequest }

}