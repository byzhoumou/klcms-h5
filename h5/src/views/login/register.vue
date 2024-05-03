<template>
    <div class="login-container">
        <div class="login-container">
            <van-nav-bar
                title="注册会员"
                left-text-=""
                right-text="首页"
                left-arrow
                :border="false"
                @click-left="toCategory"
                @click-right="toClickRight"
            />
            <div class="input-box">
                <div class="input-box-title">
                    建议使用常用邮箱注册，找回账账号密码时需要
                </div>
                <van-field
                    class="account"
                    placeholder="账号：支持中文，推荐使用邮箱注册"
                    :border="false"
                    v-model="inForm.username"
                />
                <van-field
                    class="password"
                    placeholder="请输入密码"
                    :border="false"
                    type="password"
                    v-model="inForm.password"
                />
                <div class="switch-box">
                    <div class="switch-box-layout">
                        <div class="switch-text">储存账号</div>

                        <van-switch
                            v-model="checked"
                            size="18px"
                            active-color="orange"
                        />
                    </div>
                    <div class="switch-box-layout">
                        <div class="switch-text">同意保护方针</div>

                        <van-switch
                            v-model="checked"
                            size="18px"
                            active-color="orange"
                        />
                    </div>
                </div>
                <van-button @click="btnClick">立即注册</van-button>
                <van-divider>使用下方社群平一账号连动登录</van-divider>

                <div class="help-box">
                    <div class="retrieve">找回密码</div>
                    <div class="help">帮助中心</div>
                </div>
            </div>
        </div>
        <div class="clause"></div>
    </div>

    <captcha v-model:show="captchaShow" @confirm="captchaConfirm" />
</template>

<script setup lang="ts">
    import captcha from './components/Captcha.vue'

    import router from '@/router'
    import { RegisterUserDto, LoginUserDto } from '~/src/api/api'
    import { api } from '~/src/api'
    import { useUserStore } from '~/src/store/module/user'

    const useUser = useUserStore()

    // 返回我的
    const toCategory = () => {
        router.push('login')
    }

    // 返回首页
    const toClickRight = () => {
        router.push('home')
    }
    const checked = ref(false)
    const inForm = reactive<RegisterUserDto>({
        username: '',
        password: '',
        captchaId: '',
        captchaCode: '',
    })

    const captchaShow = ref(false)

    const btnClick = () => {
        if (inForm.username == '' || inForm.password == '') {
            showNotify({ message: '用户名或密码不能为空' })
            return
        }
        captchaShow.value = true
    }

    const captchaConfirm = async (id: string, code: string) => {
        captchaShow.value = false
        inForm.captchaId = id
        inForm.captchaCode = code

        // 提交注册
        await useUser.register(inForm)

        // 提示注册成功
        showNotify({ type: 'success', message: '注册成功' })

        // 获取用户信息
        await useUser.getUserInfo()

        // 跳转我的页面
        setTimeout(() => {
            router.replace('/my')
        }, 1000)
    }

    // const submitRegister = async () => {
    //     await
    // }
</script>

<style lang="scss" scoped>
    .login-container {
        width: 100%;
        height: 100vh;
        background: url('@/assets/image/register_bg.jpg');
        /* 设置背景颜色为 #1f1f1f */
        background-color: #1f1f1f;
        /* 设置背景图片的位置为左上角（0, 0） */
        background-position: 0 0;
        /* 设置背景图片的尺寸为 cover，即尽可能填充整个容器，保持图片的比例 */
        background-size: cover;
        /* 设置背景图片不重复 */
        background-repeat: no-repeat;
        color: aliceblue;

        .login-container {
            display: flex;
            flex-direction: column;
            color: aliceblue;
            width: 100%;
            height: 100vh;
            background-image: url('@/assets/image/registerbottom.png');
            /* 设置背景图片的位置为底部对齐 */
            background-position: bottom;
            /* 设置背景图片的尺寸为 100%，即填满容器 */
            background-size: 100%;
            background-repeat: no-repeat;
            background-color: rgba(0, 0, 0, 0); /* 透明度为 0.5 的黑色背景 */
            :deep() {
                .van-nav-bar__content {
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                    height: 0.504rem;
                    background-color: #1f1f1f;
                    // border: none;
                    border: none; // 或者 border: 0;
                    .van-nav-bar {
                        &__arrow {
                            // 箭头大小
                            font-size: 0.22rem;
                            color: #fff;
                        }
                        &__title {
                            font-size: 0.2rem;
                            color: #fff;
                        }
                        &__text {
                            font-size: 0.16rem;
                            color: #fff;
                        }
                    }
                }
            }
            .input-box {
                display: flex;
                flex-direction: column;
                width: 100%;
                height: 5.02rem;
                align-items: center;
                margin-top: 0.46rem;
                padding: 0 0.458rem;
                .input-box-title {
                    color: #bbb;
                }
                :deep() {
                    .account {
                        width: 3.38rem;
                        height: 0.57rem;
                        background-color: #3f3f3f;
                        margin: 0.2rem 0 0.2rem 0;
                        border-radius: 0.3rem;
                        .van-field__body {
                            line-height: 37px;
                            font-size: 15px;
                        }
                        .van-field__control {
                            // 设置输入框文字颜色
                            color: #ffd037;
                        }
                    }
                    .password {
                        width: 3.38rem;
                        height: 0.57rem;
                        background-color: #3f3f3f;
                        border-radius: 0.3rem;
                        .van-field__body {
                            line-height: 37px;
                            font-size: 15px;
                        }
                        .van-field__control {
                            // 设置输入框文字颜色
                            color: #ffd037;
                        }
                    }
                }
            }
            .switch-box {
                display: flex;
                flex-direction: row-reverse; /* 从右到左排列项目 */
                width: 100%;
                padding: 0.15rem 0;
                gap: 0.06rem;
                .switch-box-layout {
                    display: flex;
                    flex-direction: row;
                    height: 0.21rem;
                    .switch-text {
                        margin-right: 0.03rem;
                    }
                }
            }

            .van-button {
                // margin: 0.1rem 0 0.2rem 0;

                width: 100%;
                height: 0.47rem;
                background-color: rgba(0, 0, 0, 0);
                border-radius: 1rem;
                color: #d6d6d6;
                border: 1px solid #3f3f3f;
                font-size: 0.15rem;
            }
            .van-divider {
                margin: 0.21rem 0 0.21rem 0;
                width: 100%;
                color: #ddd;
                padding: 0 20px;
            }
            .help-box {
                display: flex;
                flex-direction: row;
                gap: 0.2rem;
                .retrieve {
                    font-size: 0.14rem;
                }
                .help {
                    font-size: 0.14rem;
                }
            }
        }
    }
</style>
