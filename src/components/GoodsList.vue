<template>
    <div>
        <van-list>
            <!-- <van-nav-bar title="商品列表" class="goods-list" left-text="返回" left-arrow @click-left="onClickLeft" /> -->
            <van-swipe-cell v-for="(goods, index) in goodsList" :key="index" right-width="110">
                <van-card :num="goods.num" tag="new" :price="goods.price" :desc="goods.sell_point" :title="goods.name"
                    :thumb="goods.image" class="goods-card" @click="toGoods(goods)" />
                <template #right>
                    <van-button square text="加入购物车" type="primary" class="delete-button" @click="addToCart(goods)" />
                </template>
            </van-swipe-cell>
            <van-back-top />
        </van-list>
    </div>
</template>
<script setup>
import { showNotify } from 'vant';
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
// import { getGoodsList } from '@/api/shop';
const router = useRouter()
const store = useStore()
const goodsList = computed(() => {
    return store.state.goodslist.goodsList
})
const fetchGoodsList = async () => {
    await store.dispatch('goodslist/initGoodsList')
}
onMounted(async () => {
    await fetchGoodsList()
    // getid
    // console.log(store.state.goodslist)
    // const shopcart = JSON.parse(localStorage.getItem('shopcart'))
    // await store.dispatch('shopcart/initShopCart', shopcart)
})
const addToCart = (goods) => {
    let shopcart = localStorage.getItem('shopcart')
    if (shopcart == null) {
        //代码错误
        localStorage.setItem("shopcart", JSON.stringify([goods]))
    } else {
        shopcart = JSON.parse(shopcart);
        //goods在shopcart中存在
    }
    store.dispatch('shopcart/addToCart', goods)
    showNotify({ type: 'success', message: '添加成功' })
}
// const onClickLeft = () => history.back()
const toGoods = (goods) => {
    router.push({
        name: "商品详情",
        params: {
            id: goods.id,
            image: goods.image
        }
    })
}
</script>

<style lang="scss" scoped>
.goods-card {
    margin: 0;
    background-color: white;
}

.delete-button {
    height: 100%;
}
</style>
