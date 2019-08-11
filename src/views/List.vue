<template>
    <div id="list">
        <div class="header_list">
            <!-- 搜索框 -->
            <div class="back" @click="back">
                <van-icon name="arrow-left" />
            </div>
            <van-search v-model="value"
             placeholder="请输入搜索关键词" 
             show-action shape="round" 
             @search="onSearch" 
             background="#f7f7f7">
                <div slot="action" @click="onSearch">搜索</div>
            </van-search>
            <!-- 下拉菜单 -->
            <van-dropdown-menu>
                <van-dropdown-item v-model="value1" :options="option1" />
                <van-dropdown-item v-model="value2" :options="option2" />
                <van-dropdown-item v-model="value3" :options="option3" />
                <van-dropdown-item v-model="value4" :options="option4" />
            </van-dropdown-menu>
            <!-- 提示框 -->
            <div class="search_filter_tab2" >
                <ul class="search_filter_tab2_ul">
                    <li>
                        <span>自营</span>

                    </li>
                    <li>
                        <span>促销</span>

                    </li>
                    <li>
                        <span>品牌</span>

                    </li>
                    <li @click="back2()">
                        <span>返回</span>

                    </li>

                </ul>

            </div>

        </div>
        <!-- 列表页 -->
        <div style="margin-top: 137px;">

            <div class="bottom_list" v-for="(item,index) in list" :key="index" @click="jump(index)" >
                <img :src="item.BigPic" alt="" class="pro_img">
                <div class="pro_na" v-text="item.title">
                    <img src="data:image/png;base64,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" alt="" class="pro_sell_type_icon"> 
                </div>
                <div class="pro_type">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAgCAYAAABO6BuSAAADxUlEQVR4AWIYkUBaI1BYSSNcbThjZeVAMQD7ZeEcuQ6D8cfMzMzMzMycxwyxLCWPGTNby3nMfMzMzH/anb9pdi/ncjvN4c58MxWsnZ+laN0OMBxnnZdcv6PCnnNBcs2Z5z9z0RbA0I7awedd9uxpu4B3ATf4ue22Yi8jevfr2TcnxDH4EENOY8CG/VPG6osjEdboa/0PP/zhQBK/wVq9P47BhxhyGgMm8ZNJdGEsK7reil9R860Muet6y8UanQO0joi11ZF4JQCL/lf3Q/Ahhpy6H2s03tIADHq2Y7M3lv3MQXzvdSv+87aM+K8BZUT/rPsh+BBDTt2PNbZ54O2mpfEpimKPoL3qArDN9Pm2bbMSrTorzkuSZM++1mUu77GiPhW9wtry8Hos+MWwe8bk/gLs3ygwZf47nPQw9Vtva7733s/7G9Z5IW7jWPquHh9i63EgUag5YMtuLLPe3haxX0OsX3RscYoBVc+xrP/0BUzsMhKdlSTv7Q/bcPmcMa1LuyuvLxMOi/VXdECsNP1v71EHhtr2q68W+0XvXa/vMCZqL8BY70YcWJa1LoZtxN1SVfTqPM/3JdEZQX8T6weRfsa+SVLs0ygwvVueho3xgEMFfjPrOt2KLrZSfkZZeQfmAInOD3lvI27Fv0vil4n4I3s8B+m92BezoVFgPCQq9Prr3x08VGCzuV0Xdre8rg1r/4+qMX97QwBeH19U4qmNQdgQcNXO7Kcb0W/rOZz5Nwy7FRhG/QEnIZ6mxQH4m8S9ZFkXE7kT2+8xfmeZi4MwH97MvzspAn4QrY+/GwLeuLsV/QTVZS7PqufY3F1XVW45Kg3hJtbX0HrL+ltJdLWIXtH2YRilabo39qluYJMBj1h1QI/jO40BAzaoz5ZLs28vDrEnEIdIdFxvwHh3cWhBhsg9SazfBM2pD0F0AYmfaMR1tX34XQ7QyxoDZnYnp6y3D26r3lsaVazu3RsAbdmPteLexSHUZwI+6CJUFAdZDbRXSPycxoBj/xCA4+FzSfrOt6ckyewBh8877+ixnQpnmqPqjQAbcePRckOS6H8A7ndt+uYYdE2AeYdYx+X574f0lYu1SMofGwHGdEQLDkX4TgxM9MMxBoNP/N94H9Hahv2q6lLxEoYW8gL4vtb6m1NpXcv87U24eFRD8dVRBzain0FDbWkr/n1iLWJgHAIqajP/SJq2Lu7t5oR/GHAhCVob8oN0LonbtDyQ2hE+pjXq4VEPj3pYRTvMXU0vwnk4YpDfwB5GAAcWGZlQzuGMjY2NWRlGIgAAIGzk3okmC0kAAAAASUVORK5CYII=" alt="">

                </div>
                <div class="pro_promotion_type">
                    <img src="data:image/png;base64,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" alt="">
                </div>
                <span class="review_num" >
                    {{item.pinlun+'条评论'}} &nbsp;&nbsp;
                    <i>{{'好评率'+item.haopin+'%'}}</i>

                </span>
                <div class="search_price">
                    <span class="price">
                        ￥
                        <i v-text="item.price"></i>
                        

                    </span>

                </div>

            </div>
           

        </div>

    </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      value1: 0,
      value2: 0,
      value3: 0,
      value4: 0,
      list:[],
      option1: [
        {
          text: "全部类型",
          value: 0
        },
        {
          text: "热门类目",
          value: 1
        },
        {
          text: "心脑用药",
          value: 2
        },
        {
          text: "内分泌用药",
          value: 3
        },
        {
          text: "男科用药",
          value: 4
        },
        {
          text: "神经用药",
          value: 5
        }
      ],
      option2: [
        {
          text: "综合排序",
          value: 0
        },
        {
          text: "销量排序",
          value: 1
        },
        {
          text: "心脑用药",
          value: 2
        },
        {
          text: "好评排序",
          value: 3
        },
        {
          text: "价格从低到高",
          value: 4
        },
        {
          text: "价格从高到低",
          value: 5
        },
        {
          text: "最新上架",
          value: 6
        }
      ],
      option3: [
        {
          text: "列表",
          value: 0
        },
        {
          text: "大图",
          value: 1
        }
      ],
      option4: [
        {
          text: "筛选",
          value: 0
        }
      ]
    };
  },
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    },
    back2(){
      this.$router.push('home');
    },
    onSearch(){
        
    },
    // 路由跳转并传递ID
    jump(index){
      this.$router.push({path: 'detail',
      name:'detail',
       params:{
        _id :index
      }
      })
    }
  },
  // 获取数据
  async created() {
    let list = await this.$axios(
      "https://www.easy-mock.com/mock/5d403a1abf069f5f10cf34f1/example/1yaolist"
    );
    this.list = list.data.data

    console.log(list.data.data);
  }
};
</script>
<style>
/* // 搜索 */
.header_list {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}
.van-search {
  height: 40px;
}
.back {
  width: 25px;
  height: 40px;
  float: left;
  background: #f7f7f7;
}
.back .van-icon {
  width: 10px;
  height: 18px;
  margin-top: 13px;
  margin-left: 13px;
}
.header_list .van-dropdown-menu {
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
}
/* // 提示框 */
.search_filter_tab2 {
  position: fixed;
  top: 2.3466666666666667rem;
  height: 1.1733333333333333rem;
  border-bottom: 1px solid #eee;
  z-index: -1;
  background: #fff;
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 4px 0 4px 0;
}
.search_filter_tab2_ul {
  font-size: 0.37333333333333335rem;
  padding-top: 0.21333333333333335rem;
  margin: 0 0.21333333333333335rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.search_filter_tab2_ul li {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  width: 100%;
  text-align: center;
  width: 25%;
  float: left;
}
.search_filter_tab2_ul li span {
  width: 90%;
  height: 0.7466666666666667rem;
  background: #f8f8f8;
  line-height: 0.7466666666666667rem;
  text-align: center;
  -webkit-border-radius: 0.08rem;
  border-radius: 0.08rem;
  display: inline-block;
}
/* // 列表部分 */
.bottom_m {
  height: 100%;
  /* overflow-y: auto; */
}
.bottom_list {
  position: relative;
  padding-left: 2.986666666666667rem;
  min-height: 3.7333333333333334rem;
  border-bottom: 1px solid #eee;

  background: white;
}
.pro_img {
  width: 2.1333333333333333rem;
  height: 2.1333333333333333rem;
  /* background: url(../img/yyw.e128806.png) no-repeat; */
  background-size: 100% 100%;
  position: absolute;
  left: 0.32rem;
  top: 0.7466666666666667rem;
}
.bottom_list .pro_na {
  font-size: 0.37333333333333335rem;
  padding-top: 0.26666666666666666rem;
  padding-right: 0.21333333333333335rem;
  line-height: 0.5333333333333333rem;
  max-height: 1.0666666666666667rem;
  overflow: hidden;
}
.pro_na .pro_sell_type_icon {
  height: 0.3466666666666667rem;
}
.pro_type {
  overflow: hidden;
  margin-top: 0.10666666666666667rem;
}
.pro_type img {
  height: 0.32rem;
  margin-right: 0.10666666666666667rem;
}
.pro_promotion_type {
  overflow: hidden;
  margin-top: 0.10666666666666667rem;
}
.pro_promotion_type img {
  float: left;
  height: 0.32rem;
  margin-right: 0.10666666666666667rem;
  margin-bottom: 0.10666666666666667rem;
}
.review_num {
  color: #999;
  font-size: 0.26666666666666666rem;
  display: block;
  position: absolute;
  left: 2.986666666666667rem;
  bottom: 0.32rem;
}
.search_price {
  position: absolute;
  left: 2.986666666666667rem;
  bottom: 0.8rem;
  clear: both;
  display: block;
  /* position: absolute;
    left: 2.986666666666667rem;
    bottom: .26666666666666666rem; */
}
.search_price price {
  font-size: 0.32rem;
  color: #f66;
  float: left;
  margin-right: 0.10666666666666667rem;
}
.search_price .price i {
  font-size: 0.48rem;
}
</style>

