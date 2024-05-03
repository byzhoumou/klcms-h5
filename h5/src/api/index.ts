import type {
    AxiosError,
    AxiosInstance,
    InternalAxiosRequestConfig,
    AxiosResponse,
} from 'axios'
import axios from 'axios'
import router from '@/router'
import { Api } from './api'

import { showNotify } from 'vant'

import { useUserStore } from '@/store/module/user'

const service: AxiosInstance = axios.create({
    timeout: 10 * 1000,
})

// 请求拦截
service.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const userStore = useUserStore()
        //  token插入
        config!.headers!['Authorization'] = 'Bearer ' + userStore.token
        return config
    },
    (err: AxiosError) => {
        console.log(err)
    }
)

// 响应拦截
service.interceptors.response.use(
    (response: AxiosResponse) => {
        return respHandle(response)
    },
    (err: AxiosError) => {
        const { response } = err
        if (response === undefined) {
            return {}
        } else return respHandle(response)
    }
)

const respHandle = (response: AxiosResponse) => {
    // 若data.code存在，覆盖默认code
    let code =
        response.data && response.data['statusCode']
            ? response.data['statusCode']
            : response.status

    //   const userStore = useUserStore()
    // 若code属于操作正常code，则status修改为200
    // 状态码处理
    switch (code) {
        case 200:
        case 201:
        case 204:
        case 0:
            return response.data
        case 401:
            const userStore = useUserStore()
            // 退出登录
            userStore.logout()
            // to login page
            router.replace({ name: 'HomeIndex' }).then(() => {})
            break
    }

    // 若data.msg存在，覆盖默认提醒消息
    const errMsg = `${
        response.data && response.data['message']
            ? response.data['message']
            : response.statusText
    }`

    // TODO 错误提示
    console.log(errMsg)
    showNotify({ message: errMsg })

    return Promise.reject(response.data)
}

const $ = new Api()
$.instance = service
export const api = $.api
