<template>
    <div class="reading-container">
        <van-nav-bar
            title="干爹请多指教【第1话】 那个女孩长大了"
            left-text-=""
            right-text="选集"
            left-arrow
            :border="false"
        />
        <div class="online-reading">
            <div class="reading-box">下一话</div>
            <div class="container-item">
                <img src="@/assets/image/bottom_icon_like_s.png" alt="" />
                <span>上榜</span>
            </div>
            <div class="container-item">
                <img src="@/assets/image/bottom_icon_book_n.png" alt="" />
                <span>书柜</span>
            </div>
            <div class="container-item">
                <span>返回目录</span>
            </div>
        </div>
        <div class="tool-box">
            <div class="tool-avatar">
                <img src="https://tw.toptoontw.com/skin/user/98.jpg" alt="" />
            </div>
            <div class="tool-chapter"></div>
            <div class="tool-refresh"></div>
        </div>
        <div class="tool-menu"></div>

        <Card class="card-2-2" />
        <Card class="card-2-2" />
        <Card class="card-2-2" />
        <Card class="card-2-2" />
    </div>
</template>

<script setup lang="ts">
    import Card from '@/components/RecommendCard.vue'
</script>

<style lang="scss" scoped>
    .reading-container {
        position: relative;
        width: 100%;
        height: 100vh;
        :deep() {
            .van-nav-bar__content {
                position: fixed;
                top: 0;
                display: flex;
                flex-direction: row;
                width: 100%;
                height: 0.504rem;
                background-color: #fff;
                border: none;
                .van-nav-bar {
                    &__arrow {
                        font-size: 0.22rem;
                        color: #909399;
                    }
                    &__title {
                        font-size: 0.2rem;
                        font-weight: 100;
                    }
                    &__text {
                        font-size: 0.16rem;
                        color: red;
                    }
                }
            }
        }
        .online-reading {
            z-index: 99;
            position: fixed;
            bottom: 0;
            width: 100%;
            height: 0.69rem;
            display: flex;
            flex-direction: row;
            border-top: 1px solid #f0f2f5;
            background-color: #fff;
            .reading-box {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 0.98rem;
                font-size: 0.16rem;
                background-image: -webkit-linear-gradient(
                    -40deg,
                    #ffe153 19%,
                    #ffd251 97%
                );
            }
            .container-item {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                width: 1.07rem;
                border-left: 1px solid #fafafa;

                img {
                    width: 0.268rem;
                    height: 0.268rem;
                }
                span {
                    font-size: 0.16rem;
                    color: #999;
                }
            }
        }
        .tool-box {
            z-index: 98;
            position: fixed;
            width: 0.43rem;
            height: 2.12rem;
            bottom: 310px;
            right: 15px;
            display: flex;
            flex-direction: column;
            gap: 0.1rem;
            .tool-avatar {
                border-radius: 0.25rem;
                background-color: rgba(0, 0, 0, 0.4);
                img {
                    width: 100%;
                    border-radius: 0.25rem;
                }
            }

            .tool-chapter {
                width: 0.43rem;
                height: 0.43rem;
                border-radius: 0.25rem;
                background-color: rgba(0, 0, 0, 0.4);
                background-image: url('@/assets/image/ico_menu.png');
                background-position: 50%;
                background-repeat: no-repeat;
                text-align: center;
                background-size: 25px;
            }
            .tool-refresh {
                width: 0.43rem;
                height: 0.43rem;
                border-radius: 0.25rem;
                background-color: rgba(0, 0, 0, 0.4);
                background-image: url('@/assets/image/ico_refresh.png');
                background-position: 50%;
                background-repeat: no-repeat;
                text-align: center;
                background-size: 30px;
            }
        }
        .tool-menu {
            z-index: 98;
            width: 0.43rem;
            height: 0.43rem;
            position: fixed;
            bottom: 265px;
            right: 15px;
            background-color: rgba(0, 0, 0, 0.4);
            border-radius: 0.25rem;
            background-image: url('@/assets/image/ico_more_3.png');
            background-position: 50%;
            background-repeat: no-repeat;
            text-align: center;
            background-size: 30px;
        }
    }
</style>
// border-left: 1px solid #eee;
