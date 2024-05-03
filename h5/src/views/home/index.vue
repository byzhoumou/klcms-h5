<template>
    <div class="home-container">
        <div class="head-container">
            <div class="topba-container">
                <div class="tab-box">
                    <div class="tab-box-item">推荐</div>
                    <div class="tab-box-item">发现</div>
                    <div class="tab-box-item">精选</div>
                </div>
                <div class="tool-box">
                    <div class="tool-box-item" @click="jumpSearch">
                        <img src="@/assets/image/so.png" alt="" />
                    </div>
                    <div class="tool-box-item">
                        <img src="@/assets/image/tw.png" alt="" />
                    </div>
                    <div class="tool-box-item">
                        <img src="@/assets/image/safety-no.png" alt="" />
                    </div>
                </div>
            </div>
            <div class="head-search">
                <van-search
                    placeholder="顶级漫画：TOPTOON.FUN (永久网址)"
                    @click="jumpSearch"
                />
                <div class="tool-box-item">
                    <img src="@/assets/image/safety-no.png" alt="" />
                </div>
            </div>
            <!-- 轮播图 -->
            <van-swipe
                class="my-swipe"
                :autoplay="3000"
                indicator-color="white"
            >
                <van-swipe-item>
                    <img
                        src="https://tw.toptoontw.com/pics/focus/aa058902709d0e1e118421c0704795cf.jpg"
                        alt=""
                    />
                </van-swipe-item>
                <van-swipe-item>
                    <img
                        src="https://tw.toptoontw.com/pics/focus/0606m.jpg"
                        alt=""
                    />
                </van-swipe-item>
                <van-swipe-item>
                    <img
                        src="https://tw.toptoontw.com/pics/focus/sign-2.jpg"
                        alt=""
                    />
                </van-swipe-item>
            </van-swipe>
            <div class="toolbar">
                <div class="toolbar-item">
                    <img src="@/assets/image/n19__home-icon-new.png" alt="" />
                    <span>最新番</span>
                </div>
                <div class="toolbar-item">
                    <img src="@/assets/image/n19__home-icon-hot.png" alt="" />
                    <span>TOP100</span>
                </div>
                <div class="toolbar-item">
                    <img src="@/assets/image/n19__home-icon-free.png" alt="" />
                    <span>免钱去</span>
                </div>
                <div class="toolbar-item">
                    <img
                        class="app-icon"
                        src="@/assets/image/n19__home-icon-app.png"
                        alt=""
                    />
                    <span>安装APP</span>
                </div>
            </div>
        </div>
        <div class="list-container">
            <van-notice-bar :scrollable="false">
                <van-swipe
                    vertical
                    class="notice-swipe"
                    :autoplay="2000"
                    :touchable="false"
                    :show-indicators="false"
                >
                    <van-swipe-item>
                        <img src="@/assets/image/my_icon_fb_v.png" alt="" />
                        <span class="collection">
                            顶级漫画：TOPTOON.FUN (永久网址)
                        </span>
                        <van-button class="collection-button">收藏</van-button>
                    </van-swipe-item>
                    <van-swipe-item>
                        <img src="@/assets/image/me_icon_reward1.png" alt="" />
                        <span class="receive">限时活动，每天签到赠送点券~</span>
                        <van-button class="receive-button">领取</van-button>
                    </van-swipe-item>
                </van-swipe>
            </van-notice-bar>
            <Card :limit="6" type="3-3" />
            <div class="kfimg">
                <a href="">
                    <img
                        src="https://tw.toptoontw.com/~!/zh-tw/assets/a/a2.jpg"
                        alt=""
                    />
                </a>
            </div>
            <RankingList />
        </div>
    </div>
</template>

<script setup lang="ts">
    import RankingList from '@/components/RankingList.vue'
    import Card from '@/components/RecommendCard.vue'
    import router from '~/src/router'

    defineOptions({
        name: 'HomeIndex',
    })

    const jumpSearch = () => {
        router.push('search')
    }
</script>

<style lang="scss" scoped>
    .home-container {
        width: 100%;
        // height: 100vh;
        .head-container {
            width: 100%;
            height: 3.55rem;
            display: flex;
            flex-direction: column;
            background-color: #fff;
            position: relative;

            .topba-container {
                z-index: 3;
                display: flex;
                flex-direction: row;
                width: 100%;
                height: 0.68rem;
                background-color: #fff;
                .tab-box {
                    display: flex;
                    flex-direction: row;
                    width: 1.9rem;
                    justify-content: space-between;
                    align-items: center;
                    padding-left: 0.05rem;
                    .tab-box-item {
                        display: flex;
                        justify-content: center;
                        width: 0.61rem;
                        font-size: 16px;
                    }
                }
                .tool-box {
                    flex: 1;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-end;
                    .tool-box-item {
                        margin-right: 0.09rem;
                        img {
                            width: 0.343rem;
                            height: 0.343rem;
                            background-color: rgba(0, 0, 0, 0.1);
                            border-radius: 0.8rem;
                        }
                    }
                }
            }

            .head-search {
                z-index: 1;
                top: 0;
                display: flex;
                flex-direction: row;
                width: 100%;
                height: 0.68rem;
                background-color: #f8f8f8;
                position: fixed;
                padding: 0.172rem 0.229rem;
                :deep() {
                    .van-search {
                        width: 3.56rem;
                        height: 0.34rem;
                        border-radius: 0.25rem;
                        background-color: #fff;
                        .van-search__content {
                            background-color: #fff;
                        }
                    }
                }
                .tool-box-item {
                    position: fixed;
                    top: 0.15rem;
                    left: 3.87rem;
                    img {
                        width: 0.343rem;
                        height: 0.343rem;
                        background-color: rgba(0, 0, 0, 0.1);
                        border-radius: 0.8rem;
                    }
                }
            }
            .van-swipe {
                flex: 1;
                width: 100%;
                background-color: #fff;
                position: fixed;
                top: 71px;
                left: 10px;
                width: 4.1rem;
                border-radius: 0.08rem;
                height: 2.23rem;
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 0.08rem;
                }
            }
            .toolbar {
                width: 100%;
                height: 0.938rem;
                position: fixed;
                top: 250px;
                display: flex;
                flex-direction: row;
                padding: 0 20px;
                justify-content: space-between;

                .toolbar-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    img {
                        width: 0.73rem;
                        height: 0.73rem;
                    }
                    .app-icon {
                        width: 0.73rem;
                        height: 0.73rem;
                        animation: shake 3s linear infinite;
                    }
                    @keyframes shake {
                        70%,
                        80% {
                            transform: rotate(7deg);
                        }
                        75% {
                            transform: rotate(-7deg);
                        }

                        65%,
                        85% {
                            transform: rotate(0);
                        }
                    }
                }
            }
        }
        .list-container {
            position: relative;
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            margin-top: 0.08rem;
            padding-top: 0.15rem;
            background-color: #fff;

            :deep() {
                .van-notice-bar {
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                    height: 0.56rem;
                    padding: 0;
                    align-items: center;
                    padding: 0 0.08rem;
                    background-color: #fff;

                    .notice-swipe {
                        height: 0.4rem;
                        line-height: 0.4rem;
                        display: flex;
                        .van-swipe-item {
                            width: 4.11rem;
                            height: 100%;
                            display: flex;
                            align-items: center;

                            img {
                                width: 0.25rem;
                                height: 0.25rem;
                                animation: shake 1.5s linear infinite;
                            }

                            @keyframes shake {
                                70%,
                                80% {
                                    transform: rotate(7deg);
                                }
                                75% {
                                    transform: rotate(-7deg);
                                }
                                65%,
                                85% {
                                    transform: rotate(0);
                                }
                            }

                            & > .collection {
                                color: #030303;
                                margin-left: 0.05rem;

                                flex: 1;
                                font-size: 0.16rem;
                            }
                            .receive {
                                color: #f60;
                                margin-left: 0.05rem;

                                flex: 1;
                                font-size: 0.16rem;
                            }
                            .collection-button {
                                width: 0.68rem;
                                height: 0.34rem;
                                border-radius: 0.25rem;
                                background-color: #030303;
                                color: #fff;
                                border: none;
                            }
                            & > .receive-button {
                                background-image: -webkit-linear-gradient(
                                    -40deg,
                                    #ffe153 19%,
                                    #ffd251 97%
                                );
                                width: 0.68rem;
                                height: 0.34rem;
                                border-radius: 0.25rem;
                                color: #030303;
                                border: none;
                            }
                        }
                    }
                }
            }
            .kfimg {
                width: 100%;
                padding: 0.129rem 0.085rem;
                img {
                    width: 100%;
                }
            }
        }
    }
</style>
