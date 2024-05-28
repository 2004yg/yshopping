<template>
    <div>
        <van-tabs swipeable v-model:active="K1" @change="change(true)">
            <van-tab v-for="item in menus" :key="item" :title="item.name" />
        </van-tabs>
        <van-tabs swipeable v-model:active="K2" @change="change(false)">
            <van-tab v-for="sitem in subList" :key="sitem" :title="sitem.name" />
        </van-tabs>
        <div>
            <van-card v-for="item in goodsList" :key="item" :num="item.num" tag="new" :price="item.price"
                :desc="item.sell_point" :title="item.name" :thumb="item.image" class="goods-card"
                @click="toGoods(item)" />
        </div>
    </div>
</template>
<script setup>
import { category, getGoodsList } from '@/api/shop';
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

// 定义分类和商品列表
const router = useRouter();
const store = useStore();
const menus = ref([]);
const K1 = ref(0);
const K2 = ref(0);
const subList = ref([]);
const goodsList = ref([]);

onMounted(() => {
    getCateGory();
    fetchGoodsList();
});

// 获取所有商品列表
const fetchGoodsList = async () => {
    await store.dispatch('goodslist/initGoodsList');
    goodsList.value = store.state.goodslist.goodsList;
};

// 获取分类信息
const getCateGory = async () => {
    const res = await category();
    menus.value = res.data;
    change(true);
    // console.log(menus.value);
    // console.log(menus.value[0].sub[0].name)
};
const change = (f) => {
    if (f) {
        K2.value = 0;
        subList.value = menus.value[K1.value].sub;
    }
    getList();
};
const getList = async () => {
    const res = await getGoodsList(menus.value[K1.value].sub[K2.value].id);
    goodsList.value = res.data;
    // console.log(goodsList.value);
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
</script>


<style lang="scss" scoped>
ul {
    margin: 0;
    padding: 0;
}

li {
    list-style: none;
}

.menu {
    display: flex;
    position: absolute;
    text-align: center;
    top: 40px;
    bottom: 50px;
    width: 100%;
    overflow: hidden;

    .menu-left {
        flex: 0 0 80px;
        width: 80px;
        background: #f3f5f7;

        .menu-item {
            height: 54px;
            width: 100%;

            .text {
                width: 100%;
                line-height: 54px;
                margin-bottom: 0;
            }
        }

        .current {
            width: 100%;
            background: #fff;

            .text {
                color: red;
            }
        }
    }

    .menu-right {
        flex: 1;
        background: #fff;

        .cate {
            height: 100%;

            .cate-title {
                margin: 0;
                text-align: left;
                font-size: 14px;
                color: #333;
                font-weight: bold;
                padding: 10px;
            }

            .cate-item {
                padding: 7px 10px 10px;
                display: flex;
                overflow: hidden;
                flex-flow: row wrap;

                li {
                    width: 33.3%;

                    .cate-item-wrapper {
                        .cate-item-img {
                            width: 100%;

                            img {
                                width: 70px;
                                height: 70px;
                            }
                        }

                        span {
                            display: inline-block;
                            font-size: 14px;
                            color: #333;
                        }
                    }
                }
            }
        }
    }
}
</style>