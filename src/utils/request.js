import axios from 'axios'
const request = axios.create({
    baseURL: 'https://cnodejs.org/api/v1',
    timeout: 5000 // 请求超时时间限制
})


export default request