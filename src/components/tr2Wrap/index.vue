<template>
  <div class="blank">
    <div class="item" :ref="'tr'" v-for="(item, index) of textArr" :class="{ active: tabHeight[index] > 50 }"
      :key="item.name">
      {{ item.name }} {{ tabHeight[index] }}
      <el-tooltip v-if="tabHeight[index] > 50" class="box-item" effect="dark" placement="bottom">
        <template #content>
          <div style="max-width: 300px">
            {{ item.value }}
          </div>
        </template>
        {{ item.value }}
      </el-tooltip>
      <span v-else> {{ item.value }}</span>
    </div>
  </div>
</template>

<script setup>
import { onMounted, nextTick, ref } from "vue";
const tabHeight = ref([]); //容器存放高度
let tr = ref(null); //获取ref为tr的数组
let textArr = [
  { name: '0', value: '表格换行最多' },
  { name: '1', value: '表格换行最多两行,超出两行显示点点点' },
  { name: '2', value: '表格换行最多两行,超出两行显示点点点,两行之内没有hover展示效果,超出两行有hover效果' },
  { name: '3', value: '表格换行最多两行,超出两行显示点点点,两行之内没有hover展示效果,超出两行有hover效果' },
]
onMounted(() => {
  for (let i = 0; i < 4; i++) {
    let height = parseFloat(window.getComputedStyle(tr.value[i]).height);
    tabHeight.value.push(height);
  }
});
</script>

<style lang="scss" scoped>
.blank {
  width: 180px;

  .item {
    // border: 1px solid #ccc;
    line-height: 25px;
    background: #ccc;
    width: 100%;
    box-sizing: border-box;

    &.active {
      height: 50px;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      position: relative;

      .black {
        background: #000;
        position: absolute;
        top: 0px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        color: #fff;
      }
    }
  }
}
</style>