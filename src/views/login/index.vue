<template>
    <div class="login ignore">
        <div class="login-box">
            <van-tabs v-model="active" animated :border="false">
                <van-tab title="登录">
                    <van-form @submit="handleLogin">
                        <van-field
                                v-model="loginForm.username"
                                name="用户名"
                                label="用户名"
                                placeholder="用户名"
                                :rules="[{ required: true, message: '请填写用户名' }]"
                        />
                        <van-field
                                v-model="loginForm.password"
                                type="password"
                                name="密码"
                                label="密码"
                                placeholder="密码"
                                :rules="[{ required: true, message: '请填写密码' }]"
                        />
                        <div style="margin: 16px;">
                            <van-button round block type="info" native-type="submit">
                                登录
                            </van-button>
                        </div>
                    </van-form>
                </van-tab>
                <van-tab title="注册">
                    <van-form @submit="handleRegister">
                        <van-field
                                v-model="registerForm.username"
                                name="用户名"
                                label="用户名"
                                placeholder="用户名"
                                :rules="[{ required: true, message: '请填写用户名' }]"
                        />
                        <van-field
                                v-model="registerForm.password"
                                type="password"
                                name="密码"
                                label="密码"
                                placeholder="密码"
                                :rules="[{ required: true, message: '请填写密码' }]"
                        />
                        <div style="margin: 16px;">
                            <van-button round block type="info" native-type="submit">
                                注册
                            </van-button>
                        </div>
                    </van-form>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
import {login, register} from '@/api/login'
import Vue from 'vue';
import { Form, Field, Button,  Tab, Tabs } from 'vant';
Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.use(Tab);
Vue.use(Tabs);
export default {
  name: "index",
  data(){
    return {
      active: '登录',
      loginForm: {
        username: '',
        password: ''
      },
      registerForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    handleLogin(){
      login(this.loginForm).then(res => {
        console.log(res);
      })
    },
    handleRegister(){
      register(this.registerForm).then(res => {
        console.log(res);
      })
    }
  }
}
</script>

<style scoped lang="less">
.ignore{
    max-width: 600px;
    margin: 0 auto;
}
.login-box{
    margin: 200px auto 0;
}
</style>
