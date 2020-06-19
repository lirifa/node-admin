<template>
<div class="upload">
    <van-nav-bar :title="$route.name" left-arrow @click-left="$router.back()"/>
    <van-uploader :result-type="'file'" :after-read="afterRead" />
</div>
</template>

<script>
import Vue from 'vue';
import { Uploader } from 'vant';
import { simpleToken } from '@/api/qiniu'
import * as qiniu from 'qiniu-js'

Vue.use(Uploader);
export default {
  name: "index",
  data() {
    return {
      uploadToken: '',
    }
  },
  created() {
    this.getUploadToken();
  },
  methods: {
    getUploadToken(){
      simpleToken().then(res => {
        this.uploadToken = res.data.token;
      })
    },
    afterRead(file) {
      console.log(file);
      let key = file.name;
      let token = this.uploadToken;
      let putExtra = {
        fname: "",
        params: {},
        mimeType: ["image/png"]
      };
      let config = {
        useCdnDomain: true,
        region: qiniu.region.z2
      };
      var observable = qiniu.upload(file, key, token, putExtra, config)

      var subscription = observable.subscribe(
        ()=>{
          console.log(1);
        },
        (err) => {
          console.log(err);
        },
        ()=> {
          console.log(3);
        }) // 这样传参形式也可以

      // subscription.unsubscribe() // 上传取消

    }
  }
}
</script>

<style scoped>

</style>
