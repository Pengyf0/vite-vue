
<template>
  <div class="layout">
    <router-view></router-view>
  </div>
</template>
<script setup>
import { ref } from "vue";
import myHeader from "@/components/layout/header.vue";
import appMain from "@/components/layout/appMain.vue";

defineProps({
  msg: String,
});

const addCount = ref(0);
</script>

<style lang="scss" scoped>
.layout {
  min-height: 100vh;

  .my-content {
    height: calc(100vh - 48px);
    overflow: auto;
  }
}
</style>

