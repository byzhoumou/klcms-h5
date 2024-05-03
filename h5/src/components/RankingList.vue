<template>
    <div class="ranking-container">
        <div class="head-ranking">
            <div class="ranking-text">必看热门漫画排行榜</div>
            <div class="ranking-box">
                <div
                    class="ranking-box-item"
                    v-for="(item, index) in items"
                    :key="index"
                    @click="toggleMenu(index)"
                    :class="{ active: optionActive === index }"
                >
                    {{ item.name }}
                </div>

                <div class="more-box">
                    更多
                    <div class="imgs"></div>
                </div>
            </div>
        </div>

        <van-swipe :loop="false" :width="385">
            <van-swipe-item>
                <div class="card-list-item">
                    <img
                        src="https://tw.toptoontw.com/pics/cover/tm992448/img.jpg"
                        alt=""
                    />
                    <div class="list-item-text">
                        <div class="item-text-title">秘密之洞</div>
                        <div class="item-text-describe">人气值: 7.80万</div>
                        <div class="item-text-describe">推荐值： 13</div>
                        <div class="item-text-describe">言情 校职 完结</div>
                    </div>
                    <div class="ranking">
                        <span>1</span>
                    </div>
                </div>
                <div class="card-list-item">
                    <img
                        src="https://tw.toptoontw.com/pics/cover/tm992448/img.jpg"
                        alt=""
                    />
                    <div class="list-item-text">
                        <div class="item-text-title">秘密之洞</div>
                        <div class="item-text-describe">人气值: 7.80万</div>
                        <div class="item-text-describe">推荐值： 13</div>
                        <div class="item-text-describe">言情 校职 完结</div>
                    </div>
                    <div class="ranking">
                        <span>1</span>
                    </div>
                </div>
                <div class="card-list-item">
                    <img
                        src="https://tw.toptoontw.com/pics/cover/tm992448/img.jpg"
                        alt=""
                    />
                    <div class="list-item-text">
                        <div class="item-text-title">秘密之洞</div>
                        <div class="item-text-describe">人气值: 7.80万</div>
                        <div class="item-text-describe">推荐值： 13</div>
                        <div class="item-text-describe">言情 校职 完结</div>
                    </div>
                    <div class="ranking">
                        <span>1</span>
                    </div>
                </div>
            </van-swipe-item>
            <van-swipe-item>
                <div class="card-list-item">
                    <img
                        src="https://tw.toptoontw.com/pics/cover/tm992448/img.jpg"
                        alt=""
                    />
                    <div class="list-item-text">
                        <div class="item-text-title">秘密之洞</div>
                        <div class="item-text-describe">人气值: 7.80万</div>
                        <div class="item-text-describe">推荐值： 13</div>
                        <div class="item-text-describe">言情 校职 完结</div>
                    </div>
                    <div class="ranking">
                        <span>1</span>
                    </div>
                </div>
                <div class="card-list-item">
                    <img
                        src="https://tw.toptoontw.com/pics/cover/tm992448/img.jpg"
                        alt=""
                    />
                    <div class="list-item-text">
                        <div class="item-text-title">秘密之洞</div>
                        <div class="item-text-describe">人气值: 7.80万</div>
                        <div class="item-text-describe">推荐值： 13</div>
                        <div class="item-text-describe">言情 校职 完结</div>
                    </div>
                    <div class="ranking">
                        <span>1</span>
                    </div>
                </div>
                <div class="card-list-item">
                    <img
                        src="https://tw.toptoontw.com/pics/cover/tm992448/img.jpg"
                        alt=""
                    />
                    <div class="list-item-text">
                        <div class="item-text-title">秘密之洞</div>
                        <div class="item-text-describe">人气值: 7.80万</div>
                        <div class="item-text-describe">推荐值： 13</div>
                        <div class="item-text-describe">言情 校职 完结</div>
                    </div>
                    <div class="ranking">
                        <span>1</span>
                    </div>
                </div>
            </van-swipe-item>
            <van-swipe-item>
                <div class="card-list-item">
                    <img
                        src="https://tw.toptoontw.com/pics/cover/tm992448/img.jpg"
                        alt=""
                    />
                    <div class="list-item-text">
                        <div class="item-text-title">秘密之洞</div>
                        <div class="item-text-describe">人气值: 7.80万</div>
                        <div class="item-text-describe">推荐值： 13</div>
                        <div class="item-text-describe">言情 校职 完结</div>
                    </div>
                    <div class="ranking">
                        <span>1</span>
                    </div>
                </div>
                <div class="card-list-item">
                    <img
                        src="https://tw.toptoontw.com/pics/cover/tm992448/img.jpg"
                        alt=""
                    />
                    <div class="list-item-text">
                        <div class="item-text-title">秘密之洞</div>
                        <div class="item-text-describe">人气值: 7.80万</div>
                        <div class="item-text-describe">推荐值： 13</div>
                        <div class="item-text-describe">言情 校职 完结</div>
                    </div>
                    <div class="ranking">
                        <span>1</span>
                    </div>
                </div>
                <div class="card-list-item">
                    <img
                        src="https://tw.toptoontw.com/pics/cover/tm992448/img.jpg"
                        alt=""
                    />
                    <div class="list-item-text">
                        <div class="item-text-title">秘密之洞</div>
                        <div class="item-text-describe">人气值: 7.80万</div>
                        <div class="item-text-describe">推荐值： 13</div>
                        <div class="item-text-describe">言情 校职 完结</div>
                    </div>
                    <div class="ranking">
                        <span>1</span>
                    </div>
                </div>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script lang="ts" setup>
    defineOptions({
        name: '',
    })

    const items = ref([
        { name: '畅销榜' },
        { name: '新番榜' },
        { name: '飙升榜' },
        { name: '追更榜' },
    ])

    const optionActive = ref(0)

    const toggleMenu = (index: number) => {
        // 切换选中项目的 index
        optionActive.value = index
    }
    onMounted(() => {
        console.log(items.value)
    })
</script>

<style lang="scss" scoped>
    .ranking-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 0 0.114rem;

        .head-ranking {
            width: 100%;
            height: 0.91rem;
            background-color: #faf2e6;
            background-repeat: no-repeat;
            border-radius: 0.12rem 0.12rem 0 0;
            background-position: -40px -10px;
            background-image: url(https://tw.toptoontw.com/~!/zh-tw/assets/img/vip_icon_huanguan.png);
            display: flex;
            flex-direction: column;
            .ranking-text {
                display: flex;
                justify-content: center;
                padding-top: 0.11rem;
                width: 100%;
                font-size: 0.2rem;
            }
            .ranking-box {
                position: relative; //相对定位

                display: flex;
                flex-direction: row;
                align-items: center;
                padding: 0 0.11rem;
                height: 0.51rem;
                .ranking-box-item {
                    font-size: 0.16rem;
                    margin-right: 0.28rem;
                }
                & > .active {
                    font-size: 0.2rem;
                    font-weight: 700;
                }
                .more-box {
                    position: absolute; //绝对定位
                    top: 0.18rem;
                    right: 0;
                    padding: 0.02rem 0.08rem;
                    border-bottom-left-radius: 0.2667rem;
                    border-top-left-radius: 0.2667rem;
                    background: hsla(0, 0%, 100%, 0.5);
                    color: #aeaeae;
                    font-size: 14px;
                    .imgs {
                        background-image: url(https://tw.toptoontw.com/~!/zh-tw/assets/img/bm-arrow.png);
                        margin-top: -2px;
                        vertical-align: middle;
                        display: inline-block;
                        width: 0.06rem;
                        height: 0.09rem;
                        background-size: cover;
                    }
                }
            }
        }

        .van-swipe {
            display: flex;
            flex-direction: row;
            padding: 0.114rem;
            .card-list-item {
                width: 100%;
                width: calc(100vw - 0.6rem);
                align-items: center;
                display: flex;
                flex-direction: row;
                height: 0.917rem;
                margin-bottom: 0.118rem;

                img {
                    margin-right: 0.071rem;
                    width: 0.773;
                    height: 0.917rem;
                    border-radius: 0.03rem;
                }
                .list-item-text {
                    flex: 1;
                    display: flex;
                    flex-direction: column;

                    gap: 0.05rem;
                    .item-text-title {
                        font-size: 0.16rem;
                    }
                    .item-text-describe {
                        font-size: 0.14rem;
                        color: #999;
                    }
                }
                .ranking {
                    display: flex;
                    flex-direction: row;
                    background-size: 100% 100%;
                    width: 0.31rem;
                    height: 0.38rem;
                    background-image: url(https://tw.toptoontw.com/~!/zh-tw/assets/img/icon_one.png);
                    span {
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: #fff;
                        font-size: 0.14rem;
                    }
                }
            }
        }
    }
</style>
