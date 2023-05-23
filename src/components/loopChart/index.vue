<template>
  <div class="my-loop">
    <ul class="my-tab-title">
      <li class="titl" v-for="item in tableDate.tabTitle" :key="item">
        {{ item }}
      </li>
    </ul>
    <!-- @mouseenter="mouseIn()"
			@mouseleave="mouseLeave(500)" -->
    <div class="tableOut" id="tableOut" ref="tableOut">
      <div id="table" ref="table">
        <div class="tr" v-for="(item, ind) in tableDate.list" :key="ind">
          <div class="td">
            {{ item.rank > 9 ? item.rank : "0" + item.rank }}
          </div>
          <div class="td">{{ item.name }}</div>
          <div class="td">{{ item.person }}</div>
          <div class="td">{{ item.GDP }}</div>
        </div>
      </div>
      <div id="table2" ref="table2"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount, watch, } from "vue";
const emit = defineEmits(["closeRun"]);
const props = defineProps({
  tableDate: {
    //传入滚动数据
    type: Object,
    default: () => {
      return {
        tabTitle: ["排名", "城市", "人口(万)", "经济(万亿)"],
        list: [
          { name: "广州", rank: 1, person: 1880, GDP: 28000 },
          { name: "深圳", rank: 2, person: 1780, GDP: 30700 },
          { name: "佛山", rank: 3, person: 960, GDP: 12200 },
          { name: "惠州", rank: 4, person: 606, GDP: 5000 },
          { name: "广州", rank: 5, person: 1880, GDP: 28000 },
          { name: "深圳", rank: 6, person: 1780, GDP: 30700 },
          { name: "佛山", rank: 7, person: 960, GDP: 12200 },
          { name: "惠州", rank: 8, person: 606, GDP: 5000 },
          { name: "广州", rank: 9, person: 1880, GDP: 28000 },
          { name: "深圳", rank: 10, person: 1780, GDP: 30700 },
          { name: "佛山", rank: 11, person: 960, GDP: 12200 },
          { name: "惠州", rank: 12, person: 606, GDP: 5000 },
        ],
      };
    },
  },
  stop: {
    type: Boolean,
    default: false,
  },
});

//滚动逻辑块
let timer = null; //添加定时器滚动
// let tableOut = document.getElementById("tableOut");
// let table = document.getElementById("table");
// let table2 = document.getElementById("table2");
const tableOut = ref(null);
const table = ref(null);
const table2 = ref(null);
onMounted(() => {
  //
  //放在这个位置，不然获取不到dom
  scorll(20);
});
function scorll(t) {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
  tableOut.scrollTop = 0; //外层滚动距离
  if (props.tableDate.list.length > 10) {
    table2.value.innerHTML = table.value.innerHTML; //给个子元素
  }

  // timer = setInterval(scollTime, t);
}

function scollTime() {
  //外层滚动距离大于内层元素不使用滚动条的情况下为了适应视口中所用内容所需的最小高度
  if (tableOut.value.scrollTop >= table.value.scrollHeight) {
    tableOut.value.scrollTop = 0;
  } else {
    tableOut.value.scrollTop += 1;
  }
}
const mouseIn = () => {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
};
const mouseLeave = (t) => {
  if (!timer) {
    timer = setInterval(scollTime, t);
  }
  emit("closeRun");
};
watch(
  () => props.stop,
  (newValue, oldValue) => {
    newValue ? mouseIn() : mouseLeave(20);
  }
);
let x, y;
watch([x, y], ([newX, newY]) => {
  console.log(`x is ${newX} and y is ${newY}`)
})
onBeforeUnmount(() => {
  mouseIn();
});
</script>

<style lang="scss" scoped>
.my-loop {
  height: 100%;
  overflow: auto;
  background: #f6f6f6;

  .my-tab-title {
    height: 40px;
    line-height: 40px;
    display: flex;
    // background: rgba(51, 51, 52, 0.5);
    // color: #ff6600;
    padding: 0 5px;
    font-weight: 600;
    box-sizing: border-box;

    .titl {
      flex: 1;
    }
  }

  .tableOut {
    background: #fff;
    height: calc(100% - 40px);
    overflow: auto;

    #table,
    #table2 {
      .tr {
        height: 40px;
        line-height: 40px;
        display: flex;
        padding: 0 5px;
        font-weight: 600;
        box-sizing: border-box;

        .td {
          flex: 1;
        }
      }
    }
  }
}
</style>