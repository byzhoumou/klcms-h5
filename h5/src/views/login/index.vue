<template>
    <div class="login-container">
        <div class="login-container">
            <van-nav-bar
                title="登录账号"
                left-text-=""
                right-text="首页"
                left-arrow
                :border="false"
                @click-left="toCategory"
                @click-right="toClickRight"
            />
            <div class="input-box">
                <div class="input-box-title">
                    使用账号或绑定的邮箱和手机号登入
                </div>
                <van-field
                    class="account"
                    placeholder="请输入登录账号"
                    :border="false"
                    v-model="loginForm.username"
                />
                <van-field
                    class="password"
                    placeholder="请输入密码"
                    :border="false"
                    type="password"
                    v-model="loginForm.password"
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
                </div>
                <van-button class="login" @click="loginHandle">
                    立即登录
                </van-button>
                <van-button class="register" to="register">
                    3秒快速注册个人账号
                </van-button>
                <div class="onekey-register">
                    <a href="">不想动手， 一键注册会员账号</a>
                </div>

                <div class="help-box">
                    <div class="retrieve">找回密码</div>
                    <div class="help">帮助中心</div>
                </div>
            </div>
        </div>
    </div>
    <!-- <captcha v-model:show="captchaShow" @confirm="captchaConfirm" /> -->
</template>

<script setup lang="ts">
    import { LoginUserDto } from '@/api/api'

    // import captcha from './components/Captcha.vue'

    import router from '@/router'
    import { useUserStore } from '~/src/store/module/user'
    import { useLoginStore } from '~/src/store/module/login'

    // 状态
    const useUser = useUserStore()
    const useLogin = useLoginStore()

    onMounted(() => {
        loginForm.username = useLogin.username
        loginForm.password = useLogin.password
        checked.value = loginForm.username != '' && loginForm.password != ''
    })

    // 返回我的
    const toCategory = () => {
        router.push('my')
    }
    // 返回首页
    const toClickRight = () => {
        router.back()
    }
    const checked = ref(false)

    const loginForm = reactive<LoginUserDto>({
        username: '',
        password: '',
        // captchaId: '',
        // captchaCode: '',
    })

    // 验证码
    // const captchaShow = ref(false)
    // const captchaConfirm = async (id: string, code: string) => {
    //     captchaShow.value = false
    //     // 设置验证码参数
    //     loginForm.captchaId = id
    //     loginForm.captchaCode = code

    //     // 登录操作
    //     await useUser.login(loginForm)

    //     // 获取用户信息
    //     await useUser.getUserInfo()

    //     // 判断是否记录账号密码
    //     if (checked.value) {
    //         useLogin.setLoginForm(loginForm.username, loginForm.password)
    //     } else {
    //         // 清空记录
    //         useLogin.clear()
    //     }

    //     // 跳转
    //     if (useUser.username != '') {
    //         toCategory()
    //     }
    // }

    const loginHandle = async () => {
        if (loginForm.username == '' || loginForm.password == '') {
            showNotify({ message: '用户名或密码不能为空' })
            return
        }
        // captchaShow.value = true
        loginDo()
    }

    const loginDo = async () => {
        // 登录操作
        await useUser.login(loginForm)

        // 获取用户信息
        await useUser.getUserInfo()

        // 判断是否记录账号密码
        if (checked.value) {
            useLogin.setLoginForm(loginForm.username, loginForm.password)
        } else {
            // 清空记录
            useLogin.clear()
        }

        // 跳转
        if (useUser.username != '') {
            toCategory()
        }
    }
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
                            font-size: 16px;
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
                        margin: 0.2rem 0 0.2rem 0;
                        .van-field__body {
                            line-height: 37px;
                            font-size: 16px;
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
                padding: 0.15rem 0;
                width: 100%;
                .switch-box-layout {
                    display: flex;
                    flex-direction: row;
                    height: 0.21rem;
                    .switch-text {
                        margin-right: 0.05rem;
                    }
                }
            }
            .login {
                width: 100%;
                height: 0.47rem;
                margin: 0rem 0 0.2rem 0;
                background-color: rgba(
                    0,
                    0,
                    0,
                    0
                ); /* 透明度为 0.5 的黑色背景 */
                font-size: 0.2rem;
                border-radius: 1rem;
                border: 2px solid #ffd814;
                border-radius: 100px;
                color: #ffd814;
            }
            .register {
                width: 100%;
                height: 0.47rem;
                background-color: rgba(0, 0, 0, 0);
                border-radius: 1rem;
                color: #d6d6d6;
                border: 1px solid #3f3f3f;
                font-size: 0.15rem;
            }
            .onekey-register {
                display: flex;
                flex-direction: row;
                justify-content: center;
                margin: 0.21rem 0 0.21rem 0;
                width: 100%;
                a {
                    font-size: 0.18rem;
                    color: #ffd814;
                }
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
