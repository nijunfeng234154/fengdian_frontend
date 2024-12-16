import { request } from './api'

// 定义 GET 请求方法
export const getdata = (url) => {
    return request('get', url)
}
export const get = (url) => {
    return request('get', url)
        // .then(response => response.data)
        // .catch(error => {
        //     console.log(error)
        //     throw error
        // })
}



// 定义 POST 请求方法
export const post = (url, data) => {
    return request('post', url, data)
}
export function normalizeData(data) {
    const min = Math.min(...data);
    const max = Math.max(...data);
    return data.map(value => (value - min) / (max - min));
}
