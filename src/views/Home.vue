<template>
  <div id="Home">
    <!--  搜索框 -->
    <Search />
    <!-- 上部轮播图 -->
    <van-swipe :autoplay="3000" :height="149" indicator-color='white'>
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <!-- 宫格 -->
    <van-grid :column-num="5" :border="false">
      <van-grid-item v-for="(value,index) in gongge" :key="index" :icon="value.pic" :text="value.name" />
    </van-grid>
    <!-- // 健康优享 -->
    <div class="grab_together">
      <div class="grab_top">
       
          <div class="grab_time_left">
            距时间仅剩   <span>&nbsp;&nbsp;|&nbsp;&nbsp; </span>
           
          </div>
         <van-count-down :time="time"  style="margin:12px 0 0 5px;color:#f56a60;"/>

        
        <a href="" class="grab_more">

          <span>更多</span>
          >
        </a>
      </div>
      <!-- 下部 -->
      <div class="grab_list">
        <ul id="list_ul_box" class="list_ul">
          <li v-for="(item,index) in hengLun" :key="index">
            <div class="img_box default_pic"><img :src="item.mainimg3" lazy="loaded">
              <!---->
            </div>
            <p class="pro_name" v-text="item.flashSaleProductName"></p>
            <p class="price" v-text="item.promotionPrice+'元'"></p>
          </li>

        </ul>
      </div>

    </div>
    <!-- 广告图 -->
    <div class="ypc-swipe big_match default_img">
      <img src="https://p2.maiyaole.com/img/mobile/20197/1564664311345244.jpg" alt="">
    </div>
    <!-- 精选专题 -->
    <div class="good_topic">
      
      <div class="good_top">
        <p>精选专题</p>

      </div>
      <div class="good_list" v-for="(item,index) in good" :key="index"  style="margin-top: 5px;">
        <div class="good_banner default_img">
        <a href="">
          <img :src="item.picUrl" alt="">
        </a>
         <!-- 卖药 -->
      <ul class="list_ul">
        <li v-for="(items,index) in item.goodProducts" :key="index">
          <a href="###" data-ywpoint="F0005_undefined_null_null_I0018_1">
            <div class="img_box"><img alt="" :src="items.productImg" lazy="loaded"></div>
            <p class="pro_name" v-text="items.productName"></p>
            <p class="price" v-text="items.sellPrice+'元'"></p>
          </a>
        </li>
      
      </ul>


      </div>
     
      </div>
      

    </div>
    <div class="bottt"></div>
    <!-- 标签 -->
    <van-tabbar v-model="active" style="font-size: 25px;" replace="true">
  <van-tabbar-item icon="home-o" >首页</van-tabbar-item>
  <van-tabbar-item icon="search" to="/about">找药</van-tabbar-item>
  <van-tabbar-item icon="shopping-cart-o" to="/cart" :info="$store.getters.getallcount">购物车</van-tabbar-item>
  <van-tabbar-item icon="contact" to="/we">我的</van-tabbar-item>
</van-tabbar>

  </div>
</template>

<script>
(function() {
  var html = document.documentElement;
  var width = html.getBoundingClientRect().width;
  html.style.fontSize = width / 10 + "px"; //至于除数15可自行设置
  let header_c = document.querySelector('.header_cover');
  

  // 吸顶菜单
  //  window.onscroll = function()  {
  
  //     console.log(window.scrollY);
  //     console.log(header_c);
  //     if(window.scrollY >= 200){
  //       header_c.style = '';

  //     }
     
  //   };
  // //1rem=50;
})();
// 引入搜索框
import Search from "../components/Search.vue";
export default {
   name: "Home",
  components: {
    Search
  },
  data() {
    return {
      images: [
        "https://p3.maiyaole.com/img/mobile/20197/1564710728659301.jpg",
        "https://p3.maiyaole.com/img/mobile/20197/1564710790224305.jpg",
        "https://p1.maiyaole.com/img/mobile/20197/1564710605611295.jpg",
        "https://p1.maiyaole.com/img/mobile/20197/1564710675481298.jpg",
        "https://p1.maiyaole.com/img/mobile/20197/1564710569262293.jpg"
      ],
      yao2 :8,
      good :[],
      active:0,
      time: 30 * 60 * 60 * 1000,
      gongge :[],
      hengLun:[]
      
    };
  },
  methods: {
   
  },
   async created() {
    let hengLun = await this.$axios(
      "https://www.easy-mock.com/mock/5d403a1abf069f5f10cf34f1/example/henglunbo"
    );
    this.hengLun = hengLun.data.data.grabTogether.mobileFlashSaleNewItems

    // console.log(this.hengLun);
    let good = await this.$axios(
      "https://www.easy-mock.com/mock/5d403a1abf069f5f10cf34f1/example/1yaoindex"
    );
    this.good=good.data.data.goodTopic
    // console.log(this.good);
    //  let yao2 = await this.$axios(
    //   "https://www.easy-mock.com/mock/5d403a1abf069f5f10cf34f1/example/1yaoindex"
    // );
    // this.yao2=yao2.data.data.goodTopic
    // console.log(this.yao2);
  }


 
  

  
};
</script>
<style>

body,
html {
  font-size: 0.32rem;
  color: #333;
  height: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  margin: 0 auto;
  background: #f7f7f7;
}
/* // 搜索框 */
.header_cover{
  opacity: 0.2;
  transition: all 0.5s ease 0s;

}
#Home .header .tel {
  position: absolute;
  top: 12px;
  right: 0;
  width: 1.22666667rem;
  height: 100%;
  line-height: 0.4rem;
  padding-left: 0.26666667rem;
  background: url(data:image/png;base64,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) no-repeat;
  background-size: 1.22666667rem auto;
}

/* // 上部轮播图 */
.van-swipe-item img {
  width: 100%;
}
/* // 宫格 */
.van-grid-item {
  width: 73px;
  height: 70px;
}
.van-grid-item__icon {
  font-size: 45px;
}
/* // 健康优享 */
.grab_together {
  margin-top: 0.21333333rem;
  margin-bottom: 0.26666667rem;
}
.grab_together .grab_time_left {
  color: #929292;
  float: left;
  margin-top: 14px;
}
.grab_together .grab_top {
  position: relative;
  height: 1.30666667rem;
  padding: 0 2.26666667rem 0 2.34666667rem;
  background: url(../assets/heath.png) no-repeat 0.32rem 0.37333333rem #fff;
  background-size: 1.6rem auto;
  border-bottom: 1px solid #eee;
}
.grab_together .grab_top p {
  color: #929292;
  height: 1.30666667rem;
  line-height: 1.30666667rem;
}
.grab_together .grab_top a {
  text-align: right;
  color: #929292;
  font-size: 0.32rem;
  float: right;
  position: absolute;
  right: 0.26666667rem;
  top: 0;
  width: 2.26666667rem;
  height: 1.30666667rem;
  line-height: 1.30666667rem;
}
/* // 下部 */
.grab_together .grab_list {
  padding: 0 0 0.26666667rem;
  position: relative;
  background: #fff;
  height: 4.29333333rem;
}
.grab_together .grab_list .list_ul {
  width: 100%;
  overflow-y: hidden;
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
.grab_together .grab_list .list_ul li {
  width: 2.66666667rem;
  margin: 0 0.26666667rem 0 0;
  display: inline-block;
  margin-left: 0.26666667rem;
}
.img_box {
  position: relative;
  text-align: center;
  margin: 0.26666667rem 0.13333333rem;
}
.default_pic {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUoAAAFKCAMAAABM9+Y3AAAAVFBMV…Oc7ShqUPi+YctvJQCZzO0QERERERERERERERERERER/bMXzfLKnjL9Py8AAAAASUVORK5CYII=);
  background-size: 1.33333333rem auto;
}
.img_box img {
  height: 1.7733333rem;
  text-align: center;
  width: auto;
  max-width: 100%;
  width: 100%;
  vertical-align: middle;
}
.pro_name {
  font-size: 0.34666667rem;
  color: #333;
  padding: 0 0.13333333rem;
  width: 2.66666667rem;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.price {
  color: #f35448;
  font-size: 0.4rem;
  padding: 0.13333333rem 0.13333333rem 0;
}
/* // 广告图 */
.big_match {
  margin: 0 0 0.26666667rem;
  width: 100%;
  height: 3.46666667rem;
}
.ypc-swipe {
  height: 3.97333333rem;
}
.ypc-swipe img {
  width: 100%;
  height: 3.46666667rem;
  vertical-align: middle;
}
/* // 精选专题 */
.good_topic {
  padding: 0.26666667rem 0.26666667rem 0;
  position: relative;
  overflow: hidden;
}
.good_topic .good_top {
  height: 1.2rem;
  padding: 0 0.4rem 0 1.06666667rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAlCAIAAAC/AjzkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyODk2YWI3My0wM2E3LTQ4ZDAtODIzMC01NmM3MWU4ODNmM2EiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDMwNjgzNDM0MDYzMTFFN0JGQTQ5QUU0RUIwNTc4NkUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDMwNjgzNDI0MDYzMTFFN0JGQTQ5QUU0RUIwNTc4NkUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpjNzczZTE3NC1jNDBjLTQ3NmYtOTAxMy1iMTM4ZjQ0YWJjMjIiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozMzgzYmUyYS03YmEzLTExN2EtOTFmYy1iMjZhMTUxMGVhNDgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5HS5g/AAADdElEQVR42sRXWUhUURg+d5m5M5pWzqjjoOaKKJKWpGi0ENJLUUS+SEFRUPQg9JJPlRhSKQhFUg/hQw/VQxFRtkhRUSCBhhQZhS1Y7uOuzdy52+m/9x6dnKxmvR7m4TCX83/n377vPxTGGC3HYkM5hLFw67rU9RrPTCNE0Ta7aecetnxTUDaooD3GmG86I3V3Iln2WbHGmHZXmfdWB26GDtZb8clDqbtLR6Xi4gFSvYzHLT66h12jUQSWOl4iWVJPZufGXGq1NjTTyQ4Ve3pKaLsTRWDs8egb05ZKKnYFnZ5B5+br/yiD/VEERqJATjqcZJOZRT7NzUULWBkawGMuPbsQamLCnkSCoaUgKsDCzWtQRypwUjIVv3I++O4QWjIIYOVrr9zzTuseii2t8GV9ZJg0lZmLPDDmPXxLs8YYiHammndV+S7U/50Ax8VFGtjr5RtOKj/6VOsxsebqA4j1UZ4yMkRsZWRHkjLx9KTnXJ3ypVezTbObt7FlGxe+yh97lOFBdcdxeG5WuH1jUcwtFjiCaIbJyqEzsgIGlmXgI/gpo1oWGYbdUM4dOraouR7cRYKgR0V8fP+vpkxmOjWNO1LD5OT5uBoOi8/akeTfDFgQ8LgLaWROcRamtNxScwIq67ebSe7jR4nHgQhDgs166iydmk48BmDFNfKvQkhygAaYtu/wr3PXKGVPZBwp/6NZSen7hmdn8MS492qLtb6JAGNJ1PMHFDhfw7zOUPSaTCavwLz/MGW1LnEhh9Nadz4gumtv87ZehuAtCImeYzV6gGqpPU3Z7LDnG+vhjrCBAmZLysKXfaa4hLJYgOeJk37FBah0YrJOEZGdN6ApdHWBbgxVJEJa8ts3xLdVqw0FVjRp0YKaaCgwnpokyS4oNA4Yu3/CfKKPZszadcYByx/e6+oCSkqK1yDgzg5CfzZbGKNPCJU1PC9fyU4DgYGtxsd0bmDKKowDBhVXpia0Dk5gC4uNAxZfPAXFJAnmOAM9/vyJIDnTwpurg8rv7IwyOKBpAmvaWmkQMPby/MVGmJy0ek5hCouWHn1gPPbU1SJRRNByXp5MeVcueBEVekFrhKXW8/pSP8Vj9WFKnxP+fO6Rk+EsQM3L5/YdXGLKhOhLr57DhIWwghZeyzSFUHiqTFPw0mGLStRxWPctrId5hBaNlmn9EmAAt9ZbmXazfCsAAAAASUVORK5CYII=) no-repeat 0.4rem #fff;
  background-size: 0.48rem auto;
  font-size: 0.4rem;
}
.good_topic .good_top p {
  color: #4a4a4a;
  height: 1.2rem;
  line-height: 1.2rem;
  margin: 0;
  padding: 0;
  font-weight: 400;
}
.good_topic {
  background: #fff;
  overflow: hidden;
  padding-bottom: 0.26666667rem;
}
.good_topic .good_banner {
  min-height: 2.61333333rem;
  overflow: hidden;
}
.default_img {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUoAAAFKCAMAAABM9+Y3AAAAVFBMV…Oc7ShqUPi+YctvJQCZzO0QERERERERERERERERERER/bMXzfLKnjL9Py8AAAAASUVORK5CYII=);
  background-size: 2.61333333rem auto;
}
.good_topic .good_banner img {
  height: 100%;
  width: 100%;
  -webkit-border-radius: 5px;
  border-radius: 5px;

}
.good_topic .list_ul {
    width: 100%;
    overflow-y: hidden;
    overflow-x: auto;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
}
.good_topic .list_ul li {
    width: 33.333333%;
    height: 4.23333333rem;
    display: inline-block;
    padding: 0 .613333333rem;
    overflow: hidden;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
   
}
.bottt{
  width: 100%;
  height: 40px;
}
/* // 宫格 */
.van-grid{
  background-color: white;
}
.van-grid .van-grid-item{
  margin: 0 0 5px 0;
}
.van-grid-item__content .van-icon{

font-size: 40px;

}
/* // 倒计时  */
.van-count-down{
  float: left;
}



</style>

