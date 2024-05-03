<template>
    <div class="fine-container">
        <div class="head-search">
            <van-search
                placeholder="顶级漫画：TOPTOON.FUN (永久网址)"
                @click="returnFine"
            />
            <div class="tool-box-item">
                <img src="@/assets/image/safety-off.png" alt="" />
            </div>
        </div>
        <!-- <Swiper /> -->
        <Card :limit="6" type="1-n" sort :footer="false" />
        <Card :limit="6" type="3-3" />
        <Card />
        <Card class="card-2-2" />
        <Card
            class="card-1-n"
            :limit="6"
            type="1-n"
            :cover-style="{
                height: '1.88rem',
                width: '1.48rem',
            }"
        />
    </div>
</template>

<script setup lang="ts">
    import Card from '@/components/RecommendCard.vue'
    import router from '~/src/router'
    // 返回精选页面
    const returnFine = () => {
        router.push('search')
    }
    defineOptions({
        name: 'FineName',
    })
</script>

<style lang="scss" scoped>
    .fine-container {
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
                    background-color: #b7b7b7;
                    border-radius: 0.8rem;
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
        }
        .my-swipe .van-swipe-item {
            color: #fff;
            font-size: 20px;
            line-height: 150px;
            text-align: center;
            background-color: #39a9ed;
        }

        .card-2-2 {
            :deep() {
                .item-0 {
                    width: 65% !important;
                }
                .item-1 {
                    width: 35% !important;
                }
                .item-3 {
                    width: 65% !important;
                }
                .item-2 {
                    width: 35% !important;
                }
            }
        }
    }
</style>
