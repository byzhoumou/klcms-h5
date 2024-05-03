<template>
    <div class="layout">
        <router-view />
        <div style="height: 0.6rem"></div>
        <van-tabbar v-model="useSetting.bottomActive" class="bottom-nav">
            <van-tabbar-item
                v-for="i in useSetting.bottomItems"
                @click="bottomItemClick"
            >
                <span class="bottom-nav-label">{{ i.label }}</span>
                <template #icon="props">
                    <img
                        class="bottom-nav-icon"
                        :src="
                            props.active
                                ? iconUrl(i.name + '_select.png')
                                : iconUrl(i.name + '.png')
                        "
                    />
                </template>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script setup lang="ts">
    import { iconUrl } from '@/utils'
    import { useSettingStore } from '../store/module/setting'

    const useSetting = useSettingStore()

    const bottomItemClick = () => {
        useSetting.switchBottom()
    }
</script>

<style lang="scss" scoped>
    .layout {
        .bottom-nav {
            position: fixed;
            height: 0.6rem;
            &-label {
                color: #949494;
            }
            &-icon {
                width: 0.28rem;
                height: 0.28rem;
            }
        }

        // & > div:first-child {
        //     height: calc(100vh -);
        //     margin-bottom: 0.6rem;
        //     overflow: hidden;
        // }
    }
</style>
