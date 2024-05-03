<template>
    <div class="search-container">
        <div class="search-box">
            <van-search
                placeholder="请输入搜索关键词"
                v-model="search"
                @search="searchHandle"
            />
            <span @click="returnFine">{{ search ? '搜索' : '返回' }}</span>
            <img src="@/assets/image/safety-off.png" alt="" />
        </div>
        <div class="recommend-panel" v-if="keywordList.length == 0">
            <div class="look">大家都在找</div>
            <div class="search-look">
                <div class="look-item">千日新娘11111</div>
                <div class="look-item">千日新娘</div>
                <div class="look-item">千日新娘</div>
                <div class="look-item">千日新娘</div>
                <div class="look-item">千日新娘</div>
                <div class="look-item">千日新娘</div>
                <div class="look-item">千日新娘</div>
                <div class="look-item">千日新娘</div>
                <div class="look-item">千日新娘</div>
                <div class="look-item">千日新娘</div>
                <div class="look-item">千日新娘</div>
            </div>
            <div class="record-box">
                <div class="search-record">
                    <span>搜素记录</span>
                    <img
                        src="@/assets/image/search_icon_del.png"
                        alt=""
                        @click="clearSearchRecord"
                    />
                </div>
                <div
                    class="search-record-text"
                    v-for="(v, k) in searchRecord"
                    :key="k"
                >
                    <img src="@/assets/image/search_icon_his.png" alt="" />
                    <span>{{ v }}</span>
                </div>
                <div class="kong"></div>
            </div>
        </div>
        <div class="keyword-panel" v-if="keywordList.length != 0">
            <div class="keyword-item" v-for="(v, k) in keywordList" :key="k">
                {{ v }}
            </div>
        </div>
        <!-- <div></div> -->
    </div>
</template>

<script setup lang="ts">
    import router from '~/src/router'
    // 返回精选页面
    const returnFine = () => {
        router.replace('fine')
    }
    const searchStoreKey = 'search_record'
    const search = ref('')
    const searchRecord = ref<string[]>([])

    onMounted(() => {
        const store = localStorage.getItem(searchStoreKey)
        if (store) searchRecord.value = JSON.parse(store)
    })

    // 监听搜索记录变化
    watch(searchRecord.value, (newVal) => {
        console.log('watch ==> searchRecord', newVal)

        // 写入本地存储
        localStorage.setItem(searchStoreKey, JSON.stringify(newVal))
    })

    const clearSearchRecord = () => {
        localStorage.removeItem(searchStoreKey)
        searchRecord.value = []
    }

    // TODO 请求关键词接口 写入列表
    const keywordList = ref([])

    const searchHandle = () => {
        if (searchRecord.value.indexOf(search.value) === -1) {
            searchRecord.value.push(search.value)
        }

        // 请求接口获取数据
    }
</script>

<style scoped lang="scss">
    .search-container {
        width: 100%;
        min-height: 100vh;
        background-color: #fff;
        .search-box {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 0.12rem;
            height: 0.77rem;
            :deep() {
                .van-search__content {
                    width: 2.99rem;
                    height: 0.34rem;
                    border-radius: 1rem;
                }
            }
            span {
                font-size: 0.18rem;
            }

            img {
                background-color: rgba(0, 0, 0, 0.5);
                width: 0.275rem;
                height: 0.275rem;
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
        .recommend-panel {
            display: flex;
            flex-direction: column;

            .look {
                color: #aeaeae;
                font-size: 0.14rem;
                padding: 0.114rem 0.137rem;
            }
            .search-look {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap; /*换行*/

                width: 100%;
                padding: 0 0.068rem;

                .look-item {
                    margin: 0.068rem;
                    display: flex;

                    align-items: center;
                    height: 0.34rem;
                    font-size: 0.16rem;
                    background-color: #f4f4f4;
                    padding: 0 0.137rem;
                }
            }
            .record-box {
                margin-top: 0.3rem;
                .search-record {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0.137rem 0.137rem 0.068rem 0.137rem;
                    span {
                        font-size: 0.16rem;
                        color: #aeaeae;
                    }
                    img {
                        width: 0.2rem;
                        height: 0.2rem;
                    }
                }
                .search-record-text {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    padding: 0.137rem 0.137rem 0.137rem 0.137rem;
                    border-bottom: 1px solid #f0f2f5;
                }
                span {
                    font-size: 0.16rem;
                }
                img {
                    width: 0.16rem;
                    height: 0.16rem;
                    margin-right: 0.05rem;
                }
                .kong {
                    width: 100%;
                    height: 0.05rem;
                    background-color: #f0f2f5;
                }
            }
        }
        .keyword-panel {
            background-color: #fff;
            width: 100vw;
            min-height: 100%;
            // box-sizing: border-box;
            .keyword-item {
                position: relative;
                padding: 0.2rem;
            }

            .keyword-item::before {
                position: absolute;
                right: 0;
                bottom: 0;
                left: 0;
                display: block;
                content: '';
                border-bottom: 1px solid #f0f2f5;
                -webkit-transform: scaleY(0.5);
                -moz-transform: scaleY(0.5);
                -o-transform: scaleY(0.5);
                transform: scaleY(0.5);
                -ms-transform: scaleY(0.5);
            }
        }
    }
</style>
