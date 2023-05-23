
<template >
  <div class="login">
    <div class="top">亲爱的游客，欢迎登录！</div>
    <div class="ipt">
      <div class="topTap">
        <span class="tab" :class="{ isActive: state.isActive }" @click="loginType(1)">账号登录</span>
        ｜
        <span class="tab" :class="{ isActive: !state.isActive }" @click="loginType(2)">手机登录</span>
      </div>
      <el-form ref="form" v-if="state.isActive" :model="formData" :rules="rules" label-width="80px">
        <el-form-item label="账号" prop="name">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formData.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button :loading="state.isLogin" type="primary" @click="onSubmit">登录</el-button>
          <el-button>注册</el-button>
        </el-form-item>
      </el-form>
      <el-form ref="form1" :model="phoneTest" :rules="rulePhone" label-width="80px" v-else>
        <el-form-item label="手机号" prop="tel">
          <el-input v-model="phoneTest.tel"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="recode">
          <el-input v-model="phoneTest.recode"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button :loading="state.isLogin" type="primary" @click="onSubmit">登录</el-button>
          <el-button>注册</el-button>
        </el-form-item>
      </el-form>

      <div class="bot">
        <span>忘记密码？</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";

defineProps({
  msg: String,
});
const router = useRouter();
const formData = reactive({
  name: "",
  password: "",
});
const phoneTest = reactive({
  tel: "", //手机
  recode: "", //验证码
});
const state = reactive({
  isLogin: false,
  isActive: true,
});
const rules = reactive({
  name: [
    { required: true, message: "请输入账号", trigger: "blur" },
    { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
  ],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
});

const rulePhone = {
  tel: [
    { required: true, message: "请输入手机号", trigger: "blur" },
    {
      pattern: /^1[3|5|7|8|9]\d{9}$/,
      message: "请输入正确的号码格式",
      trigger: "change",
    },
  ],
  recode: [{ required: true, message: "请输入验证码", trigger: "blur" }],
};
function loginType(num) {
  state.isActive = num === 1;
}
function onSubmit() {
  state.isLogin = true;
  setTimeout(() => {
    state.isLogin = false;
    router.push("/");
  }, 2000);
}

const addCount = ref(0);
</script>

<style lang="scss" scoped>
.login {
  min-height: 100vh;
  padding: 20px;
  background: url("@/assets/images/loginbg.jpeg") center no-repeat;
  background-size: cover;

  .top {
    padding: 20px;
  }

  .ipt {
    width: 360px;
    padding: 20px 60px 20px 20px;
    background: #fff;
    border-radius: 20px;

    .topTap {
      display: flex;
      justify-content: center;
      height: 50px;
      line-height: 50px;

      .tab {
        cursor: pointer;
      }

      .isActive {
        color: #4fa5d9;
        font-weight: bold;
        font-size: 16px;
      }
    }

    .bot {
      color: #4fa5d9;
      line-height: 40px;
      text-align: center;
      cursor: pointer;
    }
  }
}
</style>


