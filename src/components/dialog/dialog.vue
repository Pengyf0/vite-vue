<template>
  <div class="my-dialog">
    <div id="dia-bg" v-show="showDialog">
      <div class="dia-info">
        <div class="title">
          <div class="text">活动数据</div>
          <div class="close" @click="close">X</div>
        </div>
        <div class="dia-message">
          <div class="item" v-for="item in arrList" :key="item.rank">
            <div>{{ item.name }}</div>
            <div>32323232</div>
          </div>
        </div>
        <div class="dia-content">
          <div class="leftQuery">
            <div>
              优惠券id:
              <br />
              <input />
            </div>
            <div>
              行业类别:
              <br />
              <input />
            </div>
            <div class="buttons">查询</div>
          </div>
          <div class="rightMessage">
            <div class="queryItem">
              <div class="title">优惠券数据</div>
              <div class="item" v-for="item in 4" :key="item">
                <div>发券总数</div>
                <div>32323232</div>
              </div>
            </div>
            <div class="queryItem">
              <div class="title">漏斗分析</div>
              <div class="item" v-for="item in 4" :key="item">
                <div>发券总数</div>
                <div>32323232</div>
              </div>
            </div>
            <div class="queryItem">
              <div class="title">交易数据</div>
              <div class="item" v-for="item in 4" :key="item">
                <div>发券总数</div>
                <div>32323232</div>
              </div>
            </div>
            <div class="queryItem">
              <div class="title">交易统计</div>
              <div class="item" v-for="item in 4" :key="item">
                <div>发券总数</div>
                <div>32323232</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    "show-dialog": {
      //默认传入图表id,以及X轴数组Y轴数据，格式如下默认
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      myChart: null,
      arrList: [
        { rank: 1, name: "累计领券数", val: 2332332 },
        { rank: 2, name: "累计核券数", val: 2332332 },

        { rank: 3, name: "当日领券数", val: 2332332 },
        { rank: 4, name: "当日核券数", val: 2332332 },

        { rank: 5, name: "每月领券数", val: 2332332 },
        { rank: 6, name: "当月核券数", val: 2332332 },

        { rank: 7, name: "当月日均领券数", val: 2332332 },
        { rank: 8, name: "当月日均核券数", val: 2332332 },
      ],
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script> 

<style lang="scss" scoped>
#dia-bg {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;

  .dia-info {
    // background-color: rgba(33, 33, 57);
    background: #fff;
    width: 800px;
    height: 650px;
    position: fixed;
    top: 10%;
    left: 50%;
    margin-left: -400px;
    text-align: center;

    .title {
      height: 60px;
      color: #000;

      .text {
        float: left;
        text-align: center;
        font-size: 30px;
        height: 60px;
        line-height: 60px;
        width: 740px;
      }

      .close {
        float: right;
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #000;
        margin-right: 10px;
        margin-top: 10px;
        font-size: 35px;
        cursor: pointer;

        &:hover {
          color: black;
          font-weight: bolder;
        }
      }
    }

    .dia-message {
      height: 180px;
      width: 95%;
      margin: 0 auto;
      border: 1px solid black;
      font-size: 20px;
      line-height: 1.3em;
      padding: 1em;
      box-sizing: border-box;
      text-align: center;
      overflow: hidden;

      .item {
        height: 90px;
        width: 25%;
        float: left;
        color: #000;

        div {
          font-size: 18px;
        }

        div+div {
          color: #f7bd27;
          font-family: "DINAlternate-Bold";
          font-weight: bold;
          font-size: 22px;
        }
      }
    }

    .dia-content {
      height: 380px;
      width: 95%;
      margin: 0 auto;
      margin-top: 20px;

      .leftQuery {
        width: 140px;
        float: left;
        border: 1px solid #ccc;
        height: 100%;

        div {
          height: 80px;
          padding-top: 20px;
          color: #000;
          text-align: left;
          padding-left: 30px;
          font-size: 20px;

          input {
            height: 40px;
            width: 100px;
            margin: 0 auto;
          }
        }

        .buttons {
          border: 1px solid black;
          padding: 0;

          height: 50px;
          width: 100px;
          margin-left: 30px;
          border-radius: 10px;
          text-align: center;
          line-height: 50px;

          &:hover {
            background: #ecf5ff;
            color: #409eff;
          }
        }
      }

      .rightMessage {
        margin-left: 150px;
        height: 100%;
        border: 1px solid #ccc;

        .queryItem {
          float: left;
          height: 160px;
          width: 260px;
          border: 1px solid #ccc;
          margin-left: 20px;
          margin-top: 20px;

          .item {
            height: 60px;
            width: 50%;
            float: left;
            color: #000;
            padding-top: 20px;
            box-sizing: border-box;

            div {
              font-size: 18px;
            }

            div+div {
              color: #f7bd27;
              font-family: "DINAlternate-Bold";
              font-weight: bold;
              font-size: 22px;
            }
          }
        }
      }

      .title {
        height: 36px;
        font-size: 18px;
        white-space: nowrap;
        padding-left: 20px;
        background: linear-gradient(90deg,
            rgba(60, 194, 234, 0.63) 0%,
            rgba(255, 102, 0, 0) 100%);
        width: 267px;
        display: flex;
        align-items: center;
        color: #fff;
      }
    }
  }
}
</style>