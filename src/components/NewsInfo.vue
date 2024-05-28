<template>
    <div style="padding: 10px">
        <h1>{{ info.title }}</h1>
        <div v-html="info.content"></div>
    </div>
</template>

<script setup>
import { getNewsInfo } from '@/api/shop';
import { computed, onMounted, ref } from "vue";
import { useRoute } from 'vue-router';
const route = useRoute()
const info = ref({});
onMounted(() => {
    getNewsInfo1()
    // console.log(route)
})
const getNewsInfo1 = async () => {
    const res = await getNewsInfo(route.params.id);
    console.log(res);
    info.value = res.message[0];
    // info.value.content = route.params.content;
    // console.log(info.value.content);
    // console.log(route.params)
    // console.log(info.value)
    // console.log(info.value[0].title);
}
</script>

<style lang="scss" scoped></style>