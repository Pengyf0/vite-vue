
<template>
  <div class="mainPage">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          防抖+截流
        </div>
      </template>
      <div class="debounce">
        <input type="text" v-model="ipt" @input="ipt2">
        <br>
        0.8秒 {{ iptchange }}
        <div style="margin-top:20px">
          <el-button type="primary" @click="throttleFn">节流点击</el-button>
          <br>
          2秒 {{ count }}
        </div>
      </div>
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          websoket聊天室
          <button @click="closeSoket">close</button>
        </div>
      </template>
      <div class="webSocket">
        <div id="chat-container">
          <!-- {{ messageArr }} -->
          <p v-for="(item, ind) of messageArr" :key="ind">{{ item }}</p>
        </div>
        <input type="text" v-model="soketMessage">
        <el-button type="primary" size="small" @click="toSendMessage">Send</el-button>
      </div>
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          加载中
        </div>
      </template>
      <div class="loadOut">
        <div class="loadText">
          <span style="--i:0">正</span>
          <span style="--i:1">在</span>
          <span style="--i:2">加</span>
          <span style="--i:3">载</span>
          <span style="--i:4">中</span>
          <span style="--i:5">.</span>
          <span style="--i:6">.</span>
          <span style="--i:7">.</span>
        </div>
      </div>
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          https://uiverse.io/
        </div>
      </template>
      <div class="cardOut">
        <div class="card">
          <div class="card-info">
            <p class="title">Magic Card</p>
          </div>
        </div>
      </div>
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          echartsDemo
        </div>
      </template>
      <div ref="mychart" class="chart"></div>
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>步骤条</span>
        </div>
      </template>
      <div class="mySteps">
        <div class="step"></div>
        <div class="bar"></div>
        <div class="step"></div>
        <div class="bar"></div>
        <div class="step"></div>
      </div>
      <div class="mySteps2">
        <div class="step"></div>
        <div class="step"></div>
      </div>
      <div class="mySteps3">
        <div class="halo"></div>
      </div>
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          Button
        </div>
      </template>
      <button class="btnPrimary">
        点击波纹
      </button>
      <div class="btn2">
        <button class="btnPrimary2">
          刀光一闪
        </button>
      </div>
      <div class="btn3">
        <button class="btnPrimary3">
          霓虹灯光
        </button>
      </div>

    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          图片变换
        </div>
      </template>
      <div class="imgChange">
        <images :images="imgs"></images>
      </div>

    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          canvas图片
        </div>
      </template>
      <div class="canDemo">
        <canvasDemo></canvasDemo>
      </div>

    </el-card>



  </div>
</template>
<script setup>
import { ref, onMounted, inject, reactive } from "vue";
import { debounce, throttle2 } from "@/utils/debounce.js"
import images from "@/components/mouseImg/CompareImage.vue"
import canvasDemo from "@/components/canvas/canvas.vue"

import bg6 from '@/assets/images/bg6.jpeg'
import bg7 from '@/assets/images/bg7.jpeg'

const imgs = ref([bg6, bg7])




let ip = window.LOCAL_IP

// import * as echarts from 'echarts'
const echarts = inject('echarts')

defineProps({
  msg: String,
});

const count = ref(0);
let ipt = ref(null);
let iptchange = ref('');

//防抖函数
// const iptChange = (e) => {
//   if (timer) clearTimeout(timer);
//   timer = setTimeout(() => ipt.value = e.target.value, 2000)
// }
function iptChange() {
  iptchange.value = ipt.value
  console.log(77)
  // 调用接口获取数据
}

const ipt2 = debounce(iptChange, 800)

//节流函数
function addCount() {
  count.value++
}
const throttleFn = throttle2(addCount, 2000)


//websoket 交互
// createWebSocket(global_callback)
// 
let soketMessage = ref(null)
let messageArr = ref([])

// function global_callback(msg) {
//   console.log(7777, messageArr.value)
//   console.log("websocket的回调函数收到服务器信息：" + JSON.stringify(msg));
// messageArr.value.push(JSON.stringify(msg))
// console.log("收到服务器信息：" + msg);
// }
// function closeSend() {
//   closeSoket()
// }
let socket;
socket = new WebSocket(`ws://${ip}:8800`)
socket.addEventListener('open', () => { messageArr.value.push('连接成功~') })
socket.addEventListener('close', () => { messageArr.value.push('连接关闭!') })

socket.onmessage = (message) => {
  console.log(`Received message => ${message.data}`);
  receivedMessage(message)
  // 将消息展示在页面上，如添加到聊天记录等
};
function toSendMessage() {
  messageArr.value.push(soketMessage.value)
  socket.send(soketMessage.value)
  soketMessage.value = ''
}
function receivedMessage(msg) {//获取数据
  let result = null;
  console.log('获得数据', msg.data)
  if (msg.data instanceof Blob) {//单条消息获取
    var reader = new FileReader();
    reader.readAsText(msg.data, 'utf-8');
    reader.onload = () => {
      result = reader.result
      messageArr.value.push(result)
      console.log('数据1', messageArr.value)
    }
  } else {//获取历史消息
    result = JSON.parse(msg.data);
    console.log('数据2', result)
    result.forEach(element => {
      messageArr.value.push(element)
    });
  }
}
function closeSoket() {
  socket.close()
}
let mychart = ref(null)
onMounted(() => {
  let chart1 = echarts.init(mychart.value);
  // 绘制图表
  chart1.setOption({
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  });
  addWave()
})

function addWave() {//增加按钮波纹
  let box = document.querySelector('.btnPrimary');
  box.addEventListener('click', function (e) {
    let boundingBox = this.getBoundingClientRect()
    let x = e.clientX - boundingBox.left
    let y = e.clientY - boundingBox.top
    let newSpan = document.createElement('span')
    box.appendChild(newSpan)
    newSpan.style.cssText += `left:${x}px;top:${y}px;position: absolute;
      transform: translate(-50%, -50%);
      width: 0px;
      height: 0px;
      opacity: 0.5;
      border-radius: 50%;
      background: #fff;
      pointer-events: none;
    `
    newSpan.animate([
      // keyframes
      {
        width: 0,
        height: 0,
        opacity: 0.5
      },
      {
        width: '400px',
        height: '400px',
        opacity: 0
      }
    ], {
      // timing options
      duration: 1000,
    });
    setTimeout(() => {
      newSpan.remove()
    }, 1000)
  })
}






</script>

<style lang="scss" scoped>
@keyframes btnClick {
  0% {
    width: 0;
    height: 0;
    opacity: 0.5;
  }

  100% {
    width: 400px;
    height: 400px;
    opacity: 0;
  }
}

#chat-container {
  height: 260px;
  border: 1px solid #f2f2f2;
  overflow: auto;
  margin-bottom: 20px;

  &::before {
    content: "pyf1439762372";
    /* 水印文字 */
    position: fixed;
    /* 固定定位，保证水印始终在屏幕上可见 */
    bottom: 20%;
    /* 水印距离屏幕顶部的距离，可以根据实际情况调整 */
    right: 0%;
    /* 水印距离屏幕左侧的距离，可以根据实际情况调整 */
    transform: translate(-50%, -50%) rotate(-45deg);
    /* 将水印旋转45度，并使其居中 */
    color: #ccc;
    /* 水印文字颜色 */
    font-size: 22px;
    /* 水印文字大小 */
    opacity: 0.5;
    /* 水印透明度 */
    pointer-events: none;
    /* 禁止水印响应鼠标事件，以免影响用户操作 */
    z-index: 9999;
    /* 水印层级，保证水印始终在最上层 */
  }
}

.mainPage {
  padding: 20px;
  display: flex;
  flex-flow: row wrap;
  // justify-content: space-evenly;

  .box-card {
    //flex均分换行
    --n: 4;
    --gap: calc((100% - 40px - 300px * var(--n))/var(--n)/2);
    height: 400px;
    width: 300px;
    margin: 10px var(--gap);

    @media screen and (max-width: 600px) {
      margin-left: 0px;
    }

    @media screen and (min-width: 1200px) {}
  }

  .box-card:last-child {
    margin-right: auto;
  }

  .debounce {}

  .chart {
    height: 200px;
    width: 240px;
    border: 1px solid#ccc;

  }

  .cardOut {

    .card {
      --background: linear-gradient(to left, #f7ba2b 0%, #ea5358 100%);
      width: 190px;
      height: 254px;
      padding: 5px;
      border-radius: 1rem;
      overflow: visible;
      background: #f7ba2b;
      background: var(--background);
      position: relative;
      z-index: 1;
    }

    .card::after {
      position: absolute;
      content: "";
      top: 30px;
      left: 0;
      right: 0;
      z-index: -1;
      height: 100%;
      width: 100%;
      transform: scale(0.8);
      filter: blur(25px);
      background: #f7ba2b;
      background: var(--background);
      transition: opacity .5s;
    }

    .card-info {
      --color: #181818;
      background: var(--color);
      color: var(--color);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      overflow: visible;
      border-radius: .7rem;
    }

    .card .title {
      font-weight: bold;
      letter-spacing: .1em;
    }

    /*Hover*/
    .card:hover::after {
      opacity: 0;
    }

    .card:hover .card-info {
      color: #f7ba2b;
      transition: color 1s;
    }


  }

  .mySteps {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .step {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      box-shadow: -10px -10px 2px 5px #ddd inset;
    }

    .step:nth-of-type(1) {
      box-shadow: 5px 5px 5px #333, -5px -5px 4px 1px #ddd inset;
    }

    .step:nth-of-type(3) {
      box-shadow: 10px 10px 5px #333, -10px -10px 2px 5px #ddd inset;
    }

    .step:nth-of-type(5) {
      box-shadow: 0 0 5px 5px #333, 0 0 40px #e6e6e6 inset;
    }

    .bar {
      width: 30px;
      height: 4px;
      background: green;
      border-radius: 4px;
      position: relative;
    }

    .bar::before {
      content: '';
      height: 10px;
      width: 4px;
      border-radius: 4px;
      background: green;
      position: absolute;
      right: 0px;
      top: -5px;
      transform: rotate(-50deg);
    }
  }

  .mySteps2 {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;

    .step {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      position: relative;
    }


    .step::before {
      content: '';
      height: 55px;
      width: 55px;
      border-radius: 50%;
      box-shadow: 10px 10px 5px #333,
        -10px -10px 2px 5px #ddd inset;
      position: absolute;
      left: -2.5px;
      top: -2.5px;
    }
  }

  .mySteps3 {
    margin-top: 20px;
    display: flex;
    justify-content: center;

    .halo {
      position: relative;
      border-radius: 50%;
      width: 80px;
      height: 80px;
      background: #ffcc33;
      box-shadow: 0 0 15px 8px #ffcc33;
    }

    .halo::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 45%;
      background: #fff;
      animation: halo-orbit 10s infinite linear;
    }

    @keyframes halo-orbit {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }


  }

  .loadOut {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    @keyframes textDance {
      0% {
        transform: translateY(0);
      }

      20% {
        transform: translateY(-24px);
      }

      40%,
      100% {
        transform: translateY(0);
      }
    }

    .loadText {
      span {
        display: inline-block;
        animation: textDance 1.5s ease-in-out infinite;
        animation-delay: calc(.1s*var(--i));
      }
    }
  }

  .btnPrimary {
    color: #fff;
    position: relative;
    background: linear-gradient(90deg, #409eff, #ccc);
    cursor: pointer;
    border-radius: 4px;
    border: none;
    outline: none;
    height: 50px;
    width: 100px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    overflow: hidden;

    @keyframes btnClick {
      0% {
        width: 0;
        height: 0;
        opacity: 0.5;
      }

      100% {
        width: 400px;
        height: 400px;
        opacity: 0;
      }
    }
  }

  .btn2 {
    height: 100px;
    display: flex;
    align-items: center;

    .btnPrimary2 {
      color: #fff;
      position: relative;

      cursor: pointer;
      border-radius: 4px;
      border: none;
      outline: none;
      height: 50px;
      width: 100px;
      overflow: hidden;
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
      background: linear-gradient(90deg, #409eff, #ccc);

      &:hover {
        background: linear-gradient(90deg, #ff40b6ab, #ccc);
      }

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -40%;
        width: 15%;
        height: 100%;
        background: linear-gradient(90deg, transparent, #fff, transparent);
        transform: skew(-45deg);
      }

      &:hover::before {
        left: 120%;
        transition: all 1s;
      }
    }

  }

  .btn3 {
    height: 100px;

    .btnPrimary3 {
      color: #fff;
      position: relative;
      cursor: pointer;
      border-radius: 4px;
      height: 50px;
      width: 100px;
      border: none;
      text-decoration: none;
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
      background: linear-gradient(90deg, #03a9f4, #F441a5, #ffeb3b, #03a9f4);
      background-size: 400%;

      @keyframes changeLight {
        0% {
          background-position: 0 0;
        }

        100% {
          background-position: 400% 0;
        }
      }

      &:hover {
        animation: changeLight 8s linear infinite;
      }

      &::before {
        content: '';
        position: absolute;
        top: -5px;
        right: -5px;
        bottom: -5px;
        left: -5px;
        z-index: 1;
        background: linear-gradient(90deg, #03a9f4, #F441a5, #ffeb3b, #03a9f4);
        background-size: 400%;
        border-radius: 4px;
        opacity: 0;
        transition: all 2s;
      }

      &:hover::before {
        opacity: 0.6;
        filter: blur(20px);
      }

    }

  }

  .imgChange {
    height: 145px;
    border: 1px solid #f2f2f2;
  }

  .canDemo {
    height: 145px;
    border: 1px solid #f2f2f2;
  }

}
</style>

