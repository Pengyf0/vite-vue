
<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script setup>
import { ref, onBeforeMount, onMounted } from "vue";

defineProps({
  msg: String,
});
// let timeStart = performance.now()
// console.log(1, timeStart)
// onMounted(() => {
//   let timeMounted = performance.now()
//   console.log(1, timeMounted);
//   const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart // 页面加载完成的时间
//   const whiteScreenTime = timeMounted - timeStart // 白屏时间
//   const firstScreenTime = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart // 首屏时间
//   console.log('页面加载完成时间：', performance.timing.loadEventEnd, performance.timing.navigationStart, loadTime)
//   console.log('白屏时间：', whiteScreenTime)
//   console.log('首屏时间：', firstScreenTime)
// })

const addCount = ref(0);
</script>

<style lang="scss" scoped></style>

