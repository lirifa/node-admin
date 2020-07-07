<template>
<div class="upload">
    <van-nav-bar :title="$route.name" left-arrow @click-left="$router.back()"/>
    <van-button class="add-btn" block color="linear-gradient(to right, #4bb0ff, #6149f6)" @click="addBlock">添加豆腐块</van-button>
    <div class="pic-wrap">
        <div v-for="(item,index) in picList" :key="index" class="pic-item" :style="{width: item.width}">
            <van-uploader :result-type="'file'" :after-read="afterRead" class="upload-area">
                <div icon="photo" class="upload-btn">上传文件</div>
            </van-uploader>
        </div>
    </div>

</div>
</template>

<script>
import Vue from 'vue';
import { Uploader, Button } from 'vant';
import { simpleToken } from '@/api/qiniu'
import * as qiniu from 'qiniu-js'

Vue.use(Uploader);
Vue.use(Button);
export default {
  name: "index",
  data() {
    return {
      uploadToken: '',
      picList: [
        {
          pic: '',
          link: '',
          width: '50%'
        }
      ],
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

      observable.subscribe(
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

    },
    addBlock(){
        this.picList.push(
          {
            pic: '',
            link: '',
            width: '50%'
          }
        )
    }
  }
}
</script>

<style scoped lang="less">
    .add-btn{
        margin: 10px auto;
    }
    .pic-wrap{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .upload-area{
        width: 100%;
        height: 100px;
        line-height: 100px;
        text-align: center;
        background-color: #c8c9cc;
        justify-items: center;
        align-items: center;
        border: 1px solid #ffffff;
        /deep/ .van-uploader__input-wrapper{
            width: 100%;
        }
    }

</style>
