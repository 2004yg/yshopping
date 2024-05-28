<template>
    <!-- <van-nav-bar title="我的" class="mine" left-text="返回" left-arrow @click-left="onClickLeft" /> -->
    <van-contact-card type="edit" :tel="tel" :name="name" @click="onEdit" />
    <van-button class="out" @click="onClickRight">退出登录</van-button>
</template>


<script setup>
import { ref } from 'vue';
import { showToast } from 'vant';
import { useRouter } from 'vue-router';
const router = useRouter()
const tel = ref('17798732805');
const name = ref('袁淦');
const onEdit = () => showToast('edit');

const onClickRight = () => {
    localStorage.clear("token");
    router.replace('/login')
};
// const onClickLeft = () => history.back()
</script>

<style lang="scss" scoped>
.out {
  width: 100%;
  height: 45px;
  margin-top: 5px;
  background-color: red;
  border-radius: 40px;
  box-shadow: 0 10 20 0 rgba(0, 0, 0, 1);
  letter-spacing: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>