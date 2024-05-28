<template>
  <div>
    <van-nav-bar :title="title" class="goods-list" left-text="返回" left-arrow @click-left="back" />
    <router-view></router-view>
    <!-- <button @click="state = !state">切换</button> -->
    <van-tabbar v-model="active" v-show="state">
      <van-tabbar-item icon="home-o" name="home">
        <router-link to="/home">首页</router-link>
      </van-tabbar-item>
      <!-- <van-tabbar-item icon="cart-o" name="goodslist">
        <router-link to="/goodslist">商品列表</router-link>
      </van-tabbar-item> -->
      <van-tabbar-item icon="search" name="category">
        <router-link to="/category">商品分类</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" name="shopcart">
        <router-link to="/shopcart">购物车</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="user-o" name="mine">
        <router-link to="/mine">我的</router-link>
      </van-tabbar-item>
      <!-- <van-tabbar-item icon="user-o" name="goods">
        <router-link to="/goods">订单</router-link>
      </van-tabbar-item> -->
      <!-- <van-tabbar-item icon="home-o" name="login">
        <router-link to="/login">登录</router-link>
      </van-tabbar-item> -->
    </van-tabbar>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
// const router = useRouter()

const router = useRouter();
const title = computed(() => {
  return router.currentRoute.value.name;
});
const active = ref(0)
const state = ref(true)
// console.log(state.value)
// const State = async (to) => {
//   if (to.path == 'goods') {
//     state.value = false
//   } else {
//     state.value = true
//   }
// }
// onMounted(() => {
//   State()
// })
const back = () => {
  history.back();
};
// router.beforeEach(async(from,to)=>{
//   if(to.path=='goods'){
//     state.value = false
//   }else{
//     state.value=true
//   }
// })
</script>

<style scoped>
.goods_list {
  position: fixed;
  left: 0;
  up: 0;
}
</style>