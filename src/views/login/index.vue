<template>
    <div class="login">
        <van-nav-bar
                :title="$route.name"
                left-arrow
                @click-left="$router.back()"
        />
        <div class="login-box ignore">
            <van-tabs v-model="active" animated :border="false">
                <van-tab title="登录">
                    <van-form @submit="handleLogin">
                        <van-field
                                v-model="loginForm.name"
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
                                v-model="registerForm.name"
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
import {login, register} from '@/api/user'
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
        name: '',
        password: ''
      },
      registerForm: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    handleLogin(){
      login(this.loginForm).then(res => {
        console.log(res.token);
        this.$store.commit('user/SET_TOKEN', res.token);
        window.localStorage.setItem('xToken', res.token);
        this.$router.push({path: '/'})
      })
    },
    handleRegister(){
      register(this.registerForm).then(res => {
        this.$toast(res.msg)
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
