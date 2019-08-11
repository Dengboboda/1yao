<template>
<div id="login">
    <!-- 头部 -->
    <div class="header_pic" v-on:click="back">
            <van-icon name="arrow-left" />
        </div>

    <div class="header_login">
        <h2>账号密码登录</h2>
        


    </div>
    <!-- 输入框 -->
    <van-cell-group>
  <van-field
    v-model="username"
    required
    clearable
    label="手机号码"
    right-icon="question-o"
    placeholder="请输入手机号码"
    @click-right-icon="$toast('question')"
  />
   <van-field
    v-model="sms"
    center
    clearable
    label="短信验证码"
    placeholder="请输入短信验证码"
  >
    <van-button slot="button" size="small" type="primary">发送验证码</van-button>
  </van-field>


</van-cell-group>

</div>
    
</template>
<script>
export default {
    data(){
        return {
            username:'',
            sms:''
            

        }
    },
    methods: {

    back() {
      this.$router.go(-1); //返回上一层
    },

}
}
</script>

<style>
.header_login{
    width: 100%;
    height: 45px;
    background-color: #e6e6e6;
    text-align: center;
    overflow: hidden;
}
.header_login h2{
    margin-block-start: 0.73em;;
    margin-block-end: 0.73;
}

</style>

