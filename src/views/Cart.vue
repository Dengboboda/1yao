<template>

    <div id="cart">
        <!-- //头部  -->
        <div class="header_pic" v-on:click="back">
            <van-icon name="arrow-left" />
        </div>

        <van-tabs @click="onClick" background="#F9F9F9">
            <!-- 选项1 -->
            <van-tab title="购药清单">
                <!-- 登录提示 -->
                <div class="login_bar" style="">
                    <span class="bar_info">
                        登录后可同步电脑与手机购物车中的商品
                    </span>
                    <span class="login_btn">登录</span>
                </div>
                <!-- 购物车页面 -->
                <div class="cart_empty">
                    <div class="cart_box" v-for="(item, index) in this.$store.state.cart" :key="index">
                        <van-checkbox v-model="item.isok">

                        </van-checkbox>
                        <van-card :num="num0" :price="item.goodsPrice" desc="" :title="item.goodstitle" :thumb="item.goodsPics">
                            <div slot="footer" style="z-index:10000">
                                <van-button size="mini" @click="sub()">-</van-button>
                                <input type="text" v-model="item.count" style="width:40px;">
                                <van-button size="mini" @click="add()">+</van-button>
                            </div>
                        </van-card>

                    </div>

                </div>
                <!-- 提交工具 -->

                <van-submit-bar :price="$store.getters.getallprice" button-text="提交订单" />
            </van-tab>

            <!-- 选项2 -->
            <van-tab title="需求清单">
                <div class="login_bar" style="">
                    <span class="bar_info">
                        登录后可同步电脑与手机需求清单中的商品
                    </span>
                    <span class="login_btn">登录</span>
                </div>
            </van-tab>
        </van-tabs>
        <!-- <div class="header_d">
            <img src="../assets/dian.jpg" alt="">

        </div> -->

    </div>

</template>
<script>
export default {
  data() {
    return {
      checked: true,
      num0: 2,
      tprice: 3050
    };
  },
  methods: {
    onClick(name, title) {
      this.$toast(title);
    },
    back() {
      this.$router.go(-1); //返回上一层
    },
    //点击增加按钮
    add() {
      this.num0++;
    },
    //点击按钮减少
    sub() {
      if (this.num0 == 0) {
        this.num0 == 0;
      }
      if (this.num0 > 0) {
        this.num0--;
      }
    }
  },
  //计算属性
  computed: {

  },
  created() {
    let abc = this.$store.state.cart;
    // console.log(abc);
  }
};
</script>
<style>
/* // 头部 */

.header_pic {
  position: absolute;
  top: 13px;
  left: 14px;
  z-index: 9999;
}
.header_d {
  position: absolute;
  top: 13px;
  right: 14px;
}
.header_pic .header_img {
  width: 13px;
  height: 18px;
}

/* // 提示登录 */
.login_bar {
  height: 0.69333333rem;
  line-height: 0.69333333rem;
  width: 100%;
  position: absolute;
  top: 1.14666667rem;
  left: 0;
  background: #fff;
  padding: 0.26666667rem 0;
  font-size: 0.34666667rem;
  z-index: 100;
}
.login_bar .bar_info {
  height: 0.72rem;
  position: absolute;
  left: 0.53333333rem;
  color: #999;
  display: inline-block;
  padding-right: 2.13333333rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
.login_bar .login_btn {
  width: 1.44rem;
  height: 0.72rem;
  display: inline-block;
  color: #fff;
  background: #ff6666;
  text-align: center;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  position: absolute;
  right: 0.53333333rem;
  top: 0.26666667rem;
  cursor: pointer;
}
/*选择框*/
#cart .cart_empty {
  margin-top: 50px;
  width: 100%;
}
/* #cart .van-checkbox .van-checkbox__label{
    width: 375px;

} */
#cart .van-card {
  width: 375px;
}
#cart .cart_box {
  display: flex;
  width: 100%;
}
</style>


