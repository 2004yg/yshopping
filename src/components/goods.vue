<template>
    <!-- <div>
        <van-nav-bar title="商品分类" left-text="返回" left-arrow @click-left="onClickLeft" />
        <div class="menu">
            <div class="menu-left">
                <ul>
                    <li class="menu-item" v-for="(menu, index) in menus" :key="index"
                        :class="{ current: index === currentIndex }" @click="clickList(index)">
                        <p class="text">{{ menu.name }}</p>
                    </li>
                </ul>
            </div>
            <div class="menu-right">
                <ul>
                    <li class="cate" v-for="(menu, index1) in menus" :key="index1">
                        <h4 class="cate-title">{{ menu.name }}</h4>
                        <ul class="cate-item">
                            <li v-for="(item, index2) in menu.sub" :key="index2">
                                <a href="#" class="cate-item-wrapper">
                                    <div class="cate-item-img">
                                        <img :src="item.image" alt="">
                                    </div>
                                    <span>{{ item.name }}</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div> -->
    <div class="container">
        <!-- <van-nav-bar title="商品详情" left-text="返回" left-arrow @click-left="onClickLeft" /> -->
        <div>
            <div class="title">
                {{ info.name }}
            </div>
            <div class="title">
                <img class="icon" :src="info.image">
            </div>
            <div class="title">
                <span style="font-size: 15px;">{{ info.sell_point }}</span>
            </div>
            <div class="title">
                价格:<span style="font-size: 20px;">{{ info.price }}元</span>
            </div>
            <div class="title">
                剩余数量:<span style="font-size: 20px;">{{ info.num }}件</span>
            </div>
        </div>

        <van-action-bar style="margin-bottom: 50px;">
            <van-action-bar-icon icon="chat-o" text="客服" />
            <van-action-bar-icon icon="shop-o" text="店铺" />
            <van-action-bar-button color="#be99ff" type="warning" text="加入购物车" @click="addToCart(info)" />
            <van-action-bar-button color="#7232dd" type="danger" text="立即购买" />
        </van-action-bar>
    </div>
</template>

<script setup>
import { getGoodsInfo } from "@/api/shop";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { showNotify } from 'vant';
import { useStore } from 'vuex';

// const baseUrl = 'http://1.94.14.36/api/';
const route = useRoute();
const info = ref({});
const store = useStore()

onMounted(() => {
    // console.log(route.params);
    getInfo();
});
const getInfo = async () => {
    const res = await getGoodsInfo(route.params.id);
    info.value = res.data;
    info.value.image = route.params.image;
    // console.log(info.value.name)
    // console.log(info.value)
}
const addToCart = (info) => {
    let shopcart = localStorage.getItem('shopcart')
    if (shopcart == null) {
        //代码错误
        localStorage.setItem("shopcart", JSON.stringify([info]))
    } else {
        shopcart = JSON.parse(shopcart);
        //goods在shopcart中存在
    }
    store.dispatch('shopcart/addToCart', info)
    showNotify({ type: 'success', message: '添加成功' })
}
</script>

<style scoped>
.container {
    position: relative;
    width: 100%;
    height: 100%;
}

/* .title2 {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
} */
.title {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
}
</style>