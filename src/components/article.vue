<template>
  <div class="article">
    <header>{{ arrData.title }}</header>
    <pre>{{ arrData.article }}</pre>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
const arr = reactive([])

let obj = defineProps({
  arrData: {
    type: Object,
    default: () => { }
  },
});
console.log(obj.arrData)
</script>

<style lang="scss" scoped>
.article {
  min-height: 100vh;
  overflow: auto;

  header {
    text-align: center;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
  }

  color: #fff;
  background: linear-gradient(to bottom right, #45a88b, #3a5272);
}
</style>