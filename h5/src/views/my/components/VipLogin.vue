<template>
    <div class="vip-login">
        <div class="prohibit-protocol">
            <img src="@/assets/image/safety-no.png" alt="" />
            <p>国际版</p>
            <span>仅限满19周岁非中国大陆使用者</span>
            <van-switch v-model="checked" active-color="orange" />
        </div>
        <div class="cancelLogin">
            <van-button to="/login">一键登录会员</van-button>
        </div>
    </div>
</template>

<script setup lang="ts">
    const checked = ref(false)

</script>

<style scoped lang="scss">
    .vip-login {
        width: 100%;
        height: 1.7rem;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        .prohibit-protocol {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0.172rem 0.114rem;
            img {
                width: 0.27rem;
                height: 0.27rem;
            }
            p {
                margin-left: 10px;

                font-size: 0.16rem;
            }
            span {
                flex: 1;
                margin-left: 10px;
                color: #999;
                font-size: 0.14rem;
            }
        }
        .cancelLogin {
            display: flex;
            justify-content: center;
            padding: 0.215rem;
            .van-button {
                width: 3.34rem;
                height: 0.5rem;
                background-image: linear-gradient(90deg, #eda400, #f60);
                box-shadow: 0 1px 2px 1px #f0d4a8;
                border-radius: 0.25rem;
                color: #fff;
                font-size: 0.2rem;
            }
        }
    }
</style>
