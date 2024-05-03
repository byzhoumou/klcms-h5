<template>
    <div class="user-vip-panel">
        <div class="head">
            <div class="vip-img">
                {{
                    useUser.username == '' ? '访客' : '开通VIP会员，享专属特权'
                }}
            </div>
            <button class="vip-title">年费特惠中</button>
        </div>
        <div class="menu-box">
            <div class="item">
                <div class="item-img"></div>
                <span>书架</span>
            </div>
            <div class="item">
                <div class="item-img"></div>
                <span>书架</span>
            </div>
            <div class="item">
                <div class="item-img"></div>
                <span>书架</span>
            </div>
            <div class="item">
                <div class="item-img"></div>
                <span>书架</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useUserStore } from '~/src/store/module/user'

    const useUser = useUserStore()
</script>

<style lang="scss" scoped>
    .user-vip-panel {
        margin-top: -1px;
        background-color: #bcbcbc;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 1.72rem;
        background-size: cover;
        background-image: url('@/assets/image/my_panel_bg.png');
        .head {
            display: flex;
            flex-direction: row;
            padding: 0.114rem 0.34rem;
            align-items: center;
            justify-content: space-between;
            .vip-img {
                overflow: hidden;
                background-image: url('@/assets/image/n19__home_tabbar_icon_vip_n.png');
                background-size: 20px;
                background-repeat: no-repeat;
                color: #fff;
                text-indent: 25px;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 12px;
            }
            .vip-title {
                // width: 0.96rem;
                // margin-left: auto;
                padding: 0 0.08rem;
                height: 0.349rem;
                border: none;
                border-radius: 0.8rem;
                background-image: -webkit-linear-gradient(
                    -40deg,
                    #ffd742 19%,
                    #ffa62b 97%
                );
                color: #333;
                font-weight: 700;
                font-size: 0.14rem;
                line-height: 0.14rem;
                animation: breath 1s linear 0.9s infinite alternate;
            }
            @keyframes breath {
                70%,
                80% {
                    transform: scale(0.95);
                }

                75% {
                    transform: scale(1);
                }
                65%,
                85% {
                    transform: scale(1.05);
                }
            }
        }
        .menu-box {
            display: flex;
            padding: 0 0.34rem;
            justify-content: space-between;
            .item {
                display: flex;
                flex-direction: column;
                align-items: center;
                // justify-content: space-between;

                width: 0.473rem;
                height: 0.743rem;

                .item-img {
                    margin-top: 0.043rem;
                    width: 0.473rem;
                    height: 0.473rem;
                    background-size: cover;
                    background-image: url('@/assets/image/user_ico1.png');
                }
                span {
                    margin-top: 0.057rem;
                    color: #d3d3dd;
                    font-size: 0.14rem;
                }
            }
        }
    }
</style>
