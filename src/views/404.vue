
<template>
	<div class="">抱歉，出错了！</div>
</template>
<script setup>
import { ref } from "vue";

defineProps({
	msg: String,
});

const addCount = ref(0);
</script>

