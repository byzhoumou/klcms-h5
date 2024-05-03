<template>
    <div class="new-container">
        <NavBar
            title="每日更新"
            @click-left="returnHome"
            @click-right="jumpSearch"
        />
        <van-tabs
            v-model:active="tabActive"
            class="tabs"
            :line-height="0"
            sticky
        >
            <van-tab title="周一">
                <ListItem :active="0" v-if="tabActive == 0" />
            </van-tab>
            <van-tab title="周二">
                <ListItem :active="1" v-if="tabActive == 1" />
            </van-tab>
            <van-tab title="周三">
                <ListItem :active="2" v-if="tabActive == 2" />
            </van-tab>
            <van-tab title="周四">
                <ListItem :active="3" v-if="tabActive == 3" />
            </van-tab>
            <van-tab title="周五">
                <ListItem :active="4" v-if="tabActive == 4" />
            </van-tab>
            <van-tab title="周六">
                <ListItem :active="5" v-if="tabActive == 5" />
            </van-tab>
            <van-tab title="周日">
                <ListItem :active="6" v-if="tabActive == 6" />
            </van-tab>
        </van-tabs>
    </div>
</template>

<script setup lang="ts">
    import NavBar from '@/components/NavBar.vue'
    import ListItem from './components/ListItem.vue'
    import router from '~/src/router'

    const returnHome = () => {
        router.push('home')
    }

    const jumpSearch = () => {
        router.push('search')
    }
    defineOptions({
        name: 'NewIndex',
    })

    const tabActive = ref(0)

    onMounted(() => {
        var d = new Date()
        let day = d.getDay() - 1
        if (day == 0) day = 6
        tabActive.value = day
    })
</script>

<style lang="scss" scoped>
    .new-container {
        height: 100%;
        :deep() {
            .van-tabs--line .van-tabs__wrap {
                height: 0.55rem;
            }
            .van-tab--active {
                font-size: 20px;
            }
        }
    }
</style>
