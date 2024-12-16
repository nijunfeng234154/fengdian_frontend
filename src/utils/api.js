import axios from 'axios' // 引入 Axios 库

// 创建 Axios 实例
const instance = axios.create({
    baseURL: 'http://127.0.0.1:5000/', // 设置请求的基础 URL
    timeout: 50000, // 设置请求超时时间
    withCredentials: true
})

// 封装请求方法
export const request = (method, url, data) => {
    return instance({
        method: method, // 请求方法
        url: url, // 请求 URL
        data: data // 请求数据
    })
}

// 定义 GET 请求方法
export const getdata = (url) => {
    return request('get', url)
}

