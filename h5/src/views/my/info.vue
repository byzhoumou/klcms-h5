<template>
    <div class="info-container">
        <van-nav-bar
            title="账号设定"
            left-text-=""
            :right-text="isRePassword ? '改资料' : '改密码'"
            left-arrow
            :border="false"
            @click-right="isRePassword = !isRePassword"
            @click-left="returnMy"
        />
        <template v-if="!isRePassword">
            <div class="info-item">
                <img src="https://tw.toptoontw.com/skin/user/59.jpg" alt="" />
                <div class="info-item-text">UID: {{ useUser.id }}</div>
            </div>
            <div style="height: 0.06rem" class="offset"></div>
            <div class="info-item">
                <div class="account-name">{{ useUser.username }}</div>
                <div class="info-item-text">账号登录</div>
            </div>
            <div class="info-item">
                <van-switch
                    active-color="orange"
                    v-model="useSetting.autoPay"
                    @change="autoPayChange"
                />
                <div class="info-item-text">自动解锁付费章节</div>
            </div>
            <div class="info-item">
                <van-switch
                    active-color="orange"
                    v-model="useSetting.clearAd"
                    @change="clearAdChange"
                />
                <div class="info-item-text">清除页面广告</div>
            </div>
            <div class="info-item">
                <div class="contact-box">{{ useUser.phone }}</div>
                <div class="info-item-text">绑定手机</div>
            </div>
            <!-- <div class="info-item">
            <div class="contact-box">聯絡QQ，或作為找回訂單憑證</div>
            <div class="info-item-text">UID</div>
        </div> -->
            <div class="info-item">
                <div class="mailbox">{{ useUser.email }}</div>
                <div class="info-item-text">绑定邮箱</div>
            </div>
            <div class="info-save">
                <van-button type="primary" round>保存提交</van-button>
            </div>
        </template>
        <template v-else>
            <div class="info-item">
                <input
                    type="password"
                    placeholder="请输入原始密码"
                    v-model="passForm.oldPassword"
                />
                <div class="info-item-text">原密码</div>
            </div>
            <div class="info-item">
                <input
                    type="text"
                    placeholder="数字+字母组成，6~20位元组"
                    v-model="passForm.newPassword"
                />
                <div class="info-item-text">新密码</div>
            </div>
            <div class="info-item">
                <input
                    type="text"
                    placeholder="再次填写，确认新密码"
                    v-model="towPassword"
                />

                <div class="info-item-text">二次确认</div>
            </div>
            <div class="info-save">
                <van-button type="primary" round @click="updatePassword">
                    确认提交
                </van-button>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
    import { useSettingStore } from '~/src/store/module/setting'
    import { useUserStore } from '~/src/store/module/user'

    import { showDialog, showToast } from 'vant'
    import router from '~/src/router'
    import { UpdatePasswordDto } from '~/src/api/api'
    import { api } from '~/src/api'

    // 返回我的
    const returnMy = () => {
        router.back()
    }

    const isRePassword = ref(false)

    const useSetting = useSettingStore()
    const useUser = useUserStore()

    const autoPayChange = () => {
        if (!useSetting.autoPay) {
            return
        }

        showDialog({
            title: '温馨提示',
            message: '设定自动购买下一话时\n阅读收费章节将不在提示购买',
        })
    }

    const clearAdChange = () => {
        if (useSetting.clearAd && !useUser.isVip) {
            // 提示
            showToast({
                message: '抱歉，广告限定VIP用户',
            })
            useSetting.switchClearAd()
        }
    }

    const saveDo = () => {}

    const towPassword = ref('')
    const passForm = reactive<UpdatePasswordDto>({
        oldPassword: '',
        newPassword: '',
    })

    const updatePassword = async () => {
        // 判断密码是否为空
        if (passForm.oldPassword == '' || passForm.newPassword == '') {
            showNotify('原密码或新密码不能为空')
            return
        }

        // 判断两次输入密码是否一致
        if (passForm.newPassword != towPassword.value) {
            showNotify('两次密码输入不一致')
            return
        }

        // 提交修改密码
        await api.webUserControllerUpdatePassword(passForm).then(() => {
            showNotify({ type: 'success', message: '修改成功' })
            return
        })
    }
</script>

<style scoped lang="scss">
    .info-container {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: #fff;

        :deep() {
            .van-nav-bar__content {
                // position: fixed;
                // top: 0;
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
                        font-size: 0.18rem;
                        font-weight: 100;
                    }
                    &__text {
                        font-size: 0.17rem;
                        color: red;
                    }
                }
            }
        }

        .info-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0rem 0.2rem;
            background-color: #fff;
            border-bottom: 1px dashed #f1f1f1;
            height: 0.64rem;
            img {
                width: 0.458rem;
                height: 0.458rem;
                border-radius: 1rem;
            }
            .info-item-text {
                font-size: 0.16rem;
            }
            .account-name {
                font-size: 0.16rem;
                color: #aaa;
            }
            .mailbox {
                font-size: 0.16rem;
            }
            .contact-box {
                color: #aaa;
            }
            input {
                flex: 1;
            }
        }
        .offset {
            background-color: #f3f3f3;
        }
        .info-save {
            margin: 0 auto;
            background-color: #fff;
            width: 100%;
            padding: 0.2rem 0.4rem;

            .van-button {
                width: 100%;
                height: 0.54rem;
                background-image: linear-gradient(90deg, #eda400, #f60);
                border: #eda400;
                font-size: 0.18rem;
            }
        }
    }
</style>
