<template>
    <div class="order-list">
        <van-tabs v-model="active" type="card">
            <van-tab title="日常订单">日常订单</van-tab>
            <van-tab title="包月订单">包月订单</van-tab>
        </van-tabs>
    </div>
</template>

<script>
  import Vue from 'vue';
  import { Tab, Tabs } from 'vant';

  Vue.use(Tab);
  Vue.use(Tabs);
  export default {
    name: "index",
    data() {
      return{
        active: 0
      }
    }
  }
</script>

<style scoped lang="less">
.order-list{
    /deep/ .van-tabs__nav--card{
        margin: 0;
        border: none;
        box-shadow: 0 10px 20px rgba(53,65,93,0.1);
        .van-tab{
            color: #666666;
            border-right: none;
        }
       .van-tab--active{
            color: #666666;
            background-color: #304069;
        }
    }
}
</style>
