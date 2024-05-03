<template>
    <div class="my-container">
        <UserCard />

        <VipCard />

        <div class="user-money-panel">
            <div class="Dot-roll">
                <p>0</p>
                <span>我的点卷</span>
            </div>
            <div class="line"></div>
            <div class="Dot-roll">
                <p>0</p>
                <span>我的点卷</span>
            </div>
        </div>
        <div class="user-menu-sign">
            <div class="Sign-in-box">
                <div class="Sign-in-item">
                    <p>1天</p>
                    <img src="@/assets/image/record_icon_reward2.png" alt="" />
                    <span>+3</span>
                </div>
                <div class="Sign-in-item">2</div>
                <div class="Sign-in-item">3</div>
                <div class="Sign-in-item">4</div>
                <div class="Sign-in-item">5</div>
                <div class="Sign-in-item">6</div>
                <div class="Sign-in-item">7</div>
            </div>
        </div>
        <!-- <VipLogin /> -->
        <div class="item-text-box">
            <div class="link-item">
                <img src="@/assets/image/my_icon_fb.png" alt="" />
                <span>顶级漫画：TOPTOON.FUN (永久网址)</span>
                <p>复制</p>
            </div>
            <div class="link-item">
                <img src="@/assets/image/my_icon_cell_down.png" alt="" />
                <span>安裝应用程序 V1.3</span>
                <van-icon name="arrow" />
            </div>
        </div>
        <div class="item-text-box">
            <div class="link-item">
                <img src="@/assets/image/my_icon_cell_help.png" alt="" />
                <span>帮助中心</span>
                <van-icon name="arrow" />
            </div>
            <div class="link-item">
                <img src="@/assets/image/my_icon_cell_fava.png" alt="" />
                <span>使用协议</span>
                <van-icon name="arrow" />
            </div>
        </div>
        <div class="info-save">
            <van-button type="primary" @click="logout">
                退出 / 切换账户
            </van-button>
            <!-- <a href="">注销账户</a> -->
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useUserStore } from '~/src/store/module/user'
    import UserCard from './components/UserCard.vue'
    import VipCard from './components/VipCard.vue'
    import router from '~/src/router'
    // import VipLogin from './components/VipLogin.vue'

    defineOptions({
        name: 'MyIndex',
    })

    const useUser = useUserStore()

    // 退出登录
    const logout = () => {
        useUser.logout()
        showNotify({ type: 'success', message: '退出成功' })
        router.push('login')
    }
</script>

<style lang="scss" scoped>
    .my-container {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;

        .user-money-panel {
            width: 100%;
            height: 0.75rem;
            background-color: #fff;
            padding-bottom: 0.215rem;
            display: flex;
            flex-direction: row;
            // justify-content: space-between;

            .Dot-roll {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 2.145rem;
                height: 0.58rem;
                p {
                    color: #1a1a1a;
                    font-weight: 700;
                    font-size: 0.3rem;
                }
                span {
                    color: #999;
                    font-size: 0.14rem;
                }
            }
            .line {
                margin-top: 0.1rem;
                width: 1px;
                height: 0.315rem;
                background-color: #e3e3e3;
            }
        }
        .user-menu-sign {
            display: flex;
            justify-content: center;
            margin-bottom: 0.11rem;
            width: 100%;
            height: 1.23rem;
            background-color: #fff;
            .Sign-in-box {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                width: 4.06rem;
                height: 1.01rem;
                border: 1px solid #e3e3e3;
                border-radius: 0.129rem;
                padding: 0 12px;

                background: #fff;
                .Sign-in-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 0.43rem;
                    height: 0.64rem;
                    background: #f6f8f9;
                    border-radius: 0.043rem;
                    justify-content: space-between;
                    padding: 0.05rem;
                    p {
                        color: #999;
                        font-size: 0.12rem;
                    }
                    img {
                        width: 0.12rem;
                        height: 0.12rem;
                    }
                    span {
                        color: #999;
                        font-size: 0.12rem;
                    }
                }
            }
        }

        .item-text-box {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 1.24rem;
            background-color: #fff;
            margin-top: 0.11rem;

            .link-item {
                display: flex;
                flex-direction: row;
                align-items: center;
                padding: 0.172rem 0.114rem;
                img {
                    width: 0.275rem;
                    height: 0.275rem;
                }
                span {
                    margin-left: 0.1rem;

                    flex: 1;
                    font-size: 0.16rem;
                }
                p {
                    font-size: 0.14rem;
                    color: #999;
                    margin-right: 0.08rem;
                }
                .van-icon {
                    font-size: 0.2rem;
                    color: #999;
                }
            }
        }
        .info-save {
            margin: 0 auto;
            background-color: #fff;
            width: 100%;
            padding: 0.2rem 0.4rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            .van-button {
                width: 100%;
                height: 0.54rem;
                background: #f0ad4e;
                border: #f0ad4e;
                font-size: 0.18rem;
                border-radius: 1rem;
                margin-bottom: 0.3rem;
            }
            a {
                font-size: 0.17rem;
                color: red;
                margin-bottom: 0.5rem;
            }
        }
    }
</style>
