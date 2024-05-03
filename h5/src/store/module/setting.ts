import { defineStore } from 'pinia'
import router from '~/src/router'

export const useSettingStore = defineStore('setting', {
    state: () => {
        return {
            autoPay: true,
            clearAd: false,
            bottomActive: 0,
            bottomItems: [
                {
                    name: 'new',
                    label: '新番',
                },
                {
                    name: 'category',
                    label: '分类',
                },
                {
                    name: 'home',
                    label: '首页',
                },
                {
                    name: 'fine',
                    label: '精选',
                },
                {
                    name: 'my',
                    label: '我的',
                },
            ]
        }
    },
    actions: {
        async switchAutoPay() {
            this.autoPay = !this.autoPay
        },
        async switchClearAd() {
            this.clearAd = !this.clearAd
        },
        setBottomActive(index: number) {
            this.bottomActive = index
        },
        switchBottom() {
            router.push(this.bottomItems[this.bottomActive].name)
        }
    },
    persist: true,
})
