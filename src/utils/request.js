import axios from 'axios'
import { Loading } from 'element-ui'
const request = axios.create({
    baseURL: 'https://cnodejs.org/api/v1',
    timeout: 5000 // 请求超时时间限制
})

let loading
function startLoadingAnimation() {
    loading = Loading.service({
        text: 'Loading...',
        background: 'rgba(0,0,0,0.1)',
    })
}

function stopLoadingAnimation() {
    loading.close()
}

// 请求拦截器
request.interceptors.request.use(
    config => {
        startLoadingAnimation()
        return config
    }
)

request.interceptors.response.use(
    config => {
        stopLoadingAnimation()
        return config
    }
)

export default request