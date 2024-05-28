<template>
  <div>
    <!-- <van-nav-bar title="登录" /> -->
    <div class="container">
      <van-cell-group inset>
        <!-- 输入学号 -->
        <van-field v-model="data.username" type="email" label="学号" />
        <!-- 输入密码 -->
        <van-field v-model="data.password" type="password" label="密码" />
      </van-cell-group>
      <div>
        <van-button class="login-btn" @click="checkLogin">登录</van-button>
        <van-button class="login-btn" @click="checkLogin2">验证是否登录</van-button>
        <van-button class="register-button" @click="GoRegister">注册</van-button>
      </div>
      <!-- <div>
        <a @click="GoRegister">注册</a>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { login, isLogin } from '@/api/shop'
import { useRouter, useRoute } from 'vue-router'
const data = ref({
  username: "2206540121",
  password: "123456"
});
const router = useRouter()
const route = useRoute()
const redirect = computed(() => {
  return route.query.redirect;
});
// console.log(redirect)
const checkLogin = async () => {
  const res = await login(data.value)
  // console.log(res)
  // console.log(data)
  if (res.code == 1) {
    localStorage.setItem('token', res.data.session_id)
    router.replace("/home")

  }
}
const checkLogin2 = async () => {
  const res = await isLogin()
  if (res.code == 1) {
    alert(res.data.username + '已经登录')
  } else {
    alert('没有登陆')
  }
}
const GoRegister = () => {
  router.push('/register')
}
</script>

<style scoped>
.container {
  padding: 50px 30px;
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
  margin-top: 5px;
  background-color: orange;
  border-radius: 40px;
  box-shadow: 0 10 20 0 rgba(0, 0, 0, 1);
  letter-spacing: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.register-button {
  border: 0;
  text-decoration: underline blue;
}
</style>