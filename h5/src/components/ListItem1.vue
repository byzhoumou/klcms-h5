<template>
    <div class="list-item1">
        <div class="item-cover">
            <img :src="row.cover" alt="" />
        </div>
        <div class="item-info">
            <div class="info-title">{{ row.title }}</div>
            <div class="info-row">
                {{ row.isEnd ? '完结' : '连载' }} / 周六更 / 最新：第75话
            </div>
            <div class="info-desc">
                {{ row.intro }}
            </div>
            <div class="info-tags">
                <van-tag
                    type="primary"
                    size="medium"
                    plain
                    v-for="(v, k) in row.tags"
                    :key="k"
                >
                    {{ v }}
                </van-tag>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { WorksEntity } from '../api/api'

    interface IProps {
        row: WorksEntity
    }

    defineProps<IProps>()

    defineOptions({
        name: '',
    })
</script>

<style lang="scss" scoped>
    .list-item1 {
        display: flex;
        background-color: #fff;
        padding: 0.1rem;
        .item-cover {
            width: 1.3rem;
            height: 1.72rem;
            // background-color": red;
            & > img {
                width: 100%;
                height: 100%;
            }
        }
        .item-info {
            margin-left: 0.1rem;
            flex: 1;
            width: 0;
            display: flex;
            flex-direction: column;
            .info-title {
                overflow: hidden;
                margin: 0.05rem 0;
                text-overflow: ellipsis;
                white-space: nowrap;
                color: #282828;
                font-size: 0.18rem;
            }

            .info-row {
                overflow: hidden;
                margin: 0.05rem 0;
                text-overflow: ellipsis;
                white-space: nowrap;
                color: #909090;
                font-size: 0.14rem;
            }

            .info-desc {
                display: -webkit-box;
                overflow: hidden;
                margin: 0.05rem 0;
                border: 10px solid #f9f9f9;
                border-radius: 0.1rem;
                background: #f9f9f9;
                color: #909090;
                text-overflow: ellipsis;
                font-size: 0.12rem;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
            }

            .van-tag {
                color: #909090 !important;
                border-color: #d5d5d6;
            }

            .van-tag + .van-tag {
                margin-left: 0.05rem;
            }
        }
    }
</style>
