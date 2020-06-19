<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/theme.png">
    <HelloWorld v-if="false" msg="Welcome to Your Vue.js App"/>
    <van-cell-group title="功能">
      <van-cell v-for="(item,index) in $router.options.routes" :key="index" :title="item.name" :to="item.path" is-link v-show="item.path !== '/'"/>
    </van-cell-group>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Vue from 'vue';
import { Cell, CellGroup } from 'vant';

Vue.use(Cell);
Vue.use(CellGroup);
export default {
  name: 'Home',
  components: {
    HelloWorld
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
  }
</style>
