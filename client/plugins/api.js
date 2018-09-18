import axios from 'axios'
import qs from 'qs'
// axios 配置
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

axios.defaults.baseURL = 'http://localhost:3000'

// POST传参序列化
axios.interceptors.request.use((config) => {
    if (config.method === 'post') {
        config.data = qs.stringify(config.data)
    }
    return config
}, (error) => {
    return Promise.reject(error)
})
// 返回状态判断
axios.interceptors.response.use((res) => {
    if (res.status === 200) {
        return res
    } else {
        return Promise.reject(res)
    }
}, (error) => {
    return Promise.reject(error)
})

export function fetch(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(res => {
                resolve(res.data)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export default fetch
// export default {
//     /**
//      * 获取广告信息
//      */
//     getAds(params) {
//         return fetch('/api/ad/queryADs', params)
//     },
//     getAreas(params) {
//         return fetch('/api/area/getAll', params)
//     }
// }
