<template>
    <div class="category-container">
        <NavBar :title="'111'">
            <template #title>
                <div class="category-title">
                    <div class="title-item">推荐</div>
                    <div class="title-item active">探索</div>
                </div>
            </template>
        </NavBar>
        <div class="category-panel" ref="panelRef">
            <div class="panel-item">
                <div class="panel-item-tag active">全部</div>
                <div class="panel-item-tag">美女</div>
                <div class="panel-item-tag">帅哥</div>
                <div class="panel-item-tag">少妇</div>
                <div class="panel-item-tag">泳衣</div>
                <div class="panel-item-tag">萝莉</div>
                <div class="panel-item-tag">御姐</div>
                <div class="panel-item-tag">继续</div>
                <div class="panel-item-tag">美女</div>
                <div class="panel-item-tag">帅哥</div>
                <div class="panel-item-tag">少妇</div>
                <div class="panel-item-tag">泳衣</div>
                <div class="panel-item-tag">萝莉</div>
                <div class="panel-item-tag">御姐</div>
            </div>

            <div class="panel-item">
                <div class="panel-item-tag active">全部</div>
                <div class="panel-item-tag">美女</div>
                <div class="panel-item-tag">帅哥</div>
                <div class="panel-item-tag">少妇</div>
                <div class="panel-item-tag">泳衣</div>
                <div class="panel-item-tag">萝莉</div>
                <div class="panel-item-tag">御姐</div>
            </div>
            <div class="panel-item" v-show="!panelFold" ref="panelFoldRef">
                <div class="panel-item-tag active">全部</div>
                <div class="panel-item-tag">泳衣</div>
                <div class="panel-item-tag">萝莉</div>
                <div class="panel-item-tag">御姐</div>
                <div class="panel-item-tag">美女</div>
                <div class="panel-item-tag">帅哥</div>
                <div class="panel-item-tag">少妇</div>
            </div>
            <div class="panel-item" v-show="!panelFold" ref="panelFoldRef">
                <div class="panel-item-tag active">全部</div>
                <div class="panel-item-tag">泳衣</div>
                <div class="panel-item-tag">萝莉</div>
                <div class="panel-item-tag">美女</div>
                <div class="panel-item-tag">帅哥</div>
                <div class="panel-item-tag">少妇</div>
                <div class="panel-item-tag">御姐</div>
            </div>
            <div class="panel-item">
                <div class="panel-item-tag active">全部</div>
                <div class="panel-item-tag">美女</div>
                <div class="panel-item-tag">帅哥</div>
                <div class="panel-item-tag">少妇</div>
                <div class="panel-item-tag options" @click="panleFoleClick">
                    {{ !panelFold ? '合上' : '展开' }}
                    <van-icon name="arrow-up" v-if="panelFold" />
                    <van-icon name="arrow-down" v-else />
                </div>
            </div>
        </div>
        <!-- <ListItem1></ListItem1>
        <ListItem1></ListItem1>
        <ListItem1></ListItem1>
        <ListItem1></ListItem1>
        <ListItem1></ListItem1>
        <ListItem1></ListItem1>
        <ListItem1></ListItem1>
        <ListItem1></ListItem1> -->
    </div>
</template>

<script setup lang="ts">
    defineOptions({
        name: 'CategoryIndex',
    })

    const panelRef = ref()
    const panelFold = ref(false)
    const panleFoleClick = () => {
        if (panelFold.value) {
            panelFold.value = !panelFold.value
            panelRef.value.style.height = maxPanel.value + 'px'
        } else {
            panelRef.value.style.height = minPanel.value + 'px'
            panelFold.value = !panelFold.value
        }
    }

    const maxPanel = ref(0)
    const minPanel = ref(0)

    onMounted(() => {
        maxPanel.value = panelRef.value.clientHeight
        console.log('不隐藏时高度', maxPanel.value)
        panelFold.value = !panelFold.value
        nextTick(() => {
            minPanel.value = panelRef.value.clientHeight
            console.log('隐藏时高度', minPanel.value)
            // 设置css样式
            panelRef.value.style.height = minPanel.value + 'px'
            panelRef.value.style.overflow = 'hidden'
            panelRef.value.style.transition = 'height 0.2s'
        })
    })
</script>

<style lang="scss" scoped>
    .category-container {
        .category-title {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            background-color: rgba(0, 0, 0, 0.5);
            border-radius: 0.18rem;
            height: 0.32rem;
            line-height: 0.32rem;
            width: 1.28rem;
            color: #fff;
            border: 1px solid transparent;
            box-sizing: unset;
            .title-item {
                flex: 1;
                font-size: 0.16rem;
                // text-align: center;
            }
            .active {
                background-color: #fff;
                color: #f60;
                border-radius: 0.18rem;
            }
        }

        .category-panel {
            position: relative;
            display: flex;
            flex-direction: column;
            background-color: #fff;

            .panel-item {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;

                &:first-child {
                    padding: 0.12rem 0;
                }

                padding: 0.05rem 0;

                .panel-item-tag {
                    margin: 2px 0 0;
                    width: 14%;
                    text-align: center;
                    font-size: 0.14rem;
                    height: 0.3rem;
                    line-height: 0.3rem;
                }

                .active {
                    color: #f60;
                    font-size: 0.18rem;
                }

                .options {
                    position: absolute;
                    right: 0;
                    color: #999;
                }
            }
        }
    }
</style>
