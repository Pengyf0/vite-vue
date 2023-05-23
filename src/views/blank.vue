
<template>
	<div class="">
		首页{{ addCount }}
		<ul>
			<li>Lorem ipsum dolor sit amet.</li>
			<li>Perspiciatis deleniti architecto saepe libero?</li>
			<li>Odit autem tempora mollitia neque.</li>
			<li>Dignissimos voluptatum animi autem fugiat!</li>
			<li>Maiores quibusdam quaerat illo doloremque?</li>
		</ul>
	</div>
</template>
<script setup>
import { ref } from "vue";

defineProps({
	msg: String,
});

const addCount = ref(0);
</script>

