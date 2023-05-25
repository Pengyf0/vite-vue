
<template>
  <div id="myIdea" style="padding: 20px;">
    <div class="vuemin">
      <div class="title"> 简化版本Vue</div>
      <div>
        <iframe :src="'http://' + ip + ':5173/demo.html'" style="border:1px solid #d2d2d2" width="100%" height="600px"
          scrolling="auto"></iframe>
      </div>
    </div>
    <div>
      {{ count }}
      <el-button @click="incriment">点击监听数据</el-button>
      <el-button @click="toFullscreen">全屏</el-button>
      <el-button class="sonPage" @click="itemToScreen">子页面全屏</el-button>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, watchEffect, watch, onMounted } from "vue";
import screenfull from 'screenfull';
// if (screenfull.isEnabled) {
//   screenfull.request();
// }


function toFullscreen() {
  if (screenfull.isEnabled) {
    screenfull.request();
  }
  //   document.fullscreenEnabled =
  //     document.fullscreenEnabled ||
  //     document.mozFullScreenEnabled ||
  //     document.documentElement.webkitRequestFullScreen;
  // 
  //   function requestFullscreen(element) {
  //     if (element.requestFullscreen) {
  //       element.requestFullscreen();
  //     } else if (element.mozRequestFullScreen) {
  //       element.mozRequestFullScreen();
  //     } else if (element.webkitRequestFullScreen) {
  //       element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
  //     }
  //   }
  //   if (document.fullscreenEnabled) {
  //     requestFullscreen(document.documentElement);
  //   }
}
function itemToScreen() {
  const element = document.querySelector('.vuemin');
  if (screenfull.isEnabled) {
    screenfull.request(element);
  }
}

console.log('main.js', 'LAST_UPDATE_TIME', window.LOCAL_IP)
let ip = window.LOCAL_IP
// let ip;
// fetch('https://api.ipify.org?format=json').then(res => res.json())
//   .then(res => {
//     console.log(44, res)
//     const publicIp = res.ip
//     ip = publicIp.match(/\d+\.\d+\.\d+\.\d+/)[0]
//     console.log('本地', ip)
//   })
defineProps({
  msg: String,
});

const count = ref(0)
const user = reactive({ name: '张三' })
const arr = reactive([1, 2, 3, 4])
console.log(777, location)
// 综合定义方案
const originData = reactive({
  count: 0,
  user: {
    name: '张三'
  },
  arr: [1, 2, 3, 4]
})
const incriment = () => {
  originData.count++
  count.value++
  originData.user.name = '李四'
}
// 默认页面更新之前立即执行监听，懒执行开始
watchEffect(() => console.log('mount', count.value))
// 默认监听数据变化后的值，页面更新后不会立即执行
watch(count, (n, o) => {
  console.log('watch', n, o);
})


// 监听多个值
watch([count, originData.user], (newValues, prevValues) => {
  console.log('多个值变化', newValues[0], newValues[1].name)
})

// 立即监听
watch([count, originData.user], (newValues, prevValues) => {
  // console.log(newValues[0], newValues[1].name)
}, { deep: true, immediate: true })

onMounted(() => {
  console.log(11, document.fullscreenElement)
  console.log(22, document.fullscreenEnabled)
  console.log(33, document.isFullscreen)
  //   document.fullscreenElement: 当前全屏元素
  // document.fullscreenEnabled: 是否支持全屏
  // document.isFullscreen: 当前是否全屏
  // elem.requestFullscreen(container);
  // elem.requestFullscreen().catch(err => {
  // console.log(`Fullscreen request failed: ${err.message}`) 
  // document.addEventListener("fullscreenchange", () => { 
  // console.log("Exited fullscreen");
  // });
  // });
})
</script>

