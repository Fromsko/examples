import axios from 'axios'

// 创建一个 Axios 实例
const instance = axios.create({
    // baseURL: 'http://localhost', // 可选的 baseURL
})

// 请求前拦截器
instance.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// 请求后拦截器
instance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default instance