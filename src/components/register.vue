<template>
    <div>
        <van-nav-bar title="注册" left-text="返回" left-arrow @click-left="$router.go(-1)" />
        <div class="container">
            <van-cell-group inset>
                <!-- 输入学号 -->
                <van-field v-model="username" type="email" label="学号" />
                <!-- 输入密码 -->
                <van-field v-model="password" type="password" label="密码" />
            </van-cell-group>
            <div class="body-item">
                <van-button class="login-btn" @click="register()">注册</van-button>
            </div>
        </div>
    </div>

</template>
<script setup>
import { ref, computed } from 'vue'
let username = ref('')
let password = ref('')
const register = async () => {
    if (username.value === '') {
        this.$toast('账号不能为空')
        return
    } else if (password.value === '') {
        this.$toast('密码不能为空')
        return
    }
    // window.console.log(username.value, password.value)
}
</script>

<style scoped>
.container {
    padding: 50px 30px
}

.title {
    margin-bottom: 20px;
}

p {
    line-height: 40px;
    font-size: 14px;
    color: #cccc;
}

.login-btn {
    width: 100%;
    height: 45px;
    margin-top: 40px;
    background-color: orange;
    border-radius: 40px;
    box-shadow: 0 10 20 0 rgba(0, 0, 0, 1);
    letter-spacing: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>