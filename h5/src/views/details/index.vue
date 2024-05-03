<template>
    <div class="reading-container">
        <div class="head-container">
            <div class="head-box">
                <div class="head-arrow"></div>
                <div class="head-share">
                    <div class="share-img"></div>
                    <div class="share-text">分享</div>
                </div>
            </div>
        </div>
        <div class="check-infor">
            <div class="vip-discount">
                <img src="@/assets/image/my_icon_header_vip.png" alt="" />
                <div class="vip-text">加入VIP，全集免点券阅读~</div>
                <van-button>年卡折算0.8元/天</van-button>
            </div>
            <div class="null"></div>
            <div class="catalogue">
                <div class="catalogue-item">作品咨讯</div>
                <div class="catalogue-item">角色介绍</div>
                <div class="catalogue-item">回次目录</div>
            </div>
        </div>
        <div class="introduce-container">
            <div class="introduce-box">
                <div class="introduce-name">漫画名称：同居捉迷藏</div>
                <div class="introduce-text">
                    一心嚮往自由生活而搬出来住的江柏正，家里居然有个连他都不知道的同居人?!。如果您觉得同居捉迷藏还不错，请将顶级漫画分享给您的好友，我们将实时為您更新同居捉迷藏最新话!
                </div>
            </div>
            <div class="updated">
                已更新到：第 30 话
                <span>|</span>
                周六更，部分為双周更
                <span>|</span>
                已完结
            </div>
            <div class="theme">
                <div class="theme-text">题材：</div>
                <div class="theme-text-box">
                    <div class="theme-item">林巨星</div>
                    <div class="theme-item">正妹</div>
                    <div class="theme-item">林巨星</div>
                </div>
            </div>
            <div class="author">作者：林巨星</div>
            <div class="ranking-box">
                <div class="ranking-item">
                    <div class="record-item">58.72万</div>
                    <div class="popularity">
                        人气
                        <img
                            src="@/assets/image/icon_detail_wenhao.png"
                            alt=""
                        />
                    </div>
                </div>
                <span></span>
                <div class="ranking-item">
                    <div class="record-item">58.72万</div>
                    <div class="ranking">上榜</div>
                </div>
                <span></span>
                <div class="ranking-item">
                    <div class="record-item">58.72万</div>
                    <div class="bookcase">
                        <img src="@/assets/image/num_add.png" alt="" />
                        书柜
                    </div>
                </div>
            </div>
        </div>
        <div class="kfimg">
            <a href="">
                <img
                    src="https://tw.toptoontw.com/~!/zh-tw/assets/a/a2.jpg"
                    alt=""
                />
            </a>
        </div>
        <div class="online-reading">
            <div class="reading-box" @click="ContinueReading">在线阅读</div>
            <div class="chapter-box">
                <span>第一话</span>
                <p>街头干架王</p>
            </div>
            <div class="home-box">
                <img
                    src="@/assets/image/n19__home_tabbar_icon_home_n.png"
                    alt=""
                />
                <span>首页</span>
            </div>
        </div>
        <div class="disclaimer-box">
            <div class="inform">免责宣告</div>
            <div class="disclaimer-text">
                本书数字版权由原作者“李乙,经文旗”提供，授权顶级漫画使用、展示、释出、若包括不良资讯，请及时告知客服！
            </div>
        </div>
        <div class="Ceiling"></div>
    </div>
</template>

<script setup lang="ts">
    import router from '@/router'
    // 返回我的
    const ContinueReading = () => {
        router.push('reading')
    }
</script>

<style lang="scss" scoped>
    .reading-container {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-bottom: 0.6rem;
        .online-reading {
            z-index: 99;
            position: fixed;
            bottom: 0;
            width: 100%;
            height: 0.6rem;
            display: flex;
            flex-direction: row;
            border-top: 1px solid #f0f2f5;
            .reading-box {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 1.23rem;
                font-size: 0.18rem;
                background-image: -webkit-linear-gradient(
                    -40deg,
                    #ffe153 19%,
                    #ffd251 97%
                );
            }
            .chapter-box {
                flex: 1;
                background-color: #fff;

                display: flex;
                align-items: center;
                gap: 0.06rem;
                span {
                    display: flex;
                    justify-content: center;
                    width: 0.76rem;
                    font-size: 0.16rem;
                }
                p {
                    color: #999;
                }
            }
            .home-box {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                border-left: 1px solid #eee;
                background-color: #fff;

                width: 0.66rem;
                img {
                    width: 0.25rem;
                    height: 0.25rem;
                }
                span {
                    font-size: 0.12rem;
                    color: #999;
                }
            }
        }
        .Ceiling {
            position: fixed;
            width: 0.43rem;
            height: 0.43rem;
            bottom: 1rem;
            right: 0.1rem;
            background-image: url('@/assets/image/to-top.png');
            background-repeat: no-repeat; /* 背景不重复 */
            background-position: 100%; /* 背景位置 */
            background-size: 43px; /* 背景尺寸 */
        }
        .head-container {
            width: 100%;
            height: 2.36rem;
            background-image: url(https://tw.toptoontw.com/pics/cover/tm212/focus.jpg);
            background-size: cover;
            .head-box {
                display: flex;
                flex-direction: row;
                justify-content: space-between; /* 将盒子推到容器的两端 */
                align-items: flex-end; /* 将盒子对齐到底部 */
                width: 100%;
                height: 0.41rem;
                .head-arrow {
                    margin-left: 0.129rem; /* 左边距 */
                    border-radius: 0.35rem; /* 边框圆角 */
                    width: 0.275rem; /* 宽度 */
                    background-color: rgba(0, 0, 0, 0.5); /* 背景颜色 */
                    height: 0.275rem; /* 高度 */
                    background-image: url('@/assets/image/detail_icon_back.png'); /* 背景图片 */
                    background-position: 50%; /* 背景位置 */
                    background-size: 20px; /* 背景尺寸 */
                    text-indent: -999px; /* 文本缩进 */
                    background-repeat: no-repeat; /* 背景不重复 */
                }
                .head-share {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    margin-right: 0.086rem;
                    gap: 0.05rem;
                    width: 0.668rem;
                    height: 0.275rem;
                    border-radius: 0.2rem;
                    background-image: -webkit-linear-gradient(
                        -40deg,
                        #ffe153 19%,
                        #ffd251 97%
                    );

                    .share-img {
                        background-image: url(https://tw.toptoontw.com/~!/zh-tw/assets/img/icon_bottomIndex_gift_v7.png);
                        background-size: cover;
                        width: 0.172rem;
                        height: 0.172rem;
                    }
                    .share-text {
                        font-size: 0.16rem;
                    }
                }
            }
        }
        .check-infor {
            display: flex;
            flex-direction: column;
            position: relative;
            width: 100%;
            height: 0.827rem;
            border-bottom: 1px solid #f0f2f5;
            background-color: #fff;

            .vip-discount {
                padding: 0 0.1rem;
                border-radius: 0.18rem;
                position: absolute;
                top: -25px; /* 绝对定位 */
                right: 0.09rem; /* 绝对定位 */
                width: 4.12rem;
                height: 0.55rem;
                background-image: -webkit-linear-gradient(
                    -40deg,
                    #f7edd0 19%,
                    #e0b86f 97%
                );
                display: flex;
                flex-direction: row;
                align-items: center;
                img {
                    margin: 0 0.05rem;
                    width: 0.3rem;
                    height: 0.3rem;
                }
                .vip-text {
                    flex: 1;
                    font-size: 0.16rem;
                    color: #9a7551;
                }
                .van-button {
                    width: 1.29rem;
                    height: 0.349rem;
                    font-size: 0.12rem;
                    color: #f60;
                    border-radius: 0.25rem;
                    animation: breath2 1s linear 0.9s infinite alternate;
                }
                @keyframes breath2 {
                    0% {
                        transform: scale(0.9);
                    }

                    100% {
                        transform: scale(1);
                    }
                }
            }
            .null {
                width: 100%;
                height: 0.3rem;
            }
            .catalogue {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 0.527rem;
                .catalogue-item {
                    flex: 3;
                    font-size: 0.16rem;
                    padding-left: 0.15rem;
                    color: #909090;
                }
            }
        }
        .introduce-container {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 3.68rem;
            background-color: #fff;

            .introduce-box {
                width: 100%;
                padding: 0.137rem 0.16rem;
                .introduce-name {
                    font-size: 0.21rem;
                    font-weight: 700;
                    margin-bottom: 0.08rem;
                }
                .introduce-text {
                    font-size: 0.16rem;
                    line-height: 0.28rem;
                    color: #333;
                }
            }
        }
        .updated {
            width: 100%;
            height: 0.371rem;
            padding: 0 0.16rem 0.172rem 0.16rem;
            color: #333;
            font-size: 0.14rem;
            span {
                color: #ddd;
            }
        }
        .theme {
            display: flex;
            flex-direction: row;

            width: 100%;
            height: 0.258rem;
            padding: 0 0.043rem 0.1rem 0.17rem;
            .theme-text {
                display: flex;
                flex-direction: row;
                justify-content: center;
                height: 0.19rem;
                font-size: 0.12rem;
                font-weight: 700;
            }
            .theme-text-box {
                flex: 1;
                display: flex;
                flex-direction: row;

                gap: 0.05rem;
                .theme-item {
                    height: 0.22rem;
                    border: 1px solid #333;
                    border-radius: 0.2rem;
                    padding: 0 0.06rem;
                    line-height: 0.22rem;
                    font-size: 0.12rem;
                }
            }
        }
        .author {
            width: 100%;
            height: 0.29rem;
            padding: 0 0.16rem 0.1rem 0.16rem;
        }
        .ranking-box {
            width: 100%;
            height: 0.92rem;
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0.129rem 0 0.08rem 0;
            .ranking-item {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 0.1rem;
                width: 142rem;
                .record-item {
                    font-weight: 100;
                    color: #f60;
                    font-size: 0.18rem;
                }
            }
            .popularity {
                font-size: 0.16rem;
                img {
                    margin-left: 0.034rem;
                    width: 0.115rem;
                    height: 0.115rem;
                }
            }
            .ranking {
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #f3f3f3;
                width: 0.748rem;
                height: 0.27rem;
                font-size: 0.16rem;
                border-radius: 0.25rem;
            }
            .bookcase {
                font-size: 0.16rem;
                img {
                    width: 0.129rem;
                    height: 0.129rem;
                }
            }
            span {
                width: 0.1rem;
                height: 0.25rem;
                background-color: #dbd6d6;
            }
        }
        .kfimg {
            width: 100%;
            padding: 0.129rem 0.085rem;
            height: 1.08rem;
            img {
                width: 100%;
                // height: 1.08rem;
            }
        }
        .disclaimer-box {
            margin-top: 0.1rem;
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 200px;
            background-color: #fff;
            .inform {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 0.18rem;
                font-weight: 700;
                width: 100%;
                height: 0.596rem;
            }
            .disclaimer-text {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 0.573rem;
                padding: 0 0.137rem 0.137rem 0.137rem;
                font-size: 0.13rem;
                line-height: 0.2rem;
                color: #909090;
            }
        }
    }
</style>
