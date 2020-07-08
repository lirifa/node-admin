<template>
  <div class="home">
    <div class="panel">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="@/assets/img/home/banner1.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/img/home/banner2.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/img/home/banner3.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/img/home/banner4.jpg" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="panel">
      <div class="select-box">
        <div class="shop">
          <van-icon name="location" />书山故事(深圳店)
        </div>
        <div class="time-date">
          07月08日
        </div>
        <div class="time-time">
          17:00-18:00
        </div>
        <div class="submit-btn">立即预约</div>
      </div>
    </div>

    <div class="panel">
      <h1>书山故事</h1>
      <p>故事很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长</p>
    </div>

    <div class="panel">
      <h1>热门活动</h1>
      <div class="scroll-box">
        <div class="scroll-wrap">
          <img src="@/assets/img/home/banner1.jpg" alt="">
          <img src="@/assets/img/home/banner2.jpg" alt="">
          <img src="@/assets/img/home/banner3.jpg" alt="">
          <img src="@/assets/img/home/banner4.jpg" alt="">
        </div>

      </div>

    </div>

    <div class="panel">
      <h1>房间状态</h1>

    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Cell, CellGroup } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Icon } from 'vant';

Vue.use(Icon);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Cell);
Vue.use(CellGroup);
export default {
  name: 'Home',
  data() {
    return{
      active: 0
    }
  },
  created() {
    console.log(this.$router);
  }
}
</script>
<style scoped lang="less">
  .home{
    img{
      display: block;
      width: 100%;
    }
    .panel{
      padding: 20px;
      font-size: 24px;
      h1{
        font-size: 28px;
      }
    }
    .my-swipe{
      img{
        display: block;
        width: 100%;
        height: 500px;
      }
    }

    .select-box{
      display: flex;
      flex-wrap: wrap;
      border-radius: 4px;
      overflow: hidden;
      /*box-shadow:  0 4px 4px rgba(10,16,20,.24),0 0 4px rgba(10,16,20,.12);*/
      box-shadow: 0 10px 20px rgba(53,65,93,0.1);
      .shop{
        width: 100%;
        height: 80px;
        line-height: 80px;
        border-bottom: 1px solid #f3f3f3;
        padding: 0 10px;
      }
      .time-date,.time-time{
        width: 50%;
        height: 80px;
        line-height: 80px;
        text-align: center;
      }
      .time-date{
        box-sizing: border-box;
        border-right: 1px solid #f3f3f3;
      }
      .submit-btn{
        width: 100%;
        height: 80px;
        line-height: 80px;
        text-align: center;
        background-color: #2c3e50;
        color: #dcc41c;
      }
    }

    .scroll-box{
      width: 100%;
      overflow-x: scroll;
      overflow-y: hidden;
      &::-webkit-scrollbar {
        display:none
      }
      .scroll-wrap{
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        float: left;  // 使其脱离文档流 宽度为所有字元素的和
        min-width: 100%;
      }
      img{
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        flex: 3;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        width: 400px;
        height: 200px;
        margin-right: 40px;
        border-radius: 10px;
        &:last-child{
          margin-right: 0;
        }
      }
    }

  }
</style>
