<template>
  <div id="About">
    <!-- 搜索框 -->
    <Search />
    <!-- 广告图 -->
    <img src="http://m.111.com.cn/yyw/wap/category/static/img/categorie_bannr.de2a6a8.png" class="guang">
    <!-- 侧边导航 -->
    <van-sidebar v-model="activeKey">
      <van-sidebar-item :title="item.name"   :class="{active:num==index}" v-for="(item,index) in zhaoyao"  :key="index"   @click="getNum(index)"/>
    </van-sidebar>
    <!-- // 右边详情内容 -->
    <div class="categories_box">
      <div class="ypc-swipe categories_box_banner">
        <div class="ypc-swipe-items-wrap">
          <!-- 轮播 -->
          <van-swipe :autoplay="3000"  indicator-color='white' >
            <van-swipe-item v-for="(image, index) in images" :key="index" >
              <img v-lazy="image" />
            </van-swipe-item>
          </van-swipe>

        </div>

      </div>
      <!-- 列表页 -->
      <div class="categories_box_innner">

        <div v-show="index==num" v-for="(item,index) in zhaoyao" :key="index">
          
          <h3 v-text="item.name"></h3>
          <ul>
           
            <van-grid :column-num="3" :border="false">
              <van-grid-item
               v-for="(item,index) in item.nei"
              :key="index"
              :icon="item.icon"
              :text="item.name"
              to="/list"
              />
             </van-grid>
            

          </ul>
        </div>
      </div>

    </div>

    <!-- 底部标签 -->
    <van-tabbar v-model="active" style="font-size: 25px;">
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search">找药</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/we">我的</van-tabbar-item>
    </van-tabbar>

  </div>
</template>

<script>
// 引入搜索框
import Search from "../components/Search.vue";
export default {
  name: "About",
  components: {
    Search
  },
  data() {
    return {
      index:'',
      num:0,
      active:1,
      activeKey: 0,
      images: [
        "https://p1.maiyaole.com/img/mobile/20196/1562745758922230.jpg",
        "https://p1.maiyaole.com/img/mobile/20196/1562742813243181.jpg"
      ],
      zhaoyao:[]
    };
  },
  methods: {
    getNum(index) {
      this.num = index;
    }
  },
  async created() {
    let zhaoyao = await this.$axios(
      "https://www.easy-mock.com/mock/5d403a1abf069f5f10cf34f1/example/zhaoyao"
    );
    this.zhaoyao = zhaoyao.data.data

    // console.log(this.zhaoyao);
  }

};
</script>
 
<style>
.header .address_map {
  color: #333;
}
.header .tel {
  position: absolute;
  top: 12px;
  right: 0;
  width: 1.22666667rem;
  height: 100%;
  line-height: 0.4rem;
  padding-left: 0.26666667rem;
  background: url(../assets/xia2.png) no-repeat;
  background-size: 1.22666667rem auto;
}
/* // 广告卡 */
.guang {
  width: 100%;
  vertical-align: middle;
  height: 1.1733333333333333rem;
  margin-top: 45px;
}
/* // 侧栏 */
.van-sidebar .van-sidebar-item {
  height: 1.3066666666666666rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
/* // 侧栏内容 */
.categories_box {
  position: absolute;
  top: 90px;
  right: 0;
  width: 75%;
  height: 100%;
  overflow-y: auto;
  padding: 0 0 0 0.26666666666666666rem;
  background: #fff;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
}
.ypc-swipe {
  overflow: hidden;
  position: relative;
}
.categories_box_banner {
  padding: 0.26666666666666666rem 0.26666666666666666rem 0 0;
  height: 2rem;
}
.ypc-swipe-items-wrap {
  height: 100%;
  overflow: hidden;
  position: relative;
}
.ypc-swipe-items-wrap .van-swipe-item img {
  width: 262px;
  height: 76px;
}
.van-sidebar-item{
  width: 92px;
height: 50px;

}
.van-sidebar-item  .van-sidebar-item__text{
font-size: 0.331rem;

}
.van-sidebar{
  height: 568px;
  overflow-y: scroll;
}
/* // 选项卡内容 */
.categories_box_innner {
  padding-bottom: 2.3466666666666667rem;
}
.categories_box_innner h3 {
  color: #333;
  height: 1.0666666666666667rem;
  line-height: 1.0666666666666667rem;
  font-size: 0.4266666666666667rem;
  padding: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

</style>
