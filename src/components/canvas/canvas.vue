
<template>
  <div class="canvas">
    <canvas height="145" width="200" id="canvas"></canvas>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";

defineProps({
  msg: String,
});

const addCount = ref(0);
onMounted(() => {
  let canvas = document.querySelector('#canvas')
  console.log(canvas, 33)
  if (canvas.getContext) {
    let context = canvas.getContext('2d')
    console.log(context)
    //导出图片
    // let imgUrl = canvas.toDataURL("image/png")
    // let img =  document.createElement('img');
    // document.body.appendChild(img)
    //绘制两个背景图图形
    context.fillStyle = "#00ff00";
    context.fillRect(10, 10, 50, 50)
    context.fillStyle = "rgba(0,0,255,0.5)";
    context.fillRect(30, 30, 50, 50)
    context.strokeStyle = "skyblue"
    context.strokeRect(60, 60, 50, 50)

  }
})


</script>

<style lang="scss" scoped>
.canvas {}
</style>

