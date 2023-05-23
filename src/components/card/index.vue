
<template>
  <div class="cardCss">
    <div class="mini-card" v-for="(item, ind) in arrIndex" :key="ind" @click="tabChange(ind)">
      {{ item.title }}
      <br>
      {{ item.author }}
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const emit = defineEmits(["titleClick"]);
defineProps({
  arrIndex: {
    type: Object,
    default: () => { }
  },
})
function tabChange(ind) {
  emit('titleClick', ind)
}


</script>

<style>
.cardCss {
  padding: 3rem 0 3rem 2rem;
  margin: 0;
  display: flex;
  overflow-x: scroll;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  margin: 0 0 1.5rem;
  position: relative;
}

.mini-card {
  min-width: 300px;
  min-height: 350px;
  box-shadow: -2rem 0 3rem -2rem #000;
  padding: 1.5rem;
  border-radius: 16px;
  background: linear-gradient(85deg, #434343, #262626);
  color: #fff;
  display: flex;
  flex-direction: column;
  transition: .2s;
  margin: 0;
}

.mini-card:not(:first-child) {
  margin-left: -130px;
  box-shadow: -3rem 0 3rem -2rem #000;
}

.mini-card:hover {
  transform: translateY(-1rem) rotate(3deg);
  margin-right: 6em;
}

&.is-active {
  color: $active;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  position: relative;

  &:before {
    color: #000;
    background: $active;
    position: absolute;
    border-radius: 50%;
    box-shadow: 0 0 0 999px rgba(0, 0, 0, 0.8);
  }
}
</style>

