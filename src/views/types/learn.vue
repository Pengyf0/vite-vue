
<template>
  <div class="my-learn">
    <div class="leftBar">
      <ul>
        <li><span>0</span> <a href="#loopChart">轮播列表</a></li>
        <li><span>1</span> <a href="#ES6">Es6</a></li>
        <li><span>2</span> <a href="#A">A标签</a></li>
        <li><span>3</span> <a href="#myDialog">自定义弹框</a></li>
        <li><span>4</span> <a href="#myTr2">超出换行以及hover效果</a></li>
      </ul>
    </div>
    <div class="rightShow">
      <div class="item" id="loopChart">
        <span>滚动列表</span>
        <button @click="isStop = false">启动</button>
        <button @click="isStop = true">停止</button>
        <hr />
        <loopChart :stop="isStop" @closeRun="isStop = false" style="height: 300px"></loopChart>
      </div>
      <div class="item" id="ES6">
        ES6的常见属性
        <hr />
        <pre>
  let const,结构赋值，includes,symbol,set,map,=>,...rest函数
  proxy promise async
  				</pre>
      </div>
      <div class="item" id="A"></div>
      <div class="item" id="myDialog">
        <button @click="dialogShow = true">打开弹窗{{ dialogShow }}</button>
        <button @click="dialogShow2 = true">打开弹窗2{{ dialogShow }}</button>
        <hr />
        <myDialog :show-dialog="dialogShow" @close="dialogShow = false"></myDialog>
        <myDialog2 :show-dialog="dialogShow2" @close="dialogShow2 = false"></myDialog2>
      </div>
      <div class="item" id="myTr2">
        <myTr2></myTr2>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
import loopChart from "@/components/loopChart/index.vue";
import myDialog from "@/components/dialog/index.vue";
import myDialog2 from "@/components/dialog/dialog.vue";
import myTr2 from "@/components/tr2Wrap/index.vue";

defineProps({
  msg: String,
});

const name = reactive({
  count: 0,
});
const isStop = ref(true); //默认关闭
const dialogShow = ref(false);
const dialogShow2 = ref(false);
</script>

<style lang="scss" scoped>
.my-learn {
  height: 100%;

  .leftBar {
    width: 280px;
    box-sizing: border-box;
    position: fixed;
    height: 100%;
    padding: 0 20px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 0;
    }

    ul li {
      height: 30px;
      line-height: 30px;
    }
  }

  .rightShow {
    margin-left: 280px;
    height: 100%;
    background: #f2f2f2;
    border-left: 1px solid rgba($color: #200200, $alpha: 0.7);
    padding: 20px;
    box-sizing: border-box;
    overflow-y: scroll;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      width: 5px;
    }

    .item {
      width: 580px;
      min-height: 200px;
      padding: 20px;
      border-radius: 10px;
      background: #fff;

      &+.item {
        margin-top: 20px;
      }

      pre {
        margin-left: auto;
        margin-right: auto;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 0.7rem;
        line-height: 1.2;
        color: #fff;
        background: #111;
        border-radius: 5px;
      }
    }
  }
}
</style>

