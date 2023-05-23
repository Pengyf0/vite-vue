
<template>
  <div class="head">
    <div class="content">
      <ul class="titleLeft">
        <li v-for="(item, ind) in titlList.list" @click="router.push(item.path)" :key="item.path">
          {{ item.title }}
        </li>
      </ul>
      <ul class="titleRight">
        <li>消息</li>
        <li>收藏</li>
        <li>历史</li>
        <li @click="router.push('/myZoom')">我的</li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const route = useRoute();
const router = useRouter();
console.log("路由", router);

defineProps({
  msg: String,
});

const addCount = ref(0);
const titlList = reactive({
  list: [
    { title: "首页", path: "/" },
    { title: "书库", path: "/book" },
    { title: "计划", path: "/plan" },
    { title: "学习", path: "/learn" },
    { title: "随笔", path: "/idea" },
  ],
});
</script>

<style lang="scss" scoped>
.head {
  // position: relative;
  height: 48px;
  // background: #5cadff;
  background: #24292f;
  color: #fff;

  .content {
    position: absolute;
    top: 0;
    z-index: 1002;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    max-width: 2560px;
    width: 100%;
    overflow: auto;
    height: 48px;
    box-sizing: border-box;

    .titleLeft {
      display: flex;
      align-items: center;
      flex-shrink: 0;

      li {
        width: 100px;
        cursor: pointer;
        text-align: center;
        height: 40px;
        line-height: 40px;
        border-radius: 4px;

        &:hover {
          color: rgba(255, 255, 255, 0.7);
        }
      }
    }

    // .centerSpace {
    //   flex: 1 auto;
    //   height: 38px;
    // }

    .titleRight {
      display: flex;
      align-items: center;
      margin-left: 10px;

      li {
        width: 100px;
      }
    }
  }
}
</style>

