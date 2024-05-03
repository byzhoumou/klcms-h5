<template>
    <swiper-container
        :slides-per-view="3"
        :space-between="spaceBetween"
        :centered-slides="true"
        :pagination="{
            hideOnClick: true,
        }"
        :breakpoints="{
            768: {
                slidesPerView: 3,
            },
        }"
        @swiperprogress="onProgress"
        @swiperslidechange="onSlideChange"
        class="swiper"
    >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
    </swiper-container>
</template>

<script setup lang="ts">
    import { register } from 'swiper/element/bundle'

    register()

    const spaceBetween = 10
    const onProgress = (e: any) => {
        const [swiper, progress] = e.detail
        console.log(swiper, progress)
    }

    const onSlideChange = (e: any) => {
        console.log('slide changed', e)
    }
</script>

<style lang="scss" scoped>
    /* Swiper样式调整 */
    .swiper {
        width: 100%;
        height: 3rem;

        & > swiper-slide {
            text-align: center;
            font-size: 18px;
            background: #ddd;

            /* Center slide text vertically */
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>
