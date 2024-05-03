<template>
    <van-dialog
        :show="show"
        @confirm="confirmChange"
        @close="closeChange"
        @open="openChange"
        close-on-click-overlay
        class="captcha"
    >
        <div class="captcha-content">
            <div
                v-html="captchaSvg"
                @click="refreshCaptcha"
                style="background-color: #eee"
            ></div>
            <h3>请输入验证码</h3>
            <span>请输入图片中的验证码</span>
            <input
                ref="inputRef"
                v-model="captcha"
                placeholder="请输入验证码"
                :maxlength="4"
                @keyup.enter="confirmChange"
            />
        </div>
    </van-dialog>
</template>

<script setup lang="ts">
    import { api } from '@/api'

    interface IProps {
        show: boolean
    }

    defineProps<IProps>()

    const captcha = ref('')
    const captId = ref('')
    const captchaSvg = ref('')

    const inputRef = ref()

    onMounted(() => {})

    const openChange = async () => {
        setTimeout(() => {
            inputRef.value.focus()
        }, 20)
        await refreshCaptcha()
    }

    const refreshCaptcha = async () => {
        await api.webUserControllerCaptcha().then((res: any) => {
            captchaSvg.value = res.data.captcha
            captId.value = res.data.captchaId
        })
        captcha.value = ''
    }

    // 定义回调函数
    const emit = defineEmits(['update:show', 'confirm'])

    // 确定回调
    const confirmChange = () => {
        if (captcha.value.length < 4) {
            showNotify({ message: '验证码长度错误' })
            return
        }
        emit('confirm', captId.value, captcha.value)
    }

    // 关闭回调
    const closeChange = () => {
        emit('update:show', false)
    }
</script>

<style lang="scss" scoped>
    .captcha {
        &-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0.2rem;

            > span {
                font-size: 0.14rem;
                color: #b2bac2;
                margin: 0.08rem;
            }

            > input {
                height: 0.42rem;
                width: 100%;
                border: 1px solid #ccc;
                text-align: center;
            }

            > input::-ms-input-placeholder {
                color: #b2bac2;
            }
            > input::-webkit-input-placeholder {
                color: #b2bac2;
            }
        }
    }
</style>
