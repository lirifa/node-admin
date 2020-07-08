<template>
    <div class="user">
        <div class="banner">
            <div class="user-info">
                <div class="avatar">
                    <img src="@/assets/logo.png" alt="">
                </div>
                <div class="user-name">Rafa???</div>
            </div>
            <div class="my-wealth">
                <div class="wealth-item">
                    <p class="name">账户余额</p>
                    <p class="num">0元</p>
                </div>
                <div class="wealth-item">
                    <p class="name">优惠券</p>
                    <p class="num">0张</p>
                </div>
                <div class="wealth-item">
                    <p class="name">我的预约</p>
                    <p class="num">0元</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style scoped lang="less">
.user{
    .banner{
        background-color: #35415d;
        width: 100%;
        height: 400px;
        position: relative;
    }
    .user-info{
        position: absolute;
        top: 100px;
        left: 100px;
        width: 400px;
        overflow: hidden;
        .avatar{
            float: left;
            width: 100px;
            height: 100px;
            border-radius: 100%;
            overflow: hidden;
            background-color: #fff;
            margin-right: 20px;
            img{
                width: 100%;
            }
        }
        .user-name{
            width: 200px;
            float: left;
            color: #c8c9cc;
        }
    }
    .my-wealth{
        width: 630px;
        height: 176px;
        position: absolute;
        bottom: -88px;
        left: 60px;
        border-radius: 10px;
        overflow: hidden;
        background: #fff;
        box-shadow: 0 5px 10px rgba(53,65,93,0.1);
    }
}
</style>
