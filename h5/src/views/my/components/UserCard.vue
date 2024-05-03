<template>
    <div class="user-topbar" v-if="useUser.username == ''">
        <div class="user-topbar-box" @click="toLoginPage">
            <img src="@/assets/image/my_head_not.png" alt="" />
            <div class="topbar-title">登录会员更多精彩</div>
        </div>
    </div>
    <div class="user-topbar" v-else @click="toUserInfo">
        <div class="user-topbar-box">
            <img src="@/assets/image/my_head_not.png" alt="" />
            <div class="topbar-title">
                {{ useUser.username }}
                <span>点击查看或者编辑个人资料</span>
            </div>
            <div class="topbar-level">普通会员</div>
        </div>
    </div>
</template>

<script setup ang="ts">
    import router from '~/src/router'
    import { useUserStore } from '~/src/store/module/user'

    const useUser = useUserStore()

    const toLoginPage = () => {
        router.push('/login')
    }

    const toUserInfo = () => {
        router.push('info')
        console.log('点击跳转用户信息页面')
    }
</script>

<style lang="scss" scoped>
    .user-topbar {
        width: 100%;
        height: 1.275rem;
        // background-color: #fff;

        background-image: url(@/assets/image/user_topbar_header.png);
        background-position: top;
        background-size: cover;

        padding: 0.34rem 0 0.129rem 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .user-topbar-box {
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 0.689rem;
            padding: 0 0.229rem;
            img {
                border-radius: 1.44rem;
                border: 2px solid #fff;
                width: 0.659rem;
                height: 0.659rem;
            }
            .topbar-title {
                flex: 1;
                margin: 0.08rem;
                font-size: 0.26rem;

                & > span {
                    display: block;
                    font-size: 0.14rem;
                    color: #333;
                }
            }

            .topbar-level {
                // width: 0.8rem;
                // padding: 0.05rem;
                font-size: 0.12rem;
                height: 0.24rem;
                line-height: 0.24rem;
                text-align: center;
                padding: 0 0.1rem;
                background-color: rgba(0, 0, 0, 0.2);
                border-radius: 1rem;
                color: #fff;
            }
        }
    }
</style>
