
<template>
  <div class="">随笔
    <div>
      {{ count }}
      <el-button @click="incriment">点击监听数据</el-button>
    </div>
    <br>
    <div class="vuemin">
      简化版本Vue
      <div>
        <iframe :src="'http://' + ip + ':5173/demo.html'" style="border:1px solid black" width="700px" height="600px"
          scrolling="auto"></iframe>
      </div>

    </div>
  </div>
</template>
<script setup>
import { ref, reactive, watchEffect, watch } from "vue";
// let ip;
// fetch('https://api.ipify.org?format=json').then(res => res.json())
//   .then(res => {
//     console.log(44, res)
//     const publicIp = res.ip
//     ip = publicIp.match(/\d+\.\d+\.\d+\.\d+/)[0]
//     console.log('本地', ip)
//   })
console.log('main.js', 'LAST_UPDATE_TIME', window.LOCAL_IP)
let ip = window.LOCAL_IP

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
</script>

