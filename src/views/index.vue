
<template>
  <div class="appMain">
    <myHeader></myHeader>
    <router-view></router-view>
  </div>
</template>
<script setup>
import myHeader from "@/components/layout/header.vue";

defineProps({
  msg: String,
});
</script>

