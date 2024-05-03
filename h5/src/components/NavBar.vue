<template>
    <van-nav-bar
        class="nav-bar"
        @click-right="jumpSearch"
        @click-left="returnHome"
    >
        <template #title>
            <span v-if="title && !slots.title">{{ title }}</span>
            <slot name="title"></slot>
        </template>
        <template #left>
            <van-icon name="arrow-left" size="24" v-if="!notBlack" />
        </template>
        <template #right>
            <van-icon name="search" size="24" v-if="!notSearch" />
        </template>
    </van-nav-bar>
</template>

<script setup lang="ts">
    import router from '~/src/router'
    const jumpSearch = () => {
        router.push('search')
    }
    const returnHome = () => {
        router.push('home')
    }

    interface IProps {
        title?: string
        notBlack?: boolean
        notSearch?: boolean
    }

    defineProps<IProps>()

    const slots = useSlots()
</script>

<style lang="scss" scoped>
    .nav-bar {
        :deep() {
            .van-nav-bar__content {
                height: 0.5rem;
            }
            .van-nav-bar__title {
                font-weight: 100;
                font-size: 0.18rem;
            }
            .van-icon {
                color: #949494;
            }
        }
    }
</style>
