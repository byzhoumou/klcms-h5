<template>
    <div class="recommend-card">
        <div class="card-title">
            <div class="title">一入腐门深似海~~慎点</div>
            <div class="more">
                更多
                <van-icon name="arrow" />
            </div>
        </div>
        <!-- <div class="card-banner"></div> -->
        <div class="card-body" :style="_bodyStyle">
            <template v-for="(_, i) in 10" :key="i">
                <div
                    class="card-body-item"
                    :class="'item-' + i"
                    v-if="i < limit"
                    :style="_bodyItemStyle"
                >
                    <!-- 封面 -->
                    <div class="item-cover" :style="_coverStyle">
                        <img
                            src="https://tw.toptoontw.com/pics/cover/tm663/back.png"
                        />

                        <!-- 封面排序 -->
                        <div
                            class="sort"
                            v-if="sort"
                            :style="
                                i < 3
                                    ? sortBgs[i]
                                    : 'background-image: -webkit-linear-gradient(-45deg, #e7e7e7, #d3d3d3 34%, #bfbfbf 81%);'
                            "
                        >
                            {{ i + 1 }}
                        </div>
                    </div>
                    <!-- 标题 -->
                    <div class="item-title">盒子</div>
                    <!-- 描述 -->
                    <div class="item-desc">周二更 | 第6话</div>
                </div>
            </template>
        </div>
        <div class="card-footer" v-if="footer">
            <van-button icon="replay" type="primary" class="rand" round>
                换一批
            </van-button>
            <van-button icon="more-o" type="primary" class="more" round>
                查看更多
            </van-button>
        </div>
    </div>
</template>

<script setup lang="ts">
    interface IProps {
        type: '1-n' | '2-2' | '3-3'
        limit: number
        // show
        sort: boolean
        footer: boolean

        bodyStyle: any
        bodyItemStyle: any
        coverStyle: any
    }

    const props = withDefaults(defineProps<IProps>(), {
        type: '2-2',
        limit: 4,
        sort: false,
        footer: true,
        bodyStyle: {},
        bodyItemStyle: {},
        coverStyle: {},
    })

    watch(
        () => props,
        (newVal: any) => {
            console.log('newVal', newVal)
        }
    )

    const sortBgs = ref([
        'background-image: -webkit-linear-gradient(-45deg, #e11, #ff6344);',
        'background-image: -webkit-linear-gradient(-45deg, #ff7200, #ff8c00 66%);',
        'background-image: -webkit-linear-gradient(-45deg, #fe9002, #fead08 34%, #fdca0e 81%);',
    ])

    const _bodyStyle = ref({})
    const _bodyItemStyle = ref({})
    const _coverStyle = ref<any>({ width: '', height: '' })
    onMounted(() => {
        console.log('onMounted', props)
        switch (props.type) {
            case '1-n':
                // 设置body样式
                _bodyStyle.value = {
                    flexWrap: 'nowrap',
                    overflowX: 'auto',
                    marginBottom: '0.2rem',
                    ...props.bodyStyle,
                }

                // 设置bodyItem样式
                _bodyItemStyle.value = {
                    width: 'auto',
                    ...props.bodyItemStyle,
                }

                // 设置封面图样式
                _coverStyle.value = {
                    width: '1.66rem',
                    height: '1rem',
                    ...props.coverStyle,
                }
                break
            case '3-3':
                _bodyStyle.value = {
                    flexWrap: 'wrap',
                    ...props.bodyStyle,
                }

                // 设置bodyItem样式
                _bodyItemStyle.value = {
                    width: '33.3333%',
                    ...props.bodyItemStyle,
                }

                // 设置封面图样式
                _coverStyle.value = {
                    height: '1.72rem',
                    borderRadius: '0.03rem',
                    ...props.coverStyle,
                }
                break
            default: // 2-2
                _bodyStyle.value = {
                    flexWrap: 'wrap',
                    ...props.bodyStyle,
                }

                _bodyItemStyle.value = {
                    width: '50%',
                    ...props.bodyItemStyle,
                }

                _coverStyle.value = {
                    ...props.coverStyle,
                }
        }
    })
</script>

<style lang="scss" scoped>
    .recommend-card {
        display: flex;
        flex-direction: column;
        background-color: #fff;
        .card-title {
            padding: 0.15rem;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            height: 0.2rem;
            line-height: 0.2rem;
            .title {
                padding-left: 0.25rem;
                font-size: 0.2rem;
                font-weight: bold;
                position: relative;
            }

            .title::before {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                width: 0.2rem;
                height: 0.2rem;
                background-image: url(../assets/icon/line_icon.png);
                background-repeat: no-repeat;
                background-size: 100% 100%;
            }

            .more {
                color: #909090;
            }
        }

        .card-body::-webkit-scrollbar {
            display: none; /* Chrome, Safari 和 Opera */
        }

        .card-time {
            display: flex;
            flex-direction: row;
        }

        .card-body {
            padding: 0.1rem;
            // margin: 0.2rem 0;
            display: flex;
            flex-direction: row;
            // gap: 0.1rem;

            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
            overflow: -moz-scrollbars-none; /* 老版本的 Firefox */

            &-item {
                padding: 0.08rem 0.05rem;
                flex: 0 0 auto;
                .item-cover {
                    background-color: red;
                    height: 1.3rem;
                    position: relative;
                    overflow: hidden;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                    .sort {
                        // padding-top: 0.;
                        color: #fff;
                        bottom: 0;
                        position: absolute;
                        width: 0.26rem;
                        height: 0.2rem;
                        text-align: center;
                        font-size: 0.16rem;
                        border-radius: none;
                        border-top-right-radius: 0.05rem;
                        border-top-left-radius: 0;
                    }
                }

                .item-title {
                    margin-top: 0.05rem;
                    font-size: 0.16rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .item-desc {
                    margin-top: 0.03rem;
                    font-size: 0.12rem;
                    color: #909090;
                }
            }
        }

        .card-footer {
            padding: 0.15rem;
            margin-bottom: 0.2rem;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .van-button {
                flex: 1;
                background-color: #f6f8f9;
                border: none;
                color: #5c5c5c;
            }

            .van-button + .van-button {
                margin-left: 0.15rem;
            }
        }
    }
</style>
