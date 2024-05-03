import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', {
    state: () => {
        return {
            username: '',
            password: '',
        }
    },
    actions: {
        setLoginForm(username: string, password : string) {
            this.username = username
            this.password = password
        },
        clear() {
            this.$reset()
        }
    },
    persist: true,
})
