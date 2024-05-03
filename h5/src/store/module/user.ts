import { defineStore } from 'pinia'
import { api } from '@/api'
import { LoginUserDto, RegisterUserDto } from '@/api/api'

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            id: 0,
            username: '',
            sex: '',
            avatar: '',
            isVip: false,
            email: '',
            phone: '',
            token: '',
        }
    },
    actions: {
        // 获取获取用户信息
        async getUserInfo() {
            await api.webUserControllerGetUserInfo().then((res: any) => {
                let data = res.data
                this.avatar = data.avatar
                this.username = data.username
                this.sex = data.sex
                this.isVip = data.isVip
                this.email = data.email
                this.phone = data.phone
                this.id = data.id
            })
        },
        async register(from: RegisterUserDto) {
            await api.webUserControllerReg(from).then((res: any) => {
                this.token = res.data.token
            })
        },
        // 登录接口函数
        async login(from: LoginUserDto) {
            await api.webUserControllerLogin(from).then((res: any) => {
                this.token = res.data.token
            })
        },
        logout() {
            this.$reset()
        },
    },
    persist: true,
})
