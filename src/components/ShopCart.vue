<template>
  <div>
    <van-list>
      <!-- <van-nav-bar title="购物车" class="goods-list" left-text="返回" left-arrow @click-left="onClickLeft" /> -->
      <van-swipe-cell v-for="(goods, index) in store.state.shopcart.items" :key="index" right-width="110">
        <van-card :num="goods.num" tag="new" :price="goods.price" :desc="goods.sell_point" :title="goods.name"
          :thumb="goods.image" class="goods-card" @click="toGoods(goods)" />
        <template #right>
          <van-button square text="加入购物车" type="primary" class="delete-button" @click="add(goods)" />
          <van-button square text="移除购物车" type="danger" class="delete-button" @click="sub(goods)" />
        </template>
      </van-swipe-cell>
      <van-cell v-if="items.length > 0" class="price">商品总价为:{{ totalPrice }} </van-cell>
      <van-cell v-else>购物车中暂无商品</van-cell>
      <van-back-top />
    </van-list>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { showNotify } from 'vant';
import { computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const store = useStore();
const items = computed(() => {
  return store.state.shopcart.items
});
const totalPrice = computed(() => {
  return store.getters['shopcart/totalPrice']
});
onMounted(() => {
  let shopcart = localStorage.getItem('shopcart')
  if (shopcart != null) {
    shopcart = JSON.parse(shopcart)
    store.commit("shopcart/initShopCart", shopcart)
  }
});

const add = (goods) => {
  store.dispatch('shopcart/addToCart', goods)
  showNotify({ type: 'success', message: '添加成功' })
};
const sub = (goods) => {
  store.dispatch('shopcart/delFromCart', goods)
  showNotify({ type: 'danger', message: '删除成功' })
};
const toGoods = (goods) => {
  router.push({
    name: "商品详情",
    params: {
      id: goods.id,
      image: goods.image
    }
  })
};
// const onClickLeft = () => history.back()
</script>

<style lang="scss" scoped>
.price {
  margin: 0;
}

.delete-button {
  height: 50%;
  display: flex;
  flex-direction: column;
}
</style>