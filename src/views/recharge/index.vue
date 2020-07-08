<template>
    <div class="recharge">
        <div class="card">
            <p class="">¥0.00</p>
            <p>卡内余额</p>
        </div>

        <div class="panel">
            <h1>充值金额</h1>
            <div class="money-wrap">
                <div class="money-item">
                    <p>充300.00</p>
                    <p>赠送10.00元</p>
                </div>
                <div class="money-item">
                    <p>充300.00</p>
                    <p>赠送10.00元</p>
                </div>
                <div class="money-item">
                    <p>充300.00</p>
                    <p>赠送10.00元</p>
                </div>
                <div class="money-item">
                    <p>充300.00</p>
                    <p>赠送10.00元</p>
                </div>
            </div>
        </div>

        <div class="panel">
            <h1>选择支付方式</h1>
        </div>

        <div class="submit-btn">立即充值</div>
    </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style scoped lang="less">
    .card{
        width: 690px;
        height: 360px;
        border-radius: 6px;
        margin: 10px auto 0;
        background-color: #35415d;
        color: #666666;
        font-size: 38px;
        box-sizing: border-box;
        padding: 40px;
    }
    .panel{
        padding: 30px;
        font-size: 24px;
        h1{
            font-size: 28px;
        }
    }
    .money-wrap{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .money-item{
            width: 330px;
            height: 120px;
            border-radius: 10px;
            border: 1px solid #ccc;
            margin-bottom: 20px;
            text-align: center;
            overflow: hidden;
        }
    }

    .submit-btn{
        width: 690px;
        height: 80px;
        line-height: 80px;
        border-radius: 10px;
        margin: 20px auto;
        text-align: center;
        background-color: #35415d;
        color: #dcc41c;
    }

</style>
