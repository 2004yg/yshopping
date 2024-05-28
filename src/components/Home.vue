<template>
    <div>
        <!-- <van-nav-bar title="首页"/> -->
        <van-notice-bar left-icon="volume-o"
            text="欢迎光临徐凤年超市，本购物广场为了给您提供一个整洁、美丽、完善的购物环境，本购物广场特别奉送，衣，食，住，行，育，乐，等两万余种生活用品，供您选购。如果您有任何宝贵的建议，欢迎您随时提供给我们，同时，也希望您将我们的优点，告诉您的亲朋好友。感谢您的光临，敬祝您购物愉快，谢谢！" />
        <div>
            <van-swipe :autoplay="2500" indicator-color="white" duration="200">
                <van-swipe-item v-for="item1 in imglist" :key="item1" style="text-align: center;">
                    <img style="height: 100%;width: 100%;" class="icon" :src="item1.img" alt="">
                </van-swipe-item>
            </van-swipe>
        </div>
        <div style="text-align: center;">部分商品</div>
        <van-swipe :autoplay="3200" indicator-color="white" duration="350">
            <van-swipe-item v-for="item in imgList" :key="item" style="text-align: center;">
                <img class="icon" :src="item.image" alt="">
            </van-swipe-item>
        </van-swipe>
        <div style="text-align: center;">新闻资讯</div>
        <van-swipe-cell v-for="(item, index) in newsList" :key="index" right-width="110">
            <van-card :title="item.title" :thumb="item.img_url" class="goods-card" @click="info(item.id)" />
        </van-swipe-cell>
    </div>
</template>

<script setup>
import { getGoodsList, getNews, getImgs } from '@/api/shop';
// import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const imgList = ref([]);
const newsList = ref([])
const imglist = ref([])

const getimglist = async () => {
    const res1 = await getImgs();
    imglist.value = res1.data;
    // console.log(imglist.value);
};
// const router = useRouter()
const getnews = async () => {
    const res1 = await getNews();
    // console.log(res1);
    newsList.value = res1.message;
    // console.log(newsList.value);

};
const getImgList = async () => {
    const res = await getGoodsList();
    imgList.value = res.data;
    // console.log(imgList.value);
};
const info = (id) => {
    router.push({
        name: "新闻详情",
        params: {
            id: id,

        }
    });
}
// const imgArr = ref([])
onMounted(() => {
    getImgList()
    getnews()
    getimglist()
});
</script>
<style scoped>
.icon {
    height: 200px;
}
</style>