
<template>
  <div>大量数据优化{{ addCount }}5554
    <div>
      vue2
      <br>
      Object.freeze();
      will-change:auto;
      list.length=10000;
    </div>

    <div v-loading="showLoading" element-loading-text="数据加载中...">
      <p>
        显示/隐藏 table：
        <el-switch :model-value="showTable" @click="switchTableShow"></el-switch>
      </p>
      <div v-if="showTable">
        <div v-for="(item, index) of arrtList" :key="index">
          {{ item }}{{ index }}
        </div>
      </div>
    </div>

  </div>
</template>
<script setup>
import { ref, onBeforeUnmount } from "vue";

import { ElMessage } from "element-plus"

defineProps({
  msg: String,
});
let showLoading = ref(false);
let showTable = ref(false);
let timer = null

const switchTableShow = () => {
  // 先展示 loading
  showLoading.value = true;
  // 200ms 后再修改 table 是否显示，防止和 loading 合并到一个渲染周期，导致 loading 不显示
  setTimeout(() => {
    let startTime = +new Date();
    showTable.value = !showTable.value; // 修改 table 显示，会形成 script 阻塞
    showLoading.value = false; // 这里的 loading 关闭，会在 table 阻塞完成后渲染关闭 dom
    // 创建一个宏任务，等上面阻塞的微任务执行完成后，再显示计算耗时
    setTimeout(() => {
      let endTime = +new Date();
      ElMessage.success(`渲染耗时：${(endTime - startTime) / 1000}s`);
    }, 0);
  }, 200);
};
let arrtList = ref([])
function getList() {
  return new Promise(function (resolve, reject) {
    var ajax = new XMLHttpRequest();
    ajax.open('get', 'http://127.0.0.1:8000');
    ajax.send();
    ajax.onreadystatechange = function () {
      if (ajax.readyState == 4 && ajax.status == 200) {
        // console.log(JSON.parse(ajax.responseText))
        // arrtList.value = JSON.parse(ajax.responseText)
        resolve(JSON.parse(ajax.responseText))
      }
    }
  })
}
getList().then((list) => {
  console.log('获取', list)
  const total = list.length
  const page = 0
  const limit = 2000
  const totalPage = Math.ceil(total / limit)
  const render = (page) => {
    if (page >= totalPage) return
    timer = setTimeout(() => {
      for (let i = page * limit; i < page * limit + limit; i++) {
        const item = list[i]
        arrtList.value.push(item)
      }
      console.log('当前', arrtList.value.length)
      render(page + 1)
    }, 1000)
  }
  render(page)
})
onBeforeUnmount(() => {
  clearTimeout(timer)
})
console.log(44, window.performance)
// console.log(window.performance.timing.loadEventEnd - window.performance.timing.navigationStart)


const addCount = ref(0);
</script>

<style>
.plan {
  will-change: transform;
}
</style>

