<template>
  <div id="app">
    <router-view/>
    <van-tabbar v-model="active" route>
      <van-tabbar-item name="home" icon="home-o" replace to="/">首页</van-tabbar-item>
      <van-tabbar-item name="order" icon="orders-o" replace to="/order">订单</van-tabbar-item>
      <van-tabbar-item name="vip" icon="vip-card-o" replace to="/recharge">办卡</van-tabbar-item>
      <van-tabbar-item name="user" icon="user-o" replace to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
  import Vue from 'vue';
  import { Tabbar, TabbarItem } from 'vant';

  Vue.use(Tabbar);
  Vue.use(TabbarItem);
  export default {
    name: 'App',
    data() {
      return{
        active: 'home'
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-bottom: 50px;
}
</style>
