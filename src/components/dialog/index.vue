<template>
  <div class="my-dialog">
    <div id="dia-bg" v-show="showDialog">
      <div class="dia-info">
        <div class="title">
          <div class="text">欢迎光临智慧城</div>
          <div class="close" @click="close">X</div>
        </div>
        <div class="dia-message">
          本店电竞配置：
          <br />
          电竞区 2080 8G 超级雕 可最高画质畅玩3a大作 稳定帧数
          <br />
          高端区 2060 8G旗舰显卡 16g大内存
          <br />
          包房区 2060 8G 旗舰显卡 16g大内存 还有女生专属包间 专属猛男粉
          <br />
          休闲区 最低可6元起畅玩哦=J
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["close"]);
defineProps({
  "show-dialog": {
    type: Boolean,
    default: false,
  },
});
const close = () => {
  emit("close");
};
</script>

<style lang="scss" scoped>
#dia-bg {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: hsla(0, 0%, 51%, 0.9);
  z-index: 1000;

  .dia-info {
    background: #fff;
    width: 200px;
    height: 240px;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-left: -100px;
    margin-top: -120px;
    border-radius: 5%;
    text-align: center;

    .title {
      height: 30px;
      border-bottom: 1px solid grey;
      line-height: 30px;

      .text {
        float: left;
        width: 170px;
        padding: 0 10px;
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .close {
        float: right;
        width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        color: gray;
        margin-right: 5px;
        margin-top: 5px;
        cursor: pointer;

        &:hover {
          color: black;
        }
      }
    }

    .dia-message {
      text-align: left;
      font-size: 12px;
      line-height: 1.3em;
      padding: 1em;

      br {
        margin-top: 10px;
      }
    }
  }
}
</style>